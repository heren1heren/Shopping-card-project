import { FC } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
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
const IncreaseBtn = styled.button``;
const DecreaseBtn = styled.button``;
const CountDisplayer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
type SalesComponentProps = {};
export const SalesComponent: FC<SalesComponentProps> = () => {
  /**
   * what to do?
   * * adding loading phase for fetching or it crashes.
   * * creating a card div that display cat image , cat  name, price
   *  a card need to
   ** using map method to render
   */
  const [
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

  const handleIncrease = () => {
    console.log('click');
  };
  const handleDecrease = () => {
    console.log('click');
  };
  const handleAdd = () => {
    console.log('click');
  };

  return (
    <SalesPage>
      <div> Use your affection points to purchase cats!!!!</div>

      <ItemsContainer className="item-container">
        <Item>
          <img src="src/img/tenor.gif" alt="cat-image" />
          <p>{catsData[0].prize} Affection point.</p>
          <p>{catsData[0].name}</p>
          <CountDisplayer>
            <DecreaseBtn onClick={handleIncrease}>-</DecreaseBtn>
            <span>{catsData[0].count}</span>
            <IncreaseBtn onClick={handleIncrease}>+</IncreaseBtn>
            <AddBtn onClick={handleAdd}>Add to cart </AddBtn>
          </CountDisplayer>
        </Item>
      </ItemsContainer>
    </SalesPage>
  );
};
