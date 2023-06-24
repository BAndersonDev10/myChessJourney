import Blog from "./components/Blog"
import GameOfTheDay from "./components/GameOfTheDay"
import Home from "./components/Home"
import NavBar from "./components/NavBar"



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
            <Route path="/gameOfTheDay" element={<GameOfTheDay/>}/>
          </Routes>
        </main>

      </div>
    </Router>
  );
}