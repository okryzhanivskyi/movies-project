import * as React from 'react';
import Pagination from '@movies/webapp-components/src/components/Pagination';
import { ITEMS_PER_PAGE } from '../config/constants';

type Props = {
  items: any[];
  firstIndex: number;
  lastIndex: number;
};

export default function withPagination(Component: React.ComponentType<Props>) {
  return (hocProps: Omit<Props, 'lastIndex' | 'firstIndex'>) => {
    const [currentPage, setCurrentPage] = React.useState(1);

    const lastPage = Math.ceil(hocProps.items.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber: number) => {
      if (pageNumber === 0 || pageNumber > lastPage) return;
      setCurrentPage(pageNumber);
    }

    const lastIndex = currentPage * ITEMS_PER_PAGE;
    const firstIndex = lastIndex - ITEMS_PER_PAGE;
    
    return (
      <>
        { lastPage > 1 && <Pagination currentPage={currentPage} lastPage={lastPage} setCurrentPage={handlePageChange} /> }
        <Component { ...(hocProps as Props) } firstIndex={firstIndex} lastIndex={lastIndex} />
      </>
    );
  };
}
