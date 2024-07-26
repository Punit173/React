import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Happy Birthday Divanshii</h1>
        <p className={styles.description}>
        May God bless you with everything you desire, keep you smiling always, and bring prosperity into your life.
        </p>
        <a href="https://www.figma.com/design/XDlRyFk1B0DIE1BVfPoDgB/Untitled?node-id=0-1&t=VkKU0TkpBl2NxIMl-0" target="__blank" className={styles.contactBtn}>
          Surprise Me 🙌
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
