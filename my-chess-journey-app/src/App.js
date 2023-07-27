import Blog from "./components/Blog"
import LatestGame from "./components/LatestGame"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Login from "./components/Login"



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



export default function App() {
  return (
    <Router>
      <div className="container mt-3">
        <header className="mb-3">
          <NavBar/>
        </header>
        <main style={{ minHeight: "90vh" }}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/latestGame" element={<LatestGame/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
