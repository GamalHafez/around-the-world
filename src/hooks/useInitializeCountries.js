import { getKeyStoraged, prioritizeCountry, updateStorage } from "@/utils";
import { useState, useEffect, useCallback } from "react";

export function useInitializeCountries(url, storageKey) {
  const cachedString = getKeyStoraged(storageKey);

  const [countries, setCountries] = useState(
    cachedString ? cachedString : null
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const signal = new AbortController().signal;

  const loadData = useCallback(
    async (signal) => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error("Something went wrong…");

        const json = await response.json();
        setError(null);
        prioritizeCountry(json, "Palestine", 0);
        prioritizeCountry(json, "Sudan", 1);
        setCountries(json);
        updateStorage(storageKey, json);
      } catch (err) {
        if (err.name !== "AbortError") setError(err);
      } finally {
        setLoading(false);
      }
    },
    [url, storageKey]
  );

  useEffect(() => {
    if (!url) return;
    if (countries) {
      setLoading(false);
    } else {
      loadData(signal);
      return () => new AbortController().abort(); // cleanup
    }
  }, [url, loadData, signal, countries, storageKey]);

  return { countries, setCountries, error, loading };
}
