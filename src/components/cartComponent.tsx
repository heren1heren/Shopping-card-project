import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
type CartProps = {};
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
`;
const TaxDiv = styled.div`
  padding-bottom: 10px;

  border-bottom: 1px solid black;
`;
const PurchaseBtn = styled.button`
  border: solid black 1px;
  padding: 10px;
`;
const TotalDiv = styled.div``;
const AfterDiv = styled.div``;
export const CartComponent: FC<CartProps> = ({}) => {
  /**
   */
  const [
    purchaseData,
    setPurchaseData,
    catsData,
    setCatsData,
    isLoading,
    setIsLoading,
    affection,
    setAffection,
    affectionColor,
    setAffectionColor,
    setHeaderBackgroundColor,
  ] = useOutletContext();
  const handlePurchase = () => {
    alert('cat will love you. Thanks.');
  };
  const totalCost = purchaseData.reduce(
    (accumulator: number, current: object) => {
      const cost = current.price * current.count;

      //comback later
      return accumulator + cost;
    },
    0
  );
  const tax = Math.random();
  const afterCost = tax * totalCost + totalCost;
  console.log(purchaseData);
  const renderList = (list: Array) => {
    return list.map((item: object) => {
      return (
        <Item key={item.url}>
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
