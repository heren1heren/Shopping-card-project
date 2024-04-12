import { FC } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';
import { element } from 'prop-types';
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
  gap: 20px;
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
const Img = styled.img`
  max-height: 75%;
  max-width: 75%;
`;
type SalesComponentProps = {};
export const SalesComponent: FC<SalesComponentProps> = () => {
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

  /** What to do
   *  add events for increase and decrease data
   */

  // what if there is a million item? the million items get change just to increase one cat count?
  const handleIncrease = (e) => {
    console.log(e.target.id);
    const clone = [];
    for (let i = 0; i < catsData.length; i++) {
      const element = catsData[i];
      if (element.url === e.target.id) {
        element.count++;
        clone.push(element);
      } else {
        clone.push(element);
      }
    }

    setCatsData(clone);

    // set catsData again here
    // set purChaseData here or only change purchaseData after switch pages
  };
  console.log(catsData);

  const handleDecrease = () => {
    // set catsData again here
    // set purChaseData here
  };
  const handleAdd = (e) => {
    const filterArray = catsData.filter((item) => {
      return item.url === e.target.id ? item : null;
    });
    setPurchaseData([...purchaseData, ...filterArray]);
  };

  return (
    <SalesPage>
      <div> Use your affection points to purchase cats!!!!</div>

      <ItemsContainer className="item-container">
        <Item>
          <img src="src/img/tenor.gif" alt="cat-image" />
          <p> -1 Affection point.</p>
          <p> Cat God</p>
          <CountDisplayer>
            <DecreaseBtn onClick={handleDecrease} id="catGod">
              -
            </DecreaseBtn>
            <span>{1}</span>
            <IncreaseBtn onClick={handleIncrease} id="catGod">
              +
            </IncreaseBtn>
            <AddBtn
              onClick={() => {
                alert('I am not for sale!');
              }}
              id="catGod"
            >
              Add to cart{' '}
            </AddBtn>
          </CountDisplayer>
        </Item>
        {catsData.map((item) => {
          return (
            <Item key={item.prize}>
              <Img src={item.url} alt="cat-image" />
              <p>{item.price} Affection point.</p>
              <p>{item.name}</p>
              <CountDisplayer>
                <DecreaseBtn onClick={handleDecrease} id={item.url}>
                  -
                </DecreaseBtn>
                <span>{item.count}</span>
                <IncreaseBtn onClick={handleIncrease} id={item.url}>
                  +
                </IncreaseBtn>
                <AddBtn onClick={handleAdd} id={item.url}>
                  Add to your heart{' '}
                </AddBtn>
              </CountDisplayer>
            </Item>
          );
        })}
      </ItemsContainer>
    </SalesPage>
  );
};
