import React from 'react';
import { StyleSheet, View } from 'react-native';

import { YellowBox } from 'react-native';
import LoadingPage from './pages/LoadingPage';
import MainRouter from './components/MainRouter';

YellowBox.ignoreWarnings(['YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.']);
YellowBox.ignoreWarnings(['Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']);
YellowBox.ignoreWarnings(['expo-permissions is now deprecated — the functionality has been moved to other expo packages that directly use these permissions (e.g. expo-location, expo-camera). The package will be removed in the upcoming releases.']);
export default class Main extends React.Component {
    state = {
        isLoading: true
    }
    render() {
        return (
            <View style={styles.container}>
                {(this.state.isLoading === true) && <LoadingPage />}
                {(this.state.isLoading !== true) && <MainRouter />}
            </View>

        )
    }

    async componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 11000);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
