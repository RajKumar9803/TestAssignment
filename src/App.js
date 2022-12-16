import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Error from './component/Error';
import ImageDetail from './component/ImageDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="images/:title/:Image" element={<ImageDetail />} />

          <Route path="*" element={<Error />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
