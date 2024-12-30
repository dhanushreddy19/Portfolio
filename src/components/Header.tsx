import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="https://i.ibb.co/b5j9Rhq/Whats-App-Image-2024-12-30-at-10-00-46-ca2dd49f.jpg" 
            alt="Tokala Dhanush Reddy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">Tokala Dhanush Reddy</h1>
          <p className="text-xl text-indigo-100">AI ML Engineer | BTech 2026</p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a 
              href="mailto:dhanushreddy1912@gmail.com" 
              className="flex items-center gap-2 text-white hover:text-indigo-200 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/dhanushreddy19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-indigo-200 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/dhanushreddytokala/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-white hover:text-indigo-200 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}