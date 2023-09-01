import React, { useState, useEffect } from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { getEpisodeById } from "../config/DataApp";
import AppLoading from '../components/AppLoading';
import ConfigApp from '../config/ConfigApp';
import Styles from '../config/Styles';
import LinearGradient from 'react-native-linear-gradient';
import ColorsApp from '../config/ColorsApp';

export default function EpisodeInfo(props) {

	  const { route } = props;
  	const { id, title } = route.params;
  	const [isLoaded, setIsLoaded] = useState(false);
  	const [item, setItem] = useState(null);


useEffect(() => {

  props.navigation.setOptions({
        title: title,
  });

  getEpisodeById(id).then((response) => {
    setItem(response[0]);
    setIsLoaded(true);
  });

}, []);

if (isLoaded) {

 return (

   <>
   <ImageBackground source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.episode_image}`}} resizeMode={"cover"} style={Styles.episodeBackground} />
   <LinearGradient colors={['transparent', ColorsApp.BACKGROUND]} style={Styles.episodeOverlay}/>
   <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={{position: 'absolute', top: 10, flex: 1}}>
   <View style={Styles.episodeContent}>
   <Text>{item.episode_description}</Text>
   </View>
   </ScrollView>
   </>


      );
}else{
 return (
   <AppLoading/>
   );
}

}


