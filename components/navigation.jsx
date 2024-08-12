import style from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  const links = [
    {
      path: "/",
      name: "J!N",
    },
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

  return (
    <nav className={style.header}>
      <ul className={style.menu}>
        {links.map((link) => {
          return (
            <li className={style.menubtn} key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
