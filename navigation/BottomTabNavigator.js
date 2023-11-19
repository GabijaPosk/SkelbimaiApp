import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../model/MainScreen';
import AddScreen from '../model/AddScreen';
import EditScreen from '../model/EditScreen';
import DeleteScreen from '../model/DeleteScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Pagrindinis') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Pridėti') {
            iconName = focused ? 'plus-square' : 'plus-square';
          } else if (route.name === 'Atnaujinti') {
            iconName = focused ? 'edit' : 'edit';
          } else if (route.name === 'Ištrinti') {
            iconName = focused ? 'trash' : 'trash';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarStyle={{
        backgroundColor: '#ecf0f1',
      }}
      tabBarOptions={{
        activeTintColor: '#FBCFCD',
        inactiveTintColor: '#997070',
      }}
      >
      <Tab.Screen
        name="Pagrindinis"
        component={MainScreen}
        options={{
          tabBarLabel: () => null, 
        }}
      />
      <Tab.Screen
        name="Pridėti"
        component={AddScreen}
        options={{
          tabBarLabel: () => null, 
        }}
      />
      <Tab.Screen
        name="Atnaujinti"
        component={EditScreen}
        options={{
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Ištrinti"
        component={DeleteScreen}
        options={{
          tabBarLabel: () => null, 
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;