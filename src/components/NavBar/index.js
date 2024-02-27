import Link from "next/link"
import Image from "next/image"
import styles from "@/components/NavBar/navbar.module.css"

export default function Navbar() {

    return(
        <main>
            <div className={styles.navBar}>
                <div className={styles.orbitLogo}>
                    <Image
                        src="/asset/image/orbit-logo.jpeg"
                        width={50}
                        height={50}
                    />
                    <p href={"/"}>Orbit</p>
                </div>
                <div className={styles.nav}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Trips</Link>
                    <Link href={"/"}>About</Link>

                </div>
            </div>
        </main>
    )
}