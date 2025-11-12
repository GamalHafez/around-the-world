export const initializeDarkState = () => {
  if (!localStorage.getItem("isDark")) {
    localStorage.setItem("isDark", JSON.stringify(false));
  }
};

export const getKeyStoraged = (key) => {
  const value = localStorage.getItem(key);
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch {
    // fallback: return as plain string if it's not JSON
    return value;
  }
};

export const updateStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getCountryData = (requiredCountry) => {
  const countries = getKeyStoraged("countries_v1");
  return countries?.find((country) => country.name.common === requiredCountry);
};

export const searchByCountry = (searchTerm) => {
  const countries = getKeyStoraged("countries_v1");
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const filterByRegion = (filterTerm) => {
  const countries = getKeyStoraged("countries_v1");
  if (filterTerm === "All Regions") {
    return countries;
  } else {
    return countries.filter(
      (country) => country.region.toLowerCase() === filterTerm.toLowerCase()
    );
  }
};
