/* Core CSS required for Ionic components to work properly */
import { configureStore } from '@/state/configureStore';
import { IonApp, setupConfig } from '@ionic/react';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from './app/components';
import Startup from './app/Startup';
import { PurchaseContext } from './context';
/* Global CSS */
import './global.css';
/* Theme variables */
import './theme/variables.css';

const { store, purchaseService, persistor } = configureStore();

setupConfig({
  mode: 'md',
});

const App: React.FC = () => (
  <IonApp>
    <Provider store={store}>
      <ErrorBoundary>
        <PurchaseContext.Provider value={purchaseService}>
          <PersistGate loading={null} persistor={persistor}>
            <Startup />
          </PersistGate>
        </PurchaseContext.Provider>
      </ErrorBoundary>
    </Provider>
  </IonApp>
);

export default App;
