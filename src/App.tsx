import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.scss';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import { Outlet } from 'react-router-dom';

import { getRandomPrize } from './utils';
//todo: add type for appProps
type AppProps = {};
const Body = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  text-align: center;
`;
export const App: FC<AppProps> = () => {
  /**
   */

  const isFetchedRef = useRef(false); // don't delete this
  const [catsData, setCatsData] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [affection, setAffection] = useState(0);
  const [affectionColor, setAffectionColor] = useState('black');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('white'); // delete this latter

  const itemCount = purchaseData.reduce((accumulator: number) => {
    const value = 1; // depend on type of current data
    return accumulator + value;
  }, 0);

  useEffect(() => {
    if (!isFetchedRef.current) {
      const fetching = async () => {
        let data = [];
        try {
          data = await (
            await fetch(
              'https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=30&api_key=live_Sqy2WNs6swgxN1TR8BRVaTyPEayotuDkcvriOh1ar1L0fKS0T59uV0ksx6nlUMW1'
            )
          ).json();
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
          //todo: add type for item
          const filterData = data.map((item: object) => {
            return {
              url: item.url,
              count: 1,
              price: getRandomPrize(),
              name: item.breeds[0].name || 'noname',
            };
          });
          setCatsData(filterData);
        }
      };
      isFetchedRef.current = true;
      fetching();
    }
  });

  return (
    <Body>
      <HeaderComponent
        affection={affection}
        affectionColor={affectionColor}
        headerBackgroundColor={headerBackgroundColor}
        itemCount={itemCount}
      />

      {isLoading ? (
        <div>
          <img src="src/img/cat-what.gif" alt="..." width="50%" height="70%" />
        </div>
      ) : (
        <Outlet
          context={[
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
          ]}
        />
      )}

      <FooterComponent />
    </Body>
  );
};
