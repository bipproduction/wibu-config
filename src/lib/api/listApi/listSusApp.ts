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
    },
  });
}
