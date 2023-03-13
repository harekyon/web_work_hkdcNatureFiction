/*=====================================*/
// Cube COMP
/*=====================================*/

import styles from "../components/Cube.module.scss";
import { css } from "@emotion/react";

export default function Cube({
  boxWidth = "100px",
  boxHeight = "100px",
  boxThic = "6px",
  hoverEffectVal = "3px",
}) {
  return (
    <div
      className={styles["box--content"]}
      css={css`
        width: ${boxWidth};
        height: ${boxHeight};
      `}
    >
      <a
        href="#"
        css={css`
          :hover {
            .box--side__surface--left {
              width: calc(${boxThic - hoverEffectVal});
            }
            .box--side__surface--bottom {
              height: calc(${boxThic - hoverEffectVal});
            }
          }
        `}
      >
        <div
          id="box--front__surface"
          className={styles["box--front__surface"]}
          css={css`
            width: ${boxWidth};
            height: ${boxHeight};
            top: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
            right: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
          `}
        >
          <p className={styles["box--front__surface__number"]}>01</p>
        </div>
        <div
          id="box--side__surface--left"
          className={`${styles["box--side__surface"]} ${styles["box--side__surface--left"]}`}
          css={css`
            width: ${boxThic};
            height: ${boxHeight};
            top: ${String(Number(boxThic.replace("px", "")) / 2) +
            boxThic.replace(/[0-9]/g, "")};
            right: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
          `}
        ></div>
        <div
          id="box--side__surface--bottom"
          className={`${styles["box--side__surface"]} ${styles["box--side__surface--bottom"]}`}
          css={css`
            width: ${boxWidth};
            height: ${boxThic};
            bottom: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
            right: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
          `}
        ></div>
      </a>
    </div>
  );
}
