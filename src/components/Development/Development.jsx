import './Development.css'
import sluglicker from '../../images/sluglicker.jpg'

export default function Development() {
  return (
    <div>
      <h2 className='webDevTitle'>projects in web development</h2>
      <ul style={{ marginLeft: '5%'}}>
        <p>
          <a href="https://the-slurping-slug-app.vercel.app/" target='blank'><img style={{borderRadius: '2%'}} src={sluglicker}/></a>
          <br />
          <p>(band, graphic artist)</p>
        </p>
        <li>
          <a href="https://smash-burger-app.vercel.app/" target='blank'>Smash Burger Bros. (food truck)</a>
        </li>
        <li>
          <a href="https://brontosaurus-publications.vercel.app/" target='blank'>Brontosaurus Publications</a>
        </li>
      </ul>
    </div>
  )
}
