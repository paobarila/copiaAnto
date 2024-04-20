import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/pages/PageLogin';
import Register from './components/pages/PageRegister';
// import Proyect from './components/pages/PageProyect';
import theme from './theme/theme.js';
import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          {/* <Route path="/*" element={<Navigate to="/Error404" /> } />  */}
        </Routes>
      </Router>

      {/* <Proyect color={theme.palette.secondary.main}/> */}
      {/* <Proyect color={theme.palette.primary.main}/> */}
      {/* <Proyect color={theme.palette.accent.main}/> */}
    </ThemeProvider>
  )
}

export default App
