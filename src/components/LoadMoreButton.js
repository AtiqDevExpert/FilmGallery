import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import { Text, ActivityIndicator } from 'react-native-paper';
import Strings from '../config/Strings';
import { size } from "lodash";

export default function LoadMoreButton(props){
	
	const {Indicator, showButton, Items, Click, Num } = props;

    if (size(Items) >= Num) {

  if (showButton) {
    return (
      <View style={{height: 100}}>
        <TouchableOpacity activeOpacity={0.9} style={Styles.LoadMore} onPress={Click}>
        <Text>{!Indicator ? (Strings.ST55 ) : (<ActivityIndicator animating={Indicator} size={20} color="#fff" />)}</Text>
        </TouchableOpacity>
      </View>
    )
}else{
  return (
    <View style={Styles.NoMoreItems}>
      <Text>{Strings.ST56}</Text>
    </View>
  )

}
}else{
  return null
}

}

