import * as React from 'react';
import { connect } from 'react-redux';
import { getHomepageDataRequest } from '../../redux/homepage/homepageActions';
import { MovieInfo, SerieInfo } from '@movies/webapp-components/src/types';
import Cards from '../../components/Cards';
import { HomepageState } from '../../redux/homepage/types';
import { Wrapper, ActiveTabTitle, Tab, Tabs, NavWrapper } from './styled';

interface Props {
  movies: MovieInfo[];
  series: SerieInfo[];
  getHomepageData: () => void;
}

const categories: string[] = ['movies', 'series'];

const Homepage = ({ movies, series, getHomepageData }: Props): React.ReactElement => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const data = { movies, series };

  const renderTabs = () => (
    categories.map((tab, index) => (
      <Tab
        className={tab === categories[activeTabIndex] ? 'activeHomepageTab' : ''}
        onClick={() => setActiveTabIndex(index)}
      >
        { tab }
      </Tab>
    ))
  );

  React.useEffect(() => {
    getHomepageData();
  }, []);

  return (
    <Wrapper>
      <NavWrapper>
        <Tabs>
          { renderTabs() }
        </Tabs>
        <ActiveTabTitle>Top { categories[activeTabIndex] }</ActiveTabTitle>
      </NavWrapper>
      <Cards items={data[categories[activeTabIndex] as keyof typeof data]} />
    </Wrapper>
  );
}

const mapStateToProps = (state: HomepageState) => ({
  movies: state.homepage.movies,
  series: state.homepage.series,
});

const mapDispatchToProps = {
  getHomepageData: getHomepageDataRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);