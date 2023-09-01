import React from 'react';
import { ScrollView, SafeAreaView} from 'react-native';
import RecentMovies from './RecentMovies';
import FeaturedMoviesSlider from './FeaturedMoviesSlider';
import MoviesGenres from './MoviesGenres';

export default function MoviesTab() {

  return (

  <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
  <SafeAreaView>
  <FeaturedMoviesSlider/>
    <MoviesGenres/>
    <RecentMovies/>
    </SafeAreaView>
    </ScrollView>

      );
}

