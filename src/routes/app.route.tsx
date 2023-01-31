import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './tabs.route';

import SplashScreen from '#screens/SplashScreen';

import SignIn from '#screens/SignIn';
import Register from '#screens/Register';

import AssetDetail from '#screens/AssetDetail';

const { Navigator, Screen } =
  createNativeStackNavigator<AppStackNavigatorParamList>();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="splash">
      <Screen name="splash" component={SplashScreen} />
      <Screen name="tabs" component={BottomTab} />
      <Screen name="assetDetail" component={AssetDetail} />
      <Screen name="signin" component={SignIn} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
};

export default AppRoutes;
