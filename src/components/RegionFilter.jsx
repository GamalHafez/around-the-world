import { useState } from "react";
import s from "@/styles/_ControlsBar.module.scss";
import { createBem, filterByRegion } from "@/utils";

const bem = createBem("filter", s);
const REGIONS = ["Africa", "Asia", "Europe", "Oceania", "America"];

export function RegionFilter({ filterError, setFilterError, setCountries }) {
  const [filterTerm, setFilterTerm] = useState("");

  const updateRegion = (e) => setFilterTerm(e.currentTarget.value.trim());

  const submitHandler = (e) => {
    e.preventDefault();
    setFilterError(false);
    const filterResult = filterByRegion(filterTerm);
    if (filterResult.length) {
      setCountries(filterResult);
    } else {
      setFilterError(true);
    }

    setFilterTerm("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="search"
        value={filterTerm}
        onChange={updateRegion}
        list="filter"
        placeholder="Filter by Region"
        className={`${s.filter} ${filterError ? bem("error") : ""}`}
      />
      <datalist
        id="filter"
        aria-label="Filter by region"
        value={filterTerm}
        onChange={updateRegion}
      >
        <option key={"All"} value="All Regions">
          All Regions
        </option>
        {REGIONS.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </datalist>
      {filterError ? <p className="error-message">Invalid Region</p> : null}
    </form>
  );
}
