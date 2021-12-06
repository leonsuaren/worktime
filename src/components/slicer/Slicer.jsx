import React, { Fragment } from 'react';
import { SlicerWrapper, Span, SlicerTitleWrapper } from './styled';

export const SlicerTitle = ({description, ...props}) => {
  return(
    <Fragment>
      <SlicerTitleWrapper {...props}>
        <p>{ description }</p>
      </SlicerTitleWrapper>
    </Fragment>
  )
}

export const Slicer = ({ icon, description, action, basic, active, hoverOver, disabled, ...props }) => {
  console.log(disabled);
  return (
    <Fragment>
      <SlicerWrapper active={active} basic={basic} hoverOver={hoverOver} disabled={disabled} {...props}>
        {icon}
        <Span>
          {description}
        </Span>
        {action}
      </SlicerWrapper>
    </Fragment>
  )
};