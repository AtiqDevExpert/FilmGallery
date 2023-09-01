import React, { useState, useEffect } from 'react';
import { getStrings } from "../config/DataApp";
import { View, ScrollView } from 'react-native';
import { HTMLStyles } from '../config/HTMLStyles';
import HTMLView from 'react-native-htmlview';
import Styles from '../config/Styles';
import AppLoading from '../components/AppLoading';

export default function Terms() {

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
    <HTMLView value={item.st_termsofservice} stylesheet={HTMLStyles}/>
    <HTMLView value={item.st_privacypolicy} stylesheet={HTMLStyles}/>
    </View>
    </ScrollView>

      );

    }else{
   return (
     <AppLoading/>
     );
 }
 
}

