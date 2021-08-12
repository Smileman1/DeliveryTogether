import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

export default firebaseConfig = {
    databaseURL: "https://deliverytogether-fdb-default-rtdb.firebaseio.com",
    apiKey: "AIzaSyDYkrAmoneTeSMEOsPx6m4Fy_VgPyqolak",
    authDomain: "deliverytogether-fdb.firebaseapp.com",
    projectId: "deliverytogether-fdb",
    storageBucket: "deliverytogether-fdb.appspot.com",
    messagingSenderId: "318412209859",
    appId: "1:318412209859:web:1657e53a3eb8ea6584ac76",
    measurementId: "G-G3G4SB2EV0"
};

// 아래부분은 db채팅 기능을 위해 추가하였습니다. 형 db로 바꾸실때는 위의 주석부분만 바꾸시면 문제없이 작동될것으로 생각해요
let app;
if(firebase.apps.length === 0){
    app=firebase.initializeApp(firebaseConfig);
}else{
    app=firebase.app()
}
const db=app.firestore();
const auth=firebase.auth();
export{db,auth};
