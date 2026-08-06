import { copyFile } from "node:fs/promises";

await copyFile("index.source.html", "index.html");
