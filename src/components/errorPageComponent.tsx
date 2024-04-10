import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = styled.div`
  background-color: #23272e;
  color: white;
`;
type ErrorPageProps = {};
export const ErrorPageComponent: FC<ErrorPageProps> = ({}) => {
  return (
    <ErrorPage>
      {' '}
      Oops, something wrong happens. You can return back by this link :
      <Link to="/">homePage</Link>
      though.
    </ErrorPage>
  );
};

export default ErrorPage;
