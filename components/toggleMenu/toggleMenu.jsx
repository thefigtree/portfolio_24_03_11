"use client";

import "./toggleMenu.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const links = [
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contacts",
    name: "Contacts",
  },
];

export default function ToggleMenu() {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t1 = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".t_menu_link_item_holder", { y: 75 });

      t1.current = gsap
        .timeline({ paused: true })
        .to(".t_menu_overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".t_menu_link_item_holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      t1.current.play();
    } else {
      t1.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="toggle" ref={container}>
      <div className="t_menu_open" onClick={toggleMenu}>
        <p>menu</p>
      </div>

      <div className="t_menu_overlay">
        <div className="t_menu_overlay_bar">
          <div className="logo">
            <Link href="/">J!N</Link>
          </div>
          <div className="t_menu_close" onClick={toggleMenu}>
            <p>close</p>
          </div>
        </div>

        <div className="t_menu_close_icon">
          <p>&#x2715;</p>
        </div>

        <div className="t_menu_copy">
          <div className="t_menu_links">
            {links.map((link) => {
              return (
                <div className="t_menu_link_item" key={link.path}>
                  <div className="t_menu_link_item_holder" onClick={toggleMenu}>
                    <Link href={link.path}>{link.name}</Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="t_menu_info">
            <div className="t_menu_info_col">Instagram</div>
            <div className="t_menu_info_col">010-xxxx-xxxx</div>
          </div>
        </div>

        <div className="t_menu_preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
}
