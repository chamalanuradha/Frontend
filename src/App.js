import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Program from "./pages/Programme";
import Students from "./pages/Students";
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/programme" element={<Program/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

