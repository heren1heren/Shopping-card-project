import styled from 'styled-components';

const SalesPage = styled.div`
  flex: 1;
  background-color: #f5deb3;
`;
type SalesComponentProps = {};
export const SalesComponent: FC<SalesComponentProps> = () => {
  return <SalesPage> I am a sales page</SalesPage>;
};
