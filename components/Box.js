import styles from "../components/Box.module.scss";
import { css } from "@emotion/react";

export default function Box() {
  return (
    <div className={styles["box--content"]}>
      <div className={styles["box--back__border"]}>
        <div
          className={styles["box--back__slant"]}
          css={css`
            bottom: -1px;
            left: -1px;
          `}
        ></div>
        <div
          className={styles["box--back__slant"]}
          css={css`
            top: -0px;
            left: -1px;
          `}
        ></div>
        <div
          className={styles["box--back__slant"]}
          css={css`
            bottom: -1px;
            right: -14px;
          `}
        ></div>
      </div>
    </div>
  );
}
