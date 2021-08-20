import React from 'react';
import { StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import firebaseConfig from '../config/FirebaseConfig';
import MATCHING_INFO from '../components/MatchingInfo';

/* 파이어베이스 연결 */
if (firebase.apps.length === 0)
    firebase.initializeApp(firebaseConfig);

export default class MapPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            markers: []
        };
    }

    componentDidMount() {
        var query = firebase.database().ref('MatchingInfo').orderByKey();

        query.on('value', (snapshot) => {
            const data = snapshot.val();
            this.setState({ markers: Object.values(data) });
        })
    }

    /* InfoPage 이동 함수 */
    infoPage(title, email, category, money, content) {
        Actions.infoPage({ title: title, email: email, category: category, money: money, content: content });
    }

    render() {
        return (
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: MATCHING_INFO.latitude,
                    longitude: MATCHING_INFO.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }}>
                {
                    this.state.markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}

                            // 저장된 카테고리에 따라 이미지를 다르게 표시하는 부분 삼항연산자를 사용했다.
                            onPress={() => this.infoPage(marker.title, marker.email, marker.category, marker.money, marker.content)}>
                            {marker.category === "한식" ?
                                <Image
                                    source={require('../Images/KoreanFood.png')}
                                    style={{ width: 35, height: 35 }} /> : marker.category ==="분식" ?

                                <Image
                                    source={require('../Images/SchoolFood.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="카페, 디저트" ?

                                <Image
                                    source={require('../Images/Cafe.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="돈까스, 회, 일식" ?

                                <Image
                                    source={require('../Images/PorkCutlet.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="치킨" ?

                                <Image
                                    source={require('../Images/Chicken.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="피자" ?

                                <Image
                                    source={require('../Images/Pizza.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="양식" ?

                                <Image
                                    source={require('../Images/Steak.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="중식" ?

                                <Image
                                     source={require('../Images/ChineseFood.png')}
                                     style={{width: 35, height: 35}} /> : marker.category ==="족발, 보쌈" ?

                                <Image
                                    source={require('../Images/PigHocks.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="야식" ?

                                <Image
                                    source={require('../Images/NightFood.png')}
                                    style={{width: 35, height: 35}} /> : marker.category ==="찜, 탕" ?

                                <Image
                                    source={require('../Images/SteamedFood.png')}
                                    style={{width: 35, height: 35}} />:

                                <Image
                                    source={require('../Images/FastFood.png')}
                                    style={{width: 35, height: 35}} />
                            }
                        </Marker>

                    ))
                }
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
