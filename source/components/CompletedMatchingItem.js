import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {Avatar, Caption, Title} from "react-native-paper";

import firebaseConfig from '../config/FirebaseConfig';
import firebase from 'firebase';


import { Actions } from 'react-native-router-flux';

if (firebase.apps.length === 0)
    firebase.initializeApp(firebaseConfig);

//MatchingListPage에 사용되는 FlatList안의 내용을 채우는 함수
export default function ChatItem({data}) {
    return(
            <View style ={styles.listItem}>
                {/*사용자의 별점에 따라 사진을 다르게 표시해주는 부분 삼항연산자를 사용하였다.*/}
                {data[2] === 1 ?
                    <Image source={require('../Images/1star.png')}  style={{width:60, height:60,borderRadius:30,marginTop:20,marginRight:20}} />:data[2] === 2 ?
                    <Image source={require('../Images/2star.png')}  style={{width:60, height:60,borderRadius:30,marginTop:20,marginRight:20}} />:data[2] === 3 ?
                    <Image source={require('../Images/3star.png')}  style={{width:60, height:60,borderRadius:30,marginTop:20,marginRight:20}} />:data[2] === 4 ?
                    <Image source={require('../Images/4star.png')}  style={{width:60, height:60,borderRadius:30,marginTop:20,marginRight:20}} />:
                    <Image source={require('../Images/5star.png')}  style={{width:60, height:60,borderRadius:30,marginTop:20,marginRight:20}} />
                }
                <View style={{justifyContent: 'center',flex:1}}>
                    <Text style={{fontWeight:"bold"}}>{data[0]}</Text>
                    <Text style={{color:"#B4B4DC"}}>{data[1]}</Text>
                </View>
                <View style={{alignItems:"center",justifyContent: 'center',marginRight: 10}}>
                    <Text style={{color:"green"}}>{caltime(data[3])}</Text>
                </View>
            </View>
    )
}

// 매칭을 작성한 글로부터 시간을 받아와 현재 시점으로 몇일이 지났는지 변환하는 함수
function caltime(num){
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

