import React from 'react';
import { Code, Database, Brain, PenTool as Tool, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming",
      icon: <Code className="text-blue-500" size={24} />,
      skills: ["Python", "Java", "SQL"],
    },
    {
      category: "Web Development",
      icon: <Code className="text-green-500" size={24} />,
      skills: ["HTML", "CSS", "JavaScript", "React (basics)"],
    },
    {
      category: "Machine Learning",
      icon: <Brain className="text-purple-500" size={24} />,
      skills: ["Scikit-learn", "TensorFlow", "Keras"],
    },
    {
      category: "Data Science",
      icon: <Database className="text-orange-500" size={24} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      category: "Databases",
      icon: <Database className="text-red-500" size={24} />,
      skills: ["MySQL", "MongoDB (basics)"],
    },
    {
      category: "Tools & Platforms",
      icon: <Tool className="text-gray-600" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    },
    {
      category: "NLP",
      icon: <Brain className="text-indigo-500" size={24} />,
      skills: ["NLTK", "spaCy", "Hugging Face (basics)"],
    },
    {
      category: "APIs",
      icon: <Tool className="text-teal-500" size={24} />,
      skills: ["REST API basics", "OpenAI API"],
    },
  ];

  const softSkills = [
    { skill: "Problem Solving", icon: <Lightbulb className="text-yellow-500" size={20} /> },
    { skill: "Critical Thinking", icon: <Brain className="text-purple-500" size={20} /> },
    { skill: "Communication Skills", icon: <Users className="text-blue-500" size={20} /> },
    { skill: "Team Collaboration", icon: <Users className="text-green-500" size={20} /> },
    { skill: "Time Management", icon: <Tool className="text-orange-500" size={20} /> },
    { skill: "Adaptability", icon: <Lightbulb className="text-red-500" size={20} /> },
    { skill: "Continuous Learning Attitude", icon: <Brain className="text-indigo-500" size={20} /> },
    { skill: "Project Presentation Skills", icon: <Users className="text-teal-500" size={20} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Code className="mr-3 text-blue-600" size={28} />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h4 className="font-semibold text-gray-900 ml-3">{category.category}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white px-3 py-2 rounded-lg text-sm text-gray-700">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Lightbulb className="mr-3 text-yellow-500" size={28} />
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-3 text-gray-800 font-medium">{item.skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;