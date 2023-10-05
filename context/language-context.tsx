"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "english" | "russian";

type ActiveLanguageContextProviderProps = {
  children: React.ReactNode;
};

type ActiveLanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const ActiveLanguageContext = createContext<
  ActiveLanguageContextType | null
>(
  null,
);

export default function ActiveLanguageContextProvider(
  { children }: ActiveLanguageContextProviderProps,
) {
  const [language, setLanguage] = useState<Language>("english");

  const toggleLanguage = () => {
    if (language === "english") {
      setLanguage("russian");
      window.localStorage.setItem("language", "russian");
    } else {
      setLanguage("english");
      window.localStorage.setItem("language", "english");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as
      | Language
      | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    }
  }, []);

  return (
    <ActiveLanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </ActiveLanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(ActiveLanguageContext);

  if (context === null) {
    throw new Error(
      "useActiveLanguageContext must be used within an ActiveSectionContextProvider",
    );
  }
  return context;
}
