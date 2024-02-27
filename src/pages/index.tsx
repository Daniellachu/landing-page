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
      <Heading/>      
      <Feature/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}