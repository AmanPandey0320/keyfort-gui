import { Grid2 } from "@mui/material"
import styles from "./layout.module.scss"
import Image from "next/image"
import logo from "@/assets/images/logo-only.png"

export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
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
                        {children}
                    </Grid2>
                </Grid2>
            </div>
        </div>
    )
}