# 🎀 Sanrio & Snoopy Pastel Tetris ✨

파스텔 톤의 아기자기한 감성과 산리오 프렌즈 & 스누피 캐릭터가 함께하는 **HTML5 Canvas 웹 테트리스 게임**입니다.  
외부 라이브러리(Three.js, React 등) 없이 **순수 HTML5 Canvas + Web Audio API**만으로 구현된 Zero-Dependency 정적 웹 게임입니다.

---

## 🌟 주요 특징

* **🐶 스누피 & 산리오 인기 캐릭터 총출동**:
  * **스누피 (Snoopy)** & 피너츠(Peanuts) 테마 🐾
  * **폼폼푸린 (Pompompurin)** 🍮
  * **헬로키티 (Hello Kitty)** 🎀
  * **마이멜로디 (My Melody)** 🌸
  * **쿠로미 (Kuromi)** 💜
  * **시나모롤 (Cinnamoroll)** ☁️
  * **포차코 (Pochacco)** 🍀
* **💬 캐릭터별 리액션 말풍선 애니메이션**:
  * 라인 클리어 시(Single, Double, Triple, Tetris) 캐릭터마다 고유한 축하 멘트와 리액션 음성/효과음 재생.
* **🎨 5가지 감성 파스텔 테마**:
  * `🎀 산리오 드림` / `🐾 스누키 & 피너츠` / `💜 쿠로미 고딕` / `🍮 폼폼푸린 푸딩` / `☁️ 시나모롤 클라우드`
* **⚙️ 오리지널 규격 테트리스 물리**:
  * **SRS (Super Rotation System)** 회전 및 월킥(Wall Kick) 완벽 지원
  * **7-Bag 무작위 생성기** (공정한 블록 분배)
  * **홀드 (Hold)** 시스템 & **고스트 블록 (Ghost Block)** 착지 가이드
* **🎵 칩튠 Web Audio 신디사이저**:
  * 별도 음원 파일 없이 웹 브라우저 오실레이터로 실시간 합성되는 귀여운 효과음 및 BGM.
* **📱 모바일 & 태블릿 완벽 지원**:
  * 아이패드 및 스마트폰 터치 가상 조이패드 & 버튼 탑재.

---

## 🕹️ 조작법 (Controls)

| 키 | 동작 |
| :--- | :--- |
| `←` / `→` | 블록 좌우 이동 |
| `↓` | 소프트 드롭 (Soft Drop - 빠르게 내리기) |
| `Space` | **하드 드롭 (Hard Drop - 즉시 바닥 착지)** |
| `↑` / `X` | 시계 방향 회전 (CW Rotation) |
| `Z` | 반시계 방향 회전 (CCW Rotation) |
| `C` / `Shift` | **블록 보관 / 교체 (Hold)** |
| `P` / `Esc` | 게임 일시 정지 (Pause) |
| 모바일 / 태블릿 | 화면 하단 가상 터치 방향키 & 버튼 |

---

## 🌐 GitHub Pages 배포 링크

* **라이브 플레이 주소**: [https://newbieski.github.io/sanrio-tetris/](https://newbieski.github.io/sanrio-tetris/)
* **배포 설정 방법**:
  1. GitHub 저장소 > `Settings` > `Pages`
  2. **Source**: `Deploy from a branch` 선택
  3. **Branch**: `main` / `/(root)` 선택 후 **Save**

---

## 📚 상세 기술 설계 문서 (Architecture & Design)

게임의 전체 아키텍처, SRS 월킥 물리 알고리즘, 절차적 Web Audio 신디사이저, 인라인 벡터 SVG 렌더링, 모바일 반응형 뷰포트 설계에 관한 상세 기술 문서는 아래 경로에서 확인하실 수 있습니다:
👉 [docs/architecture_and_design.md](docs/architecture_and_design.md)
