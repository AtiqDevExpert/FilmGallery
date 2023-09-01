import React from 'react';
import { View, StatusBar } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import ColorsApp from '../config/ColorsApp';

export default function Player(props) {

  const { route } = props;
  const { navigation } = props;
  const { url, title } = route.params;

  return (
    <View style={{ flex: 1 }}>
    <StatusBar hidden={true} />
    <VideoPlayer
    source={{uri: url}}
    navigator={navigation}
    disableVolume={true}
    seekColor={ColorsApp.PRIMARY}
    title={title}
    />
    </View>
    );
}
