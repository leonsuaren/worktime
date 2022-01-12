import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { LanguageContext, DataBaseContext } from '../../context';

import { Slicer, SlicerTitle } from '../../components/slicer';
import { ButtonStyled } from './styled';
import {
  Hr,
  StyledAiFillCaretRight,
  StyledAiOutlineTeam,
  StyledAiOutlineAudio,
  StyledAiOutlineCrown,
  StyledAiOutlineBook,
  StyledAiOutlineSafety,
  StyledAiOutlineStar,
  StyledAiOutlineSnippets,
  StyledAiOutlineToTop,
  StyledAiOutlineSketch,
  StyledAiOutlineDashboard,
  StyledAiOutlineFire,
  StyledAiOutlineBgColors
} from '../../global';

export const Channels = () => {
  const languageContext = useContext(LanguageContext);
  const dataBaseContext = useContext(DataBaseContext);
  const channels = dataBaseContext.channels
  const navigate = useNavigate();

  // const [channels, setChannels] = useState([]);
    
  // useEffect(() => {
  //   axios.get('http://localhost:8000/channels').then((response) => {
  //     setChannels(response.data.channels);
  //   });
  // }, []);

  const handleOnFetchOnChannel = async (_id) => {
     const oneChannel = await  axios.get(`http://localhost:8000/channels/channel/${_id}`).then((response) => {
          return response.data
        });
        dataBaseContext.fetchOneChannel({oneChannel, _id, channels});
        navigate(`/channels/channel/${_id}`)
      };
      
  return (
    <Fragment>
      <Hr />
      {
        channels.map((channel, key) => {
          return (
            <div key={key}>
              <ButtonStyled onClick={ () => handleOnFetchOnChannel(channel._id)} ><Slicer hoverOver addSkeleton icon={<StyledAiOutlineTeam />} description={channel.channel_title} action={<StyledAiFillCaretRight />} /></ButtonStyled>
            </div>
          )
        })
      }
      <Hr />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineAudio />} description={languageContext.language.Announcements} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineCrown />} description={languageContext.language.Celebrations} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineBook />} description={languageContext.language.AssociateResorce} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineAudio />} description={languageContext.language.BRIAnnouncements} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineSafety />} description={languageContext.language.SafetyChannel} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineStar />} description={languageContext.language.TheHumanSpirit} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineSnippets />} description={languageContext.language.PoliciesAndProcedures} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineToTop />} description={languageContext.language.PromotionsAndRollesChanges} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineSketch />} description={languageContext.language.WelcomeNewHires} action={<StyledAiFillCaretRight />} />
      <Hr />
      <SlicerTitle addSkeleton title description={languageContext.language.Deparment} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineDashboard />} description={languageContext.language.FirstShiftFreezer} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineFire />} description={languageContext.language.FirstShiftPerishable} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineDashboard />} description={languageContext.language.SecondShiftFreezer} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineFire />} description={languageContext.language.SecondShiftPrerishable} action={<StyledAiFillCaretRight />} />
      <Slicer hoverOver addSkeleton icon={<StyledAiOutlineBgColors />} description={languageContext.language.Sanitation} action={<StyledAiFillCaretRight />} />
      <Hr />
    </Fragment>
  )
};