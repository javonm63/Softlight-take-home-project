import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Docs from './pages/docs'
import Home from './pages/home'
import NotFound from "./pages/notFound";
import Support from "./pages/support";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
