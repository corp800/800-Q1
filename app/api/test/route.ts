import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    message: "test json",
    timestamp: new Date().toISOString(),
  });
}
