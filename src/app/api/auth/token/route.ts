import { exchangeForToken } from "@/lib/service/auth";
import ResponseData from "@/lib/type/ResponseData";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { token } = await req.json();
        const grantType = req.nextUrl.searchParams.get("grantType");

        if (grantType == null) {
            return NextResponse.json({ error: ["Missing grant type"] }, { status: 400 });
        }
        const data: ResponseData | undefined = await exchangeForToken(token, grantType);

        if (typeof data === undefined) {
            return NextResponse.json({ error: ["INternal server error"] }, { status: 500 });
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
        console.log(error)
    }
}