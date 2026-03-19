# frontend\_re

expo 기반으로 다시 만든 프엔 레포



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





