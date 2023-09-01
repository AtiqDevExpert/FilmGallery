import React, { useState } from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import Styles from '../config/Styles';
import Strings from '../config/Strings';
import { restPassApi } from "../config/DataApp";

export default function ForgotPass(props) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };

  const login = async () => {

    setLoading(true);

    if (email) {

        restPassApi(email).then(response => {
              
              if (response === 'success') {
                
              setLoading(false);

                Alert.alert(
                  Strings.ST53, Strings.ST54,
                  [
                    { text: 'OK', onPress: () => onChangeScreen('signin') }
                  ],
                  { cancelable: false }
                );
              }else if(response === 'email-not-exist'){

                setLoading(false);
                Alert.alert(Strings.ST52);

              }else if(response === 'incomplete'){

                setLoading(false);
                Alert.alert(Strings.ST22);

              }else{

                setLoading(false);
                Alert.alert(Strings.ST21);
              }

        });

      }else{
            setLoading(false);
            Alert.alert(Strings.ST22);
          }
      }

      return (

        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <FastImage source={require('../assets/logo.png')} resizeMode={"contain"} style={Styles.AuthLogo} />

        <View style={Styles.AuthContent}>

        <TextInput label={Strings.ST18} onChangeText={text => setEmail(text)} mode="outlined" autoCapitalize="none" style={Styles.AuthInput} />

        <Button mode="contained" onPress={()=> login()} style={Styles.AuthButton} contentStyle={Styles.AuthButtonContent} labelStyle={Styles.AuthButtonLabel}>
        {!loading ? Strings.ST20 : Strings.ST61}
        </Button>

        </View>
        </SafeAreaView>

        );
  }
