"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAlert } from "@/hooks/useAlert";

export function ActionsSection() {
  const { openAlert, openConfirm } = useAlert();

  return (
    <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <ArrowRight className="size-4" />
        Assistant actions
      </div>
      <div className="mt-5 space-y-3">
        <Button
          className="w-full justify-between"
          onClick={() =>
            openAlert({
              title: "전역 alert",
              text: "이 버튼은 어디서나 열 수 있는 alert를 보여줍니다.",
            })
          }
        >
          <span>Open alert</span>
          <ArrowRight className="size-4" />
        </Button>
        <Button
          variant="outline"
          className="w-full justify-between"
          onClick={() =>
            openConfirm({
              title: "진행할까요?",
              text: "취소와 확인이 모두 있는 confirm 데모입니다.",
              confirmText: "진행",
              cancelText: "중단",
            })
          }
        >
          <span>Open confirm</span>
          <ArrowRight className="size-4" />
        </Button>
        <div className="rounded-2xl border border-dashed border-border/70 bg-muted/30 p-4 text-sm leading-6 text-muted-foreground">
          확인 버튼을 누르면 자동으로 닫히고, 콜백 안에서 다시 alert를 띄워도
          큐로 이어집니다.
        </div>
      </div>
    </div>
  );
}
