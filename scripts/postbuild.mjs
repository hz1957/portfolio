import { copyFile, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const englishUrl = "https://hz1957.github.io/portfolio/";
const chineseUrl = "https://hz1957.github.io/portfolio/zh/";
const outputPath = "build/index.html";
const englishDescription =
  "Haoming Zhang portfolio: agentic AI, LLM post-training, enterprise RAG, automated trace evaluation, intelligent data automation, and statistical modeling.";
const chineseDescription =
  "张昊明的个人主页：Agentic AI、大语言模型后训练、企业级 RAG、trace 自动评测与智能数据自动化平台。";
const sourceHtml = await readFile(outputPath, "utf8");

const addLanguageLinks = (html, canonicalUrl) =>
  html.replace(
    "</head>",
    `  <link rel="canonical" href="${canonicalUrl}" />
      <link rel="alternate" hreflang="en" href="${englishUrl}" />
      <link rel="alternate" hreflang="zh-CN" href="${chineseUrl}" />
      <link rel="alternate" hreflang="x-default" href="${englishUrl}" />
    </head>`,
  );

const englishHtml = addLanguageLinks(sourceHtml, englishUrl);
const chineseHtml = addLanguageLinks(
  sourceHtml
    .replace('<html lang="en">', '<html lang="zh-CN">')
    .replace(englishDescription, chineseDescription)
    .replace("Haoming Zhang | AI Research Engineer", "张昊明 | AI 工程师"),
  chineseUrl,
);

await mkdir("build/zh", { recursive: true });
await writeFile(outputPath, englishHtml);
await writeFile("build/zh/index.html", chineseHtml);
await copyFile(outputPath, "build/404.html");

await rm("assets", { recursive: true, force: true });
await rm("zh", { recursive: true, force: true });
await rm("404.html", { force: true });
await rm("degrees-of-freedom-estimation.pdf", { force: true });

await cp("build/assets", "assets", { recursive: true });
await cp("build/zh", "zh", { recursive: true });
await copyFile(outputPath, "index.html");
await copyFile("build/404.html", "404.html");
await copyFile("build/degrees-of-freedom-estimation.pdf", "degrees-of-freedom-estimation.pdf");
