import styles from "@/components/Pricing/pricing.module.css"
import Spline from "@splinetool/react-spline";

export default function Pricing(){
    return(
        <main>
            <div className={styles.pricingContainer}>
                <h1 className={styles.header_fullwidth}>Design your adventures however you wish</h1>
                <p className={styles.headingDescription_light}>We offer different plans tailored for every travellers needs.</p>
                <Spline className={styles.pricingTable}scene="https://prod.spline.design/Bvxru5mE9-mJRsed/scene.splinecode" />
            </div>
        </main>
    )
}