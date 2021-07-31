import React, {useEffect} from 'react';

import {storeCombined} from './src/redux/store';
import {Provider, useDispatch} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import {MainNavigation} from './src/Navigation/Main/MainNavigation';

const {store, persistor} = storeCombined();

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};
