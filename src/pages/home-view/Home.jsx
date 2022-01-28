import React, { Fragment, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { AddNotificationContext } from '../../context';
import { LanguageContext } from '../../context';
import { DataBaseContext } from '../../context';

import { ActionCard } from '../../components/cards/action-card';
import { LinkTo } from './styled';
import { InformativeCard } from '../../components/cards/informative-card';

export const Home = () => {
  const addNotificationContext = useContext(AddNotificationContext);
  const languageContext = useContext(LanguageContext);
  const dataBaseContext = useContext(DataBaseContext);

  const showNotification = addNotificationContext.addNotification;
  const fullNotification = addNotificationContext.fullNotification;
  const channels = dataBaseContext.channels;
  let getChannel = [];

  channels.forEach((channel) => {
    let id = channel._id;
    let logo = channel.logo;
    let title = channel.channel_title;
    let card = channel.cards[0];
    const channelObj = {
      id: id,
      logo: logo,
      title: title,
      card: card
    }
    getChannel.push(channelObj)
  });

  return (
    <Fragment>
      <ActionCard addSkeleton type='notification' title={languageContext.language.nextShift} day="Tomorrow Dec 5" time="5:00 AM - 3:00 PM" location="CFC" />
      <LinkTo to="first-contact">
        <ActionCard addSkeleton title={languageContext.language.firstContact} description={languageContext.language.firstContactMsg} />
      </LinkTo>
      {showNotification ? <ActionCard addSkeleton type='notification' title={fullNotification.addTitle} day={fullNotification.addDay} time={fullNotification.addTime} location={fullNotification.addLocation} /> : ''}
      {
        getChannel.map((card, key) => {
          return (
            <Fragment key={key}>
              <InformativeCard
              _id={card.id}
              logo={card.logo}
              channelTitle={card.title}
              _idCard={card.card._idCard}
              type={card.card.type}
              key={key}
              title={card.card.title}
              subtitle={card.card.subtitle}
              description={card.card.description}
              img={card.card.img}
              date={card.card.date}
              likes={card.card.likes}
              unlikes={card.card.unlikes}
              />
            </Fragment>
          )
      })
      }
    </Fragment>
  )
};