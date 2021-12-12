import styled, { css } from 'styled-components';

export const StyledBrandWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  margin: auto auto;
  padding: 0;
`;

const commonStyled = () => {
  return (
    css`
      box-sizing: border-box;
    `
  )
}

//left line

export const LTCorner = styled.div`
    background-color: #76f2b2;
    ${commonStyled};
    animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-iteration-count: 1;
      animation-timing-function: ease-in-out;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const LTEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
    animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 500ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const LBEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 1000ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const LBCorner = styled.div`
  background-color: ${p => p.theme.headerBackground};
  border-bottom-left-radius: 10px;
  ${commonStyled}
`;

//left middle line

export const LTMEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
    animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 500ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const LTMCenter = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 1000ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
  
`;
export const LBMCenter = styled.div`
  background-color: ${p => p.theme.headerBackground};
  ${commonStyled}
`;
export const LBMEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
   animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 1500ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;

//rigth line

export const RTCorner = styled.div`
  background-color: ${p => p.theme.headerBackground};
  border-top-right-radius: 10px;
  ${commonStyled}
`;
export const RTEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 1500ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const RBEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 2000ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const RBCorner = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 2500ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;

//rigth middle line

export const RTMEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 1000ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const RTMCenter = styled.div`
  background-color: ${p => p.theme.headerBackground};
  
  ${commonStyled}
`;
export const RBMCenter = styled.div`
  background-color: #76f2b2;  
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 1500ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;
export const RBMEdge = styled.div`
  background-color: #76f2b2;
  ${commonStyled}
  animation: infinite;
      animation-name: cubo;
      animation-duration: 500ms;
      animation-timing-function: ease-in-out;
      animation-delay: 2000ms;
      animation-iteration-count: 1;
      @keyframes cubo {
        from {background-color: ${'#76f2b2'}}
        to {background-color: ${'#ff9a01'}}
      }
`;