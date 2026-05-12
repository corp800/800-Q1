"use client";

import { useSetAtom } from "jotai";
import { type OpenAlertOptions, openAlertAtom } from "@/lib/alert-store";

export function useAlert(): {
  openAlert: (alert: OpenAlertOptions) => void;
} {
  const openAlert = useSetAtom(openAlertAtom);

  return { openAlert };
}
