import { FC } from 'react';

import styled from 'styled-components';
import { useOutletContextWithType } from '../hooks';
import { filterData } from '../typeDeclaration';
type CartProps = unknown;
const CartSection = styled.div`
  flex: 1;
  background-color: #f5deb3;
  display: flex;
  gap: 10px;
  flex-direction: column;
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
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Item = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
const CheckOutSection = styled.div`
  border-left: 2px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`
  max-height: 20vh;
  border-radius: 0.2em;
`;
const TaxDiv = styled.div`
  padding-bottom: 10px;

  border-bottom: 1px solid black;
`;
const PurchaseBtn = styled.button`
  border: solid black 1px;
  padding: 10px;
`;

export const CartComponent: FC<CartProps> = () => {
  /**
   */
  const { purchaseData, setPurchaseData, affection } =
    useOutletContextWithType();

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement> & { target: HTMLButtonElement }
  ) => {
    const clone: filterData[] = [];
    for (let i = 0; i < purchaseData.length; i++) {
      const element = purchaseData[i];
      if (element.url === e.target.id) continue;
      clone.push(element);
    }
    setPurchaseData(clone);
  };
  const handlePurchase = () => {
    if (affection < totalCost) {
      alert('you are poor but cats do not discriminate: Meoww~$$$ ');
    } else {
      alert('cat will love you. Thanks.');
    }
  };
  //todo: add type here
  const totalCost = purchaseData.reduce(
    (accumulator: number, current: filterData) => {
      const cost = current.price * current.count;

      return accumulator + cost;
    },
    0
  );
  const tax = Math.random();
  const afterCost = tax * totalCost + totalCost;
  const renderList = (list: filterData[]) => {
    return list.map((item: filterData) => {
      return (
        <Item key={item.url}>
          <Img src={item.url} alt="cat-image" />
          <div className="wrapper">
            <p>{item.name}</p>
            <p>Price:{item.price}</p>
            <p>Count: {item.count}</p>
          </div>
          <button id={item.url} onClick={handleDelete}>
            Delete
          </button>
        </Item>
      );
    });
  };

  return (
    <CartSection>
      <p>I count cats by number. Lord please forgive me.</p>
      <Main>
        <ItemContainer>
          {purchaseData.length === 0 ? (
            <div>No item</div>
          ) : (
            renderList(purchaseData)
          )}
        </ItemContainer>
        <CheckOutSection>
          <p>total cost: {totalCost} point</p>
          <TaxDiv>
            tax ({(tax * 100).toFixed(2)})%: {(totalCost * tax).toFixed(2)}{' '}
            point
          </TaxDiv>
          <p>after tax: {afterCost.toFixed(2)}point</p>
          <PurchaseBtn onClick={handlePurchase}> Purchase!</PurchaseBtn>
        </CheckOutSection>
      </Main>
    </CartSection>
  );
};

export default CartComponent;
