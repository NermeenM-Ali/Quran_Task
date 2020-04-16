import {YellowBox} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: ...']);

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  
  Navigation.setRoot({
      root: {
        stack: {
          id: 'AppStack',
          children: [
            {
              component: {
                id: 'Splash',
                name: 'Splash',
                options: {
                  topBar: {
                    visible: false,
                    drawBehind: true,
                  },
                  statusBar: {
                    visible: false,
                    drawBehind: true,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });

 