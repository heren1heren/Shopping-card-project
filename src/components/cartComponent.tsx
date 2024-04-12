import { FC } from 'react';
import styled from 'styled-components';
type CartProps = {};
const CartSection = styled.div`
  flex: 1;
  background-color: #f5deb3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 0.2em;
  padding: 50px;
  min-width: 300px;
  min-height: 40vh;
  display: flex;
  gap: 10px;
`;
const ItemContainer = styled.div``;
const Item = styled.div`
  border: 1px solid black;
`;
const CheckOutSection = styled.div`
  border-left: 2px solid black;
`;
const Img = styled.img`
  max-height: 20vh;
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
  const itemData = [
    { url: 'src/img/tenor.gif', name: 'item', count: 0, price: 50, id: 'aoeu' },
  ];
  const renderList = (list) => {
    return list.map((item) => {
      return (
        <Item key={item.id}>
          <Img src={item.url} alt="cat-image" />
          <div className="wrapper">
            <p>{item.name}</p>
            <p>Price:{item.price}</p>
            <p>Count: {item.count}</p>
          </div>
        </Item>
      );
    });
  };

  return (
    <CartSection>
      <Main>
        <ItemContainer>{renderList(itemData)}</ItemContainer>
        <CheckOutSection>I am check ut section</CheckOutSection>
      </Main>
    </CartSection>
  );
};

export default CartComponent;
