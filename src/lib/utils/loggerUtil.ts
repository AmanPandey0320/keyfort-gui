import pino from "pino";
import { ROOT_LOG_LEVEL } from "../config/envConfig";

export default function getLogger(name:string){
    return pino({name,level:ROOT_LOG_LEVEL})
}