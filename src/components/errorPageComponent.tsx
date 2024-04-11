import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = styled.div``;
type ErrorPageProps = {};
export const ErrorPageComponent: FC<ErrorPageProps> = ({}) => {
  return (
    <ErrorPage>
      {' '}
      <img src="src/img/tenor.gif" alt="" />
      Oops, something wrong happens. You can return back by this link :
      <Link to="/">homePage</Link>
      though.
    </ErrorPage>
  );
};

export default ErrorPage;
