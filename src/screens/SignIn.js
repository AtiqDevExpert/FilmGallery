import React, { useState } from 'react';
import { SafeAreaView, View, Alert, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import Styles from '../config/Styles';
import Strings from '../config/Strings';
import { signInApi, setUserData, setLogged } from "../config/DataApp";

export default function SignIn(props) {

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeScreen = (screen) => {
        props.navigation.navigate(screen);
    };

  const login = async () => {

    setLoading(true);
    
    if (email, password) {

        signInApi(email, password).then(response => {
              
              if (response != 'error' && response != 'incomplete') {

                setUserData(response);
                setLoading(false);
                setLogged(true);
                props.navigation.navigate('home');

              }else if(response === 'error'){

                setUserData([]);
                setLoading(false);
                setLogged(false);
                Alert.alert(Strings.ST21);

              }else if(response === 'incomplete'){
                setLoading(false);
                Alert.alert(Strings.ST22);
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
        <TextInput label={Strings.ST19} onChangeText={text => setPassword(text)} mode="outlined" secureTextEntry={true} style={Styles.AuthInput} />
        <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('forgot')}>
        <Text style={Styles.ForgotPass}>{Strings.ST50}</Text>
        </TouchableOpacity>
        <Button mode="contained" onPress={()=> login()} style={Styles.AuthButton} contentStyle={Styles.AuthButtonContent} labelStyle={Styles.AuthButtonLabel}>
        {!loading ? Strings.ST20 : Strings.ST61}
        </Button>

      <View style={Styles.AuthBottomContent}>
        <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('signup')}>
        <Text style={Styles.AuthBottomText}>
        {Strings.ST23} <Text style={{fontWeight: 'bold'}}>{Strings.ST24}</Text>
        </Text>
        </TouchableOpacity>
        </View>

        </View>
        </SafeAreaView>

        );
  }
