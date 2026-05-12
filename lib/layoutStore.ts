import { atom } from "jotai";

// 데스크톱 사이드바는 기본적으로 열린 상태로 시작한다.
export const desktopSidebarOpenAtom = atom(true);

// 모바일 드로어는 기본적으로 닫힌 상태로 시작한다.
export const mobileSidebarOpenAtom = atom(false);
