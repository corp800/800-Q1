# 800-Q1 Project

Theme-driven design system and dashboard application built with Next.js.

## 🏷 Naming Conventions (네이밍 룰)

프로젝트의 일관성을 유지하기 위해 아래의 네이밍 규칙을 준수합니다.

### 1. 파일 및 디렉토리 (Files & Directories)
*   **Kebab-case (소문자 및 하이픈)** 사용을 원칙으로 합니다.
*   공통 컴포넌트, 유틸리티, 스타일 파일 등 모든 파일 이름에 적용됩니다.
*   예: `site-header.tsx`, `app-sidebar.tsx`, `layout-store.ts`

### 2. 라우팅 (Routing)
*   `app/` 디렉토리 내의 모든 라우팅 관련 폴더명은 **소문자 시작 및 Kebab-case**를 사용합니다.
*   URL 경로의 가독성과 운영체제 간 호환성을 보장합니다.
*   예: `app/user-profile/page.tsx` (URL: `/user-profile`)

### 3. 컴포넌트 이름 (Components)
*   파일 내 React 컴포넌트 이름은 **PascalCase**를 사용합니다.
*   예: `export function AppSidebar() { ... }`

### 4. 변수 및 함수 (Variables & Functions)
*   일반적인 변수, 상수(상황에 따라 대문자), 함수 이름은 **camelCase**를 사용합니다.
*   예: `const isOpen = false;`, `function handleSubmit() { ... }`

### 5. 테마 변수 (Theme Variables)
*   CSS 변수 및 테마 관련 토큰은 프로젝트 내 정의된 규칙을 따릅니다.
*   예: `--theme-primary`, `--theme-background`
