import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { SkillTag } from './components/SkillTag';
import { Code, Camera } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Section title="About Me">
          <Card>
            <p className="text-gray-600 leading-relaxed">
              I am a dedicated B.Tech student at SR University with a strong focus on Artificial Intelligence and Machine Learning. 
              With a CGPA of 9.40, I combine academic excellence with practical experience in software development and AI applications. 
              I'm passionate about leveraging technology to solve real-world problems and continuously expanding my knowledge in the field.
            </p>
          </Card>
        </Section>

        <Section title="Education">
          <Card>
            <h3 className="text-xl font-semibold text-indigo-900">SR University</h3>
            <p className="text-gray-600 mt-2">B.Tech in Computer Science (AI & ML)</p>
            <p className="text-gray-600">2022 - 2026</p>
            <p className="text-indigo-600 font-semibold mt-2">CGPA: 9.55</p>
          </Card>
        </Section>

        <Section title="Personal Projects">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-xl font-semibold text-indigo-900">Infant Mortality Rate Prediction</h3>
              <p className="text-gray-600 mt-2">
                Developed a machine learning model using logistic regression achieving 85%+ accuracy in predicting infant mortality rates.
              </p>
              <div className="flex gap-2 mt-4">
                <SkillTag name="Machine Learning" />
                <SkillTag name="Python" />
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-indigo-900">Banking Management System</h3>
              <p className="text-gray-600 mt-2">
                Built a secure web application featuring AES-256 encryption and OTP-based login system.
              </p>
              <div className="flex gap-2 mt-4">
                <SkillTag name="Web Development" />
                <SkillTag name="Security" />
              </div>
            </Card>
          </div>
        </Section>

        <Section title="Skills">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-xl font-semibold text-indigo-900 flex items-center gap-2">
                <Code size={20} className="text-indigo-600" />
                Technical Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Python', 'Java', 'Go', 'C', 'Dart', 'TensorFlow', 'Scikit-learn', 'Git'].map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-indigo-900 flex items-center gap-2">
                <Camera size={20} className="text-indigo-600" />
                Creative Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Photography', 'Videography', 'Cooking'].map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </Card>
          </div>
        </Section>

        <Section title="Soft Skills">
          <Card>
            <ul className="list-disc list-inside text-gray-600">
              <li>Creative Thinking</li>
              <li>Problem-Solving</li>
              <li>Teamwork and Collaboration</li>
              <li>Effective Communication</li>
              <li>Adaptability</li>
            </ul>
          </Card>
        </Section>

        <Section title="Certifications">
          <Card>
            <ul className="list-disc list-inside text-gray-600">
              <li>Data Structures and Algorithms</li>
              <li>Project Management</li>
              <li>Git Version Control</li>
              <li>Innovation and Creative Thinking</li>
            </ul>
          </Card>
        </Section>

        <Section title="Achievements">
          <Card>
            <ul className="list-disc list-inside text-gray-600">
              <li>Participated in multiple coding hackathons</li>
              <li>Successfully competed in mock stock market events</li>
              <li>Served as Literary Captain, demonstrating leadership abilities</li>
            </ul>
          </Card>
        </Section>
      </main>

      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center">© 2024 Tokala Dhanush Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
