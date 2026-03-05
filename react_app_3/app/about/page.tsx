import styles from "./page.module.css";
import Link from "next/link";

const About = ()=>{
    return (
        <div className={styles.about}>
            <h1 className="text-3xl">Hello from about page</h1>
            <Link href="/" className="hover:text-sky-200 focus:text-sky-300">Go To Home</Link>
        </div>
    )
}

export default About;