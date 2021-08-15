import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Avatar, Caption, Title} from "react-native-paper";

import firebaseConfig from '../config/FirebaseConfig';
import firebase from 'firebase';

import { Actions } from 'react-native-router-flux';

if (firebase.apps.length === 0)
    firebase.initializeApp(firebaseConfig);


export default function ChatItem({data}) {
    return(
            <View style={styles.container}>
                <View style={styles.userInfoStyle}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ marginLeft: 20, justifyContent: 'center' }}>
                            <Title style={[styles.nameStyle,
                                {
                                    marginTop: 15,
                                    marginBottom: 5
                                }]}>{data[0]}</Title>
                            <Caption style={styles.emailStyle}>{data[2]}</Caption>
                        </View>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
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

