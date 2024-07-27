import './HomePage.css';
import { useState } from 'react';
import Experience from '../components/Experience/Experience';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import CreativeWriting from '../components/CreativeWriting/CreativeWriting';
import LandingContent from '../components/LandingContent/LandingContent';
import Education from '../components/Education/Education';
import Blog from '../components/Blog/Blog';
import Development from '../components/Development/Development';

export default function HomePage() {

  const [activeSection, setActiveSection] = useState('home');

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const sectionData = [
    { name: 'home',             component: <LandingContent />},
    { name: 'employment',       component: <Experience /> },
    { name: 'education',        component: <Education /> },
    { name: 'web dev',          component: <Development />},
    { name: 'creative',         component: <CreativeWriting /> },
    { name: 'blog',             component: <Blog />},
    { name: 'contact',          component: <PersonalInfo /> },
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
        <h1 className='mainNameTitle'>Luke Hightower's Portfolio & Resume</h1>
        {sectionData.map((section) => (
          activeSection === section.name && section.component
        ))}
      </div>
    </div>
  );
}
