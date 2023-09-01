import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import EpisodeInfo from '../screens/EpisodeInfo';
import ColorsApp from '../config/ColorsApp';
import StackNavigation from './StackNavigation';
import { RFValue } from "react-native-responsive-fontsize";

const RootStack = createStackNavigator();
const screenHeight = Math.round(Dimensions.get('window').height);

export default function ModalNavigation(props){

	const {navigation} = props;

	const navigatorOptions = {
		headerStyle: {
			backgroundColor: ColorsApp.PRIMARY,
			shadowColor: 'transparent',
			elevation: 0,
			shadowOpacity: 0
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			fontSize: RFValue(19, screenHeight),
		},
		headerTitleAlign: 'center'
	}

const buttonBack = () => {
	return (
		<IconButton icon="close" size={RFValue(30, screenHeight)} onPress={() => navigation.goBack()}/>
		)
};

return (
    <RootStack.Navigator mode="modal" screenOptions={navigatorOptions}>
      <RootStack.Screen name="Main" component={StackNavigation} options={{ headerShown: false }}/>
      <RootStack.Screen name="episodeinfo" component={EpisodeInfo} options={{title: null, headerTransparent: true, headerLeft: () => buttonBack()}} />
    </RootStack.Navigator>
	)
}