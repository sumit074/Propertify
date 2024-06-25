import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignOut from './pages/Signout'
import SignIn from './pages/Signin'
import Profile from './pages/Profile'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
  return <BrowserRouter>
  
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sign-in" element={<SignIn/>} />
     <Route path="/sign-up" element={<SignOut/>} />
     <Route path='/profile' element={<Profile/>} />
     <Route path='/about' element={<About/>} />

    </Routes>

  </BrowserRouter>
}
