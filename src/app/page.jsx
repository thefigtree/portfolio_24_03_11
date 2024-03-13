"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import useMousePosition from "./../utils/useMousePosition";

export default function Home() {
  const [isHover, setIshover] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHover ? 400 : 25;
  // console.log(x, y);

  return (
    <>
      <main className={styles.main}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <p
            className={styles.text}
            onMouseEnter={() => {
              setIshover(true);
            }}
            onMouseLeave={() => {
              setIshover(false);
            }}
          >
            Syntactic Sugar.
          </p>
        </motion.div>
        <div className={styles.body}>
          <p className={styles.text}>Syntactic Sugar.</p>
        </div>
      </main>
    </>
  );
}
