import { NextResponse } from "next/server";
import { getTalks } from "@/lib/talks";

export async function GET() {
  const talks = getTalks();

  return NextResponse.json(
    { count: talks.length, talks },
    { headers: { "Cache-Control": "public, max-age=3600" } }
  );
}
