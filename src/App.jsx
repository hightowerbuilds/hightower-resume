
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import PrettyPage from './pages/PrettyPage';
import Blog from './components/Blog/Blog';


export default function App() {
  return (
   <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/PrettyNoPerspective' element={<PrettyPage />} />
      <Route path='/Blog' element={<Blog />}/>
   </Routes>
  )
}
