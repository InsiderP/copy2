import './App.css'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Form from './Components/Form'
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom"
function App() {
  return (
    <>
    <Navbar2/>
    <Router>
      <Routes>
        <Route exact path="/party" element={<Form/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
