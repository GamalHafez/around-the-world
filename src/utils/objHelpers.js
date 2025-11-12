export const formatCurrencies = (currenciesObj) => {
  let currencies = [];
  for (let currency in currenciesObj) {
    currencies.push(currenciesObj[currency].name);
  }
  return currencies.join(", ");
};

export const formatLanguages = (languagesObj) => {
  let languages = [];
  for (let language in languagesObj) {
    languages.push(languagesObj[language]);
  }
  return languages.join(", ");
};

export const prioritizeCountry = (countries, countryName, index) => {
  if (!countries) return;
  const countryIndex = countries?.findIndex(
    (country) => country.name.common === countryName
  );
  const countryData = countries.splice(countryIndex, 1)[0]; // remove item
  countries.splice(index, 0, countryData);
};
