import React, { Fragment } from 'react';
import { ModalWrapper } from './styled';

import { Div, StyledInformativeCard, Header, Title, LinkTo, Body, Avatar, BodyHeader, BodyTitle, TitleHead, BodyImage, BobyContent, BodySubtitle, DateHead, SubtitleHead, BodyDescription } from './styled';

export const Modal = ({ channelTitle, logo, title, subtitle, description, img, date, type, likes, unlikes, _id, _idCard, ...props }) => {
  return (
    <Fragment>
      <ModalWrapper><Div>
        <StyledInformativeCard type={type}>
          <Header>
            <Title>{channelTitle}</Title>
            <LinkTo to="/">
            </LinkTo>
          </Header>
          <Body>
            <BodyHeader>
              <Avatar src={logo} />
              <BodyTitle>
                <TitleHead>

                </TitleHead>
                <BodySubtitle>
                  <SubtitleHead>
                  </SubtitleHead>
                  <DateHead>
                    {date}
                  </DateHead>
                </BodySubtitle>
              </BodyTitle>
            </BodyHeader>
            <BobyContent>
              {
                type === 'informative' ? <BodyImage src={img} /> : ""
              }
            </BobyContent>
          </Body>
          {
            type === 'informative' ?
              ''
              : ''
          }
        </StyledInformativeCard>
      </Div></ModalWrapper>
    </Fragment>
  )
};