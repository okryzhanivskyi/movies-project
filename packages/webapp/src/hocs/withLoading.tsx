import * as React from 'react';
import Loading from '@movies/webapp-components/src/components/Loading';

type Props = {
  loading: boolean;
}

export default function withLoading<T>(Component: React.ComponentType<T>) {
  return (hocProps: T & Props) => {
    return (
      <>
        { hocProps.loading ? <Loading /> : <Component {...(hocProps)} /> }
      </>
    );
  };
}
