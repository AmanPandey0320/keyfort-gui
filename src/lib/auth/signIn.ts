import {KF_CLIENT_ID,KF_CLIENT_SECRET} from "@/lib/utils/envConfig";
import ENDPOINT from "@/assets/data/api";
import { kfBackendClient } from "../utils/apiFunction";


async function authorizeClient(){
    
    try {
        const body = {
            "clientId":KF_CLIENT_ID,
            "clientSecret":KF_CLIENT_SECRET,
            "grantType":"authorization_code",
            "redirectUri": "http://localhost:3000"
        }

        const response = await kfBackendClient.post(ENDPOINT.AUTHZ_CLIENT_API,body);
        console.log(response);

    } catch (error: any) {
        console.log(error)
    }
}

