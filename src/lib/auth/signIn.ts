import {KF_CLIENT_ID,KF_CLIENT_SECRET} from "@/lib/utils/envConfig";
import ENDPOINT from "@/assets/data/api";
import { kfBackendClient } from "../utils/apiFunction";


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

    } catch (error: any) {
        console.log(error)
        return false;
    }
}

