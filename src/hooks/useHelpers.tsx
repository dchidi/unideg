import { useState } from "react";

export const useLocalStorage = () => {
  let initValue = { acceptCookies: false };

  const cookies = localStorage.getItem("unidezk") || "";
  if (cookies) initValue = { ...JSON.parse(cookies) };

  const [localStore, setLocalStore] = useState(initValue);

  const updateLocalStore = (payload: {}) => {
    localStorage.setItem(
      "unidezk",
      JSON.stringify({ ...localStore, ...payload })
    );
    setLocalStore((prev) => ({ ...prev, ...payload }));
  };

  return { updateLocalStore, localStore };
};
