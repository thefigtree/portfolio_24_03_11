"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
// import useMousePosition from "utils/useMousePosition";
import useMousePosition from "./../utils/useMousePosition";

export default function Home() {
  const [isHover, setIshover] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHover ? 400 : 40;

  return (
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
          In computer science, syntactic sugar is syntax within a programming
          language that is designed to make things easier to read or to express.
          It makes the language "sweeter" for human use: things can be expressed
          more clearly, more concisely, or in an alternative style that some may
          prefer.
        </p>
      </motion.div>
      <div className={styles.body}>
        <p className={styles.text}>
          사람이 이해 하고 표현하기 쉽게 디자인된 프로그래밍 언어 문법. 또는
          프로그래밍 언어를 더욱 더 간결하고 명확하게 표현이 가능하도록. 즉,{" "}
          <span className={styles.color}>Sweeter</span>하게 사용 할 수 있도록
          도와주는 문법을{" "}
          <span className={styles.color}>"Syntactic Sugar"</span>라고 한다.
        </p>
      </div>
    </main>
  );
}
