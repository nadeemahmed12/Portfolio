import React from "react";
import styles from "./Contact.module.css"

export const Contact=()=>{
    return(
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={"assets/contact/emailIcon.png"} alt="Email icon"/>
                <a href="mailto:nadeemahmed9480@gmail.com">nadeemahmed9480@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={"assets/contact/linkedinIcon.png"} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/nadeemahmed12/">linkedin.com/in/nadeemahmed12/</a>
            </li>
            <li className={styles.link}>
                <img src={"assets/contact/githubIcon.png"} alt="Github icon"/>
                <a href="https://github.com/nadeemahmed12">github.com/nadeemahmed12</a>
            </li>
            
        </ul>
    </footer>
    )
}

export default Contact;