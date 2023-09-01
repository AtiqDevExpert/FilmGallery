import React, {useEffect} from 'react';
import { StatusBar, LogBox} from 'react-native';
import { Provider as PaperProvider, DarkTheme as DarkThemePaper } from 'react-native-paper';
import { NavigationContainer, DarkTheme as DarkThemeNav } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import ColorsApp from './src/config/ColorsApp';
import SplashScreen from 'react-native-splash-screen';
import { checkUserApi, getUserData, setUserData, getLogged, setLogged } from "./src/config/DataApp";

DarkThemePaper.colors.primary = ColorsApp.PRIMARY;
DarkThemePaper.colors.placeholder = '#959595';
DarkThemePaper.colors.accent = ColorsApp.PRIMARY;
DarkThemeNav.colors.background = ColorsApp.BACKGROUND;
DarkThemeNav.colors.card = ColorsApp.HEADER;

LogBox.ignoreAllLogs();

const App = () => {

  useEffect(() => {

    checkUser().then(response => {
          hideSplash();
      });
    
  }, [])

const hideSplash = () => {

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
}

  const checkUser = async () => {

    try {

       await getUserData().then(resp => {

       if (resp.length >= 1 && resp != null) {

        const email = resp[0]['user_email'];

        checkUserApi(email).then(response => {

          if (response != 'error') {

            setUserData(response).then(response => {
              setLogged(true);
            });
            

          }else if(response === 'error'){

            setLogged(false);

          }

        });

      }else{
        setLogged(false);
      }

    })

      } catch (error) {
        console.log("Error", error);
      }

    }

    return (
      <>
      <PaperProvider theme={DarkThemePaper}>
      <StatusBar translucent backgroundColor="transparent" barStyle={"light-content"}/>
      <NavigationContainer theme={DarkThemeNav}>
      <Navigation/>
      </NavigationContainer>
      </PaperProvider>
      </>
      );
    };

    export default App;