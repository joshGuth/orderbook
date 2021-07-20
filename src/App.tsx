import React from 'react';
import { Provider } from 'react-redux';
import { Theme } from './common/Theme';
import { Orderbook } from './features/orderbook/components/Orderbook';
import { store } from './store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Theme>
      <Orderbook />
    </Theme>
  </Provider>
);
