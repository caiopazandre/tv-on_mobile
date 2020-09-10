import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';

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
  return (
    <View style={styles.container}>
      <View>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            renderItem={({ item }) => <Button title={item.channel} image={require('../../assets/play.png')} onPress={() => navigation.navigate('Channel', { link: item.link })} />}
          />
        )}
      </View>
    </View>
  );
}