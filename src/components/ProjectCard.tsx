import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export function ProjectCard({ title, description, tags, githubUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
      >
        <Github className="w-4 h-4" />
        View on GitHub
      </a>
    </div>
  );
}
