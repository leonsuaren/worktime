import styled from 'styled-components';
import { Link as ReactRouterDomLink } from 'react-router-dom';

export const ModalWrapper = styled.div`
  display: ${props => props.showModal ? '' : 'none'};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  margin: 0;
  width: 100vw; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

export const StyledInformativeCard = styled.div`
  display: grid;
  grid-template-rows: ${p => p.type === 'informative' ? '10% 80% 10% ': '10% 90%' } ;
  justify-items: center;
  align-content: center;
  min-height: 250px;
  box-shadow: 0 0 5px rgba(0,0,0,.05), 2px 2px 5px rgba(0,0,0,.1);
  border: ${p => p.theme.borderColor};
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  background: white;
  z-index: 6;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  justify-items: left;
  align-content: center;
  border-bottom: ${p => p.theme.borderColor};
  width: 100%;
`;

export const Title = styled.h5`
  font-weight: bold;
  font-style: italic;
`;

export const Footer = styled.div`
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  border-top: ${p => p.theme.borderColor};
`;

export const LikeButton = styled.button`
  border: none;
  background-color: transparent;  
  cursor: pointer;
`;

const Link = ({ children, ...props }) => {
  return (
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
}

export const LinkTo = styled(Link)`
  align-self: center;
  justify-self: center;
  margin: 15px;
`

export const LikeIncrement = styled.span`
  margin: 2px;
  font-size: .9rem;
  color: #CCCCCC;
  position: relative;
    top: -14px;
    right: 5px;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: ${p => p.type === 'informative' ? '15% 85%': '20% 80%' };
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  justify-self: center;
  align-self: center;
`;

export const BodyHeader = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
`;

export const BodyTitle = styled.div`
  display: grid;
  grid-template-rows: 50% 50%;
`;

export const TitleHead = styled.p`
  font-size: .8rem;
  font-weight: bold;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
  align-self: flex-end;
`;

export const SubtitleHead = styled.div`
  font-style: italic;
  font-size: .8rem;
`;

export const DateHead = styled.span`
  font-size: .8rem;
  color: #CCCCCC;
  font-weight: bold;
  font-style: italic;
  margin: 0;
  padding: 0;
`;

export const BobyContent = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  align-items: flex-end;
`;

export const BodyImage = styled.img`
  width: 100%;
  height: 80%;
  margin-bottom: 10px;
`;

export const BodySubtitle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 0;
`;

export const BodyDescription = styled.p`
  margin: 0;
  align-self: flex-start;
`;