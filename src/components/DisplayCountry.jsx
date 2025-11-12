import s from "@/styles/_DisplayCountry.module.scss";
import { formatCurrencies, formatLanguages } from "@/utils";
import { Error } from "@/components";

const PRIORITIZED = ["Palestine", "Sudan"];

export function DisplayCountry({ country, stylesObj, page }) {
  if (!country) return <Error type="search" />;
  const {
    name: { common },
    flags: { png, alt },
    population,
    region,
    subregion,
    capital,
    tld: [domain],
    languages,
    currencies,
  } = country;

  return (
    <article
      className={`${stylesObj.country} ${
        PRIORITIZED.includes(common) && stylesObj[common]
      }`}
    >
      <img src={png} alt={alt} className={stylesObj.img} />
      <div className={stylesObj["info-container"]}>
        <h2 className={stylesObj.name}>{common}</h2>
        <ul className={s.info}>
          {page === "country" && (
            <li>
              <strong>Native name: </strong>
              {common}
            </li>
          )}
          <li>
            <strong>Population: </strong>
            {parseInt(population).toLocaleString("en-US")}
          </li>
          <li>
            <strong>Region: </strong>
            {region}
          </li>
          {page === "country" && (
            <li>
              <strong>Sub Region: </strong>
              {subregion}
            </li>
          )}
          <li>
            <strong>Capital: </strong>
            {capital[0]}
          </li>
        </ul>
        {page === "country" && (
          <ul className={`${s.info} ${stylesObj.additional}`}>
            <li>
              <strong>Top Level Domain: </strong>
              {domain}
            </li>
            <li>
              <strong>Currencies: </strong>
              {formatCurrencies(currencies)}
            </li>
            <li>
              <strong>Languages: </strong>
              {formatLanguages(languages)}
            </li>
          </ul>
        )}
      </div>
    </article>
  );
}
