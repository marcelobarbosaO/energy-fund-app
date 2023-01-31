import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './tabs.route';

import SignIn from '#screens/SignIn';
import SplashScreen from '#screens/SplashScreen';

const { Navigator, Screen } =
  createNativeStackNavigator<AppStackNavigatorParamList>();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: true }} initialRouteName="splash">
      <Screen
        name="splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="tabs"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <>
        <Screen
          name="signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
      </>
    </Navigator>
  );
};

export default AppRoutes;
