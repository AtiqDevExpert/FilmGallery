import React, { useState, useEffect } from 'react';
import {ScrollView, View} from 'react-native';
import {getFeaturedMovies} from "../config/DataApp";
import {map} from 'lodash';
import Loader from './Loader';
import Heading from './Heading';
import FeaturedMovieCard from './FeaturedMovieCard';
import Strings from '../config/Strings';

export default function FeaturedMoviesSlider() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [featuredMovies, setfeaturedMovies] = useState([]);

  useEffect(() => {
    getFeaturedMovies().then((response) => {
        setIsLoaded(true);
        setfeaturedMovies(response);
    });
  }, []);

    return(

      <View>
      <Heading title={Strings.ST10} screenname="featuredmovies"/>
      <Loader loaded={isLoaded} row={2} size={[125, 60]}>
      <ScrollView
          style={{width: '100%'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        {map(featuredMovies, (item, index) => (
        <FeaturedMovieCard key={index} item={item} />

          ))}
      </ScrollView>
      </Loader>
      </View>

      );

}



