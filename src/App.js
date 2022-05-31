import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Job1 from './components/jobs/Job1';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
          <Route path="/careers/job1" element={<Job1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>

  );
}

export default App;
