import './Development.css'

export default function Development() {
  return (
    <div>
      <h2 className='webDevTitle'>projects in web development</h2>
      <ul style={{ marginLeft: '5%'}}>
        <li>
          <a href="https://the-slurping-slug-app.vercel.app/">SlugLicker (band & graphic art)</a>
        </li>
        <li>
          <a href="https://smash-burger-app.vercel.app/">Smash Burger Bros. (food truck)</a>
        </li>
      </ul>
    </div>
  )
}
