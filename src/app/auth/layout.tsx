import { Grid2 } from "@mui/material"
import styles from "./layout.module.scss"
import Image from "next/image"
import logo from "@/assets/images/logo-only.png"
import { authorizeClient } from "@/lib/auth/signIn"

export default async function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    const isClientValid : Boolean = await authorizeClient();
    return (
        <div className={styles.authLayout}>
            <div className={`${styles.boxLayout}`} >
                <Grid2 container direction={"column"} sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }} spacing={1}>
                    <Grid2>
                        <Image className={styles.logoImg} src={logo} alt="keyfort_logo" />
                    </Grid2>
                    <Grid2>
                        {isClientValid? children : "Invalid client details"}
                    </Grid2>
                </Grid2>
            </div>
        </div>
    )
}