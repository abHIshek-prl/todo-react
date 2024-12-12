import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './pages/todo.jsx';
import Land from './pages/Land.jsx';

function App() {
  

  return (
    <>
        

       <Router>
      <Routes>
        <Route path="/" element={<Land/>} />
        <Route path="/home" element={<Todo/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
