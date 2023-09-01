import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import Home from '../screens/Home';
import About from '../screens/About';
import Search from '../screens/Search';
import Movies from '../screens/Movies';
import Terms from '../screens/Terms';
import Profile from '../screens/Profile';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
import MovieDetails from '../screens/MovieDetails';
import MoviesByGenre from '../screens/MoviesByGenre';
import FeaturedMovies from '../screens/FeaturedMovies';
import MoviesGenres from '../screens/MoviesGenres';
import Episodes from '../screens/Episodes';
import Series from '../screens/Series';
import SerieDetails from '../screens/SerieDetails';
import SeriesByGenre from '../screens/SeriesByGenre';
import FeaturedSeries from '../screens/FeaturedSeries';
import SeriesGenres from '../screens/SeriesGenres';
import Player from '../screens/Player';
import Favorites from '../screens/Favorites';
import ColorsApp from '../config/ColorsApp';
import Strings from '../config/Strings';
import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();
const screenHeight = Math.round(Dimensions.get('window').height);

export default function StackNavigation(props){

	const {navigation} = props;

  	const onSearch=() => {
      navigation.navigate('search', { string: '' });    
	};

	const navigatorOptions = {
		headerStyle: {
			backgroundColor: ColorsApp.PRIMARY,
			shadowColor: 'transparent',
			elevation: 0,
			shadowOpacity: 0
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			fontSize: RFValue(19, screenHeight),
		},
		headerTitleAlign: 'center'
	}

// ******************************** Buttons


const buttonLeft = () => {
	return (
		<IconButton icon="menu" size={RFValue(30, screenHeight)} onPress={() => navigation.openDrawer()}/>
		)
};

const buttonBack = () => {
	return (
		<IconButton icon="arrow-left" size={RFValue(30, screenHeight)} onPress={() => navigation.goBack()}/>
		)
};

const buttonSearch = () => {
	return (
		<IconButton icon="magnify" size={RFValue(30, screenHeight)} onPress={() => onSearch()}/>
		)
};


return (
	<Stack.Navigator screenOptions={navigatorOptions}>
	<Stack.Screen name="home" component={Home} options={{title: Strings.ST0, headerLeft: () => buttonLeft()}} />
	<Stack.Screen name="about" component={About} options={{title: Strings.ST6, headerStyle: { backgroundColor: 'transparent'}, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="terms" component={Terms} options={{title: Strings.ST49, headerStyle: { backgroundColor: 'transparent'}, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="search" component={Search} options={{title: Strings.ST8, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="profile" component={Profile} options={{title: null, headerTransparent: true, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="favorites" component={Favorites} options={{title: Strings.ST4, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="movies" component={Movies} options={{title: Strings.ST2, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="moviesgenres" component={MoviesGenres} options={{title: Strings.ST12, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="seriesgenres" component={SeriesGenres} options={{title: Strings.ST12, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="featuredmovies" component={FeaturedMovies} options={{title: Strings.ST10, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="moviesbygenre" component={MoviesByGenre} options={{title: null, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="moviedetails" component={MovieDetails} options={({ navigation }) => ({title: null, headerTransparent: true, headerLeft: () => buttonBack()})} />
	<Stack.Screen name="signin" component={SignIn} options={{title: Strings.ST16, headerTransparent: true, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="signup" component={SignUp} options={{title: Strings.ST17, headerTransparent: true, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="forgot" component={ForgotPass} options={{title: Strings.ST51, headerTransparent: true, headerLeft: () => buttonBack()}} />
	<Stack.Screen name="player" component={Player} options={{headerShown: false}} />
	<Stack.Screen name="series" component={Series} options={{title: Strings.ST3, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="seriesbygenre" component={SeriesByGenre} options={{title: null, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="seriedetails" component={SerieDetails} options={({ navigation }) => ({title: null, headerTransparent: true, headerLeft: () => buttonBack()})} />
	<Stack.Screen name="featuredseries" component={FeaturedSeries} options={{title: Strings.ST57, headerLeft: () => buttonBack(), headerRight: () => buttonSearch()}} />
	<Stack.Screen name="episodes" component={Episodes} options={{title: Strings.ST59, headerLeft: () => buttonBack()}} />

	</Stack.Navigator>
	)
}