import * as React from 'react';
import MovieCard from '@movies/webapp-components/src/components/MovieCard';
import { MovieInfo, SerieInfo } from '@movies/webapp-components/src/types';
import { Wrapper } from './styled';
import withPagination from '../../hocs/withPagination';

interface Props {
  items: (MovieInfo | SerieInfo)[];
  firstIndex: number;
  lastIndex: number;
}

const Cards = ({ items, firstIndex, lastIndex }: Props): React.ReactElement => {
  let paginatedItems = items;
  
  if (Number.isInteger(firstIndex) && Number.isInteger(lastIndex)) {
    paginatedItems = items.slice(firstIndex, lastIndex);
  }

  return (
    <Wrapper>
      { paginatedItems.map(el => <MovieCard movie={el} />) }
    </Wrapper>
  )
}

export default withPagination(Cards);