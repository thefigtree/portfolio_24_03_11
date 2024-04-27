import style from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
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
        {links.map((link) => {
          return (
            <li key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
