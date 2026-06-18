# 🛡️ Lynk+ — FE (React Native · Expo)

해외여행 **중 **악성 **QR의 **위험으로부터 **사용자의 **안전한 **접속을 **돕는 **스마트 **어시스턴트 프로젝트의 프론트엔드 레포지토리입니다.

본 앱은 **Expo + React Native + Expo Router(파일 기반 라우팅)** 구조로 구성되어 있습니다.

---

## 기술 스택

| Category | Technology |
| --- | --- |
| **Frontend Framework** | React Native (Expo SDK 54) |
| **Routing** | Expo Router |
| **Language** | TypeScript |
| **State Management** | Context API, Zustand |
| **Server State** | TanStack Query |
| **Network Communication** | Axios |
| **UI Library** | React Native Paper |
| **Styling** | Styled Components |
| **Local Storage** | Expo Secure Store, AsyncStorage |
| **Build & Deployment** | Expo Dev Client, EAS Build |

---

## 📂 폴더 구조 (Folder Structure)

프로젝트의 주요 디렉토리 구조입니다.

```bash
├─app
│  │  index.tsx               # 앱 시작 및 폰트 로딩
│  │  ScanResultScreen.tsx    # 스캔 결과 화면 라우팅
│  │  WebViewScreen.tsx       # 웹 뷰 화면 라우팅, js 실행 제어
│  │  _layout.tsx             # 화면 라우팅
│  ├─(auth)/                  # 로그인 페이지 라우팅
│  └─(tabs)                   # Expo Router 기반 페이지 라우팅 (Tabs, Stacks)
│      │  emergency.tsx       # 긴급 연락처 화면 라우팅
│      │  index.tsx           # 홈 화면 라우팅
│      │  my.tsx              # 마이페이지 화면 라우팅
│      │  _layout.tsx         # 화면 라우팅
│      ├─history/             # 스캔 기록 화면 라우팅
│      └─scan/                # 카메라 스캔 화면 라우팅
├─assets                      # 이미지, 폰트 
├─components                  # 컴포넌트
│  │  AppText.tsx             # 폰트 적용 코드
│  │  EmergencyContact.tsx    # 긴급연락처 화면 코드
│  ├─Home/                    # 홈 화면 컴포넌트
│  ├─Login/                   # 로그인 화면 컴포넌트
│  ├─Scan/                    # 스캔 화면 컴포넌트. 카메라 촬영화면, 테스트용 화면
│  ├─ScanHistory/             # 스캔 기록 화면
│  ├─ScanResultFolder/        # 스캔 결과 화면 컴포넌트
│  ├─ui/                      # 공통 ui 컴포넌트(버튼, 카드 등)
│  └─WebView/                 # 웹 뷰 화면 컴포넌트
├─constants/                  # 공통 테마 정리
├─context/                    # 전역 상태 관리
├─data/                       # 스캔 기록 데이터 관리
└─util/                       # 필요한 기능 코드
        auth.ts               # 로그인 유효성 확인
        storage.ts            # AsyncStorage 관리
        timeAgo.ts            # 상대 시간 계산
        urlAnaylze.ts         # URL 분석 API 연동
        UrlValid.ts           # url 유효성 검증 코드
```

---

## How to Install

### 1. 레포지토리 클론

```bash
git clone https://github.com/Capstone-CanDo/frontend_re.git 
cd QTravel
```

### 2. 패키지 설치

```bash
npm install
```

---

## How to Build

### 앱 실행

```bash
npx expo start
```

Expo Dev Client를 통해 실행할 수 있습니다.

터미널 창에 나타난 qr을 안드로이드 핸드폰 카메라로 찍으면 어플리케이션이 실행됩니다.

---

## How to Test

앱 내 카메라를 통해 qr을 찍고 결과를 확인한다. (에뮬레이터의 경우 카메라를 사용할 수 없습니다.)

보안 브라우저를 열어 js 실행이 제어되는지 확인한다.

---

## License

This project is developed for an academic capstone course.

All rights reserved unless otherwise specified.

- **No commercial use** without explicit permission from the project team.
- **No redistribution** of source code or assets without permission.
- If you need to reuse any part of this repository (code, UI, images, icons), please contact the maintainers first.
