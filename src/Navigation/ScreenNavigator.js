import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import MenuDetailsPage from '../screens/MenuDetailsPage';
import MenuPage from '../screens/MenuPage';
import SignupPage from '../screens/SignupPage';
import MyDrawer from './Drawer/Drawer';
import AddToCartPage from '../screens/AddToCartPage';
import OrdersPage from '../screens/OrdersPage';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuDetailsPage"
        component={MenuDetailsPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuPage"
        component={MenuPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignupPage"
        component={SignupPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddToCartPage"
        component={AddToCartPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrdersPage"
        component={OrdersPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
