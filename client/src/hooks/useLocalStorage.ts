import { useEffect, useState } from "react";

const PREFEX = "whatsapp-clone-";

export default function useLocalStorage(key?: any, initialValue?: any) {
  const prefixedKey = PREFEX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null || jsonValue != undefined) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
