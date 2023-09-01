import React, { useState, useEffect, useCallback } from 'react';
import { ImageBackground, View, ScrollView, Linking, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, Button } from 'react-native-paper';
import { getSerieById, getLogged, setSerieBookmark, removeSerieBookmark } from "../config/DataApp";
import Styles from '../config/Styles';
import ConfigApp from '../config/ConfigApp';
import Strings from '../config/Strings';
import ColorsApp from '../config/ColorsApp';
import AppLoading from '../components/AppLoading';
import LinearGradient from 'react-native-linear-gradient';
import { Col, Grid } from "react-native-easy-grid";
import { RFPercentage } from "react-native-responsive-fontsize";
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ReadMore from 'react-native-read-more-text';

export default function SerieDetails(props) {

  const { route } = props;
  const { navigation } = props;
  const { id } = route.params;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookmark, setBookmark] = useState('');
  const [item, setItem] = useState(null);
  const [isLogged, setisLogged] = useState('');

  const onChangeScreen = (screen) => {
    navigation.navigate(screen);
  };

  const openEpisode = (id) => {
    navigation.navigate('episodes', {id});
  };

  const renderBookMark = async (id) => {
   await AsyncStorage.getItem('seriesFav').then(token => {
     const res = JSON.parse(token);

     if (res !== null) {
      let data = res.find(value => value.id === id);

      if (data !== null) {
        let data = res.find(value => value.id === id);
        return data == null ? setBookmark(false) : setBookmark(true);
      }

    } else {
      return false;
    }

  });
 };


 const saveBookmark = async (id, title, image) => {

  let item = {id, title, image};

  setSerieBookmark(item, id).then(token => {
    if (token === true) {
      setBookmark(true);
    }
  });
  
};

const removeBookmark = async (id) => {
 removeSerieBookmark(id).then(token => {
  if (token === true) {
    setBookmark(false);
  }
  
  });

};

const checkLogged = async () => {
  const response = await getLogged();
  setisLogged(response);
}

useEffect(() => {

  renderBookMark(id);

}, []);


useEffect(() => {

  checkLogged();

}, []);

useEffect(() => {

  getSerieById(id).then((response) => {
    setItem(response[0]);
    setIsLoaded(true);
  });

}, []);

const renderButtonFav = () => {

  if (!isBookmark) {

    if (isLogged) {

    return (


      <Button icon="heart-outline" mode="text" color={ColorsApp.BACKGROUND} loading={isBookmark ? true : false} contentStyle={Styles.itemBookmarkButton} labelStyle={Styles.itemBookmarkLabel} onPress={() => saveBookmark(item.serie_id, item.serie_title, item.serie_image)}>
      {Strings.ST35}
      </Button>
      )

    }else{

    return (

      <Button icon="heart-outline" mode="text" color={ColorsApp.BACKGROUND} contentStyle={Styles.itemBookmarkButton} labelStyle={Styles.itemBookmarkLabel} onPress={() => onChangeScreen("signin")}>
      {Strings.ST35}
      </Button>

      )

    }

  }else{

    return (

      <Button icon="close" mode="text" color={ColorsApp.BACKGROUND} labelStyle={Styles.itemBookmarkLabel} contentStyle={Styles.itemBookmarkButton} onPress={() => removeBookmark(item.serie_id)}>
      {Strings.ST36}
      </Button>

      )

  }

}


