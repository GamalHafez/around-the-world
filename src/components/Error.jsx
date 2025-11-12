import s from "@/styles/_Error.module.scss";
import { createBem } from "@/utils";

const bem = createBem("error", s);

const ERRORS = {
  search: {
    alt: "No results found",
    title: "No results found",
    text: "We can’t find what you searched for... Try to search for another one",
  },
  url: {
    alt: "Mistyped URL Error",
    title: "Error 404",
    text: "Mistyped URL",
  },
};

export function Error({ type }) {
  return (
    <section className={`${s.error} ${s[type]}`}>
      <h2 className={bem("title")}>{ERRORS[type].title}</h2>
      <p className={bem("text")}>{ERRORS[type].text}</p>
    </section>
  );
}
