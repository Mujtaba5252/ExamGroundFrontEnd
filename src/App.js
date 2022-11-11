import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import ContactUs from './Components/ContactUs';
import ErrorPage from './Components/ErrorPage';
import Feature from './Components/Feature';
import HomePage from './Components/HomePage';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import StudentDashbaord from './Components/StudentDashbaord';
import TeacherDashboard from './Components/TeacherDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} ></Route>
          <Route path='/Feature' element={<Feature/>}></Route>
          <Route path='/ContactUs' element={<ContactUs/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/TeacherDashboard' element={<TeacherDashboard/>}></Route>
          <Route path='/StudentDashboard' element={<StudentDashbaord/>}></Route>

          <Route path='/*' element={<ErrorPage/>}></Route>
          

        </Routes>
      </BrowserRouter>
    
     {/* <Login/> */}
    </div>
  );
}

export default App;
