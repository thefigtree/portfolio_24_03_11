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
    const details = gsap.utils.toArray(".section:not(:first-child)");
    const photos = gsap.utils.toArray(".desktopColor:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });
    const allPhotos = gsap.utils.toArray(".desktopColor");

    let mm = gsap.matchMedia();
    mm.add("(min-width: 600px)", () => {
      let updateColor = (color, text, rgbColor) => {
        Elem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
      };
      console.log("desktop");
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
          .to(Elem, {
            onStart: updateColor,
            onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
            onReverseComplete: updateColor,
            onReverseCompleteParams: [
              "#9BB5CE",
              "Sierra Blue",
              "155, 181, 206",
            ],
          })
          .to(Elem, {
            onStart: updateColor,
            onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
            onReverseComplete: updateColor,
            onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
          })
          .to(Elem, {
            onStart: updateColor,
            onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
            onReverseComplete: updateColor,
            onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
          })
          .to(Elem, {
            onStart: updateColor,
            onStartParams: ["#574F6F", "Deep Purple", "87, 79, 111"],
            onReverseComplete: updateColor,
            onReverseCompleteParams: ["#574F6F", "Deep Purple", "87, 79, 111"],
          })
          .to(photos[index], { yPercent: 0 })
          .to(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: true,
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
