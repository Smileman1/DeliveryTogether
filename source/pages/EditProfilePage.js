import React from 'react';
import {StyleSheet, View, TouchableOpacity, ImageBackground, TextInput, Text, SafeAreaView} from 'react-native';

import { Actions } from 'react-native-router-flux';
import USER_INFO from "../components/UserInfo";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from "react-native-vector-icons/FontAwesome";

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import firebase from "firebase";


// 사용자 프로필을 수정하는 페이지
export default class EditProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            inputText: "",
            name:USER_INFO.name,
            url:USER_INFO.photoURL,
            email:USER_INFO.email,
            phoneNumber:USER_INFO.phoneNumber,
        };
    }

    //이름과, 프로필 정보를 USER_INFO에서 Firebase에 있는 데이터로 업데이트 시켜주는 부분
    componentDidMount() {
        var query = firebase.database().ref('UsersInfo').orderByKey();

        query.on('value', (snapshot) => {
            const data = snapshot.val();
            this.setState({ name: data[USER_INFO.uid].name });
            this.setState({ url: data[USER_INFO.uid].profileImage });
        })
    }

    //Actions를 이용해 MyPage로 돌아가는 부분
    MyPage() {
        Actions.pop();
    }

    //프로필 수정버튼을 눌렀을 때 실행되는 함수 파이어 베이스에 저장된 유저정보가 바뀐다.
    Edit_Profile(){
        firebase.database().ref('UsersInfo/'+USER_INFO.uid).update(
            {
                name: this.state.inputText,
                profileImage: this.state.url

            })
        Actions.pop();
    }
    //사용자가 프로필사진을 누르면 실행되는 함수, 사용자의 갤러리에 접근하여 사진을 받아온다.
    _pickImage = async () => {
        const {status_roll} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });
        if (!result.cancelled) {
            this.setState({url: result.uri});
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>{'\n\n'}</Text>
                <View style={{margin: 20}}>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={this._pickImage}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ImageBackground
                                source={{uri: this.state.url}}
                                style={{height: 100, width: 100}}
                                imageStyle={{borderRadius: 15}}
                                >
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Icon name="camera" size={35} color="#fff" style={{
                                         opacity: 0.7,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         borderWidth: 1,
                                         borderColor: '#fff',
                                         borderRadius: 10,
                                        }}/>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                        <Text style={{marginTop: 10,fontSize: 18, fontWeight: 'bold'}}>{this.state.name}</Text>
                    </View>

                    <View>
                        <View style={styles.action}>
                            <FontAwesome name="user-o" size={20}/>
                            <TextInput
                                placeholder="  닉네임"
                                placeholderTextColor="#666666"
                                autoCorrect={false}
                                style={styles.textInput}
                                onChangeText={(text) => {this.setState({inputText: text})}}
                            />
                        </View>

                        {/*추가적으로 바꿀 내용이 생길수도 있을 가능성을 염두하여 남겨두었다.*/}
                        {/*<View style={styles.action}>*/}
                        {/*    <FontAwesome name="phone" size={20}/>*/}
                        {/*    <TextInput*/}
                        {/*        placeholder="  Phone"*/}
                        {/*        placeholderTextColor="#666666"*/}
                        {/*        autoCorrect={false}*/}
                        {/*        style={styles.textInput}*/}
                        {/*    />*/}
                        {/*</View>*/}

                        {/*<View style={styles.action}>*/}
                        {/*    <FontAwesome name="envelope-o" size={20}/>*/}
                        {/*    <TextInput*/}
                        {/*        placeholder="  Email"*/}
                        {/*        placeholderTextColor="#666666"*/}
                        {/*        autoCorrect={false}*/}
                        {/*        style={styles.textInput}*/}
                        {/*    />*/}
                        {/*</View>*/}
                    </View>

                    <View>
                        <TouchableOpacity style={styles.commandButton} onPress={this.Edit_Profile.bind(this)}>
                            <Text style={styles.panelButtonTitle}>수정</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.commandButton} onPress={this.MyPage.bind(this)}>
                            <Text style={styles.panelButtonTitle}>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS ==='ios' ? 0: -12,
        paddingTop: 10,
        paddingLeft: 20,
        color: '#05375a'
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelHeader: {
        alignItems: 'center',
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },

    aaa: {
        flex:1
    },

    bbb: {
        flex: 2
    }

});
