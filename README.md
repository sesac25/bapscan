# BAP-SCAN (밥스캔)

> **2025년 새싹 해커톤 (SeSAC Hackathon) - AI 서비스 개발**
>
> **AI 메뉴판 상세 번역 및 맞춤 추천 서비스**

[![bapscan-logo.png](https://i.postimg.cc/kGCR1PXD/bapscan-Typo.png)](https://postimg.cc/FdPKzqSQ)
<br>

## 👥 Team. 강동에번쩍

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/mg-seo">
        <img src="https://github.com/mg-seo.png" width="100px;" alt=""/>
        <br />
        <sub><b>서무경</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/astrataraxia">
        <img src="https://github.com/astrataraxia.png" width="100px;" alt=""/>
        <br />
        <sub><b>김승용</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/blueconusmer">
        <img src="https://github.com/blueconusmer.png" width="100px;" alt=""/>
        <br />
        <sub><b>김유민</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/VsLee-enf">
        <img src="https://github.com/VsLee-enf.png" width="100px;" alt=""/>
        <br />
        <sub><b>이상희</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jldn8">
        <img src="https://github.com/jldn8.png" width="100px;" alt=""/>
        <br />
        <sub><b>전지우</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">팀장·백엔드</td>
    <td align="center">백엔드</td>
    <td align="center">AI파이프라인</td>
    <td align="center">AI파이프라인</td>
    <td align="center">클라이언트</td>
  </tr>
</table>

<br>

## 📝 프로젝트 소개 (Project Overview)
> "Bibimbap"을 "Mixed Rice"로만 이해하고 넘어가기엔 아쉽지 않나요?

BAP-SCAN은 한국을 방문한 외국인 관광객들이  
**언어 장벽 + 정보 부족** 때문에 겪는 식사 주문의 어려움을 줄여주는 **AI 메뉴판 큐레이터**입니다.

- 단순 번역을 넘어서,
- 사용자의 **식습관(비건, 알레르기, 선호도)** 을 반영하고,
- **한국 음식의 문화적 맥락과 발음**까지 함께 전달합니다.

카메라로 메뉴판을 찍으면,  
**번역 + 재료 설명 + 개인 맞춤 추천 + 주문 문장까지 한 번에** 해결해 줍니다.

---

## 💡 제안 배경 및 목적
- **언어 장벽 해소**
  - 연간 1,400만 명 이상 방문하는 외국인 관광객에게  
    한글 메뉴판은 여전히 큰 허들입니다.

- **개인화 부족 해결**
  - 기존 번역 앱은 "텍스트 번역"에 머물러 있음  
    (예: `육회` ≠ `Six times`)

- **안전한 식사 선택**
  - 비건, 알레르기 정보가 메뉴판에 드러나지 않아  
    *“먹어도 되는지”* 항상 불안한 상황을 줄이고자 합니다.

- **문화적 경험 강화**
  - `비빔밥` → 억지 영어 번역이 아니라  
    **로마자 표기(Bibimbap) + 문화/재료 설명**을 제공해  
    한국 음식을 “그대로” 경험할 수 있게 돕습니다.

---


## ✨ 주요 기능 (Key Features)

### 1. 초개인화 맞춤 추천 (Hyper-Personalized Recommendation)

- 사용자가 설정한 식습관(비건, 알레르기, 매운맛 등)과  
  메뉴판 정보를 **AI가 함께 고려**하여 메뉴를 분류합니다.
- 각 메뉴에 대해 **추천 / 주의 / 비추천** 태그와 이유를 함께 제공합니다.

### 2. 문화적 맥락을 담은 번역

- 예시  
  - `비빔밥` → `Bibimbap` (로마자 표기)  
    + 재료/맛/먹는 방법 등에 대한 설명
- 한국어 메뉴명을 억지로 영어로 바꾸지 않고,  
  **원어 발음 중심의 표기 + 문화적 설명**을 제공합니다.

### 3. AI 기반 올인원 분석

- 메뉴판을 촬영하면,
  - **OCR(문자 인식) + 번역 + 재료 분석 + 개인화 추천**을  
    한 번의 요청으로 처리합니다.
- Google Cloud Vision + Gemini 2.5 Flash/Flash-Lite를 활용하여  
  **빠른 응답 속도**를 목표로 합니다.

### 4. 스마트 주문 지원 (음성 주문)

- 사용자가 선택한 메뉴 조합을 바탕으로
  - 점원에게 바로 말할 수 있는 **한국어 주문 문장**을 생성합니다.
- 앱에서 바로 **TTS(기기 내 음성 엔진)** 로 읽어주어  
  한국어가 서툴러도 자연스럽게 주문할 수 있습니다.

### 5. 환율 적용 가격 안내

- 메뉴 가격이 원화(KRW)로만 적혀 있어도,
  - 사용자가 선택한 통화(USD, JPY, EUR 등)로  
    **실시간 환율을 반영한 가격**을 함께 보여줍니다.
- 한국 돈 감각이 없는 사용자도 직관적으로 가격을 이해할 수 있습니다.

---

## 🛠 기술 스택 및 아키텍처 (Tech Stack & Architecture)

### 시스템 아키텍처 개요

BAP-SCAN은 **Mobile App → Python FastAPI 서버 → Google AI & OCR & 환율 API** 구조로 동작합니다.

- **Mobile App**
  - 메뉴판 촬영, 갤러리 업로드
  - 식습관/취향 프리셋 관리
  - 분석 결과 및 가격 표시
  - 음성 주문(TTS) 실행

- **Backend (Python FastAPI)**
  - 이미지 리사이즈 및 전처리
  - Google Cloud Vision을 통한 OCR 수행
  - Gemini 2.5 Flash/Flash-Lite를 이용한 번역/설명/추천 생성
  - 환율 API를 이용해 KRW → 사용자 선택 통화 변환

- **AI & 외부 서비스**
  - Google Cloud Vision API (OCR)
  - Google Gemini 2.5 Flash / Flash-Lite (LLM)
  - 공용 환율 API (exchangerate.host 등)

### 기술 스택 상세

| 분야             | 기술 스택                                                                 | 목적 및 활용                                                                                 |
|------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Mobile App       | React Native (Expo), TypeScript, React Query, AsyncStorage, `react-native-tts` | 크로스 플랫폼 앱 개발, 상태 관리, 식습관 프리셋 로컬 저장, 기기 내 TTS 사용                       |
| Camera & Gallery | `expo-camera`, `expo-image-picker`                                       | 메뉴판 촬영 및 갤러리 이미지 선택                                                            |
| Backend API      | Python 3.11, **FastAPI**, `uvicorn`                                      | 고성능 비동기 API 서버, 이미지/텍스트 처리, AI API 호출                                      |
| AI / OCR         | Google Cloud Vision API, Gemini 2.5 Flash / Flash-Lite                   | 메뉴판 OCR, 메뉴 설명 생성, 추천/주의/비추천 태깅, 주문 문장 생성                            |
| Currency & Pricing | Exchange Rate API (ex. exchangerate.host) + 인메모리 캐시              | KRW → USD/JPY/EUR 등 환율 변환, 잦은 외부 호출 방지를 위한 캐싱                              |
| Infra & Deploy   | Docker, AWS App Runner / (또는 GCP Cloud Run)                           | 백엔드 컨테이너화 및 배포, min_instances 설정로 콜드 스타트 최소화                           |

---

## 📁 프로젝트 폴더 구조 (Project Folder Structure)

> 실제 구현 시 팀 상황에 따라 변동 가능.  
> 아래 구조는 **Mobile(App)** 과 **Backend(API)** 를 하나의 리포지토리에서 관리하는 기준 예시입니다.

```bash
/bapscan
├── app/                         # React Native (Expo) 모바일 앱
│   ├── assets/
│   │   ├── fonts/               # 커스텀 폰트
│   │   └── images/              # 로고, 아이콘, 플레이스홀더 이미지
│   ├── components/
│   │   ├── common/              # 공통 UI 컴포넌트 (버튼, 헤더 등)
│   │   ├── menu/                # 메뉴판 분석 결과 목록/상세 컴포넌트
│   │   └── preference/          # 식습관/취향 설정 폼 컴포넌트
│   ├── constants/               # 색상, 스타일, 프롬프트 템플릿 등 상수
│   │   └── index.ts
│   ├── hooks/
│   │   ├── useCamera.ts         # 카메라 접근 및 이미지 처리 훅
│   │   ├── useApi.ts            # FastAPI 백엔드 호출 훅
│   │   └── usePreferences.ts    # 로컬 식습관/취향 프리셋 관리 훅
│   ├── navigation/              # 네비게이션 설정 (스택, 탭 등)
│   ├── screens/
│   │   ├── HomeScreen.tsx       # 메인 화면
│   │   ├── ScanScreen.tsx       # 메뉴판 촬영/선택 화면
│   │   ├── ResultScreen.tsx     # AI 분석 결과 + 가격 화면
│   │   └── PreferenceScreen.tsx # 식습관/취향 설정 화면
│   ├── services/
│   │   ├── api.ts               # 백엔드 API 클라이언트
│   │   ├── ttsService.ts        # TTS 래퍼 (react-native-tts)
│   │   └── storageService.ts    # AsyncStorage 래퍼
│   ├── App.tsx                  # 메인 앱 엔트리
│   ├── app.json                 # Expo 설정
│   └── package.json
│
├── backend/                     # Python FastAPI 백엔드
│   ├── app/
│   │   ├── main.py              # FastAPI 엔트리 포인트
│   │   ├── api/
│   │   │   └── v1/
│   │   │       └── menu.py      # /analyze-menu 엔드포인트 등
│   │   ├── core/
│   │   │   └── config.py        # 환경변수, API 키 설정
│   │   ├── models/
│   │   │   └── schemas.py       # 요청/응답 Pydantic 스키마 정의
│   │   └── services/
│   │       ├── vision_service.py   # Vision OCR 호출 로직
│   │       ├── gemini_service.py   # Gemini 호출 및 프롬프트 구성
│   │       └── fx_service.py       # 환율 API 호출 및 캐싱
│   ├── requirements.txt         # 백엔드 파이썬 의존성
│   └── Dockerfile               # 백엔드 컨테이너 빌드 설정
│
├── docs/                        # 기획서, 와이어프레임, 발표 자료 등
│   ├── bapscan-logo.png
│   ├── architecture-diagram.png
│   └── ...
│
└── README.md
```

---

## 🔄 서비스 흐름 (Service Flow)

### STEP 1. 취향/식습관 설정

- 사용자는 다음 항목들을 설정해 **프리셋**으로 저장할 수 있습니다.
  - 비건 여부 (Vegan / Vegetarian / None)
  - 알레르기 유발 식품 (땅콩, 갑각류, 유제품 등)
  - 선호/비선호 재료 (예: 내장, 어패류 등)
  - 매운맛 허용 범위 (안 매운 것만 / 보통 / 매운 것 선호 등)
- 이 정보는 앱 내 로컬 스토리지(AsyncStorage)에 저장되어  
  이후 메뉴판 분석 시 자동으로 불러와 활용됩니다.


### STEP 2. 메뉴판 촬영 & 통화 선택

- 사용자는 식당에서:
  - 메뉴판을 카메라로 촬영하거나
  - 이미 촬영한 메뉴판을 갤러리에서 선택합니다.
- 동시에, 가격을 확인하고 싶은 통화(예: USD, JPY, EUR)를 선택합니다.


### STEP 3. 분석 요청 (App → Backend)

- 앱은 다음 정보를 한 번에 FastAPI 서버의 `/analyze-menu`로 전송합니다.
  - 메뉴판 이미지(여러 장)
  - 사용자의 식습관/취향 프리셋
  - 선택한 통화 코드 (예: `USD`)


### STEP 4. OCR & AI 분석 + 환율 적용 (Backend)

1. **이미지 전처리**
   - 서버에서 이미지를 적절한 해상도로 리사이즈하여  
     업로드/처리 속도를 optim화합니다.

2. **메뉴판 OCR (Google Cloud Vision API)**
   - 메뉴명, 설명, 가격 등 텍스트를 추출합니다.

3. **AI 분석 (Gemini 2.5 Flash / Flash-Lite)**
   - Vision OCR 결과 + 사용자 식습관/취향 정보를 하나의 프롬프트로 구성합니다.
   - Gemini 모델이 JSON 형식으로 다음 정보를 생성합니다.
     - 메뉴별:
       - 한글 이름, 로마자 표기
       - 영어 설명 (재료, 맛, 조리 방식 등)
       - 추천 / 주의 / 비추천 태그 + 이유
       - 원화 가격 (`price_krw`)
     - 전체:
       - 점원에게 말할 수 있는 한국어 주문 문장 예시 (`order_sentence_ko`)

4. **환율 적용**
   - 백엔드에서 환율 API를 통해  
     KRW → 선택 통화(USD, JPY, EUR 등) 환율을 조회합니다.
   - 동일한 통화쌍에 대해서는 일정 시간 동안 인메모리 캐시를 사용하여  
     외부 API 호출 횟수와 지연 시간을 줄입니다.
   - 각 메뉴의 원화 가격에 환율을 곱해
     - `price_krw`
     - `price_converted`
     - `target_currency`  
       필드를 함께 구성합니다.

5. **최종 응답 예시**

```json
    {
      "menus": [
        {
          "name_kr": "비빔밥",
          "name_romaji": "Bibimbap",
          "description_en": "Rice bowl with mixed vegetables, beef, and spicy sauce.",
          "price_krw": 9000,
          "price_converted": 7.1,
          "target_currency": "USD",
          "tag": "recommended",
          "reasons": "No major allergens for your profile. Medium spiciness.",
          "spiciness_level": "medium"
        }
      ],
      "order_sentence_ko": "여기 비빔밥 하나랑 불고기 하나 주세요.",
      "currency": {
        "base": "KRW",
        "target": "USD",
        "fx_rate": 0.00079
      }
    }
```

### STEP 5. 결과 표시 & 음성 주문 (App)

- 앱은 각 메뉴에 대해:
  - **원화 가격 + 선택 통화 가격**을 동시에 보여주며
  - 추천 / 주의 / 비추천을 색상/아이콘으로 구분해 시각적으로 표시합니다.
- 사용자가 주문할 메뉴를 선택하면,
  - `order_sentence_ko`를 **기기 내 TTS(`react-native-tts`)**로 재생해  
    바로 점원에게 들려줄 수 있습니다.

---

## 🎨 화면 구성 (UI/UX)

[![babscan-service.png](https://i.postimg.cc/N0hs7701/babscan-service.png)](https://postimg.cc/bZTfqnkJ)

---


## 🚀 기대 효과

### 1) 사회·문화적 효과
- **안전한 식사 환경 제공**  
  - 알레르기·비건·종교적 식단 등을 고려한 메뉴 추천으로,  
    외국인 관광객이 “먹어도 되는지”에 대한 불안을 크게 줄여줍니다.
- **한국 음식에 대한 올바른 이해 확산**  
  - 단순 번역이 아닌 로마자 표기와 문화·재료 설명을 함께 제공하여  
    K-Food의 고유한 이름과 스토리가 그대로 전달되도록 돕습니다.
- **문화 교류 경험 강화**  
  - 관광객이 메뉴의 배경과 특징을 이해한 상태에서 주문하게 되어  
    단순 ‘끼니 해결’이 아니라 한국 음식 문화 자체를 체험하는 계기가 됩니다.

### 2) 경제적 효과
- **주문 장벽 완화에 따른 매출 증대**  
  - 메뉴를 제대로 이해하지 못해 ‘안전한 메뉴만 반복 주문’하던 패턴에서 벗어나,  
    다양한 메뉴 선택을 유도하여 객단가 및 매출 상승에 기여합니다.
- **외국인 재방문 및 긍정 리뷰 유도**  
  - 주문 실수·알레르기 사고를 줄이고 만족도를 높여  
    재방문과 리뷰 플랫폼 상의 긍정적인 평가를 기대할 수 있습니다.
- **K-Food 브랜드 가치 향상**  
  - 한식당이 “외국인 친화적인 스마트 메뉴판”을 갖추게 되면서  
    한국 음식 전반에 대한 신뢰도와 브랜드 이미지가 함께 상승합니다.

### 3) 서비스·기술적 가치
- **현장 운영 부담 경감**  
  - 직원이 모든 메뉴를 영어로 일일이 설명할 필요가 줄어들어  
    피크 타임에도 응대 품질을 일정 수준 이상 유지할 수 있습니다.
- **확장성 있는 플랫폼 기반 확보**  
  - 메뉴판만 교체하면 다른 식당·다른 언어권으로 쉽게 확장 가능하여  
    향후 프랜차이즈·관광지·푸드코트 등 다양한 B2B 시나리오로 발전시킬 수 있습니다.



