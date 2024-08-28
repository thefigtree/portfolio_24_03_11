"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let Elem = sectionRef.current;

    // let updateColor = (rgbColor) => {
    //   Elem.style.backgroundColor = `rgba(${rgbColor})`;
    // };
    // const sections = gsap.utils.toArray(".gallery:not(:first-child");
    const details = gsap.utils.toArray(".section:not(:first-child)");
    const photos = gsap.utils.toArray(".desktopColor:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });
    const allPhotos = gsap.utils.toArray(".desktopColor");
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      });

      // let ani = gsap.to(Elem, {
      //   duration: 0.5,
      //   backgroundColor: "#ff0000",
      // });
      // .to(Elem, {
      //   duration: 0.5,
      //   backgroundColor: "#00ff8c",
      // })
      // .to(Elem, {
      //   duration: 0.5,
      //   backgroundColor: "#5900ff",
      // });

      // ScrollTrigger.create({
      //   trigger: ".gallery",
      //   start: "top top",
      //   end: "bottom bottom",
      //   // pin: ".right",
      //   animation: ani,
      // });

      // let t1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: Elem,
      //     start: "top top",
      //     end: `${Elem.offsetWidth + 1000}`,
      //     scrub: true,
      //     // snap: 1,
      //     pin: true,
      //     pinSpacing: true,
      //     markers: true,
      //   },
      // });
      // t1.to(Elem, {
      //   onStart: updateColor,
      //   onStartParams: ["155, 181, 206"],
      //   onReverseComplete: updateColor,
      //   onReverseCompleteParams: ["155, 181, 206"],
      // });
      // t1.to(Elem, {
      //   onStart: updateColor,
      //   onStartParams: ["249, 229, 201"],
      //   onReverseComplete: updateColor,
      //   onReverseCompleteParams: ["249, 229, 201"],
      // });
      // t1.to(Elem, {
      //   onStart: updateColor,
      //   onStartParams: ["80, 95, 78"],
      //   onReverseComplete: updateColor,
      //   onReverseCompleteParams: ["80, 95, 78"],
      // });
      // t1.to(Elem, {
      //   onStart: updateColor,
      //   onStartParams: ["87, 79, 111"],
      //   onReverseComplete: updateColor,
      //   onReverseCompleteParams: ["87, 79, 111"],
      // });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");

        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .to(allPhotos[index], { autoAlpha: 0 });

        // .from(details[0], {
        //   scrollTrigger: {
        //     trigger: headline,
        //     start: "center center",
        //     end: "bottom bottom",
        //     scrub: true,
        //   },
        //   duration: 0.5,
        //   backgroundColor: "#fef6e4",
        //   ease: "none",
        // })

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: true,

          // onUpdate: (self) => {
          //   if (allPhotos[0]) {
          //     gsap.to(Elem, {
          //       onStart: updateColor,
          //       onStartParams: ["155, 181, 206"],
          //       onReverseComplete: updateColor,
          //       onReverseCompleteParams: ["155, 181, 206"],
          //     });
          //   } else if (allPhotos[1]) {
          //     gsap.to(Elem, {
          //       onStart: updateColor,
          //       onStartParams: ["249, 229, 201"],
          //       onReverseComplete: updateColor,
          //       onReverseCompleteParams: ["249, 229, 201"],
          //     });
          //   } else {
          //     gsap.to(Elem, {
          //       onStart: updateColor,
          //       onStartParams: ["80, 95, 78"],
          //       onReverseComplete: updateColor,
          //       onReverseCompleteParams: ["80, 95, 78"],
          //     });
          //   }
          // },
          // onEnter: () => {
          //   gsap.to(Elem, {
          //     onStart: updateColor,
          //     onStartParams: ["155, 181, 206"],
          //     onReverseComplete: updateColor,
          //     onReverseCompleteParams: ["155, 181, 206"],
          //   });
          //   gsap.to(Elem, {
          //     onStart: updateColor,
          //     onStartParams: ["249, 229, 201"],
          //     onReverseComplete: updateColor,
          //     onReverseCompleteParams: ["249, 229, 201"],
          //   });
          //   gsap.to(Elem, {
          //     onStart: updateColor,
          //     onStartParams: ["80, 95, 78"],
          //     onReverseComplete: updateColor,
          //     onReverseCompleteParams: ["80, 95, 78"],
          //   });
          //   gsap.to(Elem, {
          //     onStart: updateColor,
          //     onStartParams: ["87, 79, 111"],
          //     onReverseComplete: updateColor,
          //     onReverseCompleteParams: ["87, 79, 111"],
          //   });
          // },
          // onEnterBack: () => {
          //   gsap.to(Elem, {
          //     duration: 1.0,
          //     backgroundColor: "rgba(155, 181, 206, 0.8)",
          //   });
          // },
        });
      });
      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });
  });

  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on('scroll', (e) => {
    //   console.log(e)
    // })

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="gallery" ref={sectionRef}>
        <div className="left">
          <div className="content">
            <div className="section">
              <h1>Portfolio 1</h1>
              <p>
                Red is a color often associated with strong emotions such as
                passion, love, and anger. It's a bold and attention-grabbing
                color that can evoke feelings of excitement, warmth, and energy.
              </p>
            </div>

            <div className="section">
              <h1>Portfolio 2</h1>
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
              <h1>Portfolio 3</h1>
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
                Pink is also used in the food industry, as it is associated with
                sweetness and desserts. Pink is often used in breast cancer
                awareness campaigns, as it has become the signature color of the
                movement.{" "}
              </p>
              <p>
                Pink is also commonly used in baby showers and weddings, as it
                symbolizes love, innocence, and new beginnings.
              </p>
            </div>

            <div className="section">
              <h1>Portfolio 4</h1>
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
            <h1>Portfolio 1</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>
            <div className="moGreen"></div>
            <h1>Portfolio 2</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.
            </p>
            <div className="moPink"></div>
            <h1>Portfolio 3</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>
            <div className="moBlue"></div>
            <h1>Portfolio 4</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          <div className="desktopGallery">
            <div className="desktopColor">1</div>
            <div className="desktopColor">2</div>
            <div className="desktopColor">3</div>
            <div className="desktopColor">4</div>
          </div>
        </div>
      </div>

      <div className="stack">My Stack</div>
    </>
  );
}
