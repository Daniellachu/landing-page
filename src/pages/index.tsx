import Image from "next/image";
import Spline from "@splinetool/react-spline";
import styles from "@/styles/home.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={styles.mainContainer}
    >
      <div className={styles.navBar}>
        <Link href={"/"}>Orbit</Link>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Trips</Link>
        <Link href={"/"}>About</Link>
      </div>
      <div className={styles.headingContainer}>
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
      </div>
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
      <div className={styles.pricingContainer}>
        <h1 className={styles.header_fullwidth}>Design your adventures however you wish</h1>
        <p className={styles.headingDescription_light}>We offer different plans tailored for every travellers needs.</p>
        <Spline className={styles.pricingTable}scene="https://prod.spline.design/Bvxru5mE9-mJRsed/scene.splinecode" />
      </div>

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
            <p>I agree to recieve e-mails from your company and accept your terms and conditions</p>
          </div>
          <Link href={"/"}> 
            <Spline scene="https://prod.spline.design/OPeUbJWR0LtIvB4I/scene.splinecode" />
          </Link>
        </form>
      </div>
      <div className={styles.footerContainer}>
        <Spline scene="https://prod.spline.design/VVQM0h63bOri2QES/scene.splinecode" />
        <div className={styles.footerLinks}>
          <Link href={"/"}>Orbit</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Trips</Link>
          <Link href={"/"}>About</Link>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>Made by: Daniella Dela Cruz 2024</p>
        <Link href={"https://github.com/Daniellachu/landing-page"}>Go to Github</Link>
      </div>
    </main>
  );
}
