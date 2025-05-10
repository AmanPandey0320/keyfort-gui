import {KF_CLIENT_ID,KF_CLIENT_SECRET,KF_REDIRECT_URI} from "@/lib/config/envConfig";
import ENDPOINT from "@/assets/data/api";
import { kfBackendClient } from "../utils/httpUtil";

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
            "redirectUri": KF_REDIRECT_URI
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
