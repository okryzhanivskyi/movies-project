import * as React from 'react';
import { Wrapper, Image, Details, DetailsItem, DetailTitle, DetailInfo } from './styled';
import { MovieInfo } from '../../types';

interface Props {
  movie: MovieInfo
}

const renderDetailRow = (title: string, content: string) => (
  <DetailsItem>
    <DetailTitle>{ title }</DetailTitle>:
    <DetailInfo>{ content }</DetailInfo>
  </DetailsItem>
)

const MovieCard = ({ movie }: Props): React.ReactElement => (
  <Wrapper>
    <Image src={movie.image} />
    <Details>
      { renderDetailRow('Title', movie.fullTitle) }
      { renderDetailRow('Crew', movie.crew) }
      { renderDetailRow('IMDB Rating', movie.imDbRating) }
      { renderDetailRow('Rating Votes', movie.imDbRatingCount) }
    </Details>
  </Wrapper>
);

export default MovieCard;