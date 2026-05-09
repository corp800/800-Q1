import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

// 클래스 이름을 조건부로 합치고 Tailwind 충돌을 정리함
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// value를 받아 안전하게 날짜 문자열로 포매팅함
export function formatDate(
  value: Date | string | number,
  pattern = "yyyy-MM-dd",
) {
  const date = typeof value === "string" ? new Date(value) : new Date(value);
  return format(date, pattern);
}
