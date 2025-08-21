import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './Pages/Student/Home';
import CoursesList from './Pages/Student/CoursesList';
import CoursesDetails from './Pages/Student/CourseDetails';
import MyEnrollments from './Pages/Student/MyEnrollments';
import Player from './Pages/Student/Player';
import Loading from './Components/Student/Loading';
import Educator from './Pages/Educator/Educator';
import Dashboard from './Pages/Educator/Dashboard';
import AddCourse from './Pages/Educator/AddCourse';
import MyCourses from './Pages/Educator/MyCourses';
import StudentsEnrolled from './Pages/Educator/StudentsEnrolled';
import Navbar from './Components/Student/Navbar';
import "quill/dist/quill.snow.css";
import {ToastContainer, toast} from 'react-toastify';

const App = () => {
  const isEducatorRoute=useMatch('/educator/*');
  return (
    <div className='text-default min-h-screen bg-white'>
    <ToastContainer/>
      {!isEducatorRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course-list/:input' element={<CoursesList/>}/>
        <Route path='/course/:id' element={<CoursesDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:id' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='/educator' element={<Educator/>}>
            <Route path='/educator' element={<Dashboard/>}/>
            <Route path='add-course' element={<AddCourse/>}/>
            <Route path='my-course' element={<MyCourses/>}/>
            <Route path='students-enrolled' element={<StudentsEnrolled/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App