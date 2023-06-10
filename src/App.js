import { BrowserRouter, Routes, Route } from "react-router-dom";

// all components imports
import Register from './pages/Registration/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
