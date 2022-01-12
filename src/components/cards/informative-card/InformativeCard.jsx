import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import { StyledInformativeCard, Header, Title, Footer, LikeButton, LikeIncrement, LinkTo, Body, Avatar, BodyHeader, BodyTitle, TitleHead, BodyImage, BobyContent, BodySubtitle, DateHead, SubtitleHead, BodyDescription } from './styled';
import { StyledAiFillCaretRight, StyledAiOutlineLike, StyledAiOutlineDislike } from '../../../global';

export const InformativeCard = ({ channelTitle, logo, title, subtitle, description, img, date, type, likes, unlikes, _id, _idCard, ...props }) => {
  const [incLikes, setIncLikes] = useState(likes);
  const [decLikes, setDecLikes] = useState(unlikes);
  
  useEffect(() => {
      axios.post(`http://localhost:8000/channels/channel/likes/${_id}/${_idCard}?likes=${incLikes}`)
  }, []);

  useEffect(() => {
      axios.post(`http://localhost:8000/channels/channel/unlikes/${_id}/${_idCard}?unlikes=${decLikes}`)
  }, [decLikes]);

  const onLike = () => {
    setIncLikes(s => s + 1);
  }

  const onUnLike = () => {
    setDecLikes(s => s + 1);
  }

  return (
    <Fragment>
      <StyledInformativeCard type={type}>
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
            <BodyDescription>{type === "informative" ? description.slice(0, 100) : description.slice(0, 300)}...</BodyDescription>
            {
              type === 'informative' ? <BodyImage src={img} /> : ""
            }
          </BobyContent>
        </Body>
        {
          type === 'informative' ?
            <Footer>
              <LikeButton onClick={onLike}>
                <StyledAiOutlineLike />
                <LikeIncrement>{likes}</LikeIncrement>
              </LikeButton>
              <LikeButton onClick={onUnLike}>
                <StyledAiOutlineDislike />
                  <LikeIncrement>{decLikes}</LikeIncrement>
              </LikeButton>
            </Footer>
            : ''
        }
      </StyledInformativeCard>
    </Fragment >
  )
};