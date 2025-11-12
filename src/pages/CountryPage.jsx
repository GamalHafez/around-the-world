import { getCountryData } from "@/utils";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "@/styles/_CountryPage.module.scss";
import { DisplayCountry } from "@/components";

export function CountryPage() {
  const { country } = useParams();
  const backHome = useNavigate();
  const countryData = useRef(getCountryData(country));

  return (
    <section className={s.layout}>
      <button onClick={() => backHome("/")} className={s.back}></button>
      <DisplayCountry
        country={countryData.current}
        stylesObj={s}
        page="country"
      />
    </section>
  );
}
