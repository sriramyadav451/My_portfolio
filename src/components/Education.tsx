import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI-ML)",
      institution: "Malla Reddy University",
      location: "Hyderabad",
      period: "2022 - 2026",
      grade: "CGPA: 8.59",
      status: "Current",
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Narayana Junior College",
      location: "Bongulur, Hyderabad",
      period: "2020 - 2022",
      grade: "Percentage: 94%",
      status: "Completed",
    },
    {
      degree: "Cental Board of Secondary Education(10th Grade)",
      institution: "Kothakota pupils School",
      location: "Kothakota, Wanaparthy",
      period: "2020",
      grade: "Percentage: 77%",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-gray-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} className="text-gray-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award size={16} className="text-gray-400" />
                      <span className="font-semibold text-blue-600">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;