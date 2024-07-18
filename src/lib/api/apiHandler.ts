import { createSusApp } from "./listApi/createSusApp";
import { deleteSusApp } from "./listApi/deleteSusApp";
import { listSusApp } from "./listApi/listSusApp";

const listApi = [
  {
    name: "list-sus-app",
    path: "/list/sus-app",
    api: listSusApp,
    method: "GET",
  },
  {
    name: "create-sus-app",
    path: "/create/sus-app",
    api: createSusApp,
    method: "POST",
  },
  {
    name: "delete-sus-app",
    path: "/delete/sus-app",
    api: deleteSusApp,
    method: "POST",
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

  return lib.api(req);
}
