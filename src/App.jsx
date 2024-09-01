import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';

// Importando routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page404 from './Pages/Page404';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className='main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
