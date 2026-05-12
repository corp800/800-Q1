"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import {
  alertQueueAtom,
  dismissCurrentAlertAtom,
  type OpenAlertOptions,
  type OpenConfirmOptions,
} from "@/atom/globalAlert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alertDialog";

type PresentedAlert =
  | {
      kind: "alert";
      id: number;
      options: OpenAlertOptions;
    }
  | {
      kind: "confirm";
      id: number;
      options: OpenConfirmOptions;
    };

type CloseOrigin = "confirm" | "cancel" | null;

export function GlobalAlert() {
  const alertQueue = useAtomValue(alertQueueAtom);
  const dismissCurrentAlert = useSetAtom(dismissCurrentAlertAtom);
  const [presentedAlert, setPresentedAlert] = useState<PresentedAlert | null>(
    null,
  );
  const [open, setOpen] = useState(false);
  const closeOriginRef = useRef<CloseOrigin>(null);

  useEffect(() => {
    if (presentedAlert || alertQueue.length === 0) {
      return;
    }

    setPresentedAlert(alertQueue[0]);
    setOpen(true);
  }, [alertQueue, presentedAlert]);

  const handleAlertClose = (origin: CloseOrigin) => {
    if (!presentedAlert) {
      return;
    }

    // 확인/취소 콜백은 닫기 직전에 실행한다.
    if (origin === "confirm") {
      presentedAlert.options.onConfirm?.();
    } else if (presentedAlert.kind === "confirm") {
      presentedAlert.options.onCancel?.();
    }

    setOpen(false);
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) {
      return;
    }

    if (closeOriginRef.current === null && presentedAlert?.kind === "confirm") {
      presentedAlert.options.onCancel?.();
    }
  };

  const handleOpenChangeComplete = (nextOpen: boolean) => {
    if (nextOpen) {
      return;
    }

    // 닫힘이 끝나면 큐에서 제거하고 다음 항목을 보여준다.
    dismissCurrentAlert();
    setPresentedAlert(null);
    closeOriginRef.current = null;
  };

  if (!presentedAlert) {
    return null;
  }

  return (
    <AlertDialog
      open={open}
      onOpenChange={handleOpenChange}
      onOpenChangeComplete={handleOpenChangeComplete}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          {presentedAlert.options.title ? (
            <AlertDialogTitle>{presentedAlert.options.title}</AlertDialogTitle>
          ) : null}
          <AlertDialogDescription>
            {presentedAlert.options.text}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {presentedAlert.kind === "confirm" ? (
            <>
              <AlertDialogCancel
                variant="outline"
                onClick={() => {
                  closeOriginRef.current = "cancel";
                  handleAlertClose("cancel");
                }}
              >
                {presentedAlert.options.cancelText ?? "취소"}
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  closeOriginRef.current = "confirm";
                  handleAlertClose("confirm");
                }}
              >
                {presentedAlert.options.confirmText ?? "확인"}
              </AlertDialogAction>
            </>
          ) : (
            <AlertDialogAction
              onClick={() => {
                closeOriginRef.current = "confirm";
                handleAlertClose("confirm");
              }}
            >
              {presentedAlert.options.confirmText ?? "확인"}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
