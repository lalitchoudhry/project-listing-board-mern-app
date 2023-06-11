import { BrowserRouter, Routes, Route } from "react-router-dom";


// all utils import
import AppContext from "./utils/context";

// all components imports
import Register from './pages/Registration/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
