import './App.css';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      {/* <Route path="demo-vite-react"> */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
