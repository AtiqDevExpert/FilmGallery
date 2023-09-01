import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import {getRecentSeries} from "../config/DataApp";
import { FlatGrid } from 'react-native-super-grid';
import Loader from './Loader';
import Heading from './Heading';
import Strings from '../config/Strings';
import {isTablet} from 'react-native-device-info';
import SerieCard from '../components/SerieCard';

export default function RecentSeries() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [recentSeries, setrecentSeries] = useState([]);

  useEffect(() => {
    getRecentSeries().then((response) => {
        setrecentSeries(response);
        setIsLoaded(true);
    });
  }, []);

const renderSerie = (item) => {

  return (
    <SerieCard item={item} />
    );
};
    return(

      <View>
      <Heading title={Strings.ST58} screenname="series" />
      <Loader loaded={isLoaded} row={8} size={[60, 20, 60, 20, 60, 10, 60, 10]}>
      <View style={{width: '100%', paddingRight: 10}}>
      <FlatGrid
      itemDimension={isTablet() === true ? 200 : 140}
      spacing={15}
      data={recentSeries} 
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (renderSerie(item))}
      />
      </View>
      </Loader>
      </View>

      );

}