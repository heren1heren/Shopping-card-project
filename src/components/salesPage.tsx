/**
 * todo:
 *

 */

import styled from 'styled-components';
import { contains } from '../utils';
import { filterData } from '../typeDeclaration';
import { FC } from 'react';
import { useOutletContextWithType } from '../hooks';

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
type SalesComponentProps = unknown;
export const SalesComponent: FC<SalesComponentProps> = () => {
  // todo: add types by using satisfy keyword.

  const { purchaseData, setPurchaseData, catsData, setCatsData } =
    useOutletContextWithType();

  const handleIncrease: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement> & { target: HTMLButtonElement }
  ) => {
    const { target } = e;
    const clone = [];
    for (let i = 0; i < catsData.length; i++) {
      const element = catsData[i];
      if (element.url === target.id) {
        element.count++;
        clone.push(element);
      } else {
        clone.push(element);
      }
    }
    setCatsData(clone);
  };

  const handleDecrease: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement> & { target: HTMLButtonElement }
  ) => {
    const { target } = e;

    const clone: filterData[] = [];
    let isChange = false;
    for (let i = 0; i < catsData.length; i++) {
      const element = catsData[i];
      if (element.url === target.id) {
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
  const handleAdd: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent<HTMLButtonElement> & { target: HTMLButtonElement }
  ) => {
    const { target } = e;
    const filterArray = catsData.filter((item: filterData) => {
      return item.url === target.id ? item : null;
    });
    if (filterArray[0].count <= 0) return;
    const [item] = filterArray;
    if (contains(item, purchaseData)) {
      const clone: filterData[] = [];
      purchaseData.forEach((element: filterData) => {
        if (element === item) {
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
        <Item key="https://media.tenor.com/5BYK-WS0__gAAAAM/cool-fun.gif">
          <img
            src="https://media.tenor.com/5BYK-WS0__gAAAAM/cool-fun.gif"
            alt="cat-image"
          />
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

        {catsData.map((item: filterData) => {
          // todo: add type here
          return (
            <Item key={item.price}>
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
