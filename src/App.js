import { BrowserRouter, Routes, Route } from "react-router-dom";

// all components imports
import Register from './pages/Registration/Register';
import Login from './pages/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
