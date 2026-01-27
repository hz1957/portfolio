import { ExternalLink, Github } from "lucide-react";

interface FeaturedProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    items: string[];
  }[];
  techStack: string[];
  githubUrl?: string;
  isPrivate?: boolean;
}

export function FeaturedProjectCard({
  title,
  subtitle,
  description,
  features,
  techStack,
  githubUrl,
  isPrivate = false,
}: FeaturedProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-xl border border-slate-200">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl mb-1">{title}</h3>
            <p className="text-slate-600">{subtitle}</p>
          </div>
          {isPrivate && (
            <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full">
              Private
            </span>
          )}
        </div>
        <p className="text-slate-700 leading-relaxed">{description}</p>
      </div>

      {/* Features */}
      <div className="space-y-6 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white rounded-xl p-5 shadow-sm">
            <h4 className="mb-3 text-slate-900">{feature.title}</h4>
            <ul className="space-y-2">
              {feature.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-sm mb-3 text-slate-600">Technology Stack</h4>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      {githubUrl && !isPrivate && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      )}
    </div>
  );
}
