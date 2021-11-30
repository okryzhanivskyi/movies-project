import styled from 'styled-components';
import colors from '@movies/webapp-components/src/styles/colors';
import fontWeights from '@movies/webapp-components/src/styles/fontWeights';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 30px 40px;
`;

export const Button =  styled.button`
  cursor: pointer;
  width: 150px;
  padding: 10px 20px;
  border: 1px solid ${colors.lightGrey};
  text-align: center;

  :hover {
    background-color: ${colors.almostWhite};
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
`;

export const PageNumber = styled.div`
  margin-right: 40px;
  text-decoration: underline;
  font-weight: ${fontWeights.medium};
`;
