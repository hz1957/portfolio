import { Award, Briefcase, Code, GraduationCap } from "lucide-react";
import { useOutletContext } from "react-router";
import { ExperienceCard } from "../components/ExperienceCard";
import { Section } from "../components/Section";
import type { LanguageOutletContext } from "../language";
import { portfolioContent } from "./Home";

const skillCardClasses = [
  "bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6",
  "bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6",
  "bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6",
  "bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6",
];

export default function Experience() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];
  const isChinese = language === "zh";
  const achievements = isChinese
    ? [
        ["80%", "Text-to-SQL 执行准确率从 68% 提升至 80%"],
        ["84%", "Tree GRPO 准确率"],
        ["95%+", "Chinese-MacBERT 医疗 NER token-level 准确率"],
      ]
    : [
        ["80%", "Text-to-SQL execution accuracy, improved from 68%"],
        ["84%", "Tree GRPO accuracy"],
        ["95%+", "Token-level accuracy on medical NER with Chinese-MacBERT"],
      ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl">{content.sections.experience}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {content.hero.bio}
        </p>
      </div>

      <Section icon={<Briefcase className="w-6 h-6" />} title={content.sections.experience}>
        <div className="space-y-8">
          {content.experiences.map((item) => (
            <ExperienceCard
              key={`${item.role}-${item.company}`}
              title={item.role}
              company={item.company}
              location={item.place}
              period={item.period}
              current={false}
              achievements={item.points}
            />
          ))}
        </div>
      </Section>

      <Section icon={<GraduationCap className="w-6 h-6" />} title={content.sections.degrees}>
        <div className="grid md:grid-cols-2 gap-6">
          {content.education.map((item, index) => (
            <div
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow"
              key={item.degree}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-purple-100"
                }`}
              >
                <GraduationCap
                  className={`w-6 h-6 ${index % 2 === 0 ? "text-blue-600" : "text-purple-600"}`}
                />
              </div>
              <h3 className="text-xl mb-2">{item.degree}</h3>
              <p className="text-slate-600 mb-2">{item.school}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{item.year}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<Code className="w-6 h-6" />} title={content.sections.skills}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.skillGroups.map((group, index) => (
            <div className={skillCardClasses[index % skillCardClasses.length]} key={group.label}>
              <h3 className="mb-3">{group.label}</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                {group.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section icon={<Award className="w-6 h-6" />} title={isChinese ? "关键成果" : "Key Achievements"}>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map(([value, label], index) => (
            <div className="bg-white rounded-xl p-6 shadow-md text-center" key={label}>
              <div
                className={`text-4xl mb-2 ${
                  index === 0 ? "text-blue-600" : index === 1 ? "text-purple-600" : "text-green-600"
                }`}
              >
                {value}
              </div>
              <p className="text-slate-700">{label}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
