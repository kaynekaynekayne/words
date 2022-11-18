import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
