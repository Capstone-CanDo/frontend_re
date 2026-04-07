# frontend\_re

expo 기반으로 다시 만든 프엔 레포

## 0406 진행상황 & 환경가이드

현재 BE 연동을 위한 로그인, 스캔 결과 연동과 스캔 기록 연동을 구현했습니다.

- 📚 npx expo install expo-secure-store 필요합니다. 자세한 내용은 9번 브랜치 확인 부탁드립니다.
- 🐞 (tabs)/_layout.tsx의 하단바가 ios 상에서 원하는 위치에서 더 뜨게 나오는 문제를 SafeAreaProvider 를 사용해서 수정했습니다. 다만 아직 하단바 네비게이션 메뉴가 정상적으로 나오지 않는 문제는 수정하지 않았습니다. 현재 제 안드로이드 기기 상에서는 정상적으로 나오지만, ios상에서 어떻게 나오는지 확인 부탁드립니다.
- ✨ 로그인 기능 구현했습니다. 현재 로그인 화면이 나오고 이메일과 비밀번호 입력은 가능하지만 실제로는 무엇을 입력해도 username: "testuser1", password: "testpass123"로 로그인 하게 됩니다. 아직 로그인 기능을 제대로 구현할 계획은 없으니 일단은 이대로 충분할 것 같습니다.
  - 로그인에 실패해도 다음 페이지로 넘어가는 버그가 있고 아직 자동 로그인 기능과 로그아웃 기능을 손보지 못했습니다. 이후 이 점 수정 예정입니다.
- ✨ 스캔 결과 BE 연동했습니다.
  - 아직 UI 수정을 못해서 추후 수정 예정입니다.
- ✨ 스캔 기록 BE 연동했습니다.
  - 기존에 Status를 사용해 "safe" | "malicious" | "suspicious" 분류해서 UI를 만들었는데 JSON 응답에는 is_phishing: "True" | "False"; 이렇게 와서 정상이거나 악성인 url이 위험 url로 뜨는 버그가 있습니다. 추후 ScanHistort.tsx 수정할 예정입니다.


## 0402 진행상황

현재 scanresult와 scanhistory가 BE 연동과 구조가 맞지 않는것을 수정했습니다. 현재 UI상 작동을 확인하기 위해 JSON을 위한 코드는 주석처리되어 있고, 하드코딩된 데이터가 대신 동작하고 있습니다.

<img width="340" height="770" alt="image" src="https://github.com/user-attachments/assets/ed49638e-86eb-443c-b37b-7e365d2bf92d" />
<img width="340" height="770" alt="image" src="https://github.com/user-attachments/assets/40ab5003-47ac-4c35-8a1a-ef888b181a81" />



추후 UI 수정을 하도록 하겠습니다

## 0330 진행상황\&환경가이드

app.json 에 react-native-vision-camera가 아직 안지워져서 확인 부탁드립니다.

rd /s /q node\_modules
del package-lock.json
npm install
npx expo start -c



추가로
npx expo install @react-native-async-storage/async-storage
확인 부탁드립니다.



1. 카메라 화면에서 QR 스캔 하면 그 결과를 저장하는 로직을 추가했습니다. url, 위험 단계, 날짜, 시간이 저장됩니다. 아직 위치와 위험도는 임의로 정해진 값으로 들어갑니다.

util 폴더 
scanMeta: url, 위험 단계, 날짜, 시간 받아주는 코드입니다. 추후 장소 정보 저장도 추가해야 합니다.
storage: AsyncStorage를 이용해서 url 스캔 로그 저장하고 불러오고 기록 삭제하는 코드

AsyncStorage 를 사용해서 앱 내의 데이터에 저장되는 구조라 껐다 켜도 여전히 저장되어 있습니다.
대신 기존에 하드코딩된 데이터는 나오지 않으므로 이 점 참고해 주시기 바랍니다.

2. QR 스캔 기록 데이터를 삭제하는 버튼을 ScanHistory 화면에 추가했습니다. 버튼을 누르고 난 후 다른 화면으로 이동하고 오면 삭제된 것이 반영됩니다. AsyncStorage는 기기 내의 데이터를 건드리는 구조라 커맨드로는 안되고 이 버튼으로만 가능합니다. 원래 버튼 누르면 바로 보이게 하려고 했는데 안되더라고요... 그런데 이거는 디버깅용이고 실제 화면에서는 안 쓸 거니까 그냥 뒀습니다.

3. 웹뷰를 띄우는 방식을 변경했습니다. 원래는 scanresult 화면에서 모달을 띄우는 형식이었는데 이렇게 하면 스캔 기록 화면에서 띄우는것도 어렵고 웹뷰 화면에서 뒤로 가기를 눌렀을때 같은 정보가 두번 저장되는 문제가 있어서. 라우팅 용 WebViewScreen.tsx 코드를 하나 만들어서 라우팅으로 렌더링되게 바꿨습니다.

4. app\\\_layout.tsx에서 headerShown: false로 설정했습니다.

## 0327 진행상황

스캔 결과화면, 스캔 기록 화면의 데이터 부분 코드에서 분리. 향후 스캔하면 기록에 추가되는 부분 추가할 예정

## 0326 진행상황 \& 환경가이드

일단 스캔 결과 화면 적당히 만들어뒀습니다.
앱 기동에 필요한 다른 자잘한 코드들 넣어뒀습니다.

카메라 expo go에서도 돌아가게 하고 다시 확인
-> 깃허브 반영해주시고
npx expo uninstall react-native-vision-camera
npx expo start -c
순으로 실행해주세요.

## 0324 진행상황 \& 환경 가이드

카메라 기능 추가했습니다. 현재 카메라로 QR 촬영 -> 결과 화면으로 이동 까지 구현한 상태입니다.

UI에서 검은색 반투명 테두리는 곡선 부분을 아직 구현을 못했습니다.

카메라에서 QR이 인식되는 범위 제한이 안되더라고요... 그래도 일단 피그마 프로토타입대로 구현했습니다.

json 파일 확인해주시고, install 다시 해주세요. 카메라 환경설정 부분이 ios에서도 되는지 한 번 확인해주세요.

파일 구조 변경이 있으니 확인해주세요.

## 0319 진행상황 \& 환경 가이드

폰트 프리텐다드로 스캔 결과 화면만 일단 통일했습니다.

import { theme } from "../../constants/index";

text속성에 fontFamily: theme.fontFamily.regular 추가해주세요.

asset/font 안에

Pretendard-Regular.ttf

Pretendard-Medium.ttf

Pretendard-Bold.ttf

이렇게 있어야 합니다. 파일 크기 때문에 깃허브에 올리지는 않고 알아서 넣어주세요.

constants\\index.ts 안의 colors, fontcolor 이 부분 확인해주시면 감사하겠습니다. 만약 색상을 바꿀 경우 통일을 쉽게 하기 위함이니 한 번 확인해주세요.

## 0307 진행상황 \& 환경 가이드

피그마 QR 스캔 페이지와 스캔 분석 화면. 아직 카메라는 연결 못함

package.json 확인. npm install로 다운로드 하세요.

버전 등을 확인해주시기 바랍니다.

먼저 npx create-expo-app QTravel 로 기본 앱 만든 후에

app 폴더는 원래 있던 내용 제거하고 깃허브 코드로 교체.

component 폴더에 있는 내용은 원래 있던 내용에 추가.

초기 코드, asset은 정리할 예정이지만 지금은 없애면 오류남

