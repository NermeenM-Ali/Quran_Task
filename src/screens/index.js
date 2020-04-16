import React from 'react';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import store from '../store';
import Splash from './Splash'
import Content from './Content'
import StateScreen from './StateScreen'
import SoraDetails from './SoraDetails'
import JuzScreen from './JuzScreen'

// HOC
function reduxStoreWrapper(MyComponent, store) {
  return props => {
    return (
      <Provider store={store}>
        <MyComponent {...props} />
      </Provider>
    );
  };
}

export function registerScreens() {
  
  Navigation.registerComponent('Splash', () => 
    reduxStoreWrapper(Splash, store),
  );

  Navigation.registerComponent('Content', () => 
    reduxStoreWrapper(Content, store),
  );

  Navigation.registerComponent('StateScreen', () => 
    reduxStoreWrapper(StateScreen, store),
  );

  Navigation.registerComponent('SoraDetails', () => 
    reduxStoreWrapper(SoraDetails, store),
  );

  Navigation.registerComponent('JuzScreen', () => 
    reduxStoreWrapper(JuzScreen, store),
  );
  
  
}
