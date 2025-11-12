import dakrMoon from "@/assets/dark-moon.png";
import lightMoon from "@/assets/light-moon.png";
import lightSun from "@/assets/light-sun.png";
import darkSun from "@/assets/dark-sun.png";

const THEME_IMG = {
  sun: {
    true: lightSun,
    false: darkSun,
  },
  moon: {
    true: dakrMoon,
    false: lightMoon,
  },
};

const DARK_LABEL = "Toggle dark mode";
const LIGHT_LABEL = "Toggle light mode";

export function ThemeButton({ themeType, isDark, bem, changeTheme }) {
  return (
    <button
      aria-label={themeType === "moon" ? DARK_LABEL : LIGHT_LABEL}
      className={themeType === "moon" ? bem("dark") : bem("light")}
      type="button"
      onClick={changeTheme}
    >
      <img
        src={THEME_IMG[themeType][isDark]}
        alt={themeType === "moon" ? DARK_LABEL : LIGHT_LABEL}
      />
    </button>
  );
}
