import styled from 'styled-components';
import fontWeights from '@movies/webapp-components/src/styles/fontWeights';

export const Wrapper = styled.div``;

export const Tabs = styled.div`
  text-transform: capitalize;
  display: flex;
  font-weight: ${fontWeights.book};
`;
export const Tab = styled.div`
  margin-left: 12px;
  text-decoration: underline;
  cursor: pointer;

  :first-child {
    margin-left: 0px;
  }

  :hover {
    text-decoration: none;
  }

  &.activeHomepageTab {
    text-decoration: none;
    color: #84AFFF;
  }
`;

export const ActiveTabTitle = styled.div`
  text-transform: capitalize;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;
  color: #377CFF;
  font-size: 20px;
`;
