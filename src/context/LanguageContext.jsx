import React, { createContext, useState } from 'react';
import { English, Spanish, Italian } from './../data-base/';

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [ language, setLanguage ] = useState(English);
  
  const handleOnSelectLanguage = (languagePicked) => {
    setLanguage(languagePicked)
  };

  return(
    <LanguageContext.Provider value={{handleOnSelectLanguage, English, Spanish, Italian, language  }}>
      { children }
    </LanguageContext.Provider>
  )
};