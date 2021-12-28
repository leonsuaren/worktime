import React, { Fragment, useContext, useState } from 'react';
// import { Link } from 'react-router-dom';

import { DataBaseContext } from '../../../context';

import { StyledInformativeCard, Header, Title, Footer, LikeButton, LikeIncrement, LinkTo, Body, Avatar, BodyHeader, BodyTitle, TitleHead, BodyImage, BobyContent, BodySubtitle, DateHead, SubtitleHead, BodyDescription } from './styled';
import { StyledAiFillCaretRight, StyledAiOutlineLike } from '../../../global';

export const InformativeCard = ({ channelTitle, logo, title, subtitle, description, img, date }) => {
  const dataBaseContext = useContext(DataBaseContext);
  const [increment, setIncrement] = useState(dataBaseContext.oneChannel.cards[0].likes);

  const onIncremtnt = () => {
    setIncrement(s => s + 1);
  }

  return (
    <Fragment>
      <StyledInformativeCard>
        <Header>
          <Title>{channelTitle}</Title>
          <LinkTo to="/">
            <StyledAiFillCaretRight />
          </LinkTo>
        </Header>
        <Body>
          <BodyHeader>
            <Avatar src={logo} />
            <BodyTitle>
              <TitleHead>
                {title.slice(0, 45)}...
              </TitleHead>
              <BodySubtitle>
                <SubtitleHead>
                  {subtitle.slice(0, 20)}
                </SubtitleHead>
                <DateHead>
                  {date}
                </DateHead>
              </BodySubtitle>
            </BodyTitle>
          </BodyHeader>
          <BobyContent>
            <BodyDescription>{description.slice(0, 100)}...</BodyDescription>
            <BodyImage src={img} />
          </BobyContent>
        </Body>
        <Footer>
          <LikeButton onClick={onIncremtnt}>
            <StyledAiOutlineLike />
            <LikeIncrement>{increment}</LikeIncrement>
          </LikeButton>
        </Footer>
      </StyledInformativeCard>
    </Fragment >
  )
};