import type { StorageKind, StorageUtil } from "@/lib/commonType";

const storageByKind = {
  local: () => window.localStorage,
  session: () => window.sessionStorage,
} as const;

function getStorage(kind: StorageKind) {
  if (typeof window === "undefined") {
    return null;
  }

  return storageByKind[kind]();
}

function buildKey(namespace: string | undefined, key: string) {
  return namespace ? `${namespace}:${key}` : key;
}

function encodeValue<T>(value: T) {
  return JSON.stringify(value);
}

function decodeValue<T>(raw: string | null, fallback: T) {
  if (raw === null) {
    return fallback;
  }

  // 디코드해서 값을 가져옴
  try {
    return JSON.parse(raw) as T;
  } catch {
    return raw as T;
  }
}

export function createStorageUtil(
  kind: StorageKind,
  namespace?: string,
): StorageUtil {
  const storage = getStorage(kind);
  const key = (name: string) => buildKey(namespace, name);
  const matchesNamespace = (currentKey: string) =>
    namespace ? currentKey.startsWith(`${namespace}:`) : true;

  const readValue = <T>(name: string) =>
    storage ? decodeValue<T | null>(storage.getItem(key(name)), null) : null;

  return {
    kind,
    namespace,
    available: Boolean(storage),
    get<T>(name: string, fallback?: T) {
      const value = readValue<T>(name);
      if (value === null) {
        return fallback ?? null;
      }

      return value;
    },
    set<T>(name: string, value: T) {
      if (!storage) {
        return;
      }

      storage.setItem(key(name), encodeValue(value));
    },
    remove(name: string) {
      storage?.removeItem(key(name));
    },
    clear() {
      if (!storage) {
        return;
      }

      if (!namespace) {
        storage.clear();
        return;
      }

      const keysToRemove: string[] = [];

      for (let index = 0; index < storage.length; index += 1) {
        const currentKey = storage.key(index);
        if (currentKey && matchesNamespace(currentKey)) {
          keysToRemove.push(currentKey);
        }
      }

      for (const currentKey of keysToRemove) {
        storage.removeItem(currentKey);
      }
    },
    keys() {
      if (!storage) {
        return [];
      }

      const keys: string[] = [];

      for (let index = 0; index < storage.length; index += 1) {
        const currentKey = storage.key(index);
        if (!currentKey || !matchesNamespace(currentKey)) {
          continue;
        }

        keys.push(
          namespace ? currentKey.slice(namespace.length + 1) : currentKey,
        );
      }

      return keys;
    },
    has(name: string) {
      return storage?.getItem(key(name)) !== null;
    },
    read<T>(name: string) {
      return readValue<T>(name);
    },
  };
}
