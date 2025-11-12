import { createBem, searchByCountry } from "@/utils";
import { useState } from "react";
import s from "@/styles/_ControlsBar.module.scss";

const bem = createBem("search", s);

export function CountrySearch({ searchError, setSearchError, setCountries }) {
  const [searchTerm, setSearchTerm] = useState("");
  const updateSearch = (e) => setSearchTerm(e.currentTarget.value.trim());

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchError(false);
    const searchResult = searchByCountry(searchTerm);
    if (searchResult.length) {
      setCountries(searchResult);
    } else {
      setSearchError(true);
    }
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        className={`${bem("label")} ${
          searchError ? bem("label", "error") : ""
        }`}
      >
        <input
          value={searchTerm}
          onChange={updateSearch}
          className={bem("input")}
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country…"
        />
      </label>
      {searchError ? <p className="error-message">Invalid Country</p> : null}
    </form>
  );
}
