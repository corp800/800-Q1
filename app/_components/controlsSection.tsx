"use client";

import { CheckCircle2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const buttonSamples = [
  { label: "Default", variant: "default" as const },
  { label: "Outline", variant: "outline" as const },
  { label: "Secondary", variant: "secondary" as const },
  { label: "Ghost", variant: "ghost" as const },
  { label: "Destructive", variant: "destructive" as const },
];

export function ControlsSection() {
  return (
    <section className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-[0_24px_80px_-44px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Wand2 className="size-4" />
        Core controls
      </div>
      <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold">Button styles</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              같은 액션이라도 버튼 톤에 따라 성격이 달라집니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {buttonSamples.map((item) => (
              <Button key={item.label} variant={item.variant}>
                {item.label}
              </Button>
            ))}
          </div>

          <div className="grid gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium">Title</span>
              <Input placeholder="컴포넌트 이름을 입력" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium">Category</span>
              <Select defaultValue="form">
                <SelectTrigger>
                  <SelectValue placeholder="선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="form">Form</SelectItem>
                  <SelectItem value="overlay">Overlay</SelectItem>
                  <SelectItem value="data">Data</SelectItem>
                  <SelectItem value="motion">Motion</SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <CheckCircle2 className="size-4 text-primary" />
            Small form state
          </div>
          <div className="mt-4 space-y-4">
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Short note</span>
              <Textarea
                placeholder="이 컴포넌트들은 서로 섞어서 써도 자연스럽습니다."
                className="min-h-28"
              />
            </label>
            <label className="flex items-start gap-3 rounded-2xl border border-border/60 bg-muted/40 p-3">
              <Checkbox defaultChecked className="mt-0.5" />
              <span className="grid gap-1">
                <span className="text-sm font-medium">
                  Show installed components
                </span>
                <span className="text-sm leading-6 text-muted-foreground">
                  체크박스는 간단한 상태 표시와 선택에 잘 맞습니다.
                </span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
