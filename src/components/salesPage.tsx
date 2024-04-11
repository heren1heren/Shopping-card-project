import { FC } from 'react';
import styled from 'styled-components';

const SalesPage = styled.div`
  flex: 1;
  background-color: #f5deb3;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Item = styled.div`
  border: solid purple 1px;
  border-radius: 0.2em;
  min-height: 400px;
`;
const ItemsContainer = styled.section`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const AddBtn = styled.button`
  border-radius: 0.2em;
  border: solid orange 1px;
`;
const PurchaseBtn = styled.button`
  border-radius: 0.2em;
  border: solid orange 1px;
`;
type SalesComponentProps = {};
export const SalesComponent: FC<SalesComponentProps> = () => {
  /**
   * what to do?
   *  creating a card div that display cat image , cat  name, price
   *  a card need to
   *
   */
  return (
    <SalesPage>
      <div> Use your affection points to purchase cats!!!!</div>

      <ItemsContainer className="item-container">
        <Item>
          <img src="src/img/tenor.gif" alt="cat-image" />
          <p>1000 affection point.</p>
          <p>cat's name</p>
          <AddBtn>Add to cart </AddBtn>
          <PurchaseBtn> purchase now</PurchaseBtn>
        </Item>
        <Item>
          <img src="src/img/tenor.gif" alt="cat-image" />
          <p>1000 affection point.</p>
          <p>cat's name</p>
          <AddBtn>Add to cart </AddBtn>
          <PurchaseBtn> purchase now</PurchaseBtn>
        </Item>
        <Item>
          <img src="src/img/tenor.gif" alt="cat-image" />
          <p>1000 affection point.</p>
          <p>cat's name</p>
          <AddBtn>Add to cart </AddBtn>
          <PurchaseBtn> purchase now</PurchaseBtn>
        </Item>
        <Item>
          <img src="src/img/tenor.gif" alt="cat-image" />
          <p>1000 affection point.</p>
          <p>cat's name</p>
          <AddBtn>Add to cart </AddBtn>
          <PurchaseBtn> purchase now</PurchaseBtn>
        </Item>
      </ItemsContainer>
    </SalesPage>
  );
};
