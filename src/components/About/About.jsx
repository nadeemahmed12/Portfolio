import React from 'react'
import styles from "./About.module.css"
const About = () => {
  return (
    <section className={styles.container} id="about">
       <h2 className={styles.title}>About</h2>
       <div className={StyleSheet.content}><img src={"/assets/about/aboutImage.png"}
       alt="Me sitting with a laptop" className={styles.aboutImage}/>

       <ul className={styles.aboutItems}>
         <li className={styles.aboutItem}>
          <img src={"/assets/about/cursorIcon.png"} alt="Cursor Icon"></img>
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I'm a frontend developer with experience in building responsive
                and optimized sites
            </p>
          </div>
         </li>
         <li className={styles.aboutItem}>
          <img src={"/assets/about/serverIcon.png"} alt="Server Icon"></img>
          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>
              I have experience developing fast and optimised back-end systems
                and APIs
            </p>
          </div>
         </li>
         <li className={styles.aboutItem}>
          <img src={"/assets/about/uiIcon.png"} alt="Ui Icon"></img>
          <div className={styles.aboutItemText}>
            <h3>UI Developer</h3>
            <p>
              I have designed multiple landing pages and have created design
                systems as well
            </p>
          </div>
         </li>
       </ul>
       </div>
    </section>


  )
}
export default About