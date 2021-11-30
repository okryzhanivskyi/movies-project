import * as React from 'react';
import { connect } from 'react-redux';
import { getMoviesRequest } from '../../redux/movies/moviesActions';
import { MovieInfo } from '@movies/webapp-components/src/types';
import Cards from '../../components/Cards';
import { MoviesState } from '../../redux/movies/types';
import { ApiState } from '../../redux/api/types';
import withLoading from '../../hocs/withLoading';

interface Props {
  movies: MovieInfo[];
  getMovies: () => void;
}

const Movies = ({ movies, getMovies }: Props): React.ReactElement => {
  React.useEffect(() => {
    !movies.length && getMovies();
  }, []);

  return <Cards items={movies} />
}

const mapStateToProps = (state: MoviesState & ApiState) => ({
  movies: state.movies.movies,
  loading: state.api.loading
});

const mapDispatchToProps = {
  getMovies: getMoviesRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(withLoading(Movies));