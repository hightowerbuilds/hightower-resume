
import './HomePage.css'
import { useState } from 'react'
import Experience from './Experience'
import PersonalInfo from './PersonalInfo'

export default function HomePage() {


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
    <div className='mainBox'>


      <div className='sideBar'>
        { nameToggle ? <button className='openInfoButton' onClick={handleToggleClose}>close info</button> :   <button className='openInfoButton' onClick={handleToggleOpen}>personal info</button>}
        { employmentToggle ? <button className='openEmpButton' onClick={handleEmpToggleClose}>close info</button> : <button className='openEmpButton' onClick={handleEmpToggleOpen}>employment experience</button>}
      </div>
       
      <div className='mainHomeSection'>
      { nameToggle ?  <PersonalInfo />  : ''}
      { employmentToggle ? <Experience /> : ''}
      </div>

    </div>
  )
}




