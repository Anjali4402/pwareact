import { Nav, Navbar, Container } from 'react-bootstrap';
import Home from './Component/Home';
import About from './Component/About';
import User from './Component/User';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ScannerReader from './Component/ScannerReader';
import QRGenerator from './Component/QRGenerator';


function App() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/scan">Scan</Nav.Link>
              <Nav.Link as={Link} to="/generate">Generate</Nav.Link>
              <Nav.Link as={Link} to="/user">Users</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<ScannerReader/>} />
          <Route path="/generate" element={<QRGenerator/>} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
