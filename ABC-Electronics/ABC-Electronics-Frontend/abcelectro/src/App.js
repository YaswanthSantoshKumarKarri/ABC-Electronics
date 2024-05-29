import './App.css';
import LogIn from './Pages/SignOprPages/LogIn/LogIn';

import { Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignOprPages/SignUp/SignUp';
import Home from './Pages/HomePage/Home';
import NavBar from './Components/NavBar/NavBar';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import ReportForm from './Pages/ReportForm/ReportForm';
import ReportsList from './Pages/ReportsList/ReportsList';
import AddEngineer from './Pages/AddEngineer/AddEngineer';
import UsersList from './Pages/UsersList/UsersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/> }/>
        <Route path='/Home' element={<Home/> }/>
        <Route path='/AboutUs' element={<AboutUsPage/> }/>
        <Route path='/reportForm' element={<ReportForm/> }/>
        <Route path='/ReportsList' element={<ReportsList/> }/>
        <Route path='/AddEngineer' element={<AddEngineer/> }/>
        <Route path='/UsersList' element={<UsersList/> }/>
      </Routes>
    </div>
  );
}

export default App;
