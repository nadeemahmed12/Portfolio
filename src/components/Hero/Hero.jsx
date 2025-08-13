import React from 'react'
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container} >
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I'm Nadeem Ahmed</h1>
            <p className={styles.description} >
                I'm a full-stack developer with 1.5years of experience using
                React and NodeJS. Reach out if you'd like to learn more!
            </p>
            <a href="resume/Nadeem_Ahmed_CV.pdf" download="Nadeem_Ahmed_CV.pdf" className={styles.contactBtn}>
            Resume Download
            </a>
        </div>
        <img
        src={"/assets/hero/HeroImage.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>

  )
}
