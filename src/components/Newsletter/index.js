import Link from "next/link";
import styles from "@/components/Newsletter/newsletter.module.css"
import Spline from "@splinetool/react-spline";

export default function Newsletter(){
    return(
        <main>
            <div className={styles.newsletterContainer}>
                <h1 className={styles.header_fullwidth}>Join our mailing list</h1>
                <p className={styles.headingDescription_light}>Subscribe to our newsletter to be informed by any trip suggestions.</p>
                <form className={styles.mailForm}>
                <div className={styles.formInput}>
                    <label>First name</label>
                    <input type="name"  placeholder="John Appleseed"></input>
                    <label>Email</label>
                    <input type="text" name="email"  placeholder="JohnApple@gmail.com"/>
                </div>
                <div className={styles.formAction}>
                    <input type="checkbox"></input>
                    <p className={styles.agree}>I agree to recieve e-mails from your company and accept your terms and conditions</p>
                </div>
                <Link href={"/"}> 
                    <Spline scene="https://prod.spline.design/OPeUbJWR0LtIvB4I/scene.splinecode" />
                </Link>
                </form>
            </div>
        </main>
    )
}