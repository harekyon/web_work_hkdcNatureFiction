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
      <a href="#">
        <div
          id="box--front__surface"
          className={styles["box--front__surface"]}
        ></div>
        <div
          id="box--side__surface--left"
          className={`${styles["box--side__surface"]} ${styles["box--side__surface--left"]}`}
        ></div>
        <div
          id="box--side__surface--bottom"
          className={`${styles["box--side__surface"]} ${styles["box--side__surface--bottom"]}`}
        ></div>
      </a>
    </div>
  );
}
