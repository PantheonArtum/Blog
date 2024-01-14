import {Route, Routes} from 'react-router-dom'
import './App.css'
import Start from '../Sites/Start'
import DE from '../Sites/DE'
import PL from '../Sites/PL'
function App() {
  return (
    <>
       <Routes>
        <Route path='/' exact element={<Start/>}  />
        <Route path='/DE' element={<DE/>}  />
        <Route path='/PL' element={<PL/>}  />
       </Routes>
    </>
  )
}

export default App
