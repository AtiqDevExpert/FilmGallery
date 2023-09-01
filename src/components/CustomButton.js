import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import { Text } from 'react-native-paper';
import Icons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function CustomButton(props) {

		const {Icon, Label, Click} = props;

		const navigation = useNavigation();

		return(
			<TouchableOpacity activeOpacity={0.9} onPress={Click}>
			<View style={Styles.Button1}>
			<Icons name={Icon} style={Styles.Button1IconLeft} />
			<Text style={Styles.Button1Text}>{Label}</Text>
			<Icons name="chevron-right" style={Styles.Button1IconRight} />
			</View>
			</TouchableOpacity>
			);
}