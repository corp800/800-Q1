import { atom } from "jotai";
import type { ReactNode } from "react";

export type OpenAlertOptions = {
  title: ReactNode;
  text: ReactNode;
  confirmText?: ReactNode;
  onConfirm?: () => void;
};

type AlertQueueItem = OpenAlertOptions & {
  id: number;
};

let nextAlertId = 0;

export const alertQueueAtom = atom<AlertQueueItem[]>([]);

export const openAlertAtom = atom(
  null,
  (_get, set, alert: OpenAlertOptions) => {
    set(alertQueueAtom, (currentQueue) => [
      ...currentQueue,
      { ...alert, id: nextAlertId++ },
    ]);
  },
);

export const dismissCurrentAlertAtom = atom(null, (_get, set) => {
  set(alertQueueAtom, (currentQueue) => currentQueue.slice(1));
});
