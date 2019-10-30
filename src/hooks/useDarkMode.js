











import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("bStorage");

  useEffect(() => {
    value === true
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [value]);

  return [value, setValue];
};
