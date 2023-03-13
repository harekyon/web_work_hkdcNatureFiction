import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Cube from "@/components/Cube";
import { css } from "@emotion/react";
import CubeWrap from "@/components/CubeWrap";

export default function Home() {
  return (
    <div
      css={css`
        margin: 50px;
      `}
    >
      <CubeWrap>
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
        <Cube />
      </CubeWrap>
    </div>
  );
}
