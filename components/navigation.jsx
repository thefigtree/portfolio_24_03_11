"use client";
import style from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/project",
      name: "Project",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <nav className={style.header}>
      <ul className={style.menu}>
        {/* <li>
          <Link href="/">Home</Link> {path === "/" ? "😡" : ""}
        </li>
        <li>
          <Link href="/about">About</Link> {path === "/about" ? "😡" : ""}
        </li>
        <li>
          <Link href="/project">Project</Link> {path === "/project" ? "😡" : ""}
        </li>
        <li>
          <Link href="/contact">Contact</Link> {path === "/contact" ? "😡" : ""}
        </li> */}
        {links.map((link) => {
          return (
            <li key={link.path}>
              <Link href={link.path}>
                {link.name}
                {path === link.path ? "😡" : ""}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
