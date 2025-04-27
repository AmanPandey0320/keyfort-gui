import { KF_CLIENT_ID } from "@/lib/config/envConfig";

export default {
    AUTHZ_CLIENT_API:"/api/v1/auth/super/authz_client",
    TOKEN_CLIENT_API:"/api/v1/auth/super/token",
    LOGIN_ACTION_API: `/api/v1/auth/super/login_action?clientId=${KF_CLIENT_ID}`
}