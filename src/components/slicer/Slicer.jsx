import React, { Fragment } from 'react';
import { SlicerWrapper, Span } from './styled';

export const Slicer = ({ icon, description, action, ...props }) => {
  return (
    <Fragment>
      <SlicerWrapper {...props}>
        {icon}
        <Span>
          {description}
        </Span>
        {action}
      </SlicerWrapper>
    </Fragment>
  )
};