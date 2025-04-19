import { loadEnvConfig } from '@next/env'
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

const BACKEND_URL=process.env.BACKEND_URL;

const KF_CLIENT_ID=process.env.KF_CLIENT_ID;
const KF_CLIENT_SECRET=process.env.KF_CLIENT_SECRET;

const AUTHZ_CLIENT_API=process.env.AUTHZ_CLIENT_API;
const LOGIN_ACTION_API=process.env.LOGIN_ACTION_API;
const GET_TOKEN_API=process.env.GET_TOKEN_API;

export {
    BACKEND_URL,
    KF_CLIENT_ID,
    KF_CLIENT_SECRET,
    AUTHZ_CLIENT_API,
    LOGIN_ACTION_API,
    GET_TOKEN_API
}