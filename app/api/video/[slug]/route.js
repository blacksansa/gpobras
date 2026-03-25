import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

function resolveVideoPath(slug) {
  const candidates = [
    path.join(process.cwd(), "videos", `${slug}.mp4`),
    path.join(process.cwd(), "videos", slug),
  ];

  return candidates.find((candidate) => existsSync(candidate));
}

export async function GET(request, { params }) {
  const { slug } = await params;
  const filePath = resolveVideoPath(slug);

  if (!filePath) {
    return new Response("Vídeo não encontrado.", { status: 404 });
  }

  const videoStats = await stat(filePath);
  const range = request.headers.get("range");

  if (range) {
    const [startValue, endValue] = range.replace("bytes=", "").split("-");
    const start = Number.parseInt(startValue, 10);
    const end = endValue ? Number.parseInt(endValue, 10) : videoStats.size - 1;
    const chunkSize = end - start + 1;
    const stream = createReadStream(filePath, { start, end });

    return new Response(Readable.toWeb(stream), {
      status: 206,
      headers: {
        "Content-Type": "video/mp4",
        "Accept-Ranges": "bytes",
        "Content-Length": String(chunkSize),
        "Content-Range": `bytes ${start}-${end}/${videoStats.size}`,
        "Cache-Control": "no-cache",
      },
    });
  }

  const stream = createReadStream(filePath);

  return new Response(Readable.toWeb(stream), {
    headers: {
      "Content-Type": "video/mp4",
      "Content-Length": String(videoStats.size),
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-cache",
    },
  });
}
