import React from 'react';
import { AdMobBanner } from 'expo-ads-admob';

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