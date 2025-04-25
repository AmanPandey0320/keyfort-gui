import {KF_CLIENT_ID,KF_CLIENT_SECRET} from "@/lib/config/envConfig";
import ENDPOINT from "@/assets/data/api";
import { kfBackendClient,resolveResponse } from "../../utils/httpUtil";
import { AxiosResponse } from "axios";
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
    try {
        const body = {
            username,
            password
        }

        const response : AxiosResponse<any, any> = await kfBackendClient.post(ENDPOINT.LOGIN_ACTION_API,body);
        const data : ResponseData = resolveResponse(response);

        return data;
        
    } catch (error) {
        console.log(error);
    }
}
