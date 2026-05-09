import ky from "ky";
import type { ZodTypeAny, z } from "zod";

let accessToken: string | null = null;

export function setApiToken(token: string | null) {
  accessToken = token;
}

export function clearApiToken() {
  accessToken = null;
}

export const apiClient = ky.create({
  prefix: "/api",
  headers: {
    Accept: "application/json",
  },
  retry: 0,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        } else {
          request.headers.delete("Authorization");
        }
      },
    ],
  },
});

export async function get<T>(url: string) {
  return apiClient.get(url).json<T>();
}

// 아래는 필요없어뵘
export async function send<TResponse, TBody extends Record<string, unknown>>(
  url: string,
  body: TBody,
) {
  return apiClient.post(url, { json: body }).json<TResponse>();
}

export const post = send;

export async function getWithSchema<TSchema extends ZodTypeAny>(
  url: string,
  schema: TSchema,
) {
  const data = await get<unknown>(url);
  return schema.parse(data) as z.infer<TSchema>;
}

export async function sendWithSchema<
  TSchema extends ZodTypeAny,
  TBody extends Record<string, unknown>,
>(url: string, body: TBody, schema: TSchema) {
  const data = await send<unknown, TBody>(url, body);
  return schema.parse(data) as z.infer<TSchema>;
}
