import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { size } from "lodash";
import {searchApi} from "../config/DataApp";
import { Text, Searchbar } from 'react-native-paper';
import Styles from '../config/Styles';
import Strings from '../config/Strings';
import SearchCard from '../components/SearchCard';
import { FlatGrid } from 'react-native-super-grid';
import {isTablet} from 'react-native-device-info';

export default function Search(props) {

  const { route } = props;
  const { string } = route.params;
  const [query, setQuery] = useState(string);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState('');

  useEffect(() => {

      searchRequest();

  }, []);

  const searchRequest = () => {

      if (size(query) >= 2) {

            searchApi(query, page).then((response) => {
              setResults(response);
              setTotal(response.length);
            });
      }

  }

  const renderItem = (item, index) => {
    return (
      <SearchCard item={item} key={index}/>
      );
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (

    <SafeAreaView>
    
    <Searchbar placeholder={Strings.ST28} autoCorrect={false} onIconPress={() => searchRequest()} onChangeText={(e) => setQuery(e)} style={Styles.SearchInput} inputStyle={Styles.SearchInputStyle} />
    
    <ScrollView>

        {size(query) >= 1 ? (<View style={{marginHorizontal: 15}}>
        <Text style={Styles.SearchTotal}>{Strings.ST26} {total ? total : '0'} {Strings.ST27} <Text>{query}</Text></Text>
        </View>): (<View></View>)}

      <View style={Styles.SearchScreen}>

        <FlatGrid
        itemDimension={isTablet() === true ? 200 : 140}
        spacing={15}
        data={results} 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (renderItem(item))}
        onEndReachedThreshold={0.4}
        onEndReached={handleLoadMore}
        />

        </View>
    </ScrollView>

    </SafeAreaView>

      );
}

