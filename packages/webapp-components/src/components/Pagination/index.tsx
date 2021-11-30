import * as React from 'react';
import { Wrapper, Button, Buttons, PageNumber } from './styled';

interface Props {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  lastPage: number;
}

const Pagination = ({ setCurrentPage, currentPage, lastPage }: Props): React.ReactElement => {
  return (
    <Wrapper>
      <Buttons>
        <Button onClick={() => setCurrentPage(currentPage - 1)}>Previous page</Button>
        <Button onClick={() => setCurrentPage(currentPage + 1)}>Next page</Button>
      </Buttons>
      <PageNumber>{ currentPage } page of {lastPage}</PageNumber>
    </Wrapper>
  )
}

export default Pagination;
