import { Box, Grid2 } from "@mui/material";
import layoutStyle from "../layout.module.scss";
import SignInForm from "@/component/sign/signInForm";

export default function SignInPage() {
    
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
                <SignInForm/>
            </Grid2>
        </Box>
    )
}