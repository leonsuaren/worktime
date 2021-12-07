import styled from 'styled-components';
import { globalStyles } from '../../global';

export const StyledSkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  border-radius: 5px;
  border: ${globalStyles.darkSkeleton};
  margin: 5px;
  justify-items: center;
  align-items: center;
  min-height: 80px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  background-color: ${globalStyles.darkSkeleton};
  animation: infinite;
  animation-name: skeleton;
  animation-duration: 1s;
  animation-direction: alternate-reverse;
  @keyframes skeleton {
    from {background-color: ${globalStyles.darkSkeleton}}
    to {background-color: ${globalStyles.ligthSkeleton}}
  }
  padding: 10px;
  box-sizing: border-box;
`;

export const StyledDetailsWrapper = styled.div`
  display: grid;
  grid-template-rows: ${p => p.fullSize ? '1fr 1fr 1fr 1fr' : '1fr 1fr'};
  justify-items: start;
  align-items: center;
  width: 100%;
`;

export const StyledDetails = styled.div`
  width: 50%;
  height: 20px;
  border-radius: 5px;
  margin: 5px 20px;
  background-color: white;
  animation: infinite;
  animation-name: details;
  animation-duration: 1s;
  animation-direction: alternate-reverse;
  @keyframes details {
    from {background-color: ${globalStyles.ligthSkeleton}};
    to {background-color: ${globalStyles.darkSkeleton}}
  }
`;

export const StyledSkeletonIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  animation: infinite;
  animation-name: icon;
  animation-duration: 1s;
  animation-direction: alternate-reverse;
  @keyframes icon {
    from {background-color: ${globalStyles.ligthSkeleton}};
    to {background-color: ${globalStyles.darkSkeleton}}
  }
`;

export const StyledSlicerSkeletonWrapper = styled.div`
    display: grid;
    grid-template-columns: ${p => p.title ? '1fr' : '15% 70% 15%'};
    border: ${globalStyles.darkSkeleton};
    justify-items: center;
    align-items: center;
    min-height: 40px;
    margin: 5px 0;
    box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
    background-color: ${globalStyles.darkSkeleton};
    box-sizing: border-box;
    pointer-events: none;
    cursor: none;
    animation: infinite;
    animation-name: skeleton;
    animation-duration: 1s;
    animation-direction: alternate-reverse;
    @keyframes skeleton {
      from {background-color: ${globalStyles.darkSkeleton}}
      to {background-color: ${globalStyles.ligthSkeleton}}
    }
`;

export const StyledSlicerSkeletonIcon = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin: auto auto;
    background-color: white;
    animation: infinite;
    animation-name: details;
    animation-duration: 1s;
    animation-direction: alternate-reverse;
    @keyframes details {
      from {background-color: ${globalStyles.ligthSkeleton}};
      to {background-color: ${globalStyles.darkSkeleton}}
    }
`;

export const StyledSlicerSkeletonDescription = styled.div`
    width: 20%;
    height: 10px;
    border-radius: 5px;
    margin: auto auto;
    background-color: white;
    animation: infinite;
    animation-name: details;
    animation-duration: 1s;
    animation-direction: alternate-reverse;
    @keyframes details {
      from {background-color: ${globalStyles.ligthSkeleton}};
      to {background-color: ${globalStyles.darkSkeleton}}
  }
`;

// export const HrSkeleton = styled.div`
//     width: 80px;
//     height: 1px;
//     margin: 20px auto;
//     animation: infinite;
//     animation-name: details;
//     animation-duration: 1s;
//     animation-direction: alternate-reverse;
//     @keyframes details {
//       from {background-color: #FFFFFF};
//       to {background-color: ${globalStyles.darkSkeleton}}
//   }
// `;