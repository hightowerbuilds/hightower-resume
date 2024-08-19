import './HomePage.css';
import { useState } from 'react';
import Experience from '../components/Experience/Experience';
import PersonalInfo from '../components/PersonalInfo/PersonalInfo';
import CreativeWriting from '../components/CreativeWriting/CreativeWriting';
import LandingContent from '../components/LandingContent/LandingContent';
import Education from '../components/Education/Education';
import Blog from '../components/Blog/Blog';
import Development from '../components/Development/Development';
import eagle from '../images/eagle.jpg'
import selfie from '../images/selfie.png'

export default function HomePage() {

  const [activeSection, setActiveSection] = useState('');

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const sectionData = [
    { name: 'home',          component: <LandingContent />},
    { name: 'employment',    component: <Experience /> },
    { name: 'education',     component: <Education /> },
    { name: 'web dev',       component: <Development />},
    { name: 'creative',      component: <CreativeWriting /> },
    { name: 'blog',          component: <Blog />},
    { name: 'contact',       component: <PersonalInfo /> },
  ];

  return (
    <div className='mainBox'>
      <div className='sideBar'>
      <img className='selfieFrame' src={selfie} alt="big ol face goes right here" />
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
        
        {activeSection ? sectionData.map((section) => (
          activeSection === section.name && section.component
        )) : <>  
                
                <div style={{
                  display: 'flex',
                  width: '70%',
                  justifyContent: 'center',
                  padding: '1em'
                }}>
                <img className='selfieFrameLarge' src={eagle} alt="bigface goes right here" /> 
                </div>
             
                <p style={{fontFamily: 'courier', fontSize: 16, paddingLeft: '5em'}}>Coupeville, WA Jan. 2024</p>

                <div>
                  {sectionData.map((section) => (
                <div
                  style={{
                    display: 'inline-flex',
                    border: '1px aliceblue solid',
                    borderRadius: '15px',
                    justifyContent: 'space-evenly',
                    padding: '1em',
                    margin: '.5em',
                  }}
                  key={section.name}
                  onClick={() => toggleSection(section.name)}>
                {activeSection === section.name ? 'close' : section.name}
                </div>
        ))}
                  </div>
            </>
          }
      
      </div>
    </div>
  );
}
