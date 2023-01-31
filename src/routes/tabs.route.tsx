import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import theme from '#theme';

import {
  Home as HomeIcon,
  Trade as TradeIcon,
  Portfolio as PortfolioIcon,
} from '#assets/svg';

import Home from '#screens/Home';
import Trade from '#screens/Trade';
import Portfolio from '#screens/Portfolio';
import { Typography } from '#components';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingVertical: 0,
          height: getBottomSpace() + 50,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: ({ color }) => (
            <Typography style={{ fontSize: 10, color }}>Home</Typography>
          ),
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="trade"
        component={Trade}
        options={{
          tabBarLabel: ({ color }) => (
            <Typography style={{ fontSize: 10, color }}>Trade</Typography>
          ),
          tabBarIcon: ({ color, size }) => (
            <TradeIcon color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="portfolio"
        component={Portfolio}
        options={{
          tabBarLabel: ({ color }) => (
            <Typography style={{ fontSize: 10, color }}>Portfolio</Typography>
          ),
          tabBarIcon: ({ color, size }) => (
            <PortfolioIcon color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTab;
