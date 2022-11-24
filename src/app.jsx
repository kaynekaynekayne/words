import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Home from './pages/homes/home';
import styles from './app.module.css';
import Quiz from './pages/quiz/quiz';


function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
