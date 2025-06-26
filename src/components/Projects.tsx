import React from 'react';
import { ExternalLink, Github, Code, Brain, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Resume screening using NLp",
      description: "Built an AI-powered recommendation system using NLP and collaborative filtering to analyze user behavior and content. Delivered personalized suggestions by processing textual data with machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "Pandas", "Flask", "React", "NLTK / spaCy"],
      icon: <Brain className="text-blue-500" size={24} />,
      category: " Natural Language Processing",
    },
    {
      title: "Disease Prediction",
      description: "Developed a responsive web app using Streamlit to predict diseases (e.g., diabetes, heart disease, liver conditions) from symptoms, and recommend medications via ML models.",
      technologies: ["Python", "Streamlit", "scikit-learn", "Pandas", "NumPy", "NLTK (for text processing)", "TF‑IDF", "Plotly/Matplotlib"],
      icon: <Database className="text-green-500" size={24} />,
      category: "Natural Language Processing",
    },
    {
      title: "Weather Application",
      description: " Built a responsive weather app using vanilla JavaScript that fetches real-time weather data via a public API, allowing users to view current conditions, temperature, humidity, and a multi‑day forecast.",
      technologies: ["HTML", "CSS", "JavaScript", "third‑party weather API" ],
      icon: <Code className="text-purple-500" size={24} />,
      category: "Web Development",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my academic and personal projects demonstrating my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Github size={20} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;