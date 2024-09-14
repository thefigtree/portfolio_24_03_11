"use client";

import { useEffect, useRef } from "react";
import "./customCursor.css";
import { gsap } from "gsap";

export default function CustomCursor() {
  const circleRef = useRef();

  const mouseRef = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouseRef.current = {
      x: clientX,
      y: clientY,
    };
  };

  const delayMouse = useRef({
    x: 0,
    y: 0,
  });

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circleRef.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  //   화면 마다 FPS가 다르게 때문에 바로 함수호출보다는 requestAnimationFrame함수를 사용
  const moveAnimate = () => {
    const { x, y } = delayMouse.current;

    delayMouse.current = {
      x: lerp(x, mouseRef.current.x, 0.075),
      y: lerp(y, mouseRef.current.y, 0.075),
    };

    moveCircle(delayMouse.current.x, delayMouse.current.y);

    window.requestAnimationFrame(moveAnimate);
  };

  useEffect(() => {
    moveAnimate();

    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  return <div className="follow_cursor" ref={circleRef}></div>;
}
