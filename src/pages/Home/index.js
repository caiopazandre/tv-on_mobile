import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, Text, View, NetInfo, Image } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import * as ScreenOrientation from 'expo-screen-orientation';
//import iptvlist from '../../stores/iptvlist.json';

const apiChannels = 'https://tv-on-api.rj.r.appspot.com/channels/search/portuguese';
const bannerIdHome = 'ca-app-pub-5924494372714654/8935735521';

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
  if (data.length != 0) {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 50 }}>
          {isLoading ? <ActivityIndicator /> : (
            <FlatList
              data={data}
              renderItem={({ item }) => <Button title={item.channel} image={require('../../assets/play.png')} onPress={() => navigation.navigate('Channel', { link: item.link })} />}
            />
          )}
        </View>
        <View style={styles.banner}>
          <Banner type="banner" id={bannerIdHome} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.containerWarning}>
          <Text style={styles.titleWarning}>Aviso</Text>
          <Image style={styles.imageWarning} source={require('../../assets/warning.png')} />
          <Text style={styles.textWarning}>Nenhum canal está disponível no momento, verifique sua conexão com a internet e se necessário reinicie o aplicativo.</Text>
        </View>
        <View style={styles.banner}>
          <Banner type="banner" id={bannerIdHome} />
        </View>
      </View>
    );
  }
}