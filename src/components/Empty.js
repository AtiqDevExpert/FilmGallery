import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import Strings from '../config/Strings';

export default class Empty extends PureComponent{
	render () {
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>{Strings.ST25}</Text>
			</View>
			);
	}
}