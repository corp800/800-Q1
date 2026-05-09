export type StorageKind = "local" | "session";

export type StorageUtil = {
  kind: StorageKind;
  namespace?: string;
  available: boolean;
  get<T>(key: string, fallback?: T): T | null;
  set<T>(key: string, value: T): void;
  remove(key: string): void;
  clear(): void;
  keys(): string[];
  has(key: string): boolean;
  read<T>(key: string): T | null;
};
