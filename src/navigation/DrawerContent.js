import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { List, Searchbar } from "react-native-paper";
import Styles from '../config/Styles';
import Strings from '../config/Strings';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props){

	const {navigation} = props;
	const [string, setString] = useState('');

	const onChangeScreen = (screen) => {
		navigation.navigate(screen);
	};

  	const onSearch=(string) => {
  	  setString(string);
      navigation.navigate('search', { string: string });    
	};

	return (

		<View style={Styles.Drawer}>

		<ScrollView>

		<View style={Styles.DrawerHeader}>
		<FastImage source={require('../assets/logo.png')} resizeMode={"contain"} style={Styles.DrawerImage} />
		</View>

		<View style={{flex: 1}}>

    	<Searchbar placeholder={Strings.ST7} autoCorrect={false} onIconPress={() => onSearch(string)} onChangeText={(e) => setString(e)} style={Styles.DrawerSearchInput} inputStyle={Styles.DrawerSearchInputStyle} />

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST1}
		onPress={() => onChangeScreen("home")}
		left={props => <Icon {...props} style={Styles.DrawerIconMenu} name="home" />}
		/>
		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST2}
		onPress={() => onChangeScreen("movies")}
		left={props => <Icon {...props} style={Styles.DrawerIconMenu} name="filmstrip-box" />}
		/>
		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST3}
		onPress={() => onChangeScreen("series")}
		left={props => <Icon {...props} style={Styles.DrawerIconMenu} name="youtube-tv" />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST30}
		onPress={() => onChangeScreen("profile")}
		left={props => <Icon {...props} style={Styles.DrawerIconMenu} name="account" />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST4}
		onPress={() => onChangeScreen("favorites")}
		left={props => <Icon {...props} style={Styles.DrawerIconMenu} name="heart" />}
		/>

		<List.Item
		titleStyle={Styles.DrawerTitleMenu}
		style={Styles.DrawerMenuItem}
		title={Strings.ST6}
		onPress={() => onChangeScreen("about")}
		left={props => <Icon {...props} style={Styles.DrawerIconMenu} name="information" />}
		/>

		</View>

		</ScrollView>

		</View>

		)
}