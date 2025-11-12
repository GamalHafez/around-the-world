import { scrollToTop, createBem } from "@/utils";
import { NavLink } from "react-router-dom";
import worldImg from "@/assets/world.png";
import { ThemeToggle } from "@/components";
import s from "@/styles/_Header.module.scss";

const bem = createBem("header", s);

export function Header() {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to="/" onClick={scrollToTop} className={bem("nav")}>
          <img
            className={bem("img")}
            src={worldImg}
            alt="Around the World logo"
          />
          <h1 className={bem("title")}>Around the world</h1>
        </NavLink>
      </nav>

      <ThemeToggle />
    </header>
  );
}
