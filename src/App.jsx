import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Academic } from "./pages/Academic"
import { Admission } from "./pages/Admission"
import { About } from "./pages/About"
import { Header } from "./components/Header"
import { Message } from "./components/Message"
import { Footer } from "./components/Footer"




function App() {

  return (
      <BrowserRouter>
        <Header />
        <About></About>
        <Academic></Academic>
        <Admission></Admission>
        <Message></Message>
        <Footer></Footer>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/academic" element={<Academic/>}/>
          <Route path="/admission" element={<Admission/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
