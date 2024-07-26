import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Ms. Great</h3>
              <p>
                You are literally the most fabulous, amazing, and fantastic girl I have ever seen.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Over Thinker</h3>
              <p>
                Every situation makes you overthink which makes you
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Sakth Launda</h3>
              <p>
              Your strength is incredible, despite some factors that bring the bar down from 10 to 5. Still, those factors are making you climb 12 floors and call you to the library. "Ahem ahem"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
