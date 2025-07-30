import React from 'react';

const projects = [
  {
    title: 'Smart Planner',
    description: 'An AI-powered task planner that analyzes monthly productivity and habits.',
    tech: ['React Native', 'AI', 'MongoDB'],
    github: 'https://github.com/yourusername/smart-planner',
    demo: '',
  },
  {
    title: 'MunchMate',
    description: 'A food ordering platform with cart, inventory, and admin features.',
    tech: ['React', 'MongoDB', 'Node.js'],
    github: 'https://github.com/yourusername/munchmate',
    demo: '',
  },
  {
    title: 'Vox AI',
    description: 'Generate podcasts from text using AI voice synthesis and summarization.',
    tech: ['Next.js', 'OpenAI', 'Tailwind'],
    github: 'https://github.com/yourusername/vox-ai',
    demo: '',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-16 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-md text-left"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="text-sm text-gray-400 mb-4">
              Tech: {project.tech.join(', ')}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
