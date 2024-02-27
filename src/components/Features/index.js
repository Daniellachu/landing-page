import Link from "next/link"
import styles from "@/components/Features/features.module.css"
import Spline from "@splinetool/react-spline";

export default function Feature(){

    return(
        <main>
            <div className={styles.featureContainer}>
                <div className={styles.featureHeading}>
                    <h1 className={styles.header_fullwidth}>Tell us your dream trip and let us do the planning</h1>
                    <p className={styles.headingDescription_light}>Carefully curated features designed to ensure stress-free planning for you.</p>
                </div>
                <div className={styles.featureContent}>
                    <div className={styles.featureSection}>
                    <div className={styles.header_row}>
                        <h1 className={styles.headerNumber}>01.</h1>
                        <h1>AI Itinerary Builder</h1>
                        <ul className={styles.featureList}>
                        <li>
                            Orbit builds travelling itineraries based on the user's inputs during the onboarding process utilizing the OpenAi API.
                        </li>
                        <li>
                        Give the wheel a spin to include activities in your list, perfect for those who love spontaneous adventures.
                        </li>
                        </ul>
                    </div>
                    <Spline className={styles.featureAnimation} scene="https://prod.spline.design/VhcY2DOArZiIAdcd/scene.splinecode" />
                    </div>
                    <div className={styles.featureSection2}>
                    <div className={styles.header_row}>
                        <h1 className={styles.headerNumber}>02.</h1>
                        <h1>Budget Tracking</h1>
                        <ul className={styles.featureList}>
                        <li>
                        Monitor all expenses within your itinerary and observe the distribution of costs.
                        </li>
                        <li>
                            Adjust budgets by adding or removing activities that don't apply to your itinerary.
                        </li>
                        </ul>
                    </div>
                    <Spline className={styles.featureAnimation} scene="https://prod.spline.design/9dtdNQXMWZUi78m4/scene.splinecode" />
                    </div>
                    <div className={styles.featureSection}>
                    <div className={styles.header_row}>
                        <h1 className={styles.headerNumber}>03.</h1>
                        <h1>Onboarding Quiz</h1>
                        <ul className={styles.featureList}>
                        <li>
                            Personalized and tailored trip suggestions and destinations, crafted just for you.
                        </li>
                        <li>
                            Choose the transportation methods that best suit your preferences and travel style.
                        </li>
                        <li>
                            Effortlessly manage your finances for a stress-free journey by setting personalized budgets tailored to your travel preferences and financial goal
                        </li>
                        </ul>
                    </div>
                    <Spline className={styles.featureAnimation} scene="https://prod.spline.design/tIrLsHOCp0wZsWoK/scene.splinecode" />
                    </div>
                </div>
            </div>

        </main>
    )
}