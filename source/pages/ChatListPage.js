import React from 'react';
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import Item from '../components/ChatItem'
import firebase from 'firebase';
import firebaseConfig from '../config/FirebaseConfig';

import USER_INFO from "../components/UserInfo";

/* 파이버베이스 연결 */
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export default class ChatListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [[]]
        }
    }

    /* 파이어베이스로부터 성사된 매칭 데이터 로드 */
    componentDidMount() {
        // var query = firebase.database().ref('UsersInfo/' + USER_INFO.uid + '/CompletedMatching').orderByKey();
        // query.on('value', (snapshot) => {
        //     const data = snapshot.val();
        //     this.state.items.pop();
        //
        //     for (var x in data) {
        //         this.state.items.push([data[x].title, data[x].category, data[x].star, x])
        //     }
        // })

        // var query = firebase.database().ref('Messages').orderByKey().startAt('DCFnXVK2yOa3rneCeOe6ZMUuewt2').endAt('DCFnXVK2yOa3rneCeOe6ZMUuewt2\uf8ff')
        //
        // query.on('value', (snapshot) => {
        //     const data = snapshot.val();
        //     console.log(data)
        // })
        //
        //
        // var query2 = firebase.database().ref('Messages').orderByKey().endAt('DCFnXVK2yOa3rneCeOe6ZMUuewt2')
        //
        // query2.on('value', (snapshot) => {
        //     const data = snapshot.val();
        //     console.log(data)
        // })

        this.state.items.pop();


        var query = firebase.database().ref('Messages')

        query.on('value', (snapshot) => {
            const data = snapshot.val();
            for(var x in data) {
                if(USER_INFO.uid === x.substring(0, 28)){

                    var userQuery = firebase.database().ref('UsersInfo/'+x.substring(28,56))

                    userQuery.on('value',(snapshot)=>{
                        const userData = snapshot.val();

                        this.state.items.push([userData.name, userData.profileImage, x, data[x].lastText, data[x].lastTextTime])
                    })



                }
                else if(USER_INFO.uid === x.substring(28, 56)) {
                    var userQuery = firebase.database().ref('UsersInfo/'+x.substring(0,28))

                    userQuery.on('value',(snapshot)=>{
                        const userData = snapshot.val();

                        this.state.items.push([userData.name, userData.profileImage, x, data[x].lastText, data[x].lastTextTime])

                    })
                }
            }
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.toString()}
                    data={this.state.items}
                    renderItem={({ item }) => <Item data={item} />} />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems:'center'
    }
});
