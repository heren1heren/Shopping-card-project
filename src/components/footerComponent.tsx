import styled from 'styled-components';
type FooterComponentProps = {};
const Div = styled.div`
  background-color: #23272e;
  color: white;
`;
export const FooterComponent: FC<FooterComponentProps> = ({}) => {
  return <Div> Made by cookieTurtle</Div>;
};

export default FooterComponent;
