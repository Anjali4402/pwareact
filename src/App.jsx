import { Nav, Navbar, Container } from 'react-bootstrap';
import Home from './Component/Home';
import About from './Component/About';
import User from './Component/User';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ScannerReader from './Component/ScannerReader';
import QRGenerator from './Component/QRGenerator';
import LanguageSelector from './Component/Language/LanguageSelector';
import { useTranslation } from 'react-i18next';


function App() {

  const { t } = useTranslation();

  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container  className='d-flex flex-column flex-d-row'>
         <div>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">{t('home')}</Nav.Link>
              <Nav.Link as={Link} to="/scan">{t('scan')}</Nav.Link>
              <Nav.Link as={Link} to="/generate">{t('generate')}</Nav.Link>
            </Nav>
         </div>

            <div>
            <LanguageSelector />
            </div>
          </Container>
        </Navbar>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<ScannerReader/>} />
          <Route path="/generate" element={<QRGenerator/>} />
          <Route path="/user" element={<User />} />
        </Routes> */}


        {/* <LanguageSelector /> */}

      </Router>
    </>
  );
}

export default App;
