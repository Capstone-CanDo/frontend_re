### frontend_re
expo 기반으로 다시 만든 프엔 레포

##0326 진행상황 & 환경가이드
일단 스캔 결과 화면 적당히 만들어뒀습니다.
앱 기동에 필요한 다른 자잘한 코드들 넣어뒀습니다.

카메라 expo go에서도 돌아가게 하고 다시 확인 
-> 깃허브 반영해주시고
npx expo uninstall react-native-vision-camera
npx expo start -c
순으로 실행해주세요.

## 0324 진행상황 & 환경 가이드
카메라 기능 추가했습니다. 현재 카메라로 QR 촬영 -> 결과 화면으로 이동 까지 구현한 상태입니다.

UI에서 검은색 반투명 테두리는 곡선 부분을 아직 구현을 못했습니다.

카메라에서 QR이 인식되는 범위 제한이 안되더라고요... 그래도 일단 피그마 프로토타입대로 구현했습니다.

json 파일 확인해주시고, install 다시 해주세요. 카메라 환경설정 부분이 ios에서도 되는지 한 번 확인해주세요.

파일 구조 변경이 있으니 확인해주세요.

## 0319 진행상황 & 환경 가이드
폰트 프리텐다드로 스캔 결과 화면만 일단 통일했습니다.

import { theme } from "../../constants/index";

text속성에 fontFamily: theme.fontFamily.regular 추가해주세요.

asset/font 안에

Pretendard-Regular.ttf

Pretendard-Medium.ttf

Pretendard-Bold.ttf

이렇게 있어야 합니다. 파일 크기 때문에 깃허브에 올리지는 않고 알아서 넣어주세요.

constants\index.ts 안의 colors, fontcolor 이 부분 확인해주시면 감사하겠습니다. 만약 색상을 바꿀 경우 통일을 쉽게 하기 위함이니 한 번 확인해주세요.

## 0307 진행상황 & 환경 가이드
피그마 QR 스캔 페이지와 스캔 분석 화면. 아직 카메라는 연결 못함

package.json 확인. npm install로 다운로드 하세요.

버전 등을 확인해주시기 바랍니다.

먼저 npx create-expo-app QTravel 로 기본 앱 만든 후에

app 폴더는 원래 있던 내용 제거하고 깃허브 코드로 교체.

component 폴더에 있는 내용은 원래 있던 내용에 추가.

초기 코드, asset은 정리할 예정이지만 지금은 없애면 오류남