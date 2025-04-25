import axios, { AxiosResponse } from "axios";
import {BACKEND_URL} from "@/lib/config/envConfig";
import ResponseData from "../type/ResponseData";

const kfBackendClient = axios.create({
    baseURL:BACKEND_URL
});


/**
 * 
 * @param response 
 */
const resolveResponse = (response: AxiosResponse<any, any>) => {
    let data: ResponseData;
    data = response.data;
    data.status = response.status;
    
    if(response.status < 400){
        data.isSuccess = true;
    }else if(response.status >= 400){
        data.isSuccess = false;
    }

    return data;
}

export {
    kfBackendClient,
    resolveResponse
}