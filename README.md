# DeliveryTogether
<img width="400" alt="DeliveryTogether_Logo" src="https://user-images.githubusercontent.com/71224672/131435784-d797e9e5-2f77-43bc-a1f8-8decff4336b1.png" alt="image-20210830221721743" style="zoom:50%;">
사용자의 현재 위치를 기반으로 주변에 같이 배달시킬 사람을 찾아주는 서비스입니다.<br>
팀 프로젝트로 진행하였으며, 사용자의 접근성을 높이기 위해 웹이 아닌 웹앱으로 개발하였습니다. expo-location을 통해 사용자의 위치정보를 불러오며, 별도의 회원가입이 필요한 게 아닌 google 아이디를 통해 로그인이 가능할 수 있게 설계하였습니다. 사용자들 간의 채팅 및 구글에서 받아온 프로필 정보 수정 등 편의성 기능을 추가 하였습니다. 해당 웹앱은 android, ios에서 모두 정상 작동합니다.

## 🍚 프로젝트 사용 기술
- [React-native](https://reactnative.dev)
- [React-Redux](https://react-redux.js.org/)
- [Expo](https://expo.dev)
- [Firebase](https://firebase.google.com/)
- [Google-Cloud](https://console.cloud.google.com/?hl=ko&_ga=2.77549265.5140705.1630379894-826656968.1617737960&_gac=1.90576616.1630390580.Cj0KCQjwg7KJBhDyARIsAHrAXaERcEli1PU00kSdHJP_n5HwslnFjxzU6IPBDcqcz4bD0kIACkHF9UQaAmduEALw_wcB)
- [MapView](https://docs.expo.dev/versions/latest/sdk/map-view/)
- [Babel](https://babeljs.io/)
- [expo-location](https://docs.expo.dev/versions/latest/sdk/location/)
- [expo-permissions](https://docs.expo.dev/versions/v38.0.0/sdk/permissions/)
- [StyleSheet](https://developer.mozilla.org/ko/docs/Web/API/StyleSheet)
- [Intellij IDEA](https://www.jetbrains.com/ko-kr/idea)

## 🍚 프로젝트 포커스
🔍 andoroid, ios 두 운영체제 모두에서 작동될 수 있게 설계하였습니다.<br>
🔍 github에 작업사항을 올릴때 comment를 필수로 남겼습니다.<br>
🔍 firebase API를 팀원들과 공유할 때 보안에 노력하였습니다.<br>
🔍 어떠한 기술을 사용할 때는 그 기술을 사용하는 이유에 대하여 이해하고 사용하였습니다.<br>
🔍 사전에 정의한 데이터베이스 구조를 지키면서 진행하기 위해 노력하였습니다.<br>
🔍 다양한 입력값을 토대로 테스트를 진행하여 결함을 줄이고자 노력하였습니다.<br>
🔍 데이터베이스 접근을 최소화 하도록 노력하였습니다.<br>
🔍 모든 팀원들이 동일한 환경에서 작업할 수 있도록 노력하였습니다.<br>


## 🍚 화면 구성도

![image](https://user-images.githubusercontent.com/71224672/131435764-3589917f-14f6-4200-b100-0110252ff21b.png)

## 🍚 프로젝트 버전
- [DeliveryTogether v1.0.0] : 프로젝트 생성
- [DeliveryTogether v1.0.1] : 로딩 화면 추가
- [DeliveryTogether v1.0.2] : 지도 구현
- [DeliveryTogether v1.0.3] : 매칭 등록 구현 (마커 추가)
- [DeliveryTogether v1.0.4] : firebase 연동
- [DeliveryTogether v1.0.5] : firebase 로그인 구현
- [DeliveryTogether v1.0.6] : 마커 이벤트 추가
- [DeliveryTogether v1.0.7] : 채팅 기능 추가
- [DeliveryTogether v1.0.8] : 마이페이지 추가
- [DeliveryTogether v2.0.1] : Firebase 정책변경 / gitignore 정책추가
- [DeliveryTogether v2.0.2] : 프로필 수정 페이지 추가
- [DeliveryTogether v2.0.3] : 세션 유지 추가
- [DeliveryTogether v2.0.4] : 프로필 수정 페이지 완료
- [DeliveryTogether v2.0.5] : 완료된 게시물 완료
- [DeliveryTogether v2.0.6] : 마커 이미지 추가
- [DeliveryTogether v2.0.7] : 채팅 리스트 추가
- [DeliveryTogether v2.0.8] : 게시글 수정 및 채팅 리스트 개선

## 🍚 시작하기
### Prerequisites
- npm
>```
>npm install npm@latest -g
>```

### Installation
1. Get a free API Key at [Firebase API](https://firebase.google.com/docs/projects/api-keys)
2. Get a free android, ios key at [Google Cloud](https://console.cloud.google.com/home/dashboard?project=deliverytogether-fdb&_ga=2.181757795.5140705.1630379894-826656968.1617737960&_gac=1.22410569.1630379921.Cj0KCQjwg7KJBhDyARIsAHrAXaH6I8vIlJzMWEmZdf1GnFqcx9188eOzIe88P0iESWFcMnn95rbiVUUaAm00EALw_wcB&pli=1)
3. Clone the repo
>```
>git clone https://github.com/Smileman1/DeliveryTogether.git
>```
4. Install NPM packages
>```
>npm install
>```
5. Start
>```
>npm start
>```




## :phone: 연락처
Name - 김덕중<br>
email - ejrwnd1103@naver.com
