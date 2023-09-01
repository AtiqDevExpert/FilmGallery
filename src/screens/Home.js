import React from 'react';
import { Dimensions } from 'react-native';
import MoviesTab from '../components/MoviesTab';
import SeriesTab from '../components/SeriesTab';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ColorsApp from '../config/ColorsApp';
import Strings from '../config/Strings';
import { RFValue } from "react-native-responsive-fontsize";

const screenHeight = Math.round(Dimensions.get('window').height);

const Tab = createMaterialTopTabNavigator();

	const tabOptions = {
		indicatorStyle:{
			backgroundColor: '#ffffff',
		},
		style: {
			backgroundColor: ColorsApp.PRIMARY
		},
		labelStyle:{
			fontWeight: 'bold',
			fontSize: RFValue(19, screenHeight),
			textTransform:'capitalize'
		},
		activeTintColor: '#ffffff',
		pressColor: '#ffffff',
		pressOpacity: 0.8,
	}

export default class Home extends React.Component {
  
  render() {
    return (
		<Tab.Navigator tabBarOptions={tabOptions}>
		<Tab.Screen name={Strings.ST13} component={MoviesTab} />
		<Tab.Screen name={Strings.ST14} component={SeriesTab} />
		</Tab.Navigator>
    );
  }
}