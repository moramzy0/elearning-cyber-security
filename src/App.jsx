

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Cart from './pages/Cart'
import Tracks from './pages/Tracks'
import TrackDetail from './pages/TrackDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracks" element={<Tracks />} />
      <Route path="/track/:id" element={<TrackDetail />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App
