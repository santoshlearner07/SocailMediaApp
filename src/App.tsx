import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import NavbarFile from "./components/Navbar"
import CreatePostPage from "./pages/CreatePostPage"

function App() {
 
  return (
<div style={{backgroundColor:"black", color:"white"}}>
  <NavbarFile />
  <div>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreatePostPage />} />
    </Routes> 
  </div>
</div>
  )
}

export default App
