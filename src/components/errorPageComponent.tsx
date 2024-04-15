import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = styled.div``;
type ErrorPageProps = unknown;
export const ErrorPageComponent: FC<ErrorPageProps> = () => {
  return (
    <ErrorPage>
      {' '}
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F8f7a28e62f8242b264c8a39ba8bea261%2Ftenor.gif%3Fitemid%3D15922897&f=1&nofb=1&ipt=38a131cfda909ea0457a289cf15d67b8b78def2da7506e80008b59aa0d1d7771&ipo=images"
        alt=""
      />
      Oops, something wrong happens. You can return back by this link :
      <Link to="/">homePage</Link>
      though.
    </ErrorPage>
  );
};

export default ErrorPage;
