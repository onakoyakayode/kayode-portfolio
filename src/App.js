import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';
import Contact from './Component/Contact/Contact';


function App() {  

  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
        <Routes>
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        <Routes>
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
