import * as React from 'react';
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image'

const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeIn',
        type: 'spring',
        stiffness: 50,
      },
    }),
    hidden: { opacity: 0, y: 200 },
  };

export default function ResponsiveGrid(props) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
          <motion.div className={styles.Card} initial="hidden" animate="visible" custom={props.index} variants={variants}>
            <Image className={styles.cover} src={props.cover} alt="Picture of the author" />
            <div className={styles.data}>
              <h2>{props.title}</h2>
              <p>{props.subtitle}</p>
            </div>

          </motion.div>
        </a>
      );
    }
