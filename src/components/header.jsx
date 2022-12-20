/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <Box className={styles.box}>
        <div className={styles.logo}>
          <img
            src="/static/manualdosdevs.svg"
            alt="Landscape picture"
            className={styles.img}
          />
        </div>
        <h1 className={styles.h1}>Manual dos Devs</h1>
        <p className={styles.p}>Ajudamos a iniciar na área da Tecnologia</p>
      </Box>
    </div>
  );
}
