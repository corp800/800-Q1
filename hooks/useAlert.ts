"use client";

import { useSetAtom } from "jotai";
import {
  type OpenAlertOptions,
  type OpenConfirmOptions,
  openAlertAtom,
  openConfirmAtom,
} from "@/atom/globalAlert";

export function useAlert(): {
  openAlert: (alert: OpenAlertOptions) => void;
  openConfirm: (confirm: OpenConfirmOptions) => void;
} {
  const openAlert = useSetAtom(openAlertAtom);
  const openConfirm = useSetAtom(openConfirmAtom);

  return { openAlert, openConfirm };
}
