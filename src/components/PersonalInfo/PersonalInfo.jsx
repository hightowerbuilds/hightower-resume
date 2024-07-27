import { Link } from 'react-router-dom'
import './PersonalInfo.css'

export default function PersonalInfo() {
  return (
    <div className='personalInfoMainBox'>

  <ul>
    <li>
    lukehightower11@gmail.com
    </li>
    <li>
    <Link className='personalLink' to="https://github.com/hightowerbuilds">Hightower Builds (github)</Link>
    </li>
    <li>
    <Link className='personalLink' to="https://www.linkedin.com/in/luke-hightower-a31a231a5/">LinkedIn</Link>
    </li>
  </ul>

    </div>
  )
}
