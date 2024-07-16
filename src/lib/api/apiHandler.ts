import { listSusApp } from "./listApi/listSusApp";

const listApi = [
  {
    name: "list-sus-app",
    path: "/list/sus-app",
    lib: listSusApp,
    method: "GET",
  },
];

export async function apiHandler(
  req: Request,
  { params }: { params: { path: string[] } }
) {
  const paramsPath = "/" + params.path.join("/");

  const lib = listApi.find(
    (api) => api.path === paramsPath && api.method === req.method
  );

  if (!lib) {
    return new Response(`Not found | ${paramsPath}`, { status: 404 });
  }

  return lib.lib(req);
}
