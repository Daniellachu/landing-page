import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Footer/footer.module.css"
import Spline from "@splinetool/react-spline";

export default function Footer(){
    return(
        <main className={styles.mainContainer}>
            <div className={styles.footerContainer}>
                <Spline scene="https://prod.spline.design/VVQM0h63bOri2QES/scene.splinecode" />
                <div className={styles.footerLinks}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Trips</Link>
                    <Link href={"/"}>About</Link>
                </div>
            </div>
            <div className={styles.bottomSection}>
                <Image
                    src="/asset/image/orbit-logo.jpeg"
                    width={50}
                    height={50}
                />
                <p>© 2024 Daniella Dela Cruz </p>
                <Link href={"https://github.com/Daniellachu/landing-page"}>Go to Github</Link>
            </div>
        </main>
    )
}