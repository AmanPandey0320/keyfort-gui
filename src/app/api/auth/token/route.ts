import { exchangeForToken } from "@/lib/service/auth";
import ResponseData from "@/lib/type/ResponseData";
import getLogger from "@/lib/utils/loggerUtil";
import { NextRequest, NextResponse } from "next/server";

const logger = getLogger("api/auth/token");

export async function POST(req: NextRequest) {
    try {
        const { token } = await req.json();
        const grantType = req.nextUrl.searchParams.get("grantType");

        if (grantType == null) {
            logger.error("Missing, grant type for: %o",req);
            return NextResponse.json({ error: ["Missing grant type"] }, { status: 400 });
        }
        const data: ResponseData | undefined = await exchangeForToken(token, grantType);

        if (typeof data === undefined) {
            logger.error("No data recieved for: %o",req);
            return NextResponse.json({ error: ["Internal server error"] }, { status: 500 });
        }

        let response = NextResponse.json(null,{ status: data?.status });
        const accessToken = data.data?.at(0)?.access;
        const refreshToken = data.data?.at(0)?.refresh;

        response.cookies.set("KF_ACCESS_TOKEN", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 15,
        });

        response.cookies.set("KF_REFRESH_TOKEN", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60,
        });

        return response


    } catch (error: any) {
        logger.error(error);
        return NextResponse.json({error:["Internal server error"]},{status:500});
    }
}