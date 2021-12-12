import React, { Fragment } from 'react';
import { LoadingWrapper, LoadingContent, Work, Time } from './styled';
import { Brand } from '../../components/brand';

export const Loading = () => {
  return(
    <Fragment>
      <LoadingWrapper>
        <LoadingContent>
          <Work>Work</Work>
          <Brand />
          <Time>Time</Time>
        </LoadingContent>
      </LoadingWrapper>
    </Fragment>
  )
};