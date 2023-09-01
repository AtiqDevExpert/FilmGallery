import React from 'react';
import { ScrollView, SafeAreaView} from 'react-native';
import RecentSeries from './RecentSeries';
import FeaturedSeriesSlider from './FeaturedSeriesSlider';
import SeriesGenres from './SeriesGenres';

export default function SeriesTab(props) {

  return (

  <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
  <SafeAreaView>
  <FeaturedSeriesSlider/>
    <SeriesGenres/>
    <RecentSeries/>
    </SafeAreaView>
    </ScrollView>

      );
}

