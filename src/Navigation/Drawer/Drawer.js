import {createDrawerNavigator} from '@react-navigation/drawer';

//import CustomDrawerContent from './DrawerContent.js';
import HomePage from '../../screens/HomePage/index.js';
import MyTabs from '../TabNavigation.js';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      gestureEnabled={false}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#21572E',
          width: '70%',
        },
        headerShown: false,
        overlayColor: 'rgba(0, 0, 0, 0.4)',
      }}
      drawerType="slide">
      <Drawer.Screen name="MyTabs" component={MyTabs} />
      <Drawer.Screen name="MainDashboard" component={HomePage} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
