import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';
import { Text } from 'react-native-paper';

import theme from '#theme';

// import Home from '#screens/Home';
// import Settings from '#screens/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.backdrop,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingVertical: 0,
          height: getBottomSpace() + 50,
        },
      }}
    >
      {/* <Screen
      name="home"
      component={Home}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ fontSize: 12, color }}>Racha</Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="soccer-field"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Screen
      name="ranking"
      component={Home}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ fontSize: 12, color }}>Ranking</Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="star" color={color} size={size} />
        ),
      }}
    />
    <Screen
      name="settings"
      component={Settings}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ fontSize: 12, color }}>Configurações</Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="settings" color={color} size={size} />
        ),
      }}
    /> */}
    </Navigator>
  );
};

export default BottomTab;
