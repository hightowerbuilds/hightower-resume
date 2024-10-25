import './Development.css'

export default function Development() {
  return (
    <div>
      <h2 className='webDevTitle'>projects in web development</h2>
      <ul style={{ marginLeft: '5%'}}>
        <li>
          <a href="https://the-slurping-slug-app.vercel.app/" target='blank'>Sluglicker (band & graphic art)</a>
        </li>
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
