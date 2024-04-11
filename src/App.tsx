import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.scss';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import { Outlet } from 'react-router-dom';
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
  const [affection, setAffection] = useState(0);
  const [affectionColor, setAffectionColor] = useState('black');
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState('white');
  return (
    <Body>
      <HeaderComponent
        className="header"
        affection={affection}
        affectionColor={affectionColor}
        headerBackgroundColor={headerBackgroundColor}
      />
      {/** how to render default main section */}

      <Outlet
        context={[
          affection,
          setAffection,
          affectionColor,
          setAffectionColor,
          setHeaderBackgroundColor,
        ]}
      />
      <FooterComponent className="footer" />
    </Body>
  );
};
