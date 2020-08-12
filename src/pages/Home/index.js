import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import * as ScreenOrientation from 'expo-screen-orientation';

const bannerIdHome = 'ca-app-pub-5924494372714654/8935735521';
const apiChannels = 'https://tv-on-api.rj.r.appspot.com/channels/search/portuguese';

export default function Home({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiChannels)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  ScreenOrientation.unlockAsync()

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 50 }}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            renderItem={({ item }) => <Button title={item.channel} image={require('../../assets/play.png')} onPress={() => navigation.navigate('Channel', { link: item.link })} />}
          />
        )}
        <Text style={{textAlign: 'center', top: '5%'}}>No ads have been loaded so far.</Text>
      </View>
      <View style={styles.banner}>
        <Banner type="banner" id={bannerIdHome} />
      </View>
    </View>
  );
}