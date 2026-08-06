import { BookOpen, ExternalLink, FileText, GraduationCap, Users } from "lucide-react";
import { useOutletContext } from "react-router";
import { Section } from "../components/Section";
import type { LanguageOutletContext } from "../language";
import { dofPaperHref, portfolioContent } from "./Home";

export default function Publications() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];
  const isChinese = language === "zh";
  const articles = [
    {
      title:
        "Household Transmission of SARS-CoV-2 in the United States: Living Density, Viral Load, and Disproportionate Impact on Communities of Color. 2021.",
      href: "https://doi.org/10.17615/x61s-er87",
      label: "doi:10.17615/x61s-er87",
    },
    {
      title:
        "Degrees of Freedom Estimation in the Meta-analysis of Sensitivity and Specificity in Diagnosis Medicine. 2021.",
      href: dofPaperHref,
      label: content.fullArticleLabel,
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">{content.sections.research}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {isChinese ? "教育背景、统计研究与公开文章" : "Education, statistical research, and public articles"}
        </p>
      </div>

      <Section icon={<BookOpen className="w-6 h-6" />} title={content.sections.articles}>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow" key={article.title}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  {index === 0 ? <BookOpen className="w-8 h-8 text-white" /> : <FileText className="w-8 h-8 text-white" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-3">{article.title}</h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{isChinese ? "公共卫生与生物统计" : "Public Health and Biostatistics"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{article.label}</span>
                    </div>
                  </div>

                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
                  >
                    {index === 0 ? (isChinese ? "查看 DOI" : "View DOI") : content.fullArticleLabel}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<GraduationCap className="w-6 h-6" />} title={content.sections.degrees}>
        <div className="grid md:grid-cols-2 gap-6">
          {content.education.map((item, index) => (
            <div className="bg-white rounded-xl p-6 shadow-md" key={item.degree}>
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? "bg-purple-100" : "bg-blue-100"
                }`}
              >
                <GraduationCap
                  className={`w-6 h-6 ${index % 2 === 0 ? "text-purple-600" : "text-blue-600"}`}
                />
              </div>
              <h3 className="text-xl mb-3">{item.degree}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.school}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.year}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
