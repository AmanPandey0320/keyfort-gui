import {KF_CLIENT_ID,KF_CLIENT_SECRET} from "@/lib/config/envConfig";
import ENDPOINT from "@/assets/data/api";
import { kfBackendClient,resolveHttpError,resolveHttpResponse } from "../utils/httpUtil";
import axios, { AxiosResponse } from "axios";
import ResponseData from "@/lib/type/ResponseData";

/**
 * 
 * @returns boolean
 */
export async function authorizeClient(){
    
    try {
        const body = {
            "clientId":KF_CLIENT_ID,
            "clientSecret":KF_CLIENT_SECRET,
            "grantType":"authorization_code",
            "redirectUri": "http://localhost:3000"
        }

        const response = await kfBackendClient.post(ENDPOINT.AUTHZ_CLIENT_API,body);
        if(response.status === 200){
            return true;
        }

        return false;

    } catch (error) {
        console.log(error)
        return false;
    }
}

/**
 * 
 * @param username 
 * @param password 
 */
export const loginAction = async (username:String, password: String) => {
    let data : ResponseData;
    try {
        const body = {
            username,
            password
        }

        const response : AxiosResponse<any, any> = await axios.post(ENDPOINT.LOGIN_ACTION_API,body);
        data = resolveHttpResponse(response);
        
    } catch (error: any) {
        data = resolveHttpError(error);
    }

    return data;
}

/**
 * 
 * @param token 
 * @param grantType 
 * @returns 
 */
export const exchangeForToken = async (token:String, grantType:String) => {
    
    try{
        const response : AxiosResponse<any,any> = await kfBackendClient.post(ENDPOINT.TOKEN_CLIENT_API,{token,grantType});
        return resolveHttpResponse(response);
    }catch(error : any){
        return resolveHttpError(error);
    }
}
