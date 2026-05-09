import ky from "ky";

import { createStorageUtil } from "./storage";

// 인증 토큰만 저장하는 전용 스토리지
const authStorage = createStorageUtil("local");
const TOKEN_KEY = "auth-token";

// 공통 API 클라이언트
export const apiClient = ky.create({
  prefix: "/api",
  headers: {
    Accept: "application/json",
  },
  retry: 0,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        // 요청 전에 토큰을 헤더에 붙임
        const token = authStorage.get<string>(TOKEN_KEY);
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        } else {
          // 토큰이 없으면 헤더를 지움
          request.headers.delete("Authorization");
        }
      },
    ],
  },
});

// GET 요청
export async function get<T>(url: string) {
  return apiClient.get(url).json<T>();
}

// POST 요청
export async function post<TResponse, TBody extends Record<string, unknown>>(
  url: string,
  body: TBody,
) {
  return apiClient.post(url, { json: body }).json<TResponse>();
}

// PUT 요청
export async function put<TResponse, TBody extends Record<string, unknown>>(
  url: string,
  body: TBody,
) {
  return apiClient.put(url, { json: body }).json<TResponse>();
}

// DELETE 요청
export async function del<TResponse, TBody extends Record<string, unknown>>(
  url: string,
  body: TBody,
) {
  return apiClient.delete(url, { json: body }).json<TResponse>();
}
