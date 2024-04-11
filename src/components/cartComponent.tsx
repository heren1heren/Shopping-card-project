import { FC } from 'react';
import styled from 'styled-components';
type CartProps = {};
const CartSection = styled.div`
  flex: 1;
  background-color: #f5deb3;
`;
export const CartComponent: FC<CartProps> = ({}) => {
  /**
   * contains items images and checkout section
   *
   *
   *
   *
   *
   *
   * if affection point = -1 -> announcing:
   * you have shown an undescribable desire toward cats, may you purchase them all!!
   *
   */

  return <CartSection> I am a cart component</CartSection>;
};

export default CartComponent;
