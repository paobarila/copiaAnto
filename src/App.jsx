import React, {useState, useEffect} from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme.js';
import './App.css';

//simulación de base de datos
// import data from './data/projects/projectEmpty.json';
// import data from './data/projects/oneProject.json';
// import data from './data/projects/projects.json';
import data from './data/projectsWhitChat/projects.json';
    
function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      setProjects(data.projects);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home projects={projects} />} />
          <Route path="/project/:id" element={<Project projects={projects}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App