import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import styles from "@/styles/home.module.css"

//components
import Navbar from "@/components/NavBar"
import Heading from "@/components/Heading"
import Feature from "@/components/Features"
import Pricing from "@/components/Pricing"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main
      className={styles.mainContainer}
    >
      <Navbar/>
      {/* <div className={styles.headingContainer}>
        <div className={styles.headerText}>
            <h1 className={styles.header}>Plan the perfect adventure with Orbit.</h1>
            <p className={styles.headingDescription}>Your personal AI-powered travel companion! <br></br>Craft personalized itineraries and gain smart budgeting insights — all at your fingertips for effortless adventures.</p>
            <p className={styles.callToAction}>Download now to experience an unforgettable trip.</p>
            <div className={styles.buttonContainer}>
            <Link className={styles.actionButtonPrimary} href={"/"}>
                <Spline scene="https://prod.spline.design/6ew0QRBXgCW73YCK/scene.splinecode" />
            </Link>
            <Link className={styles.actionButtonSecondary} href={"https://orbit-2024.vercel.app/"} target="_blank">
            <Spline scene="https://prod.spline.design/sYvJtzCfnJwpwazS/scene.splinecode" />
            </Link>
            </div>
        </div>
        <Spline className={styles.headingAnimation}  scene="https://prod.spline.design/irhheiu-D6AuiGEu/scene.splinecode" />
      </div> */}
      <Heading/>      
      <Feature/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}