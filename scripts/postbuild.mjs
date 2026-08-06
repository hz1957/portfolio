import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const englishUrl = "https://hz1957.github.io/portfolio/";
const chineseUrl = "https://hz1957.github.io/portfolio/zh/";
const viteOutputPath = "build/vite-entry.html";
const outputPath = "build/index.html";
const sourceHtml = await readFile(viteOutputPath, "utf8");

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
    .replace(
      "Haoming Zhang portfolio: LLM post-training, agentic systems, reward modeling, execution-guided SQL/DAG generation, and statistical modeling.",
      "张昊明的个人主页：大语言模型后训练、智能体系统、执行反馈驱动的 SQL/DAG 生成与统计建模。",
    )
    .replace("Haoming Zhang | AI Research Engineer", "张昊明 | AI 研究员"),
  chineseUrl,
);

await mkdir("build/zh", { recursive: true });
await writeFile(outputPath, englishHtml);
await writeFile("build/zh/index.html", chineseHtml);
await copyFile(outputPath, "build/404.html");
await rm(viteOutputPath, { force: true });
