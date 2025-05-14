"use client"

import { Alert, Grid2 } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SignInCallBack() {
    const [errors, setErrors] = useState<String[]>([]);

    useEffect(() => {
        //this should also be configure on client call back uri
        console.log("use effect executed");
        const query = new URLSearchParams(window.location.search);
        const state = query.get("state");
        const code = query.get("code");
        let redirectUri = `${window.location.origin}/console`;

        if (code == null) {
            setErrors(["Invalid redirect paramaters!"]);
            return;
        }

        if (state != null) {
            //TODO: implement state creation while auth guard
        }



        axios.get(`/api/v1/auth/super/token?code=${code}`,).then(() => {
            window.location.href = redirectUri;
        }).catch(e => {
            const data = e.response?.data;
            setErrors(data?.error);
        })
    }, []);

    return (
        <Grid2 direction={"column"} spacing={1}>
            {
                errors.map((e, i) => {
                    return (
                        <Grid2 key={`error_sl_${i}`} sx={{ width: '100%' }}>
                            <Alert variant="filled" severity="error">
                                {`${e}`}
                            </Alert>
                        </Grid2>
                    )
                })
            }
        </Grid2>
    );
}