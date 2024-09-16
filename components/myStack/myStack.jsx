"use client";

import { useRef } from "react";
import "./myStack.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function MyStack() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  });

  return (
    <section className="scroll_section_outer">
      <div ref={triggerRef}>
        <div className="scroll_section_inner" ref={sectionRef}>
          <div className="scroll_section">
            <h3>section 1</h3>
          </div>
          <div className="scroll_section">
            <h3>section 2</h3>
          </div>
          <div className="scroll_section">
            <h3>section 3</h3>
          </div>
          <div className="scroll_section">
            <h3>section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
