import React, { Fragment, useContext } from 'react';

import { DataBaseContext } from './../../../context/';

import { InformativeCard } from '../../../components/cards/informative-card';
import { Hr } from '../../../global';

export const Channel = () => {
  const dataBaseContext = useContext(DataBaseContext);
  const channel = dataBaseContext.oneChannel;
  const cards = dataBaseContext.oneChannel.cards;
  console.log(cards);

  return (
    <Fragment>
      <Hr />
        {
          cards.map((card, key) => {
          return (
            <InformativeCard
              channelTitle={channel.channel_title}
              logo={channel.logo}
              key={key}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              img={card.img}
              date={card.date}
            >
            </InformativeCard>
          )
        })
        }
      <Hr />
    </Fragment>
  )
};