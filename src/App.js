import './App.css';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Tasks from './Pages/Home/Tasks';
import ToDo from './Pages/Home/ToDo';
import Calender from './Pages/Home/Calender';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Tasks" element={<Tasks />} />
        <Route path="Tasks" element={<ToDo />} />
        <Route path="Tasks" element={<Calender />} />
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
