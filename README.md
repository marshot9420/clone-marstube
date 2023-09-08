# MARSTUBE

- 유튜브 클론코딩

<h1 align="center">MARSTUBE</h1>

<br>

<p align="center">
    <a href="#" target="_blank"><img src="./markdown/images/marstube.png" /></a>
</p>

<br><br>

<h2 id="tech-stack">⚒ Tech Stack ⚒</h2>

<br>

#### ✅ Language

[![JavaScript](https://img.shields.io/badge/JavaScript-333?style=flat-square&logo=JavaScript&logoColor=F7DF1E&labelColor=323330)](#)

#### ✅ Backend

<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>

#### ✅ Code Style

[![ESLint](https://img.shields.io/badge/eslint-333?style=flat-square&logo=eslint&logoColor=white&labelColor=3A33D1)](#)
[![Prettier](https://img.shields.io/badge/prettier-333?style=flat-square&logo=prettier&logoColor=F7BA3E&labelColor=1A2C34)](#)

#### ✅ Other Libraries

[![GIT](https://img.shields.io/badge/GIT-333?style=flat-square&logo=git&logoColor=white&labelColor=E44C30)](#)

<br><br><br>

<h2 id="start">▶ 시작하기</h2>

<br>

**프로젝트 설치**

```bash
git clone https://github.com/marshot9420/clone-marstube
```

<br>

**환경변수 설정**

> `.env.development` 파일에 환경변수를 넣어<br> > **루트 디렉토리**에 위치시켜야 애플리케이션이 정상적으로 동작합니다.

<br>

**템플릿 파일**

👉 [.env.template](.env.template)

**환경변수 설명**

|       키        |            설명            |                                                    예시                                                     |
| :-------------: | :------------------------: | :---------------------------------------------------------------------------------------------------------: |
| `COOKIE_SECRET` |       쿠키 시크릿 키       |                                                                                                             |
|    `DB_URL`     |          DB 주소           |                                     mongodb://127.0.0.1:27017/marstube                                      |
|   `GH_CLIENT`   | 깃허브 OAuth 클라이언트 키 |                       [깃허브 문서 참조](https://docs.github.com/ko/apps/oauth-apps)                        |
|   `GH_SECRET`   |   깃허브 OAuth 시크릿 키   |                       [깃허브 문서 참조](https://docs.github.com/ko/apps/oauth-apps)                        |
| `GOOGLE_CLIENT` |  구글 OAuth 클라이언트 키  | [구글 문서 참조](https://cloud.google.com/apigee/docs/api-platform/security/oauth/oauth-introduction?hl=ko) |
| `GOOGLE_SECRET` |    구글 OAuth 시크릿 키    | [구글 문서 참조](https://cloud.google.com/apigee/docs/api-platform/security/oauth/oauth-introduction?hl=ko) |
| `KAKAO_CLIENT`  | 카카오 OAuth 클라이언트 키 |         [카카오 문서 참조](https://developers.kakao.com/docs/latest/ko/getting-started/app#app-key)         |
| `KAKAO_SECRET`  |   카카오 OAuth 시크릿 키   |                       [카카오 문서 참조](https://docs.github.com/ko/apps/oauth-apps)                        |
|  `AWS_SECRET`   |       AWS 시크릿 키        |                                                                                                             |

<br>

**패키지 설치 및 실행**

```bash
npm install            # package.json dependencies 설치
yarn start:dev  # 개발 모드로 실행
```

<br><br>

<h2 id="start">▶ 참고하기</h2>

<br>

**프로젝트 요구사항**

<br>

👉 [요구사항 명세서](./markdown/RQ/RQ.md)

👉 [기술적 요구사항 명세서](./markdown/RQ/TECHRQ.md)
