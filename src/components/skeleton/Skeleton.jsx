import React, { Fragment } from 'react';
import { StyledSkeletonWrapper, StyledDetailsWrapper, StyledSkeletonIcon, StyledDetails, StyledSlicerSkeletonWrapper, StyledSlicerSkeletonDescription, StyledSlicerSkeletonIcon } from './index';

export const Skeleton = ({ fullSize }) => {
  return (
    <Fragment>
      <StyledSkeletonWrapper>
        <StyledDetailsWrapper>
          <StyledDetails />
          <StyledDetails />
          {fullSize ? <StyledDetails /> : ''}
          {fullSize ? <StyledDetails /> : ''}
        </StyledDetailsWrapper>
        <StyledSkeletonIcon />
      </StyledSkeletonWrapper>
    </Fragment>
  )
};

export const SlicerSkeleton = ({ title }) => {
  return (
    <Fragment>
      <StyledSlicerSkeletonWrapper>
        {title ? <div/> : <StyledSlicerSkeletonIcon />}
        <StyledSlicerSkeletonDescription />
        {title ? <div/> : <StyledSlicerSkeletonIcon />}
      </StyledSlicerSkeletonWrapper>
    </Fragment>
  )
};