import { Link } from 'react-router-dom'
import './CreativeWriting.css'

export default function CreativeWriting() {
  return (
    <div>
        <h2 className='creativeWritingTitle'>Creative Writing</h2>

        <p className='creativeWritingLinkList'>
          <Link to='/PrettyNoPerspective'>Pretty No Perspective</Link>
        </p>
       


    </div>
  )
}
