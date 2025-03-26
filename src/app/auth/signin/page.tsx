"use client"
import { Box, Button, FormControl, FormControlLabel, Grid2, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material";
import layoutStyle from "../layout.module.scss";
import style from "./page.module.scss";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { toggleBooleanState } from "@/lib/utils/commonFunctions";
import Link from "next/link";

export default function SignInPage() {
    const [isVisible, setVisible] = useState(false);
    const [isRemeber, setRemember] = useState(false);


    return (
        <Box>
            <Grid2 direction={"column"} sx={{ alignItems: 'center' }} spacing={4} container>
                <Grid2>
                    <h2 className={`${layoutStyle.actionHeading}`}>
                        {"Sign-in to Keyfort Admin"}
                    </h2>
                    <p className={`${layoutStyle.actionDescription}`}>
                        {"Enter your credentials to access admin dashboard"}
                    </p>
                </Grid2>
                <Grid2>
                    <FormControl sx={{ width: '25rem', marginBottom: '0.5rem' }} color="warning" variant="outlined">
                        <OutlinedInput
                            id="email_textbox"
                            placeholder="Email-ID"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
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
                    <Grid2 direction={"row"} sx={{ justifyContent: 'space-between', alignItems:"center" }} container>
                        <Grid2>
                            <FormControlLabel label={<span className={`${style.rememberMeText}`} >{"Remember me"}</span>} control={<Checkbox checked={isRemeber} onChange={() => toggleBooleanState(setRemember)} />} />
                        </Grid2>
                        <Grid2>
                            <Link href={"/auth/forgot-password"} style={{textDecoration:"none"}}>
                                <p className={`${style.forgotPassword}`}>
                                    {"Forgot your password?"}
                                </p>
                            </Link>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 sx={{width:"100%"}}>
                    <button className={`${style.signInButton}`}>
                        <span>
                            Sign in
                        </span>
                    </button>
                </Grid2>
            </Grid2>
        </Box>
    )
}