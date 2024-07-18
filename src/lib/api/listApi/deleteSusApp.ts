import prisma from "@/lib/db/prisma";
import { headers } from "../lib/headers";

export async function deleteSusApp(req: Request) {
  const body = await req.json();
  let susApp = await prisma.susAppList.delete({
    where: {
      id: body.id,
    },
  });

  return new Response(JSON.stringify(susApp), {
    headers,
  });
}
