import React, { Component } from "react";
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import SideMenu from './SideMenu';
import stackNav from './stacknav';

const drawernav = DrawerNavigator({
  Item1: {
    screen: stackNav,
  }
}, {
  contentComponente: SideMenu,
  drawerWidht: Dimensions.get('window').width - 120,
});

AppRegistry.registerComponent('Demo', () => drawernav);