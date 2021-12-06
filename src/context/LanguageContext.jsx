import React, { createContext, useState } from 'react';
import { English, Spanish, Italian, French, Chinise, Russian, Portuguese, Arabic } from './../data-base/';

export const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [ language, setLanguage ] = useState(English);
  
  const handleOnSelectLanguage = (languagePicked) => {
    setLanguage(languagePicked)
  };
  
  return(
    <LanguageContext.Provider value={{handleOnSelectLanguage, English, Spanish, Italian, French, Chinise, Russian, Portuguese, Arabic, language  }}>
      { children }
    </LanguageContext.Provider>
  )
};