import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Linking } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { getUserData, getGravatar, getLogged, signOutApi } from "../config/DataApp";
import Styles from '../config/Styles';
import CustomButton from '../components/CustomButton';
import Strings from '../config/Strings';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ConfigApp from '../config/ConfigApp';
import ColorsApp from '../config/ColorsApp';

export default function Profile(props) {

	const {navigation} = props;
	const [user, setUser] = useState('');
	const [image, setImage] = useState('');
	const [isLogged, setisLogged] = useState('');

	const getUser = async () => {
		getUserData().then(resp => {
		
		if (resp != null) {
			setUser(resp[0]);
		}

				});
	}

	const getImage = async () => {
		const response = await getGravatar();
	}

	const checkLogged = async () => {
		const response = await getLogged();
		setisLogged(response);
	}

	const signOut = async () => {
		await signOutApi().then(response => {
					props.navigation.navigate("home");
				});;
	}

    const mailTo = async () => {
      await Linking.openURL(`mailto:${ConfigApp.CONTACTEMAIL}?subject=Contact`);
  }

	const onChangeScreen = (screen) => {
		navigation.navigate(screen);
	};

	useEffect(() => {

		if (checkLogged() != false) {

			getUser().then(response => {
				getGravatar(user.user_email).then(response => {
					setImage(response);

				});
			});

		}

	}, []);

	if (isLogged === 'true') {

		return (

			<ScrollView>
			<SafeAreaView>
			<View style={Styles.HeaderProfile}>
			<FastImage source={{uri: image}} style={Styles.ImageProfile} resizeMode={"contain"}/>
			<Text style={Styles.TextProfile}>{user.user_name}</Text>
			<Text style={Styles.SubTextProfile}>{user.user_email}</Text>
			</View>

			<View style={{marginHorizontal: 30}}>
			<CustomButton Icon="heart-outline" Label={Strings.ST4} Click={() => onChangeScreen("favorites")}/>
			<CustomButton Icon="email-outline" Label={Strings.ST34} Click={() => mailTo()}/>
			<CustomButton Icon="information-outline" Label={Strings.ST49} Click={() => onChangeScreen("terms")}/>
			<CustomButton Icon="logout" Label={Strings.ST31} Click={() => signOut()}/>
			</View>

			</SafeAreaView>
			</ScrollView>

			);

	}else{

		return (

			<View style={{flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
			<Icon name="account-lock" color="white" size={100} style={{marginBottom: 10}}/>
			<Button mode="contained" style={Styles.SignButton} contentStyle={Styles.SignButtonContent} labelStyle={Styles.SignButtonLabel} onPress={() => onChangeScreen("signin")}>
			{Strings.ST29}
			</Button>
		    <Button mode="text" color={ColorsApp.BACKGROUND} contentStyle={Styles.SignButtonTextContent} labelStyle={Styles.SignButtonTextLabel} onPress={() => onChangeScreen("signup")}>
		    {Strings.ST32}
		    </Button>
			</View>
			);

	}

}

