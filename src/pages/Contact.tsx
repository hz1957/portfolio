import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useOutletContext } from "react-router";
import type { LanguageOutletContext } from "../language";
import { portfolioContent } from "./Home";

export default function Contact() {
  const { language } = useOutletContext<LanguageOutletContext>();
  const content = portfolioContent[language];
  const isChinese = language === "zh";
  const locationLabel = content.hero.role.split(/[|｜]/)[1]?.trim() ?? content.hero.role;
  const labels = {
    title: isChinese ? "联系我" : "Get in Touch",
    intro: content.contactNote,
    info: isChinese ? "联系方式" : "Contact Information",
    location: isChinese ? "所在地" : "Location",
    opportunities: isChinese ? "求职方向" : "Open to Opportunities",
    formTitle: isChinese ? "发送消息" : "Send a Message",
    name: isChinese ? "姓名" : "Name",
    email: isChinese ? "邮箱" : "Email",
    subject: isChinese ? "主题" : "Subject",
    message: isChinese ? "消息" : "Message",
    submit: isChinese ? "发送消息" : "Send Message",
    note: isChinese ? "这是演示表单，请优先通过上方邮箱直接联系。" : "This is a demo form. Please use the email link above for direct contact.",
    ctaTitle: isChinese ? "期待一起构建可靠的 AI 系统" : "Let's Build Reliable AI Systems Together",
    ctaBody: isChinese
      ? "欢迎联系我讨论 Agentic AI、模型后训练、数据自动化平台或相关机会。"
      : "Reach out to discuss agentic AI, LLM post-training, data automation platforms, or related opportunities.",
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl">{labels.title}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">{labels.intro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl mb-6">{labels.info}</h2>

            <div className="space-y-6">
              <a
                href="mailto:zhm0044@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1">{content.hero.emailLabel}</h3>
                  <p className="text-slate-600 text-sm">zhm0044@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/haoming-zhang-3b8795187/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1">LinkedIn</h3>
                  <p className="text-slate-600 text-sm">Haoming Zhang</p>
                </div>
              </a>

              <a
                href="https://github.com/hz1957"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                  <Github className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h3 className="mb-1">GitHub</h3>
                  <p className="text-slate-600 text-sm">hz1957</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-1">{labels.location}</h3>
                  <p className="text-slate-600 text-sm">{locationLabel}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-xl mb-4">{labels.opportunities}</h3>
            <div className="space-y-3 text-sm text-slate-700">
              {content.trainingWork.slice(0, 3).map((item) => (
                <p className="flex items-start gap-2" key={item.title}>
                  <span className="text-blue-600">•</span>
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl mb-6">{labels.formTitle}</h2>
          <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-slate-700">
                {labels.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={labels.name}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-slate-700">
                {labels.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm mb-2 text-slate-700">
                {labels.subject}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={labels.subject}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-slate-700">
                {labels.message}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder={labels.message}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              onClick={() => alert(labels.note)}
            >
              <Send className="w-5 h-5" />
              {labels.submit}
            </button>

            <p className="text-xs text-slate-500 text-center">{labels.note}</p>
          </form>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-center">
        <h2 className="text-3xl text-white mb-4">{labels.ctaTitle}</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">{labels.ctaBody}</p>
        <a
          href="mailto:zhm0044@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          {isChinese ? "直接发邮件" : "Email Me Directly"}
        </a>
      </div>
    </main>
  );
}
