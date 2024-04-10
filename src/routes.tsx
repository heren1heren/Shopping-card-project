import CartComponent from './components/cartComponent';
import HomePageComponent from './components/homePage';
import { SalesComponent } from './components/salesPage';
import { ErrorPageComponent } from './components/errorPageComponent';
import { element } from 'prop-types';
import { App } from './App';
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPageComponent />,

    children: [
      { index: true, element: <HomePageComponent /> },
      {
        path: 'homePage',
        element: <HomePageComponent />,
      },
      {
        path: 'shop',
        element: <SalesComponent />,
      },
      {
        path: 'cart',
        element: <CartComponent />,
      },
    ],
  },
];

export default routes;
