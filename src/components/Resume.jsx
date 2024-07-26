import { useState } from 'react'
import './Resume.css'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'

export default function Resume() {


    const [ nameToggle, setNameToggle ] = useState(false)
    const [ employmentToggle, setEmploymentToggle ] = useState(false)




    const handleToggleOpen = () => {
        setNameToggle(true)
    }

    const handleToggleClose = () => {
        setNameToggle(false)
    }

    const handleEmpToggleOpen = () => {
        setEmploymentToggle(true)
    }

    const handleEmpToggleClose = () => {
        setEmploymentToggle(false)
    }


  return (
    <div className="mainBox">
      <div className='headingBox'>
    
    { nameToggle ?  <><PersonalInfo /> <button onClick={handleToggleClose}>close info</button></>  : <button className='openInfoButton' onClick={handleToggleOpen}>personal info</button>}
     
      </div>
     
    { employmentToggle ? <><button onClick={handleEmpToggleClose}>close info</button><Experience /> </> : <button className='openEmpButton' onClick={handleEmpToggleOpen}>employment experience</button>}

    </div>
  )
}
