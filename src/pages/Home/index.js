import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Banner from '../../components/Banner';

const apiChannels = 'https://tv-on-api.rj.r.appspot.com/channels/search/portuguese';
const bannerIdHome = 'ca-app-pub-5924494372714654/8935735521';
const bannerIdChannel = 'ca-app-pub-5924494372714654/6352205729';

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
        <Banner type="banner" id={bannerIdChannel} />
      </View >
    </View>
  );
}