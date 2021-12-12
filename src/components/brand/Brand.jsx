import React from 'react';
import { 
  StyledBrandWrapper,
  LTCorner,
  LTEdge,
  LBEdge,
  LBCorner,
  LTMEdge,
  LTMCenter,
  LBMCenter,
  LBMEdge,
  RTCorner,
  RTEdge,
  RBEdge,
  RBCorner,
  RTMEdge,
  RTMCenter,
  RBMCenter,
  RBMEdge
 } from './styled';

export const Brand = () => {
  return(
      <StyledBrandWrapper>
        <LTCorner />
        <LTMEdge />
        <RTMEdge/>
        <RTCorner/>
        <LTEdge/>
        <LTMCenter/>
        <RTMCenter/>
        <RTEdge/>
        <LBEdge/>
        <LBMCenter/>
        <RBMCenter/>
        <RBEdge/>
        <LBCorner/>
        <LBMEdge/>
        <RBMEdge/>
        <RBCorner/>
      </StyledBrandWrapper>
  )
}; 