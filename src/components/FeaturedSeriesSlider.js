import React, { useState, useEffect } from 'react';
import {ScrollView, View} from 'react-native';
import {getFeaturedSeries} from "../config/DataApp";
import {map} from 'lodash';
import Loader from './Loader';
import Heading from './Heading';
import FeaturedSerieCard from './FeaturedSerieCard';
import Strings from '../config/Strings';

export default function FeaturedSeriesSlider() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [featuredSeries, setfeaturedSeries] = useState([]);

  useEffect(() => {
    getFeaturedSeries().then((response) => {
        setfeaturedSeries(response);
        setIsLoaded(true);
    });
  }, []);

    return(

      <View>
      <Heading title={Strings.ST57} screenname="featuredseries"/>
      <Loader loaded={isLoaded} row={2} size={[125, 60]}>
      <ScrollView
          style={{width: '100%'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        {map(featuredSeries, (item, index) => (
        <FeaturedSerieCard key={index} item={item} />

          ))}
      </ScrollView>
      </Loader>
      </View>

      );

}



