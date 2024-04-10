import { FC } from 'react';
import styled from 'styled-components';
type CartProps = {};
const CartSection = styled.div`
  flex: 1;
  background-color: #f5deb3;
`;
export const CartComponent: FC<CartProps> = ({}) => {
  return <CartSection> I am a cart component</CartSection>;
};

export default CartComponent;
