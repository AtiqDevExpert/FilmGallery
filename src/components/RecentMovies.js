import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import {getRecentMovies} from "../config/DataApp";
import { FlatGrid } from 'react-native-super-grid';
import Loader from './Loader';
import Heading from './Heading';
import Strings from '../config/Strings';
import {isTablet} from 'react-native-device-info';
import MovieCard from '../components/MovieCard';

export default function RecentMovies() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [recentMovies, setrecentMovies] = useState([]);

  useEffect(() => {
    getRecentMovies().then((response) => {
        setrecentMovies(response);
        setIsLoaded(true);
    });
  }, []);


const renderMovie = (item) => {

  return (
    <MovieCard item={item} />
    );
};
    return(

      <View>
      <Heading title={Strings.ST11} screenname="movies" />
      <Loader loaded={isLoaded} row={8} size={[60, 20, 60, 20, 60, 10, 60, 10]}>
      <View style={{width: '100%', paddingRight: 10}}>
      <FlatGrid
      itemDimension={isTablet() === true ? 200 : 140}
      spacing={15}
      data={recentMovies} 
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (renderMovie(item))}
      />
      </View>
      </Loader>
      </View>

      );

}