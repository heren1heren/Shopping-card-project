import styled from 'styled-components';
type FooterComponentProps = {};
const Div = styled.div`
  background-color: #23272e;
  color: white;
`;
const A = styled.a`
  text-decoration: none;
  color: #0a84ff;
`;
export const FooterComponent: FC<FooterComponentProps> = ({}) => {
  return (
    <Div>
      {' '}
      Made by <A href="https://github.com/heren1heren">cookieTurtle </A>
      for cats. All copyCats reserved
    </Div>
  );
};

export default FooterComponent;
