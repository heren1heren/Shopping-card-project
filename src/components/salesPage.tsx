/**
 * todo:
 *

 */

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
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const AddBtn = styled.button`
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
// todo: add type
type SalesComponentProps = {};
export const SalesComponent: FC<SalesComponentProps> = () => {
  // todo: add type
  const [purchaseData, setPurchaseData, catsData, setCatsData] =
    useOutletContext();

  const handleIncrease = (e: React.ChangeEvent<HTMLElement>) => {
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
  };

  const handleDecrease = (e: React.ChangeEvent<HTMLElement>) => {
    const clone = [];
    let isChange = false;
    for (let i = 0; i < catsData.length; i++) {
      const element = catsData[i];
      if (element.url === e.target.id) {
        if (element.count < 1) {
          isChange = true;
          return;
        }
        element.count--;
        clone.push(element);
      } else {
        clone.push(element);
      }
    }
    if (!isChange) setCatsData(clone);
  };
  const handleAdd = (e: React.ChangeEvent<HTMLButtonElement>) => {
    // todo: add type here
    const filterArray = catsData.filter((item: object) => {
      return item.url === e.target.id ? item : null;
    });
    if (filterArray[0].count <= 0) return;
    const [item] = filterArray;
    if (contains(item, purchaseData)) {
      const clone: object[] = [];
      purchaseData.forEach((element: object) => {
        if (element === item) {
          // todo: add type here
          element.count++;
          clone.push(element);
        } else {
          clone.push(element);
        }
      });
      setPurchaseData(clone);
      return;
    }
    setPurchaseData([...purchaseData, item]);
  };

  return (
    <SalesPage>
      <div> Use your affection points to purchase cats!!!!</div>

      <ItemsContainer className="item-container">
        <Item key="src/img/tenor.gif">
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

        {catsData.map((item: object) => {
          // todo: add type here
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
