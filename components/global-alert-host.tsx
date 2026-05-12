"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  alertQueueAtom,
  dismissCurrentAlertAtom,
  type OpenAlertOptions,
} from "@/lib/alert-store";

type PresentedAlert = OpenAlertOptions & {
  id: number;
};

export function GlobalAlertHost() {
  const alertQueue = useAtomValue(alertQueueAtom);
  const dismissCurrentAlert = useSetAtom(dismissCurrentAlertAtom);
  const [presentedAlert, setPresentedAlert] = useState<PresentedAlert | null>(
    null,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (presentedAlert || alertQueue.length === 0) {
      return;
    }

    setPresentedAlert(alertQueue[0]);
    setOpen(true);
  }, [alertQueue, presentedAlert]);

  const handleConfirm = () => {
    try {
      presentedAlert?.onConfirm?.();
    } finally {
      setOpen(false);
    }
  };

  const handleOpenChangeComplete = (nextOpen: boolean) => {
    if (nextOpen) {
      return;
    }

    dismissCurrentAlert();
    setPresentedAlert(null);
  };

  if (!presentedAlert) {
    return null;
  }

  return (
    <AlertDialog open={open} onOpenChangeComplete={handleOpenChangeComplete}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{presentedAlert.title}</AlertDialogTitle>
          <AlertDialogDescription>{presentedAlert.text}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleConfirm}>
            {presentedAlert.confirmText ?? "확인"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
