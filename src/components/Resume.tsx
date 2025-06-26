import React from 'react';
import { Download, FileText, Eye, Share2 } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download my complete resume or view it online
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
                <FileText className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional Resume</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A comprehensive overview of my education, skills, projects, and certifications. 
                Available in PDF format for easy download and sharing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Eye className="text-blue-500 mx-auto mb-3" size={24} />
                  <h4 className="font-semibold text-gray-900 mb-2">View Online</h4>
                  <p className="text-sm text-gray-600">Preview my resume directly in your browser</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Download className="text-green-500 mx-auto mb-3" size={24} />
                  <h4 className="font-semibold text-gray-900 mb-2">Download PDF</h4>
                  <p className="text-sm text-gray-600">Get a copy in PDF format</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Share2 className="text-purple-500 mx-auto mb-3" size={24} />
                  <h4 className="font-semibold text-gray-900 mb-2">Share</h4>
                  <p className="text-sm text-gray-600">Easy sharing with employers</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Download Button */}
              <a
                href="/resume.pdf"
                download
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>

              {/* View Online Button */}
              <a
                href="/Resume sriramyadav.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Eye size={20} />
                <span>View Online</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-white/50 rounded-xl">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
