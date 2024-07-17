const listApp = [
  {
    id: "1",
    name: "insaniai",
    url: "https://insaniai.ravenstone.cloud",
    default: true,
  },
  {
    id: "2",
    name: "hipmi",
    url: "https://hipmi.ravenstone.cloud",
    default: false,
  },
];

export async function listSusApp(req: Request) {
  return new Response(JSON.stringify(listApp), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
