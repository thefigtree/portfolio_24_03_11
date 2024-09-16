"use client";

import "./colorImage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import CustomCursor from "../customCursor/customCursor";

export default function ColorImage() {
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const colors = ["#fccbcb", "#e4ffe5", "#ffc4fc", "#cccbff", "#886648"];

    let mm = gsap.matchMedia();

    mm.add("(min-width: 666px)", () => {
      const details = gsap.utils.toArray(".section:not(:first-child)");
      const photos = gsap.utils.toArray(".desktopColor:not(:first-child)");
      const allPhotos = gsap.utils.toArray(".desktopColor");

      gsap.set(photos, { yPercent: 101 });

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
          .to(photos[index], {
            yPercent: 0,
            duration: 1.5,
          })
          .to(allPhotos[index], { duration: 1.5 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: true,
        });
      });

      details.forEach((section, i) => {
        let bgColor = colors[i + 1];
        ScrollTrigger.create({
          trigger: section,
          start: "200 bottom",
          end: "+=100%",
          markers: {
            startColor: "white",
            endColor: "white",
            fontSize: "18px",
            fontWeight: "bold",
            indent: 20,
          },
          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(".gallery", { backgroundColor: bgColor });
            } else if (
              (i === 0 && self.direction < 0) ||
              (i === details.length - 1 && self.direction > 0)
            ) {
              gsap.to(".gallery", { backgroundColor: "#fccbcb" });
            }
          },
        });
      });
      // console.log(self);
      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });

    mm.add("(max-width: 665px)", () => {
      // Mobile animations
      const details = gsap.utils.toArray(
        ".desktopContentSection:not(:first-child)"
      );

      details.forEach((section, i) => {
        let bgColor = colors[i + 1];
        ScrollTrigger.create({
          trigger: section,
          start: "200 bottom",
          end: "+=100%",

          onToggle: (self) => {
            if (self.isActive) {
              gsap.to(".gallery", { backgroundColor: bgColor });
            } else if (
              (i === 0 && self.direction < 0) ||
              (i === details.length - 1 && self.direction > 0)
            ) {
              gsap.to(".gallery", { backgroundColor: "#ff3b5f" });
            }
          },
        });
      });
    });
  });

  return (
    <div className="gallery">
      <div className="left">
        <div className="content">
          <div className="section">
            <h1>Portfolio 1</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>
          </div>

          <div className="section">
            <h1>Portfolio 2</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>
          </div>

          <div className="section">
            <h1>Portfolio 3</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing.
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
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
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
            harmony. It is a calming and relaxing color that can evoke feelings
            of balance, stability, and freshness. In color psychology, green is
            said to represent balance and stability, making it a popular choice
            for branding and marketing in the health and wellness industry.
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
            psychology, blue is said to represent loyalty and trust, making it a
            popular choice for branding and marketing in the finance and
            technology industries.
          </p>
        </div>

        <div
          className="desktopGallery"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div className="desktopColor">1</div>
          <div className="desktopColor">2</div>
          <div className="desktopColor">3</div>
          <div className="desktopColor">4</div>
        </div>
      </div>

      <CustomCursor isHovered={isHovered}></CustomCursor>
    </div>
  );
}
