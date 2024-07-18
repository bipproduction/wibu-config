import { Config } from "./listPage/Config";

const listPage = [
    {
        "id": "1",
        "name": "config",
        "path": "/config",
        page: Config
    }
]
export function pageHandler({ params }: { params: { path: string[] } }) {
    const paramsPath = "/" + params.path.join("/");
    const page = listPage.find((page) => page.path === paramsPath);
    if (!page) return <div style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }}>{paramsPath} | Not found | 404</div>
    return <page.page />
}