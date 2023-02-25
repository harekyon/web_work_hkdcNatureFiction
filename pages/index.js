import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Box from "@/components/Box";
import { css } from "@emotion/react";

export default function Home() {
  return (
    <div
      css={css`
        margin: 50px;
      `}
    >
      <Box></Box>
    </div>
  );
}
