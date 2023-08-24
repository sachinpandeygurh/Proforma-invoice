import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import InvoiceForm from "./components/Form";

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route exact path="/" element={<>
  <Main/>
  <Footer/>
  </>} />
  <Route  path="/add" element={<InvoiceForm/>} />
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;