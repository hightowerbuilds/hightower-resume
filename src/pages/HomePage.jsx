import './HomePage.css';
import { useState } from 'react';
import Experience from '../components/Experience';
import PersonalInfo from '../components/PersonalInfo';
import CreativeWriting from '../components/CreativeWriting';

export default function HomePage() {

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const sectionData = [
    { name: 'contact info', component: <PersonalInfo /> },
    { name: 'employment experience', component: <Experience /> },
    { name: 'creative writing', component: <CreativeWriting /> },
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
        <h1 className='mainNameTitle'>Luke Hightower</h1>
        {sectionData.map((section) => (
          activeSection === section.name && section.component
        ))}
      </div>
    </div>
  );
}
