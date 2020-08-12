import React from 'react';
import { Text, Dimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const PORTRAIT = async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}
const LANDSCAPE = async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
}

export default class ChangeOrientation extends React.Component {
    constructor() {
        super();
        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        this.state = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });

    }

    render() {
        if (this.state.orientation === 'portrait') {
            ScreenOrientation.unlockAsync()

            return (
                <Text>Portrait</Text>
            );
        }
        else {
            return (
                <Text>Landscape</Text>
            );
        }

    }
}