'use client'
import { useEffect, useState } from "react";


const defaultForm = {
    name: "",
    url: "",
    id: "",
    default: false
}
export function Config() {
    const [loading, setloading] = useState(false);
    const [listSusApp, setListSusApp] = useState<Record<string, any>[]>([]);
    const [form, setForm] = useState<Record<string, any>>(defaultForm);

    useEffect(() => {
        getListSusApp();
    }, []);
    async function getListSusApp() {
        const res = await fetch("/api/get/list/sus-app");
        const data = await res.json();
        setListSusApp(data);
    }

    async function onCreate() {
        if (form.name === "" || form.url === "") return alert("name and url is required");
        setloading(true);
        const res = await fetch("/api/post/create/sus-app", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        setloading(false);
        getListSusApp();
        alert(JSON.stringify(data));
        setForm(defaultForm);
    }

    async function onDelete(id: string) {
        if (!confirm("Are you sure?")) return;
        const res = await fetch("/api/post/delete/sus-app", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        });
        const data = await res.json();
        alert(JSON.stringify(data));
        getListSusApp();
    }
    return (
        <div >
            <div style={{
                marginBottom: 12,
                padding: 12,
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                backgroundColor: "lightgray"
            }}>
                <h3>create sus app</h3>
                <div style={{
                    display: "flex",
                    gap: "8px",
                }}>
                    <input onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" placeholder="name" />
                    <input onChange={(e) => setForm({ ...form, url: e.target.value })} type="text" placeholder="url" />
                    <button disabled={loading} onClick={onCreate}>create</button>
                </div>
            </div>
            <div style={{
                backgroundColor: "lightgray",
                padding: 12,
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
            }}>
                <h3>list sus app</h3>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                }}>
                    {listSusApp.map((app) => (
                        <div key={app.id}
                            style={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                flex: 1,
                                wordBreak: "break-word",
                                padding: 12,
                                backgroundColor: app.fix ? "lightgray" : "white",
                                borderBottom: "1px solid white",
                            }}>
                            <div>{app.name}</div>
                            <div>{app.url}</div>
                            <div style={{
                                display: "flex",
                                gap: "8px",
                                visibility: app.fix ? "hidden" : "visible",
                            }}>
                                <button onClick={() => onDelete(app.id)}>delete</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}