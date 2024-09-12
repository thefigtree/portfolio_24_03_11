import "./navigation.css";
import Link from "next/link";
import ToggleMenu from "../toggleMenu/toggleMenu";

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

export default function Navigation() {
  return (
    <div className="header">
      <div className="logo">
        <Link href="/">J!N</Link>
      </div>

      <ul className="menu">
        {links.map((link) => {
          return (
            <li className="menu_btn" key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      <ToggleMenu></ToggleMenu>
    </div>
  );
}
