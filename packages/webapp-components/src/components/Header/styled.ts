import styled from 'styled-components';
import colors from '../../styles/colors';
import fontWeights from '../../styles/fontWeights';

export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.almostWhite};
  
  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: ${fontWeights.medium};
    color: ${colors.grey};
    font-size: 20px;

    :hover {
      color: ${colors.darkGrey};
    }
  }
`;

export const ItemWrapper = styled.div`
  border-right: 1px solid ${colors.lightGrey};
  padding: 0 20px;

  :last-child {
    border-right: none;
  }
`;
