import axios from "axios";
import {BACKEND_URL} from "@/lib/utils/envConfig";

const kfBackendClient = axios.create({
    baseURL:BACKEND_URL
});

export {
    kfBackendClient
}