"use client";

import { useRef, useState } from "react";
import style from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
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

  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link href="/">J!N</Link>
      </div>

      <ul className={style.menu}>
        {links.map((link) => {
          return (
            <li className={style.menu_btn} key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      <div className={style.toggle_menu} ref={container}>
        <div className={style.menu_open} onClick={toggleMenu}>
          <p>Menu</p>
        </div>
        <div className={style.menu_overlay}>
          <div className={style.menu_close} onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
      </div>
    </div>
  );
}
