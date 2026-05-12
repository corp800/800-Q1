"use client";

import { CalendarDays, Sparkles } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarSection() {
  return (
    <aside className="grid gap-6">
      <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <CalendarDays className="size-4" />
          Calendar
        </div>
        <div className="mt-5 overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-3">
          <Calendar />
        </div>
      </div>

      <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Sparkles className="size-4" />
          Design note
        </div>
        <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
          <p>
            이 페이지는 설치된 컴포넌트들의 성격을 소개하는 쇼케이스로
            만들었습니다.
          </p>
          <p>
            버튼은 행동, 폼은 입력, 오버레이는 흐름 전환이라는 식으로 역할이
            분리되어 보이도록 구성했습니다.
          </p>
        </div>
        <div className="mt-5 rounded-2xl border border-border/50 bg-muted/30 p-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Focus
          </p>
          <p className="mt-2 text-sm leading-6">
            깔끔한 소개, 실제 동작하는 데모, 그리고 한눈에 보이는 시스템 구조.
          </p>
        </div>
      </div>
    </aside>
  );
}
