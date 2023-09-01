import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import {map} from 'lodash';
import {getGenres} from "../config/DataApp";
import { Text } from 'react-native-paper';
import Heading from './Heading';
import Loader from './Loader';
import Strings from '../config/Strings';
import { useNavigation } from '@react-navigation/native';

export default function Genres() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres().then((response) => {
        setIsLoaded(true);
        setGenres(response);
    });
  }, []);

    return(

      <View style={{marginBottom: 10}}>
      <Heading title={Strings.ST12} screenname="seriesgenres" />
      <Loader loaded={isLoaded} row={1} size={[60]}>
      <ScrollView
          style={{width: '100%'}}
          contentContainerStyle={{ flexGrow: 1, paddingRight: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        {map(genres, (item, index) => (
        <RenderItem key={index} item={item} />

          ))}
      </ScrollView>
      </Loader>
      </View>

      );

}

function RenderItem(props) {

    const navigation = useNavigation();

    const onChangeScreen = (screen, id, title) => {
      navigation.navigate(screen, {id: id, title: title});
    };

    const { item } = props;
    const { genre_id, genre_title } = item;

      return (
    <View style={Styles.card3View}>
    <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('seriesbygenre', genre_id, genre_title)}>
      <View style={Styles.card3Content}>
      <Text style={Styles.card3Title} numberOfLines={1}>{genre_title}</Text>
      </View>
    </TouchableOpacity>
      </View>

      )

}