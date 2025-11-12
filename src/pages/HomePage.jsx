import {
  SpecialMessage,
  Loader,
  CountrySearch,
  DisplayCountry,
  RegionFilter,
  Error,
} from "@/components";
import { useInitializeCountries } from "@/hooks";
import s from "@/styles/_HomePage.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const COUNTRIES_API =
  "https://restcountries.com/v3.1/all?fields=translations,name,capital,flags,region,population,tld,currencies,languages,subregion";

export function HomePage() {
  const { countries, setCountries, error, loading } = useInitializeCountries(
    COUNTRIES_API,
    "countries_v1"
  );
  const [searchError, setSearchError] = useState(false);
  const [filterError, setFilterError] = useState(false);

  if (error) return <SpecialMessage message={"error"} />;
  if (loading) return <Loader />;
  return (
    <>
      <section className={s.controls}>
        <CountrySearch
          searchError={searchError}
          setSearchError={setSearchError}
          setCountries={setCountries}
        />
        <RegionFilter
          filterError={filterError}
          setFilterError={setFilterError}
          setCountries={setCountries}
        />
      </section>
      {!searchError && !filterError ? (
        <section className={s["countries-container"]}>
          {countries?.map((country) => {
            const {
              name: { common },
            } = country;
            return (
              <Link to={common} key={common}>
                <DisplayCountry country={country} stylesObj={s} />
              </Link>
            );
          })}
        </section>
      ) : (
        <Error type="search" />
      )}
    </>
  );
}
