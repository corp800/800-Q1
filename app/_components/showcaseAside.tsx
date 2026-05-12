"use client";

import {
  CalendarDays,
  MousePointerClick,
  PanelTop,
  Sparkles,
} from "lucide-react";

const showcaseItems = [
  {
    title: "Buttons",
    description: "행동을 분명하게 드러내는 기본 액션",
    icon: MousePointerClick,
  },
  {
    title: "Fields",
    description: "Input, Textarea, Checkbox, Select",
    icon: PanelTop,
  },
  {
    title: "Overlays",
    description: "Dialog, Popover, HoverCard, Alert",
    icon: Sparkles,
  },
  {
    title: "Date",
    description: "달력 선택과 일정 컨텍스트",
    icon: CalendarDays,
  },
];

export function ShowcaseAside() {
  return (
    <aside className="grid gap-4 rounded-3xl border border-border/60 bg-background/75 p-5 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Overview
          </p>
          <h2 className="mt-1 text-lg font-semibold">What is shown</h2>
        </div>
        <div className="rounded-full border border-border/70 bg-muted/70 px-2.5 py-1 text-xs text-muted-foreground">
          live
        </div>
      </div>

      <div className="grid gap-3">
        {showcaseItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-border/50 bg-muted/40 p-3"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-dashed border-border/70 bg-background/60 p-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Included components
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Button",
            "Input",
            "Textarea",
            "Checkbox",
            "Select",
            "Calendar",
            "Dialog",
            "Popover",
            "HoverCard",
            "Alert",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/70 bg-muted/60 px-2.5 py-1 text-xs text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
