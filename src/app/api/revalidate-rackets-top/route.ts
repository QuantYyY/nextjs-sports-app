import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("getRacketsTop", "max");

  return NextResponse.json({ text: "success" });
}
