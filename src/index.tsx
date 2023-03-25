import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';


import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './db/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './app';

const container:HTMLElement|null = document.getElementById('root');
if(!container){
  throw new Error("container not found");
};

const root = createRoot(container);
const persistor = persistStore(store);

const Wrapper:FC = () => {
  return (
    // <React.StrictMode>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                    <App />
              </PersistGate>
          </Provider>
    // {/* </React.StrictMode> */}

  )
};




root.render(<Wrapper />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
