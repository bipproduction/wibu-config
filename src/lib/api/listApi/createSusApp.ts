import { v4 } from "uuid";
import { headers } from "../lib/headers";
import prisma from "@/lib/db/prisma";
export async function createSusApp(req: Request) {
  const body = await req.json();
  let susApp = await prisma.susAppList.create({
    data: body,
  });

  return new Response(JSON.stringify(susApp), {
    headers,
  });
}
