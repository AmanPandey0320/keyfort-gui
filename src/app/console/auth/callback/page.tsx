import SignInCallBack from "@/component/sign/signInCallback";
import { Box, Grid2 } from "@mui/material";

export default function CallBackPage() {
    
    return (
        <Box>
            <Grid2 direction={"column"} sx={{ alignItems: 'center' }} spacing={4} container>
                <Grid2>
                    <SignInCallBack/>
                </Grid2>
            </Grid2>
        </Box>
    )
}