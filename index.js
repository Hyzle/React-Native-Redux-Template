import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import { store } from './app/store';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store';

AppRegistry.registerComponent(appName, () => () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
));
