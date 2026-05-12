import { atom } from "jotai";
import type { ReactNode } from "react";

type AlertContent = {
  title?: ReactNode;
  text: ReactNode;
};

export type OpenAlertOptions = AlertContent & {
  confirmText?: ReactNode;
  onConfirm?: () => void;
};

export type OpenConfirmOptions = AlertContent & {
  confirmText?: ReactNode;
  cancelText?: ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type AlertQueueItem =
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

let nextAlertId = 0;

// 전역 alert/confirm를 순서대로 쌓아두는 큐.
export const alertQueueAtom = atom<AlertQueueItem[]>([]);

export const openAlertAtom = atom(
  null,
  (_get, set, alert: OpenAlertOptions) => {
    const item: AlertQueueItem = {
      kind: "alert",
      id: nextAlertId++,
      options: alert,
    };

    set(alertQueueAtom, (currentQueue) => [...currentQueue, item]);
  },
);

export const openConfirmAtom = atom(
  null,
  (_get, set, confirm: OpenConfirmOptions) => {
    const item: AlertQueueItem = {
      kind: "confirm",
      id: nextAlertId++,
      options: confirm,
    };

    set(alertQueueAtom, (currentQueue) => [...currentQueue, item]);
  },
);

export const dismissCurrentAlertAtom = atom(null, (_get, set) => {
  // 현재 항목을 제거하고 다음 항목을 대기시킨다.
  set(alertQueueAtom, (currentQueue) => currentQueue.slice(1));
});
