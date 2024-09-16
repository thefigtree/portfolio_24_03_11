"use client";

import "./myStack.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

export default function MyStack() {
  return (
    <section className="scroll_section_outer">
      <div>
        <div className="scroll_section_inner">
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
