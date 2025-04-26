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
const resolveHttpResponse = (response: AxiosResponse<any, any>) => {
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

/**
 * 
 * @param error 
 * @returns 
 */
const resolveHttpError = (error: any) => {
    let data : ResponseData;
    data = {
        ...error.response.data,
        isSuccess:false,
        status: error.status
    }

    return data;
}

export {
    kfBackendClient,
    resolveHttpResponse,
    resolveHttpError
}