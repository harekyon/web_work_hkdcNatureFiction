/*=====================================*/
// CubeWrap COMP
/*=====================================*/

import styles from "../components/CubeWrap.module.scss";
import { css } from "@emotion/react";

export default function CubeWrap({ children, ...props }) {
  return (
    <div className={styles["box--wrapper"]} css={props.cssOverrides}>
      {children}
    </div>
  );
}
