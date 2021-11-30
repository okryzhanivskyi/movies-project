import * as React from 'react';
import { Wrapper, ItemWrapper } from './styled';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: 'HOME',
    link: '/'
  },
  {
    title: 'Top 250 Movies',
    link: '/top-250-movies'
  },
  {
    title: 'Top 250 Series TVs',
    link: '/top-250-series-tv'
  }
];

const renderMenu = (): React.ReactElement[] => {
  return menuItems.map(item => (
    <ItemWrapper>
      <Link to={item.link}>{item.title}</Link>
    </ItemWrapper>
  ))
}

const Header = (): React.ReactElement => (
    <Wrapper>
      {renderMenu()}
    </Wrapper>
);

export default Header;