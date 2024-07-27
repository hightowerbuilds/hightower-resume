import './HomePage.css';
import { useState } from 'react';
import Experience from '../components/Experience';
import PersonalInfo from '../components/PersonalInfo';
import CreativeWriting from '../components/CreativeWriting';
import LandingContent from '../components/LandingContent';
import Education from '../components/Education';
import Blog from '../components/Blog';

export default function HomePage() {

  const [activeSection, setActiveSection] = useState('home');

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const sectionData = [
    { name: 'home',             component: <LandingContent />},
    { name: 'employment',       component: <Experience /> },
    { name: 'education',        component: <Education /> },
    { name: 'creative',         component: <CreativeWriting /> },
    { name: 'contact info',     component: <PersonalInfo /> },
    { name: 'blog',             component: <Blog />},
  ];

  return (
    <div className='mainBox'>
      <div className='sideBar'>
        {sectionData.map((section) => (
          <button
            key={section.name}
            className='openInfoButton'
            onClick={() => toggleSection(section.name)}
          >
            {activeSection === section.name ? 'close' : section.name}
          </button>
        ))}
      </div>

      <div className='mainHomeSection'>
        <h1 className='mainNameTitle'>Luke Hightower Portfolio & Resume</h1>
        {sectionData.map((section) => (
          activeSection === section.name && section.component
        ))}
      </div>
    </div>
  );
}
