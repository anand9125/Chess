import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './screen/LandingPage'
import GamePage from './screen/GamePage'

function App() {


  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/game" element={<GamePage></GamePage>} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
