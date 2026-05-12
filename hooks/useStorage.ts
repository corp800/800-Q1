"use client";

import { type SetStateAction, useEffect, useMemo, useState } from "react";
import type { StorageKind } from "@/lib/commonType";
import { createStorageUtil } from "@/lib/storage";

type UseStorageOptions<T> = {
  storageKind?: StorageKind;
  namespace?: string;
  parse?: (value: unknown) => T;
};

export function useStorage<T>(
  key: string,
  initialValue: T,
  options: UseStorageOptions<T> = {},
) {
  const {
    storageKind = "local",
    namespace,
    parse = (value) => value as T,
  } = options;

  const storage = useMemo(
    () => createStorageUtil(storageKind, namespace),
    [namespace, storageKind],
  );

  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const stored = storage.read<unknown>(key);
    if (stored === null) {
      setValue(initialValue);
      return;
    }

    setValue(parse(stored));
  }, [initialValue, key, parse, storage]);

  const saveValue = (nextValue: SetStateAction<T>) => {
    setValue((currentValue) => {
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (currentValue: T) => T)(currentValue)
          : nextValue;

      storage.set(key, resolvedValue);
      return resolvedValue;
    });
  };

  const removeValue = () => {
    storage.remove(key);
    setValue(initialValue);
  };

  const clear = () => {
    storage.clear();
    setValue(initialValue);
  };

  return {
    value,
    setValue: saveValue,
    removeValue,
    clear,
    storage,
  };
}
