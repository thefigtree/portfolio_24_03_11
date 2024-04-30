// "use client";
import styles from "./page.module.css";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import useMousePosition from "./../utils/useMousePosition";

export default function Home() {
  // useEffect(() => {
  //   async () => {
  //     const LocomotvieScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotvieScroll();
  //   };
  // }, []);

  // const [isHover, setIshover] = useState(false);
  // const { x, y } = useMousePosition();
  // const size = isHover ? 400 : 25;
  // console.log(x, y);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.gallery}>
          <div className={styles.left}>
            <div className={styles.content}>
              <div className={styles.section}>
                <h1>Red</h1>
                <p>
                  Red is a color often associated with strong emotions such as
                  passion, love, and anger. It's a bold and attention-grabbing
                  color that can evoke feelings of excitement, warmth, and
                  energy.
                </p>
              </div>

              <div className={styles.section}>
                <h1>Green</h1>
                <p>
                  Green is a color that is often associated with nature, growth,
                  and harmony. It is a calming and relaxing color that can evoke
                  feelings of balance, stability, and freshness. In color
                  psychology, green is said to represent balance and stability,
                  making it a popular choice for branding and marketing in the
                  health and wellness industry.{" "}
                </p>
              </div>

              <div className={styles.section}>
                <h1>Pink</h1>
                <p>
                  Pink is a color that is often associated with femininity,
                  romance, and sweetness. It is a softer and more delicate shade
                  of red that can evoke feelings of warmth, love, and nurturing.
                </p>
                <p>
                  In the world of branding and marketing, pink is often used to
                  target a female audience or to promote products that are
                  associated with beauty, love, or romance.
                </p>
                <p>
                  Pink is also used in the food industry, as it is associated
                  with sweetness and desserts. Pink is often used in breast
                  cancer awareness campaigns, as it has become the signature
                  color of the movement.{" "}
                </p>
                <p>
                  Pink is also commonly used in baby showers and weddings, as it
                  symbolizes love, innocence, and new beginnings.
                </p>
              </div>

              <div className={styles.section}>
                <h1>Blue</h1>
                <p>
                  Blue is a color that is often associated with calmness, trust,
                  and reliability. It is a peaceful and serene color that can
                  evoke feelings of stability, security, and professionalism. In
                  color psychology, blue is said to represent loyalty and trust,
                  making it a popular choice for branding and marketing in the
                  finance and technology industries.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.moContent}>
              <div className={styles.moRed}></div>
              <h1>Red</h1>
              <p>
                Red is a color often associated with strong emotions such as
                passion, love, and anger. It's a bold and attention-grabbing
                color that can evoke feelings of excitement, warmth, and energy.
              </p>
              <div className={styles.moGreen}></div>
              <h1>Green</h1>
              <p>
                Green is a color that is often associated with nature, growth,
                and harmony. It is a calming and relaxing color that can evoke
                feelings of balance, stability, and freshness. In color
                psychology, green is said to represent balance and stability,
                making it a popular choice for branding and marketing in the
                health and wellness industry.
              </p>
              <div className={styles.moPink}></div>
              <h1>Pink</h1>
              <p>
                Pink is a color that is often associated with femininity,
                romance, and sweetness. It is a softer and more delicate shade
                of red that can evoke feelings of warmth, love, and nurturing.
                In the world of branding and marketing, pink is often used to
                target a female audience or to promote products that are
                associated with beauty, love, or romance.
              </p>
              <div className={styles.moBlue}></div>
              <h1>Blue</h1>
              <p>
                Blue is a color that is often associated with calmness, trust,
                and reliability. It is a peaceful and serene color that can
                evoke feelings of stability, security, and professionalism. In
                color psychology, blue is said to represent loyalty and trust,
                making it a popular choice for branding and marketing in the
                finance and technology industries.
              </p>
            </div>

            <div className={styles.desktopGallery}>
              <div className={styles.desktopRed}></div>
              <div className={styles.desktopGreen}></div>
              <div className={styles.desktopPink}></div>
              <div className={styles.desktopBlue}></div>
            </div>
          </div>
        </div>
        {/* <motion.div
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
          <p className={styles.text}>j !n</p>
        </div> */}
      </main>
    </>
  );
}
