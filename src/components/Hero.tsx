import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  EERLA SRIRAM YADAV
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Aspiring AI/ML Engineer & Full-Stack Developer
              </p>
              <p className="text-lg text-gray-500 max-w-xl">
                Passionate computer science student specializing in AI/ML with a drive to create 
                innovative solutions that bridge technology and real-world problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                Get In Touch
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div className="flex space-x-6 pt-4">
              <a href="https://github.com/sriramyadav451" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sriram-yadav-277b68324" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ysriram64@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-2">
                <img 
                  src={profileImage} 
                  alt="Eerla Sriram Yadav" 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;