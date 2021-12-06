import React, { Fragment, useContext } from 'react';
import { LanguageContext } from '../../../context';
import { Hr } from '../../../global';
import { Slicer } from '../../../components/slicer';

export const ChangeLanguage = () => {
  const languageContext = useContext(LanguageContext);
  const English = languageContext.English;
  const Spanish = languageContext.Spanish;
  const Italian = languageContext.Italian;
  const French = languageContext.French;
  const Chinise = languageContext.Chinise;
  const Russian = languageContext.Russian;
  const Portuguese = languageContext.Portuguese;
  const Arabic = languageContext.Arabic;

  const onSelectEnglish = () => {
    languageContext.handleOnSelectLanguage(English);
  };
  
  const onSelectSpanish = () => {
    languageContext.handleOnSelectLanguage(Spanish);
  }

  const onSelectItalian = () => {
    languageContext.handleOnSelectLanguage(Italian);
  };  

  const onSelectFrench = () => {
    languageContext.handleOnSelectLanguage(French);
  };

  const onSelectChinise = () => {
    languageContext.handleOnSelectLanguage(Chinise);
  };

  const onSelectRussian = () => {
    languageContext.handleOnSelectLanguage(Russian);
  };

  const onSelectPortuguese = () => {
    languageContext.handleOnSelectLanguage(Portuguese);
  };

  const onSelectArabic = () => {
    languageContext.handleOnSelectLanguage(Arabic);
  };

  return (
    <Fragment>
      <Hr />
      <Slicer active={ languageContext.language.language === 'English' ? true : false } basic hoverOver description={"English"} onClick={onSelectEnglish}/>
      <Slicer active={ languageContext.language.language === 'Spanish' ? true : false } basic hoverOver description={"Spanish"} onClick={onSelectSpanish}/>
      <Slicer active={ languageContext.language.language === 'Italian' ? true : false } basic hoverOver description={"Italian"} onClick={onSelectItalian}/>
      <Slicer active={ languageContext.language.language === 'French' ? true : false } basic hoverOver description={"Frensh"} onClick={onSelectFrench}/>
      <Slicer active={ languageContext.language.language === 'Chinise' ? true : false } basic hoverOver description={"Chinise"} onClick={onSelectChinise}/>
      <Slicer active={ languageContext.language.language === 'Russian' ? true : false } basic hoverOver description={"Russian"} onClick={onSelectRussian}/>
      <Slicer active={ languageContext.language.language === 'Portuguese' ? true : false } basic hoverOver description={"Portuguese"} onClick={onSelectPortuguese}/>
      <Slicer active={ languageContext.language.language === 'Arabic' ? true : false } basic hoverOver description={"Arabic"} onClick={onSelectArabic}/>
      <Hr />
    </Fragment>
  )
};