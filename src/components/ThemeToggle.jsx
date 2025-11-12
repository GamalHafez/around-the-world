import { useEffect, useState } from "react";
import s from "@/styles/_ThemeToggle.module.scss";
import {
  createBem,
  getKeyStoraged,
  initializeDarkState,
  updateStorage,
} from "@/utils";
import { ThemeButton } from "@/components";

const DARK_LABEL = "Toggle dark mode";
const LIGHT_LABEL = "Toggle light mode";
const bem = createBem("theme", s);

const updateRootTheme = (isDark) =>
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light"
  );

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(getKeyStoraged("isDark"));
  useEffect(() => initializeDarkState(), []);

  useEffect(() => {
    updateStorage("isDark", isDark);
    updateRootTheme(isDark);
  }, [isDark]);

  const changeTheme = (e) => {
    const clickedMode = e.currentTarget.getAttribute("aria-label");
    switch (clickedMode) {
      case DARK_LABEL:
        if (!isDark) setIsDark(true);
        break;
      case LIGHT_LABEL:
        if (isDark) setIsDark(false);
        break;
      default:
        break;
    }
  };

  return (
    <article className={s.theme}>
      {["sun", "moon"].map((theme) => (
        <ThemeButton
          key={theme}
          themeType={theme}
          isDark={isDark}
          bem={bem}
          changeTheme={changeTheme}
        />
      ))}
    </article>
  );
}
