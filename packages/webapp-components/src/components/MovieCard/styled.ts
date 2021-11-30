import styled from 'styled-components';
import fontWeights from '../../styles/fontWeights';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  width: 510px;
  padding: 20px;
  margin: 20px;
  display: flex;
  border-bottom: 1px solid ${colors.almostWhite};
  cursor: pointer;
`;

export const Details = styled.div``;

export const DetailsItem = styled.div`
  display: flex;
  padding: 4px 0;
  font-size: 13px;
`;

export const DetailTitle = styled.div`
  font-weight: ${fontWeights.medium};
`;

export const DetailInfo = styled.div`
  margin-left: 5px;
`;

export const Image = styled.img`
  width: 128px;
  height: 176px;
  margin-right: 15px;
`;
