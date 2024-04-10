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
  return (
    <Body>
      <HeaderComponent className="header" />
      {/** how to render default main section */}

      <Outlet />
      <FooterComponent className="footer" />
    </Body>
  );
};
