
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import PrettyPage from './pages/PrettyPage';


export default function App() {
  return (
   <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path='/PrettyNoPerspective' element={<PrettyPage />} />
   </Routes>
  )
}
