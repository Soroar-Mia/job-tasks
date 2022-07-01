import './App.css';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Tasks from './Pages/Home/Tasks';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Tasks" element={<Tasks />} />
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
