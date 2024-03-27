import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ProjectPage from './pages/ProjectPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css';


function App() {

  return (
    <Router>
    <>
      <Routes> 
        <Route exact path="/" element={<ProjectPage />} />
      </Routes> 
    </>
    </Router>
  );
}

export default App
