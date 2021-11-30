import * as React from 'react';
import { connect } from 'react-redux';
import { getSeriesRequest } from '../../redux/series/seriesActions';
import { SerieInfo } from '@movies/webapp-components/src/types';
import Cards from '../../components/Cards';
import { SeriesState } from '../../redux/series/types';

interface Props {
  series: SerieInfo[];
  getSeries: () => void;
}

const Series = ({ series, getSeries }: Props): React.ReactElement => {
  React.useEffect(() => {
    getSeries();
  }, []);

  return (<Cards items={series} />);
}

const mapStateToProps = (state: SeriesState) => ({
  series: state.series.series
});

const mapDispatchToProps = {
  getSeries: getSeriesRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Series);