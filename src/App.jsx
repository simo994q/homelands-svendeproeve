import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Frontpage } from "./pages/Frontpage/Frontpage"
import { Housespage } from "./pages/Housespage/Housespage"
import { Housepage } from "./pages/Housepage/Housepage"
import { Loginpage } from "./pages/Loginpage/Loginpage"
import { Searchpage } from "./pages/Searchpage/Searchpage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Frontpage />} />
          <Route path="/houses" element={<Housespage />} />
          <Route path="/houses/:id" element={<Housepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/search/:query" element={<Searchpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
