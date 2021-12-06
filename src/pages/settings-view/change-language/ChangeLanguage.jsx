import React, { Fragment, useContext } from 'react';
import { LanguageContext } from '../../../context';
import { Hr } from '../../../global';
import { Slicer } from '../../../components/slicer';

export const ChangeLanguage = () => {
  const languageContext = useContext(LanguageContext);
  const English = languageContext.English;
  const Spanish = languageContext.Spanish;
  const Italian = languageContext.Italian;

  const onSelectEnglish = () => {
    languageContext.handleOnSelectLanguage(English);
  };
  
  const onSelectSpanish = () => {
    languageContext.handleOnSelectLanguage(Spanish);
  }

  const onSelectItalian = () => {
    languageContext.handleOnSelectLanguage(Italian);
  };

  console.log(languageContext.language.language);
  

  return (
    <Fragment>
      <Hr />
      <Slicer active={ languageContext.language.language === 'English' ? true : false } basic description={"English"} onClick={onSelectEnglish}/>
      <Slicer active={ languageContext.language.language === 'Spanish' ? true : false } basic description={"Spanish"} onClick={onSelectSpanish}/>
      <Slicer active={ languageContext.language.language === 'Italian' ? true : false } basic description={"Italian"} onClick={onSelectItalian}/>
      <Slicer active={ languageContext.language.language === 'French' ? true : false } basic description={"Frensh"} />
      <Slicer active={ languageContext.language.language === 'Chinise' ? true : false } basic description={"Chinise"} />
      <Slicer active={ languageContext.language.language === 'Russian' ? true : false } basic description={"Russian"} />
      <Slicer active={ languageContext.language.language === 'Portuguese' ? true : false } basic description={"Portuguese"} />
      <Slicer active={ languageContext.language.language === 'Arabic' ? true : false } basic description={"Arabic"} />
      <Hr />
    </Fragment>
  )
};