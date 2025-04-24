import React, {useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import HomePage from '../screens/HomePage';
import MenuPage from '../screens/MenuPage';
import AddToCartPage from '../screens/AddToCartPage';
import OrdersPage from '../screens/OrdersPage';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#EF4444',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          position: 'absolute',
          height: 60,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#EF4444' : 'gray',
              }}
            />
          ),
          tabBarButton: props => (
            <TouchableOpacity activeOpacity={1} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuPage}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/menu.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#EF4444' : 'gray',
              }}
            />
          ),
          tabBarButton: props => (
            <TouchableOpacity activeOpacity={1} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={AddToCartPage}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/cart.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#EF4444' : 'gray',
              }}
            />
          ),
          tabBarButton: props => (
            <TouchableOpacity activeOpacity={1} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersPage}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/spoon-and-fork.png')}
              style={{
                width: 26,
                height: 26,
                // borderRadius: 13,
                // borderWidth: 2,
                tintColor: focused ? '#EF4444' : 'gray',
              }}
            />
          ),
          tabBarButton: props => (
            <TouchableOpacity activeOpacity={1} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
