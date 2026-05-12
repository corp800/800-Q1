"use client";

import { MessageSquareText } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hoverCard";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export function OverlaysSection() {
  return (
    <div className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <MessageSquareText className="size-4" />
        Overlays
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Dialog>
          <DialogTrigger className={buttonVariants({ variant: "outline" })}>
            Open dialog
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Dialog preview</DialogTitle>
              <DialogDescription>
                화면을 잠시 전환해야 할 때 쓰는 대표 오버레이입니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Close
              </DialogClose>
              <DialogClose render={<Button />}>Continue</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Popover>
          <PopoverTrigger className={buttonVariants({ variant: "ghost" })}>
            Open popover
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Popover note</PopoverTitle>
              <PopoverDescription>
                가볍게 설명을 얹을 때 좋은 작은 레이어입니다.
              </PopoverDescription>
            </PopoverHeader>
            <div className="rounded-lg bg-muted/60 px-3 py-2 text-sm text-muted-foreground">
              버튼과 함께 안내 문구를 붙이기 좋습니다.
            </div>
          </PopoverContent>
        </Popover>

        <HoverCard>
          <HoverCardTrigger
            href="#"
            onClick={(event) => event.preventDefault()}
            className="inline-flex cursor-default items-center rounded-full border border-border/70 bg-muted/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted/70"
          >
            Hover card
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-1">
              <p className="font-medium">Quick preview</p>
              <p className="text-sm text-muted-foreground">
                마우스를 올렸을 때만 보이는 가벼운 보조 정보입니다.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
