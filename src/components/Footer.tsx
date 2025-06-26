import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about creating innovative solutions through technology. 
              Always eager to learn and contribute to meaningful projects.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Education', 'Projects', 'Skills', 'Certifications', 'Resume'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/sriramyadav451" className="text-gray-300 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sriram-yadav-277b68324" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ysriram64@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Feel free to reach out for collaboration opportunities or just to connect!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Sriram  • © 2025 All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;