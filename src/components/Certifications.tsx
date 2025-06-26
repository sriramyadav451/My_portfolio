import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title:"Programming in Java",
      issuer: "NPTEL (IIT/National Programme on Technology Enhanced Learning)",
      date: "Jan–Apr 2024",
      status: "Completed",
      description: "12-week course covering core Java programming concepts including OOP, exception       handling, collections, multithreading, and applet development.",
      credentialId: "NPTEL24CS43S1057401067",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Operations",
      issuer: "AWS Academy",
      date: "March 19, 2025",
      status: "Completed",
      description: "40-hour course focusing on AWS Cloud operations including monitoring, automation, incident response, and account management using AWS services.",
      credentialId: "https://www.credly.com/go/wgMRwJEL",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "March 16, 2025",
      status: "Completed",
      description: "20-hour introductory course covering AWS core services, security, architecture, pricing, and support.",
      credentialId: "https://www.credly.com/go/wvxh9Mfg",
    },
    {
      title: "Mastering Generative AI and ChatGPT",
      issuer: "GeeksforGeeks",
      date: "2025",
      status: "Completed",
      description: "5-week course focused on mastering Generative AI concepts and hands-on experience with ChatGPT.",
      credentialId: "https://media.geeksforgeeks.org/courses/certificates/18facd51d6f8bc2bc0933d904281e811.pdf",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and courses that enhance my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                    <p className="text-gray-600 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  cert.status === 'Completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {cert.status === 'Completed' ? (
                    <CheckCircle size={16} className="mr-1" />
                  ) : null}
                  {cert.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{cert.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  <div>
                    <span className="font-medium">ID: </span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                </div>
                <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors">
                  <span>View</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Continuously learning and expanding my skill set through professional development
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;