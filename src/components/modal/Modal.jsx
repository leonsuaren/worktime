import React, { Fragment, useState } from 'react';

import { ModalWrapper, StyledInformativeCard, Header, Title, LinkTo, Body, Avatar, BodyHeader, BodyTitle, TitleHead, BodyImage, BobyContent, BodySubtitle, DateHead, SubtitleHead } from './styled';

export const Modal = ({ channelTitle, logo, title, subtitle, description, img, date, type, likes, unlikes, _id, _idCard, cardInformation, ...props }) => {
const [ showModal, setShowModal ] = useState(true);
const handleOnShowModal = () => {
  setShowModal(false)
};
  return (
    <Fragment>
      <ModalWrapper showModal={showModal} onClick={handleOnShowModal}>
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
      </ModalWrapper>
    </Fragment>
  )
};