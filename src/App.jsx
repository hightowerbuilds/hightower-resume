import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
   <Routes>
      <Route path="/" element={<HomePage />}/>
   </Routes>
  )
}
