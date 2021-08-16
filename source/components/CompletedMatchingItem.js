import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Avatar, Caption, Title} from "react-native-paper";

import firebaseConfig from '../config/FirebaseConfig';
import firebase from 'firebase';


import { Actions } from 'react-native-router-flux';

if (firebase.apps.length === 0)
    firebase.initializeApp(firebaseConfig);


export default function ChatItem({data}) {
    return(
            <View style ={styles.listItem}>
                <Image source={require('../Images/5star.png')}  style={{width:60, height:60,borderRadius:30,marginTop:20,marginRight:20}} />
                <View style={{justifyContent: 'center',flex:1}}>
                    <Text style={{fontWeight:"bold"}}>{data[0]}</Text>
                    <Text style={{color:"#B4B4DC"}}>{data[1]}</Text>
                </View>
                <View style={{alignItems:"center",justifyContent: 'center',marginRight: 10}}>
                    <Text style={{color:"green"}}>{test(data[3])}</Text>
                </View>
            </View>
    )
}


function test(num){
    var nowtime = Date.now()
    nowtime = Math.floor(nowtime/8.64e+7)
    num = Math.floor(num/8.64e+7)
    var timeLeft = nowtime - num
    if (timeLeft===0){
        return ("오늘")
    }else {
        return (String(timeLeft) + "일전")
    }
}
const styles = StyleSheet.create({
    listItem: {
        flexDirection : 'row',
        backgroundColor: 'white',
        marginBottom: 10,
        height: 100,
        width: '90%',
        marginLeft: '5%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    userInfoStyle: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    nameStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

