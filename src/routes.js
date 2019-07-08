import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Charts from './pages/Charts';
import Grafico from './pages/Grafico';
const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Charts,
      Grafico
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#00abed',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
