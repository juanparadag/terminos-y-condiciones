import { Routes, Route} from 'react-router-dom';
import Credenciales from "./pages/Credenciales"
import Tyc from "./pages/Tyc"

function App() {
    

  return (
    <>
      <Routes>
        <Route path="/" element={<Tyc />} />
        <Route path="/credenciales" element={<Credenciales />} />
      </Routes>
    </>
  )
}

export default App
