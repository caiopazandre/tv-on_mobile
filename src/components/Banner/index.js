import React from 'react';
import { AdMobBanner } from 'expo-ads-admob';
//import styles from './styles';

const bannerIdHome = 'ca-app-pub-5924494372714654/8935735521';
const bannerIdChannel = 'ca-app-pub-5924494372714654/6352205729';

export default class Banner extends React.Component {
    bannerError(err){
        console.log(err)
    }
    render() {
        return (
            <AdMobBanner
                bannerSize={this.props.type}
                adUnitID={this.props.id}
                servePersonalizedAds
                onDidFailToReceiveAdWithError={(err) => this.bannerError}
            />
        );
    }
}