import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ModalNavigation from './ModalNavigation';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="app" drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="app" component={ModalNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;