import { useState, useEffect } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (obj) => {
  const res = { ...obj };
  Object.keys(res).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) {
      delete res[key];
    }
  });
  console.log(res);
  return res;
};
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
