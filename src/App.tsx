import { FC, Suspense, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.scss';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import { Outlet } from 'react-router-dom';
import { DisplayPage } from '../test';
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
   * lifting data from outlet and fetching here
   * passing data down to homepage, salepage and check cart.
   */
  // passing itemCount to homepageComponent
  // passing setItemCount to outlet
  const [catsData, setCatsData] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFetchedRef = useRef(false);
  const [affection, setAffection] = useState(0);
  const [affectionColor, setAffectionColor] = useState('black');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('white'); // delete this latter
  const [cartData, setCartData] = useState([]);
  // isFetchedRef lose reference after switching between routes
  const itemCount = purchaseData.reduce(
    (accumulator: number, current: object) => {
      const value = 1; // depend on type of current data
      return accumulator + value;
    },
    0
  );

  useEffect(() => {
    if (!isFetchedRef.current) {
      // everytime I comeback from another route the useEffect is triggered. I only want it to fetch once time only after open the page
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
          const filterData = data.map((item: object) => {
            // add count and prize:
            return {
              url: item.url,
              count: 1,
              price: getRandomPrize(),
              name: item.breeds[0].name,
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
        className="header"
        affection={affection}
        affectionColor={affectionColor}
        headerBackgroundColor={headerBackgroundColor}
        itemCount={itemCount}
      />

      {isLoading ? (
        <div>
          {' '}
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

      <FooterComponent className="footer" />
    </Body>
  );
};

function getRandomPrize() {
  return (Math.random() * 1000).toFixed(2);
}
