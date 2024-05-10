"use client";
import { useLayoutEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import useMousePosition from "./../utils/useMousePosition";

export default function Home() {
  // const leftRef = useRef(null);
  // const rightRef = useRef(null);
  // const galleryRef = useRef(null);
  // const pinRef = useRef(null);
  // const ref = useRef(null);

  useLayoutEffect(() => {
    const details = gsap.utils.toArray(".section:not(:first-child)");
    const photos = gsap.utils.toArray(".desktopColor:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopColor");

    gsap.registerPlugin(ScrollTrigger);
    // requestAnimationFrame(animation);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      // const tl = gsap.timeline({
      //   // yes, we can add it to an entire timeline!
      //   scrollTrigger: {
      //     trigger: galleryRef.current,
      //     start: "top top",
      //     end: "bottom bottom",
      //     pin: pinRef.current,
      //     markers: true,
      //   },
      // });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  }, []);

  // const animation = () => {
  //   gsap.set(`${photos}`, { yPercent: 101 });
  // };
  // useLayoutEffect(() => {
  //   ScrollTrigger.matchMedia({
  //     "(min-width: 600px)": function () {
  //       console.log("desktop");

  //       let rightElem = rightRef.current;
  //       let galleryElem = galleryRef.current;
  //       let pinElem = pinRef.current;

  //       gsap.set(rightElem, { yPercent: 101 });

  //       ScrollTrigger.create({
  //         trigger: `${galleryElem}`,
  //         start: "top top",
  //         end: "bottom bottom",
  //         pin: `${pinElem}`,
  //       });
  //     },
  //   });
  //   // let Elem = galleryRef.current;

  //   // let leftElem = leftRef.current;
  //   // let rightElem = rightRef.current;
  //   // let galleryElem = galleryRef.current;
  //   // let pinElem = pinRef.current;

  //   // gsap.set(rightElem, { yPercent: 101 });

  //   // const allPhotos = gsap.utils.toArray(".desktopPhoto");

  //   // let mm = gsap.matchMedia();

  //   // mm.add("(min-width: 600px)", () => {
  //   //   console.log("desktop");

  //   //   let leftElem = leftRef.current;
  //   //   let rightElem = rightRef.current;
  //   //   let galleryElem = galleryRef.current;
  //   //   let pinElem = pinRef.current;
  //   //   let allElem = ref.current;

  //   //   gsap.set(rightElem, { yPercent: 101 });

  //   //   // ScrollTrigger.create({
  //   //   //   trigger: `${galleryElem}`,
  //   //   //   start: "top top",
  //   //   //   end: "bottom bottom",
  //   //   //   pin: `${pinElem}`,
  //   //   // });

  //   //   let t1 = gsap.timeline({
  //   //     scrollTrigger: {
  //   //       trigger: `${galleryElem}`,
  //   //       start: "top top",
  //   //       end: "bottom bottom",

  //   //       pin: `${pinElem}`,

  //   //       markers: true,
  //   //     },
  //   //   });

  //   //   leftElem.forEach((detail, index) => {
  //   //     let headline = detail.querySelector("h1");
  //   //     let animation = gsap
  //   //       .timeline()
  //   //       .to(rightElem[index], { yPercent: 0 })
  //   //       .set(allElem[index], { autoAlpha: 0 });
  //   //     ScrollTrigger.create({
  //   //       trigger: headline,
  //   //       start: "top 80%",
  //   //       end: "top 50%",
  //   //       animation: animation,
  //   //       scrub: true,
  //   //       markers: false,
  //   //     });
  //   //   });

  //   //   return () => {
  //   //     // optional
  //   //     // custom cleanup code here (runs when it STOPS matching)
  //   //     console.log("mobile");
  //   //   };
  //   // });
  // }, []);

  // gsap.set(rightRef, { yPercent: 101 });
  // gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger);
  //   const details = gsap.utils.toArray(".section:not(:first-child)");

  //   const photos = gsap.utils.toArray(".desktopColor:not(:first-child)");

  //   gsap.set(photos, { yPercent: 101 });

  //   const allPhotos = gsap.utils.toArray(".desktopColor");

  //   let mm = gsap.matchMedia();

  //   mm.add("min-width: 600px", () => {
  //     console.log("desktop");

  //     ScrollTrigger.create({
  //       trigger: ".gallery",
  //       start: "top top",
  //       end: "bottom bottom",
  //       pin: ".right",
  //     });
  //   });

  //   details.forEach((detail, index) => {
  //     let headline = detail.querySelector("h1");
  //     let animation = gsap
  //       .timeline()
  //       .to(photos[index], { yPercent: 0 })
  //       .set(allPhotos[index], { autoAlpha: 0 });
  //     ScrollTrigger.create({
  //       trigger: headline,
  //       start: "top 80%",
  //       end: "top 50%",
  //       animation: animation,
  //       scrub: true,
  //       markers: false,
  //     });
  //   });

  //   return () => {
  //     // optional
  //     // custom cleanup code here (runs when it STOPS matching)
  //     console.log("mobile");
  //   };
  // }, []);

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
        <div className="gallery">
          <div className="left">
            <div className="content">
              <div className="section">
                <h1>Red</h1>
                <p>
                  Red is a color often associated with strong emotions such as
                  passion, love, and anger. It's a bold and attention-grabbing
                  color that can evoke feelings of excitement, warmth, and
                  energy.
                </p>
              </div>

              <div className="section">
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

              <div className="section">
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

              <div className="section">
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

          <div className="right">
            <div className="moContent">
              <div className="moRed"></div>
              <h1>Red</h1>
              <p>
                Red is a color often associated with strong emotions such as
                passion, love, and anger. It's a bold and attention-grabbing
                color that can evoke feelings of excitement, warmth, and energy.
              </p>
              <div className="moGreen"></div>
              <h1>Green</h1>
              <p>
                Green is a color that is often associated with nature, growth,
                and harmony. It is a calming and relaxing color that can evoke
                feelings of balance, stability, and freshness. In color
                psychology, green is said to represent balance and stability,
                making it a popular choice for branding and marketing in the
                health and wellness industry.
              </p>
              <div className="moPink"></div>
              <h1>Pink</h1>
              <p>
                Pink is a color that is often associated with femininity,
                romance, and sweetness. It is a softer and more delicate shade
                of red that can evoke feelings of warmth, love, and nurturing.
                In the world of branding and marketing, pink is often used to
                target a female audience or to promote products that are
                associated with beauty, love, or romance.
              </p>
              <div className="moBlue"></div>
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

            <div className="desktopGallery">
              <div className="desktopColor"></div>
              <div className="desktopColor"></div>
              <div className="desktopColor"></div>
              <div className="desktopColor"></div>
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
