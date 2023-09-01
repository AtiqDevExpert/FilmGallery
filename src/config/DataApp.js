import ConfigApp from "./ConfigApp";
import AsyncStorage from '@react-native-community/async-storage';

const LIMIT_ITEMS = 6;
const RECENT_LIMIT = 10;
const FEATURED_LIMIT = 10;

////////////////////////////////// API Functions

export async function getFeaturedMovies(page){

  const url = !page ? `${ConfigApp.URL}json/data_movies.php?featured=1&page=1&limit=${FEATURED_LIMIT}&order=desc` : `${ConfigApp.URL}json/data_movies.php?featured=1&page=${page}&limit=${LIMIT_ITEMS}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllMovies(page){

  const url = `${ConfigApp.URL}json/data_movies.php?page=${page}&limit=${LIMIT_ITEMS}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getRecentMovies(){

	const url = `${ConfigApp.URL}json/data_movies.php?page=1&limit=${RECENT_LIMIT}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(id){

	const url = `${ConfigApp.URL}json/data_movies.php?id=${id}&limit=1`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieByGenre(id, page){

	const url = `${ConfigApp.URL}json/data_movies.php?genre=${id}&page=${page}&limit=${LIMIT_ITEMS}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getFeaturedSeries(page){

  const url = !page ? `${ConfigApp.URL}json/data_series.php?featured=1&page=1&limit=${FEATURED_LIMIT}&order=desc` : `${ConfigApp.URL}json/data_series.php?featured=1&page=${page}&limit=${LIMIT_ITEMS}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }

}

export async function getAllSeries(page){

  const url = `${ConfigApp.URL}json/data_series.php?page=${page}&limit=${LIMIT_ITEMS}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }

}

export async function getRecentSeries() {
  
  const url = `${ConfigApp.URL}json/data_series.php?page=1&limit=${RECENT_LIMIT}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getSerieById(id){

  const url = `${ConfigApp.URL}json/data_series.php?id=${id}&limit=1`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getSerieByGenre(id, page){

  const url = `${ConfigApp.URL}json/data_series.php?genre=${id}&page=${page}&limit=${LIMIT_ITEMS}&order=desc`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getEpisodesBySerie(id, page){

  const url = `${ConfigApp.URL}json/data_episodes.php?id=${id}&page=${page}&limit=${LIMIT_ITEMS}`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getEpisodeById(id){

  const url = `${ConfigApp.URL}json/data_episode.php?id=${id}`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenres(){

  const url = `${ConfigApp.URL}json/data_genres.php`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function searchApi(query, page){

	const url = `${ConfigApp.URL}json/data_search.php?query=${query}&page=${page}&limit=${LIMIT_ITEMS}`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getStrings(){

  const url = `${ConfigApp.URL}json/data_strings.php`;

  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    
  }
}

////////////////////////////////// Authentication 

export const checkUserApi = async (email) => {

	const url = `${ConfigApp.URL}json/data_check.php`;

    try {

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                user_email: email,

            })
        })
        
        const json = await resp.json();

        return json;
		
		}catch (e) {

          console.log('Error...', e.message);

      }
}

export const restPassApi = async (email) => {

	const url = `${ConfigApp.URL}json/data_forgot.php`;

    try {

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                user_email: email,

            })
        })
        
        const json = await resp.json();

        return json;
		
		}catch (e) {

          console.log('Error...', e.message);

      }
}

export const signInApi = async (email, password) => {

	const url = `${ConfigApp.URL}json/data_signin.php`;

    try {

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                user_email: email,
                user_password: password

            })
        })
        const json = await resp.json();

        return json;
		
		}catch (e) {

          console.log('Error...', e.message);

      }
}

export const signUpApi = async (name, email, password) => {

	const url = `${ConfigApp.URL}json/data_signup.php`;

    try {

        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                user_name: name,
                user_email: email,
                user_password: password

            })
        })
        const json = await resp.json();

        return json;
		
		}catch (e) {

          console.log('Error...', e.message);

      }
}

export const signOutApi = async () => {

	try {
		await AsyncStorage.removeItem("isLogged");
		await AsyncStorage.removeItem("userData");
	} catch (error) {
		console.log("Error", error);
	}

}

export const getLogged = async () => {
	try {
		const isLogged = await AsyncStorage.getItem("isLogged");
		return isLogged;
	} catch (error) {
		console.log("Error", error);

	}
}

export const setLogged = async (value) => {
	try {
		await AsyncStorage.setItem("isLogged", `${value}`);
	} catch (error) {
		console.log("Error", error);
	}

}

export const setUserData = async (user) => {

	try {
		await AsyncStorage.setItem("userData", JSON.stringify(user));
	} catch (error) {
		console.log("Error", error);
	}

}

export const getUserData = async () => {

	try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      return data;
	} catch (error) {
		console.log("Error", error);
	}
}

export const getGravatar = async (email) => {

	const url = `https://www.gravatar.com/avatar/${email}`;

    try {
    	
        return url;
		
		}catch (e) {

          console.log('Error...', e.message);

      }
}

////////////////////////////////// Favorites

export const setMovieBookmark = async (item, id) => {

  try {

  await AsyncStorage.getItem('moviesFav').then(response => {

    const res = JSON.parse(response);

    if (res !== null) {
      let data = res.find(e => e.id === res.id);
      if (data == null) {
        res.push(item);
        AsyncStorage.setItem('moviesFav', JSON.stringify(res));
      }
    } else {
      let data = [];
      data.push(item);
      AsyncStorage.setItem('moviesFav', JSON.stringify(data));

    }

  });

    return true;

  } catch (error) {
    console.log("Error", error);
  }

}

export const removeMovieBookmark = async (id) => {

  try {

     const data = await AsyncStorage.getItem('moviesFav').then(token => {
     const res = JSON.parse(token);

     return res.filter(e => e.id !== id);

  });

   await AsyncStorage.setItem('moviesFav', JSON.stringify(data));
   return true;
   
  } catch (error) {
    console.log("Error", error);
  }

}

export const getFavMovies = async () => {

  try {
      let items = await AsyncStorage.getItem("moviesFav");
      let data = JSON.parse(items);
      return data;
  } catch (error) {
    console.log("Error", error);
  }
}

export const setSerieBookmark = async (item, id) => {

  try {

  await AsyncStorage.getItem('seriesFav').then(response => {

    const res = JSON.parse(response);

    if (res !== null) {
      let data = res.find(e => e.id === res.id);
      if (data == null) {
        res.push(item);
        AsyncStorage.setItem('seriesFav', JSON.stringify(res));
      }
    } else {
      let data = [];
      data.push(item);
      AsyncStorage.setItem('seriesFav', JSON.stringify(data));

    }

  });

    return true;

  } catch (error) {
    console.log("Error", error);
  }

}

export const removeSerieBookmark = async (id) => {

  try {

     const data = await AsyncStorage.getItem('seriesFav').then(token => {
     const res = JSON.parse(token);

     return res.filter(e => e.id !== id);

  });

   await AsyncStorage.setItem('seriesFav', JSON.stringify(data));
   return true;
   
  } catch (error) {
    console.log("Error", error);
  }

}

export const getFavSeries = async () => {

  try {
      let items = await AsyncStorage.getItem("seriesFav");
      let data = JSON.parse(items);
      return data;
  } catch (error) {
    console.log("Error", error);
  }
}