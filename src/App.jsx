import {Route, Routes} from 'react-router-dom'
import './App.css'
import Start from '../Sites/Start'
import DE from '../Sites/DE'
import PL from '../Sites/PL'
function App() {
  return (
    <>
       <Routes>
        <Route path='/Blog' exact element={<Start/>}  />
        <Route path='/Blog/DE' element={<DE/>}  />
        <Route path='/Blog/PL' element={<PL/>}  />
       </Routes>
    </>
  )
}

export default App
