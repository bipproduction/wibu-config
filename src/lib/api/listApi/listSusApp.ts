import prisma from "@/lib/db/prisma";

const listApp = [
  {
    id: "1",
    name: "insaniai",
    url: "https://insaniai.ravenstone.cloud",
    default: true,
    fix: true,
  },
  {
    id: "2",
    name: "hipmi",
    url: "https://hipmi.ravenstone.cloud",
    default: false,
    fix: true,
  },
  {
    id: "3",
    name: "sdm",
    url: "https://sdm.ravenstone.cloud",
    default: false,
    fix: true,
  },
];

export async function listSusApp(req: Request) {
  try {
    const lsApp = await prisma.susAppList.findMany();
    const susApp = [...listApp, ...lsApp];
    return new Response(JSON.stringify(susApp), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
