"use client"

import axios from "axios";
import { useEffect, useState } from "react";

export default function SignInCallBack(){
    const [errors, setErrors] = useState<String[]>([]);
    const [isProgress, setProgress] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const state = query.get("state");
        const code = query.get("code");
        let redirectUri = `${window.location.href}/console`;

        if(code == null){
            setErrors(["Invalid redirect paramaters!"]);
            return;
        }

        if(state != null){
            //TODO: implement state creation while auth guard
        }

        

        // axios.post("/api/v1/auth/super/token", { token, grantType: "authorization" }).then(() => {
        //     window.location.href = redirectUrl;
        // }).catch(e => {
        //     const data = e.response?.data;
        //     setErrors(data?.error);
        // })
    },[]);

    return(
        <p>

        </p>
    );
}