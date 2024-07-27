import { Link } from 'react-router-dom'
import './PersonalInfo.css'

export default function PersonalInfo() {
  return (
    <div className='personalInfoMainBox'>
          <Link className='github' to="https://www.linkedin.com/in/luke-hightower-a31a231a5/">LinkedIn</Link>
        <Link className='github' to="https://github.com/hightowerbuilds">GitHub</Link>
        <p className='personalInfo'>
          (503) 341-2655
          <br />
          lukehightower11@gmail.com
          <br />
          1107 HALSEY DR. COUPEVILLE, WA 98239
          <br />
        
        </p>
    </div>
  )
}
