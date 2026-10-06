# jkf87 프로젝트 모음

AI 에이전트(Claude Code·Codex·OpenClaw) 도구, 한글(HWP) 문서 자동화, 한국어 글쓰기, 연구 재현, 강의 실습 자료를 만들어 공개하고 있어요. 별점과 설명은 GitHub에서 매주 자동으로 다시 가져와요.

## 운영 중인 사이트

- [Claude Code Mods Guide](https://mods.guide) — Claude Code mod 비공식 가이드 (6개 언어, mod 1,700여 개 디렉터리) ([소스](https://github.com/jkf87/mod-guide))

## Claude Code·Codex 도구

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [ide-mod](https://github.com/jkf87/ide-mod) | Claude Code IDE pane mod: agent board + file tree + tabbed viewer | 0 |
| [mod-guide](https://github.com/jkf87/mod-guide) · [사이트](https://mods.guide) | Unofficial community guide to Claude Code mods (function hooks) in 6 languages, with a searchable mod directory | 0 |
| [jev-cc](https://github.com/jkf87/jev-cc) | Jev(TypeSafe)가 요청을 먼저 판정하고 필요한 작업만 알맞은 Claude 모델의 claude -p로 넘기는 로컬 라우터 · Claude Code skill | 0 |
| [jev-codex](https://github.com/jkf87/jev-codex) | Jev-first local model router and Codex skill: choose a suitable model, then execute once. | 0 |
| [gjc-agy-skill](https://github.com/jkf87/gjc-agy-skill) | GJC(가재코드) 스킬 — Antigravity CLI(agy) 연동: 비전/OCR, 이미지 생성, print 모드 레시피. 실측 기반 함정 문서 포함 | 15 |
| [antigravity-usage](https://github.com/jkf87/antigravity-usage) | Google Antigravity IDE & CLI 실시간 모델 쿼터(/usage) 조회 스킬 | 1 |
| [deck-loop](https://github.com/jkf87/deck-loop) | 정부 보고 PPT 스타일 슬라이드 제작 루프: 원고→pptxgenjs 조판→글자폭 실측→LibreOffice 렌더 계측→멱등 게이트 (Claude Code skill) | 0 |
| [paper-loop](https://github.com/jkf87/paper-loop) | Paper Loop: 리뷰가 실험을 재설계하는 자기참조 AI-for-Science 하네스 (Claude Code 기반 Whisper LoRA 사례, 코드·로그·리뷰·프롬프트 전량 공개) | 1 |
| [taste-profile-landing](https://github.com/jkf87/taste-profile-landing) | Self-contained Codex skill for turning taste references into production landing pages | 0 |
| [storybook-taste-archive](https://github.com/jkf87/storybook-taste-archive) | A Storybook reference system for collecting taste and turning it into reusable design rules. | 0 |
| [app-inventor-aia-loop-skill](https://github.com/jkf87/app-inventor-aia-loop-skill) | Officially grounded Codex skill for building, repairing, and validating MIT App Inventor AIA projects | 1 |
| [sky-chrome-screenshot-skill](https://github.com/jkf87/sky-chrome-screenshot-skill) | Agent Skill for controlling real Chrome with node_repl and @oai/sky and returning actual screenshots | 1 |
| [remotion-skill](https://github.com/jkf87/remotion-skill) | Remotion best practices skill for AI agents | 1 |
| [aaicon](https://github.com/jkf87/aaicon) | Claude Code skill for AAICon 1-page Korean conference abstract .docx — with optional Codex-based figure generation | 0 |

## OpenClaw

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [ohmyclaw](https://github.com/jkf87/ohmyclaw) | OpenClaw Plan→Work→Review workflow engine with model routing | 60 |
| [openclaw-kakao](https://github.com/jkf87/openclaw-kakao) | kmsg Skill for openclaw - KakaoTalk 메시지 자동화 스킬 | 19 |
| [openclaw-codex-image-gen](https://github.com/jkf87/openclaw-codex-image-gen) | OpenClaw plugin for Codex CLI image generation ($imagegen) | 15 |
| [openclaw-session-router](https://github.com/jkf87/openclaw-session-router) | OpenClaw dashboard session router — manual + Jev-judged auto routing of messages to agent sessions (MIT) | 0 |
| [openclaw-claude-session-bridge](https://github.com/jkf87/openclaw-claude-session-bridge) | TypeScript CLI/library for maintaining durable Claude Code ACP sessions through OpenClaw session primitives | 1 |
| [memora-openclaw](https://github.com/jkf87/memora-openclaw) | Structured long-term memory for OpenClaw — Memora cue-index retrieval with GLM, Ollama BGE-M3, and local ChromaDB | 0 |
| [clawdog](https://github.com/jkf87/clawdog) | 🐕 OpenClaw gateway watchdog — monitors, auto-repairs, and reports via Telegram | 1 |
| [rtk-setup-skill](https://github.com/jkf87/rtk-setup-skill) | RTK(Rust Token Killer) setup skill for OpenClaw - enforces token-saving commands via AGENTS.md | 5 |
| [openclaw-mlx-setup](https://github.com/jkf87/openclaw-mlx-setup) | One-click setup for running local LLMs (MLX) on Apple Silicon Mac with OpenClaw | 4 |
| [gateway-wsl-autostart](https://github.com/jkf87/gateway-wsl-autostart) | Configure reliable auto-start for OpenClaw Gateway on Windows + WSL2 (systemd user service setup) | 0 |
| [openclaw-patch](https://github.com/jkf87/openclaw-patch) | Pre-setup patches for OpenClaw Windows node (port conflict + WSL TLS certs) | 0 |
| [insta-cardnews-skill](https://github.com/jkf87/insta-cardnews-skill) | OpenClaw skill for blog link to Instagram cardnews workflows | 1 |
| [paper-workflow](https://github.com/jkf87/paper-workflow) | Academic paper workflow skill for OpenClaw: Zotero citations + Overleaf (olcli) + GitHub sync | 0 |
| [travel-price-comparison-skill](https://github.com/jkf87/travel-price-comparison-skill) | OpenClaw/Codex skill for robust travel price comparison | 0 |
| [threads-toolkit-skill](https://github.com/jkf87/threads-toolkit-skill) | OpenClaw skill for Threads posting, image handling, and token refresh | 0 |
| [threads-scraper-skill](https://github.com/jkf87/threads-scraper-skill) | OpenClaw skill: scrape public Threads posts with text, images, metadata. No login required. | 0 |
| [threads-uploader-skill](https://github.com/jkf87/threads-uploader-skill) | OpenClaw skill for publishing 3-part Threads posts with root-image support and rehost fallback | 0 |

## 한글(HWP·HWPX)·오피스 문서

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [hwp-mcp](https://github.com/jkf87/hwp-mcp) | mcp for handling hwp | 268 |
| [hwpx-skill](https://github.com/jkf87/hwpx-skill) | AI 에이전트용 HWPX(.hwpx) 문서 생성 스킬 - 한컴오피스 한글 문서를 마크다운/텍스트/URL에서 자동 생성 | 273 |
| [hwp2hwpx-python-refactor](https://github.com/jkf87/hwp2hwpx-python-refactor) | Pure Python HWP to HWPX converter focused on Hancom compatibility and rendering fidelity | 4 |
| [lecture-ppt-generator](https://github.com/jkf87/lecture-ppt-generator) | Korean lecture storyboard → production PPTX. AI agent skill with html2pptx pipeline, 40 icons, CJK overflow fix. | 2 |
| [class-loop](https://github.com/jkf87/class-loop) | Codex skill for creating Korean class PPTX and HWPX lesson materials from video and teaching content | 3 |
| [character-deck-reviser](https://github.com/jkf87/character-deck-reviser) | Codex skill for creating and revising editable character PowerPoint decks with reproducible QA | 0 |
| [cardnews-maker-skill](https://github.com/jkf87/cardnews-maker-skill) | AI 에이전트 팀 기반 카드뉴스 자동 제작 스킬 (Claude Code Skill) | 0 |
| [folder-organizer-skill](https://github.com/jkf87/folder-organizer-skill) | 확장자 기반 범용 폴더 자동 정리 에이전트 스킬 — 중복 감지·넘버링·평탄화·자동 매핑 (Windows PowerShell) | 0 |

## 한국어 글쓰기·자막

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [noslop-ko](https://github.com/jkf87/noslop-ko) | AI티는 빼는 게 아니라 안 쓰는 것 — 한국어 안티슬롭 스킬 (예방 우선 + 2층 검문 게이트). stop-slop·no-ai-slop·unslop·humanizer·im-not-ai 5개 레포 창조적 파괴 | 2 |
| [nobamtee](https://github.com/jkf87/nobamtee) | 한국어 'AI 밤티' 제거기 — 패턴 사전 없이 보이스 캡슐 한 개로 윤문하는 단일 에이전트 하네스 (voice-capsule engine) | 1 |
| [srt-translator](https://github.com/jkf87/srt-translator) | Claude skill: Translate Korean SRT subtitles into 17 languages in parallel | 0 |
| [subtitle-encoder](https://github.com/jkf87/subtitle-encoder) | 마크다운 트랜스크립트를 비디오에 유튜브 스타일 자막으로 인코딩하는 CLI 도구 | 0 |

## 연구·평가·재현

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [jev-rlcd-replication](https://github.com/jkf87/jev-rlcd-replication) | Just Ask Jev (arXiv 2609.29429) 재현 — 저자 코드·데이터로 5개 벤치마크 1,155건 실행, AUROC 절대차 중앙값 0.0036 | 0 |
| [korean-decision-benchmark](https://github.com/jkf87/korean-decision-benchmark) | Reproducible Colab benchmark of SemIf, Decider, Laya and TypeSafe Jev on Korean hate speech; pinned models, isolated environments, MIT code. | 0 |
| [gnomon](https://github.com/jkf87/gnomon) | Rubric-first evaluation for AI agent loops: Python harness (OpenClaw integration) + TypeScript Backward Design gate engine (works with any agent loop) | 3 |
| [tide](https://github.com/jkf87/tide) | TIDE — a pattern for letting an LLM agent get better at noticing over time. Detection-pattern extraction idea file (EN/KO). | 2 |
| [korean-handwriting-ocr-benchmark](https://github.com/jkf87/korean-handwriting-ocr-benchmark) | Korean elementary student handwriting OCR benchmark dataset (CER 4.3%, 95.7% accuracy) | 1 |
| [coding-harness-review](https://github.com/jkf87/coding-harness-review) | Comparative Evaluation of AI Coding Harness Tools: From Answer Generation to Failure Management | 0 |
| [llm-memory-benchmark-survey](https://github.com/jkf87/llm-memory-benchmark-survey) | LLM Agent Memory Performance: Benchmarks, Architecture Comparison, and Evaluation Infrastructure | 0 |
| [agent-harness-survey](https://github.com/jkf87/agent-harness-survey) | Survey: Agent Harness Engineering - LLM Agent Execution Infrastructure | 0 |
| [text2entity-survey](https://github.com/jkf87/text2entity-survey) | Survey: Text-to-Entity Extraction and Entity Resolution Challenges | 0 |

## 강의·실습 자료

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [jev-handson](https://github.com/jkf87/jev-handson) | Jev 특강 실습 코드(1~3강): TypeSafe Jev를 Claude Code·Codex·OpenClaw에 붙이는 스킬·훅·라우터·활용 예제 | 4 |
| [claude-code-handson](https://github.com/jkf87/claude-code-handson) | 한국원자력연구원(KAERI) Claude Code 마스터 클래스 실습 자료 (4차시) | 0 |

## 브라우저·웹 자동화

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [jev-ultrafast-naver](https://github.com/jkf87/jev-ultrafast-naver) | Jev Ultrafast fork: Naver Flights mobile browser agent driven by Korean goals (TypeSafe Jev + GLM) | 0 |
| [court-auction-scraper](https://github.com/jkf87/court-auction-scraper) | 법원경매정보 자동 검색 AI 스킬 v2 — 브라우저 크래시 해결, Claude Code/OpenClaw/Antigravity 3-플랫폼 호환 | 5 |
| [sns-devtools-reply](https://github.com/jkf87/sns-devtools-reply) | Chrome DevTools MCP(autoConnect) 기반 SNS 순차 댓글 답글 스킬 (YouTube, Threads, Facebook) | 4 |
| [sns-reply-skills](https://github.com/jkf87/sns-reply-skills) | Chrome Relay 기반 SNS 순차 댓글 답글 자동화 스킬 (YouTube, Threads, Facebook) | 0 |
| [threads-parser](https://github.com/jkf87/threads-parser) | Threads post parser - extract structured data from threads.com URLs via Playwright SSR interception | 0 |
| [wp-blog-publisher](https://github.com/jkf87/wp-blog-publisher) | Railway 워드프레스 셋업부터 SEO/AEO 최적화 블로그 자동 게시까지 End-to-End 스킬 | 0 |

## 앱·도구

| 프로젝트 | 설명 | ★ |
|---|---|---:|
| [murmur](https://github.com/jkf87/murmur) | Realtime speech transcription & translation for Apple Silicon Mac | 22 |
| [layer-split-releases](https://github.com/jkf87/layer-split-releases) | Layer Split installers and release notes | 1 |
| [screenshot-markup-picker-releases](https://github.com/jkf87/screenshot-markup-picker-releases) | ScreenshotMarkupPicker macOS 앱 배포와 릴리스 노트 | 2 |
| [klef-collector-releases](https://github.com/jkf87/klef-collector-releases) | KLEF 공람문서 요약: 공개 다운로드, Windows 로컬 도우미 및 Chrome 확장 설치 안내 | 4 |
| [kipris-performance-verifier](https://github.com/jkf87/kipris-performance-verifier) | 특허·논문 실적의 형식·중복·누락을 검사하고 KIPRIS Plus·Crossref로 교차검증하는 로컬 웹 도구 | 0 |
| [personnel-stats-app](https://github.com/jkf87/personnel-stats-app) | Windows용 로컬 SQLite 인사 통계 관리 도구 | 0 |
| [messenger-rag](https://github.com/jkf87/messenger-rag) | 충북소통메신저 RAG 검색 앱 - Graph RAG 기반 쪽지/메시지 시맨틱 검색 | 1 |
| [phone-agent](https://github.com/jkf87/phone-agent) | AI real-time voice phone agent using Twilio + OpenAI Realtime API | 5 |
| [outdoor-weather](https://github.com/jkf87/outdoor-weather) | GPS 기반 야외활동 가능여부 날씨 대시보드 (KMA 위성 + RainViewer 레이더 + Open-Meteo 16일 예보) | 0 |
| [finding-neukgu](https://github.com/jkf87/finding-neukgu) | 늑구를 찾아라 - 대전 CCTV 지도 탐색기 | 0 |
| [boox-rapid-draw](https://github.com/jkf87/boox-rapid-draw) | Boox 전자잉크 기기에서 공식 앱 밖에서도 스타일러스로 빠르게 필기할 수 있는 도구 (포크: 위치 정확도 및 안정성 개선) | 0 |

---

공개 저장소 71개 · 2026-10-06 갱신 · `node scripts/build-readme.mjs`로 다시 만들어요. 목록과 분류는 [projects.json](projects.json)에서 고쳐요.
