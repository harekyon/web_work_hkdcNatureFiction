/*=====================================*/
// CubeSurfaceCompose COMP
// Cube作りたい2
// 全てrectで作ってみる
/*=====================================*/

import styles from "../components/CubeSurfaceCompose.module.scss";
import { css } from "@emotion/react";

export default function CubeSurfaceCompose() {
  return (
    <div className={styles["box--content"]}>
      <div className={styles["box--front__surface"]}></div>
      <div className={styles["box--back__surface"]}></div>
      <div
        className={`${styles["box--side__surface"]} ${styles["box--side__surface--left"]}`}
      ></div>
      <div
        className={`${styles["box--side__surface"]} ${styles["box--side__surface--right"]}`}
      ></div>
      <div
        className={`${styles["box--side__surface"]} ${styles["box--side__surface--right"]}`}
      ></div>
      <div
        className={`${styles["box--side__surface"]} ${styles["box--side__surface--bottom"]}`}
      ></div>
    </div>
  );
}
