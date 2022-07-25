import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import NavBar from './Components/Home/NavBar'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<NavBar/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/skills'></Route>
          <Route path='/proyects'></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
