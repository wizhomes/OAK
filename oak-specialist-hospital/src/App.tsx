/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Booking from './pages/Booking';
import Emergency from './pages/Emergency';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Toaster } from '../components/ui/sonner';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Toaster position="top-right" expand={true} richColors />
    </Router>
  );
}
