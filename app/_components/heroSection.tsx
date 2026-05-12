"use client";

import { Boxes } from "lucide-react";
import SplitText from "@/components/animations/splitText";
import { Button } from "@/components/ui/button";
import { useAlert } from "@/hooks/useAlert";

export function HeroSection() {
  const { openAlert, openConfirm } = useAlert();

  return (
    <section className="flex flex-col justify-between gap-6 rounded-3xl border border-border/60 bg-background/75 p-6 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:p-8">
      <div className="max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/70 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Boxes className="size-3.5" />
          Installed component showcase
        </div>
        <SplitText
          text="Component Atlas"
          tag="h1"
          className="max-w-4xl text-left text-4xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl"
          delay={35}
          duration={1.05}
          threshold={0.15}
          rootMargin="-40px"
          from={{ opacity: 0, y: 36 }}
          to={{ opacity: 1, y: 0 }}
        />
        <p className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base">
          이 화면은 설치된 UI 컴포넌트를 소개하는 작은 전시입니다. 버튼, 폼,
          오버레이, 캘린더를 실제로 써보는 감각으로 한 페이지에 모았습니다.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() =>
            openAlert({
              title: "안내",
              text: "전역 alert는 어디서든 열 수 있습니다.",
            })
          }
        >
          Open alert
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            openConfirm({
              title: "확인해볼까요?",
              text: "confirm은 취소와 확인을 모두 보여줍니다.",
              confirmText: "진행",
              cancelText: "나중에",
            })
          }
        >
          Open confirm
        </Button>
        <Button variant="ghost" className="text-muted-foreground">
          Browse components
        </Button>
      </div>
    </section>
  );
}
