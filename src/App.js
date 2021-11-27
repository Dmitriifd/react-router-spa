import React from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { About } from './pages/About'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

function App() {


  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exac path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )

}

export default App;
