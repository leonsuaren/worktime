import React, { Fragment, useState, useEffect } from 'react';
import { SlicerWrapper, Span, SlicerTitleWrapper } from './styled';
import { SlicerSkeleton } from '../skeleton';

export const SlicerTitle = ({ description, addSkeleton, title, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  const skeletonTime = () => {
    setTimeout(() => setSkeleton(false), 2000);
  }
  useEffect(() => {
    skeletonTime();
  }, [skeleton]);
  return (
    <Fragment>
      {
        skeleton && addSkeleton ? <SlicerSkeleton title /> :
        <SlicerTitleWrapper {...props} addSkeleton>
        <p>{description}</p>
        </SlicerTitleWrapper>
      }
    </Fragment>
  )
}

export const Slicer = ({ icon, description, action, basic, active, hoverOver, disabled, addSkeleton, title, box, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  const skeletonTime = () => {
    setTimeout(() => setSkeleton(false), 2000);
  }

  useEffect(() => {
    skeletonTime();
  }, [skeleton]);

  return (
    <Fragment>
      {
        skeleton && addSkeleton ? <SlicerSkeleton title={title}/> :
          <SlicerWrapper box={box} active={active} basic={basic} hoverOver={hoverOver} disabled={disabled} {...props}>
            {icon}
            <Span>
              {description}
            </Span>
            {action}
          </SlicerWrapper>
      }
    </Fragment>
  )
};