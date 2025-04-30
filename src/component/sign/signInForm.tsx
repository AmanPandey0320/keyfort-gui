"use client"
import { Alert, FormControl, FormControlLabel, Grid2, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import style from "./component.module.scss";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { toggleBooleanState } from "@/lib/utils/commonFunctions";
import Link from "next/link";
import ResponseData from "@/lib/type/ResponseData";
import axios from "axios";


export default function SignInForm() {
    const [isVisible, setVisible] = useState(false);
    const [isRemeber, setRemember] = useState(false);

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");

    const [isLoginProgress, setLoginProgress] = useState(false);
    const [errors, setErrors] = useState<String[]>([]);

    const userNameEventHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserName(e.target.value);
    }

    const passwordEventHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassWord(e.target.value);
    }

    const handleLoginReq = async () => {
        let data: ResponseData;
        try {


            let response = await axios.post("/api/auth/signin", { username, password });
            data = response.data;
            const token = data?.data?.at(0)?.authorizationCode;

            // get access token
            await axios.post("/api/auth/token?grantType=authorization", { token });

            //success handler
            const query = new URLSearchParams(window.location.search);
            const redirectUrl = query.get("redirectUrl") ?? window.location.origin;
            window.location.href = redirectUrl;
        } catch (error: any) {
            data = error.response.data;
            setErrors(data.error);
        }
    }

    /**
     * @description login btn click handler
     * @param e 
     */
    const loginBtnClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setLoginProgress(true);

        handleLoginReq().finally(() => {
                setLoginProgress(false);
            })

    }
    return (
        <>
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
            <Grid2>
                <FormControl sx={{ width: '25rem', marginBottom: '0.5rem' }} color="warning" variant="outlined">
                    <OutlinedInput
                        id="email_textbox"
                        placeholder="Email-ID"
                        value={username}
                        onChange={userNameEventHandler}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton tabIndex={-1}>
                                    <Person />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ width: '25rem', marginBottom: '1rem' }} color="warning" variant="outlined">
                    <OutlinedInput
                        id="password_textbox"
                        placeholder="Password"
                        value={password}
                        onChange={passwordEventHandler}
                        type={isVisible ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={() => toggleBooleanState(setVisible)} >
                                    {isVisible ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Grid2 direction={"row"} sx={{ justifyContent: 'space-between', alignItems: "center" }} container>
                    <Grid2>
                        <FormControlLabel label={<span className={`${style.rememberMeText}`} >{"Remember me"}</span>} control={<Checkbox style={{ color: '#152b59' }} checked={isRemeber} onChange={() => toggleBooleanState(setRemember)} />} />
                    </Grid2>
                    <Grid2>
                        <Link href={"/auth/forgot-password"} style={{ textDecoration: "none" }}>
                            <p className={`${style.forgotPassword}`}>
                                {"Forgot your password?"}
                            </p>
                        </Link>
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 sx={{ width: "100%" }}>
                <button onClick={loginBtnClickHandler} disabled={isLoginProgress} className={`${style.signInButton}`}>
                    <span>
                        Sign in
                    </span>
                </button>
            </Grid2>
            <Grid2>
                <p className={`${style.dontHaveAccount}`} >
                    {"Don't have an account? "}
                    <Link href={"/auth/contact-admin"} style={{ textDecoration: "none" }}>
                        <span className={`${style.forgotPassword}`}>
                            {"Contact admin"}
                        </span>
                    </Link>
                </p>
            </Grid2>
        </>
    )
}