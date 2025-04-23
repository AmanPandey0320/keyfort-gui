import { loadEnvConfig } from '@next/env'
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

const BACKEND_URL=process.env.BACKEND_URL;

const KF_CLIENT_ID=process.env.KF_CLIENT_ID;
const KF_CLIENT_SECRET=process.env.KF_CLIENT_SECRET;

export {
    BACKEND_URL,
    KF_CLIENT_ID,
    KF_CLIENT_SECRET
}