import './App.css'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ResetPassword from './components/ResetPassword'
import { Routes, Route} from 'react-router-dom';

const App = ()=> {
  
  return (
    <>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </>
  )
}

export default App