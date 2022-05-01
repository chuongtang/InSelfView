import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Recorder from './components/Protected/Recorder'
import ResetPassword from './components/ResetPassword'
import { Routes, Route} from 'react-router-dom';
import MainScreen from './components/Protected/MainScreen'
import { useDispatch, useSelector } from "react-redux";

import Questions from './components/Protected/Questions'

const App = ()=> {
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/in" element={<MainScreen />} />
      </Routes>
    </>
  )
}

export default App