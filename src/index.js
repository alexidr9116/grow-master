import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import reportWebVitals from './reportWebVitals';
import './index.css';

import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
// contexts
// import { store, persistor } from './redux/store';
import { AuthProvider } from './contexts/JwtContext';
//
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <HelmetProvider>
      {/* <ReduxProvider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}

      <BrowserRouter>
        <App />
      </BrowserRouter>

      {/* </PersistGate> */}
      {/* </ReduxProvider> */}
    </HelmetProvider>
  </AuthProvider>
);

serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();