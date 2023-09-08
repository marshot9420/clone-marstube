# API 엔드포인트

- `/`: 홈

  - `/search`: 검색

- `/auth`: 사용자 인증

  - `/join`: 회원가입
  - `/login`: 로그인
  - `/logout`: 로그아웃
  - `/github`: 깃허브 로그인
  - `/github/oauth`: 깃허브 OAuth 콜백 URL
  - `/google`: 구글 로그인
  - `/google/oauth`: 구글 OAuth 콜백 URL
  - `/kakao`: 카카오 로그인
  - `/kakao/oauth`: 카카오 OAuth 콜백 URL

- `/users`: 사용자 관련

  - `/edit`: 사용자 정보 수정
  - `/change-password`: 비밀번호 변경

- `/videos`: 영상 관련
  - `/upload`: 영상 업로드
  - `/:id`: 영상 시청
  - `/:id/edit`: 특정 영상 편집
  - `/:id/delete`: 특정 영상 삭제
