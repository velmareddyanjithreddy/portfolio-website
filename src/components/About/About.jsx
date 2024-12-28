

import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src="https://github.com/CodeCompleteYT/react-portfolio/blob/main/assets/about/aboutImage.png?raw=true"/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};