if (isLoaded) {

 return (
   <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
   <ImageBackground source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.serie_image}`}} resizeMode={"cover"} style={Styles.itemBackground} />
   <LinearGradient colors={['transparent', ColorsApp.BACKGROUND]} style={Styles.itemPosterOverlay}>

   <FastImage source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.serie_image}`}} style={Styles.itemPoster} resizeMode={"contain"}/>

   <View style={Styles.itemButtons}>

   {isLogged ? (
     <Button icon="play-circle" mode="contained" onPress={() => openEpisode(item.serie_id)} labelStyle={Styles.itemPlayLabel} style={Styles.itemPlay} contentStyle={Styles.itemPlayContent}>
     {Strings.ST37}
     </Button>
     ) : (
     <Button icon="play-circle" mode="contained" onPress={() => onChangeScreen("signin")} labelStyle={Styles.itemPlayLabel} style={Styles.itemPlay} contentStyle={Styles.itemPlayContent}>
     {Strings.ST37}
     </Button>
     )}

     </View>

     </LinearGradient>

     <View style={Styles.itemBookmark}>
      {renderButtonFav()}
      </View>

      <View style={Styles.itemContent}>
      <View style={Styles.itemTitleContent}>
      <Grid style={Styles.JustifyMiddle}>
      <Col style={Styles.JustifyFlexStart}>
      <Text numberOfLines={1} style={Styles.itemRating}>
      <Icon name="star" size={RFPercentage(3.4)}/>{item.serie_rate === 0 ? "-" : item.serie_rate}
      <Text style={Styles.itemRatingText}>{item.serie_rate === 0 ? "" : " /10"}</Text>
      </Text>
      </Col>
      <Col style={Styles.JustifyFlexEnd}>
      <View style={Styles.itemListGroup}>

      <View style={Styles.itemList}>
      <Text style={Styles.itemListTitle}>{Strings.ST38}</Text>
      <Text style={Styles.itemListSubTitle}>{item.serie_year}</Text>
      </View>

      </View>
      </Col>
      </Grid>
      </View>

      <View style={Styles.itemSection}>

      <View style={Styles.itemSectionTitle}>
      <Text style={Styles.itemSectionTitleLabel}>{Strings.ST40}</Text>
      </View>

      <Youtube id={item.serie_trailer} />

      <View style={Styles.itemSectionTitle}>
      <Text style={Styles.itemSectionTitleLabel}>{Strings.ST41}</Text>
      </View>

      <ReadMore
      numberOfLines={3}
      renderTruncatedFooter={renderButtonDown}
      renderRevealedFooter={renderButtonUp}>
      <Text style={Styles.itemSectionDesc}>
      {item.serie_description}
      </Text>
      </ReadMore>

      <View style={Styles.itemSectionTitle}>
      <Text style={Styles.itemSectionTitleLabel}>{Strings.ST43}</Text>
      </View>
      <Text style={Styles.itemSectionDesc}>{item.serie_stars}</Text>

      <View style={Styles.itemSectionTitle}>
      <Text style={Styles.itemSectionTitleLabel}>{Strings.ST44}</Text>
      </View>
      <Text style={Styles.itemSectionDesc}>{item.serie_genre}</Text>

      </View>

      </View>
      </ScrollView>

      );

}else{
 return (
   <AppLoading/>
   );
}

}

const Youtube = ({ id }) => {

  const videoLink = "https://www.youtube.com/watch?v="+id;
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(videoLink);

    if (supported) {
      await Linking.openURL(videoLink);
    }
  }, [videoLink]);

  return(

    <TouchableOpacity style={Styles.itemPlayTrailer} activeOpacity={0.9} onPress={handlePress}>
    <Icon name="play" size={RFPercentage(3)} style={Styles.itemPlayTrailerIcon}/>
    <Text style={Styles.itemPlayTrailerText}>{Strings.ST42}</Text>
    </TouchableOpacity>

    );
};

const renderButtonDown = (handlePress) => {
  return (
    <View style={Styles.ItemReadMore}>
    <Text style={Styles.ItemReadMoreText} onPress={handlePress}>
    <Icon name="chevron-down" size={RFPercentage(3)}/>
    </Text>
    </View>
    );
}

const renderButtonUp = (handlePress) => {
  return (
    <View style={Styles.ItemReadMore}>
    <Text style={Styles.ItemReadMoreText} onPress={handlePress}>
    <Icon name="chevron-up" size={RFPercentage(3)}/>
    </Text>
    </View>
    );
}

