import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Recorder from './components/Protected/Recorder'
import ResetPassword from './components/ResetPassword'
import { Routes, Route} from 'react-router-dom';
import MainScreen from './components/Protected/MainScreen'

import Questions from './components/Protected/Questions'

const App = ()=> {
  
  return (
    <>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recorder" element={<Recorder />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/in" element={<MainScreen />} />
      </Routes>
    </>
  )
}

export default App