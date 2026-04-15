import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl">Get in Touch</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or
          conversations about AI and intelligent systems
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl mb-6">Contact Information</h2>

            <div className="space-y-6">
              <a
                href="mailto:zhm0044@gmail.com"
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
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
                  <p className="text-slate-600 text-sm">
                    Connect with me professionally
                  </p>
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
                  <p className="text-slate-600 text-sm">
                    Check out my code and projects
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-xl mb-4">Open to Opportunities</h3>
            <div className="space-y-3 text-sm text-slate-700">
              <p className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                AI Development & Multi-agent Systems
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                Data Engineering & ETL Platforms
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                LLM Inference / Training
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                Technical Consulting & Collaboration
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl mb-6">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-2 text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm mb-2 text-slate-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-2 text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              onClick={() =>
                alert(
                  "This is a demo form. Please use the email link above to contact me directly."
                )
              }
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>

            <p className="text-xs text-slate-500 text-center">
              Note: This is a demo form. Please use the email link above for
              direct contact.
            </p>
          </form>
        </div>
      </div>

      {/* Additional CTA */}
      <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-12 text-center">
        <h2 className="text-3xl text-white mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Whether you have a project in mind, need consultation, or just want to
          connect, I'd love to hear from you.
        </p>
        <a
          href="mailto:zhm0044@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          Email Me Directly
        </a>
      </div>
    </main>
  );
}