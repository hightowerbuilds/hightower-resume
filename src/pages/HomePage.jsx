
import './HomePage.css'
import { useState } from 'react'
import Experience from '../components/Experience'
import PersonalInfo from '../components/PersonalInfo'
import CreativeWriting from '../components/CreativeWriting'

export default function HomePage() {

  const [ nameToggle, setNameToggle ] = useState(false)
  const [ employmentToggle, setEmploymentToggle ] = useState(false)
  const [ writingToggle, setWritingToggle ] = useState(false)

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

  const handleWriteToggleOpen = () => {
  setWritingToggle(true)
}

const handleWriteToggleClose = () => {
   setWritingToggle(false)
}


  return (
    <div className='mainBox'>


      <div className='sideBar'>
        { nameToggle ? <button className='openInfoButton' onClick={handleToggleClose}>close info</button> :   <button className='openInfoButton' onClick={handleToggleOpen}>contact info</button>}
        { employmentToggle ? <button className='openEmpButton' onClick={handleEmpToggleClose}>close info</button> : <button className='openEmpButton' onClick={handleEmpToggleOpen}>employment experience</button>}
        { writingToggle ? <button className='openEmpButton' onClick={handleWriteToggleClose}>close info</button> : <button className='openEmpButton' onClick={handleWriteToggleOpen}>creative writing</button>}
      </div>
       
      <div className='mainHomeSection'>
        <h1 className='mainNameTitle'>Luke Hightower</h1>
        { nameToggle ?  <PersonalInfo />  : ''}
        { employmentToggle ? <Experience /> : ''}
        { writingToggle ? <CreativeWriting/> : ''}
      </div>

    </div>
  )
}




