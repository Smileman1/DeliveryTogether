
/*매칭 완료된 게시글을 보여주는 페이지 보이는건 FlatList를 사용하며, 각각의 리스트들은 ../components/CompleteMatchingItem 을 가져와서 사용한다.*/

import React from 'react';
import {FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import Item from '../components/CompletedMatchingItem'
import firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';

import { Actions } from 'react-native-router-flux';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default class MatchingListPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chat : [["일번","이번","삼번","사번"],["일번","이번","삼번","사번"]]
        }
    }


    render() {
        return (
            <SafeAreaView>

                    <SafeAreaView style={styles.topBar}>
                        <SafeAreaView style={styles.aaa}>

                        </SafeAreaView>
                        <SafeAreaView style={styles.bbb}>
                            <Text style={styles.text2}>등록 게시물</Text>
                        </SafeAreaView>

                        <TouchableOpacity style={styles.ccc} onPress={()=>{Actions.pop()}}>
                        <SafeAreaView style={styles.aaa}>
                                <SafeAreaView >
                                    <Icon name='caret-back-outline'  size={10} color='#000' />
                                </SafeAreaView>
                                <SafeAreaView >
                                    <Text style={styles.text}>뒤로가기</Text>
                                </SafeAreaView>
                        </SafeAreaView>
                        </TouchableOpacity>

                    </SafeAreaView>
                <FlatList
                    keyExtractor={item => item.toString()}
                    data={this.state.chat}
                    renderItem={({item}) => <Item data={item}/>}
                />
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar:{
        backgroundColor:'gray',
        height: 60,
        flexDirection: 'row',
    },
    text:{
        fontSize: 10,
    },
    aaa:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',

        flex: 1
    },
    bbb:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    ccc:{
        flexDirection: 'row',
        flex: 1
    },
    text2:{
      fontSize: 40,
    }
});
