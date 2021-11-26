import styled from 'styled-components';
import { globalStyles } from '../../global/index';

export const Head =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background-color: ${globalStyles.pallete.background};
`;

export const HeadTitle = styled.h1`
  font-family: ${globalStyles.typography.primaryFont};
  color: ${globalStyles.pallete.secondaryFont}
`;
