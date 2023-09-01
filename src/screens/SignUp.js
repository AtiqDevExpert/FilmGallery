import React, { useState } from 'react';
import { SafeAreaView, View, Alert, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button, Checkbox } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import Styles from '../config/Styles';
import Strings from '../config/Strings';
import { signUpApi } from "../config/DataApp";
import ColorsApp from '../config/ColorsApp';

export default function SignUp(props) {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);

  const onChangeScreen = (screen) => {
      props.navigation.navigate(screen);
  };

const login = async () => {

    setLoading(true);

  if (name, email, password, checked != false) {

      signUpApi(name, email, password).then(response => {
            
            if (response === 'success') {

              setLoading(false);
              props.navigation.navigate('signin');

            }else if(response === 'exist'){

              setLoading(false);
              Alert.alert(Strings.ST46);

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

      <TextInput label={Strings.ST45} onChangeText={text => setName(text)} mode="outlined" style={Styles.AuthInput} />
      <TextInput label={Strings.ST18} onChangeText={text => setEmail(text)} mode="outlined" autoCapitalize="none" style={Styles.AuthInput} />
      <TextInput label={Strings.ST19} onChangeText={text => setPassword(text)} mode="outlined" secureTextEntry={true} style={Styles.AuthInput} />
      <View style={{justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
      <Checkbox color="white" status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
      <Button mode="text" color={ColorsApp.BACKGROUND} labelStyle={Styles.AuthCheckBoxLabel} contentStyle={Styles.AuthCheckBoxContent} onPress={() => { setChecked(!checked); }}>{Strings.ST48}</Button>
      </View>
      <Button mode="contained" onPress={()=> login()} style={Styles.AuthButton} contentStyle={Styles.AuthButtonContent} labelStyle={Styles.AuthButtonLabel}>
        {!loading ? Strings.ST20 : Strings.ST61}
      </Button>

      <View style={Styles.AuthBottomContent}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('signin')}>
      <Text style={Styles.AuthBottomText}>
      {Strings.ST47} <Text style={{fontWeight: 'bold'}}>{Strings.ST29}</Text>
      </Text>
      </TouchableOpacity>
      </View>

      </View>
      </SafeAreaView>

      );
}
