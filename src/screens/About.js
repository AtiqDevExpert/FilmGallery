import React, { useState, useEffect } from 'react';
import { getStrings } from "../config/DataApp";
import { View, ScrollView } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { HTMLStyles } from '../config/HTMLStyles';
import AppLoading from '../components/AppLoading';
import Styles from '../config/Styles';
import FastImage from 'react-native-fast-image';

export default function About() {

  	const [isLoaded, setIsLoaded] = useState(false);
  	const [item, setItem] = useState('');


useEffect(() => {

  getStrings().then((response) => {
    setItem(response[0]);
    setIsLoaded(true);
  });

}, []);

  if (isLoaded) {

 return (

	<ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
    <View style={Styles.PageScreen}>
    <FastImage source={require('../assets/logo.png')} resizeMode={"contain"} style={Styles.PageLogo} />
    <HTMLView value={item.st_aboutus} stylesheet={HTMLStyles}/>
    </View>
    </ScrollView>

      );

   }else{
   return (
     <AppLoading/>
     );
 }
 
}

