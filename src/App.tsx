import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import NavbarFile from "./components/Navbar"

function App() {
 
  return (
<div>
  <NavbarFile />
  <div>
   <Routes>
    <Route path="/" element={<Home />} />
    </Routes> 
  </div>
</div>
  )
}

export default App
