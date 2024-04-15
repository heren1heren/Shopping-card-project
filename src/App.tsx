import { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.scss';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import { Outlet } from 'react-router-dom';

import { useFetch } from './hooks';
import { contextType, filterData } from './typeDeclaration';

type AppProps = unknown;
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
  // const [catsData, setCatsData] = useState<filterData[]>([]);
  const [purchaseData, setPurchaseData] = useState<filterData[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [affection, setAffection] = useState(0);
  const [affectionColor, setAffectionColor] = useState('black');
  const [headerBackgroundColor] = useState('white'); // delete this latter
  const {
    data: catsData,
    isLoading,
    setData: setCatsData,
  } = useFetch(
    'https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=30&api_key=live_Sqy2WNs6swgxN1TR8BRVaTyPEayotuDkcvriOh1ar1L0fKS0T59uV0ksx6nlUMW1',
    isFetchedRef
  );
  const itemCount = purchaseData.reduce((accumulator: number) => {
    const value = 1;
    return accumulator + value;
  }, 0);

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
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F8f7a28e62f8242b264c8a39ba8bea261%2Ftenor.gif%3Fitemid%3D15922897&f=1&nofb=1&ipt=38a131cfda909ea0457a289cf15d67b8b78def2da7506e80008b59aa0d1d7771&ipo=images"
            alt="..."
            height="500px"
          />
        </div>
      ) : (
        <Outlet
          context={
            {
              purchaseData,
              setPurchaseData,
              catsData,
              setCatsData,
              affection,
              setAffection,
              setAffectionColor,
            } satisfies contextType
          }
        />
      )}

      <FooterComponent />
    </Body>
  );
};
