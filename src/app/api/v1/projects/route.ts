import {NextRequest, NextResponse} from "next/server";
import { listObjects } from "@/lib/cloudflare";

export async function GET(req: NextRequest) {
  const key = new URL(req.url).searchParams.get("key");
  const r2Instance = await listObjects(key!);
  const contents = (r2Instance.Contents ?? []).filter((obj) => obj && obj.Size && obj.Key && !obj.Key.endsWith('/'))
    .map((obj) => {
      return `/api/v1/project?key=${encodeURIComponent(obj.Key as string)}`
    })
  console.log('contents: ', contents);
  return NextResponse.json(contents);
}