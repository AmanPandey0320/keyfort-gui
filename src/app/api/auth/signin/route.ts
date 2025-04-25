import { loginAction } from "@/lib/service/auth/signIn";
import ResponseData from "@/lib/type/ResponseData";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const {username,password} = await req.json();
        const data: ResponseData | undefined = await loginAction(username,password);

        if(typeof data === undefined){
            return NextResponse.json({error:["Unknown error occured"]},{status:500});
        }

        return NextResponse.json(data,{status:data?.status});

    } catch (error) {
        return NextResponse.json({error:["Unknown error occured"]},{status:500});
    }
}