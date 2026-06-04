import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import FullscreenMenu from './components/FullscreenMenu';
import HeroSection from './components/HeroSection';
import OurMenu from './components/OurMenu';
import ExcellentCook from './components/ExcellentCook';
import Features from './components/Features';
import BlogSection from './components/BlogSection';
import Reservation from './components/Reservation';
import CaloriesBalance from './components/CaloriesBalance';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import PortfolioGridsPage from './components/PortfolioGridsPage';
import BlogOneColumnPage from './components/BlogOneColumnPage';
import BlogTwoColumnsPage from './components/BlogTwoColumnsPage';
import SinglePostNoSidebarPage from './components/SinglePostNoSidebarPage';
import SinglePostWithSidebarPage from './components/SinglePostWithSidebarPage';
import SinglePortfolioNoSidebarPage from './components/SinglePortfolioNoSidebarPage';

function HomePage({ onMenuClick }) {
  return (
    <div className="relative">
      <Navbar onMenuClick={onMenuClick} />
      <HeroSection />
      <OurMenu />
      <ExcellentCook />
      <Features />
      <BlogSection />
      <Reservation />
      <CaloriesBalance />
      <Footer />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/"                   element={<HomePage onMenuClick={() => setMenuOpen(true)} />} />
        <Route path="/menu"               element={<MenuPage />} />
        <Route path="/contact"            element={<ContactPage />} />
        <Route path="/about"              element={<AboutPage />} />
        <Route path="/portfolio"          element={<PortfolioGridsPage />} />
        <Route path="/blogs"              element={<Navigate to="/blogs/one-column" />} />
        <Route path="/blogs/one-column"   element={<BlogOneColumnPage />} />
        <Route path="/blogs/two-columns"  element={<BlogTwoColumnsPage />} />
        <Route path="/blogs/post"         element={<SinglePostNoSidebarPage />} />
        <Route path="/blogs/post-sidebar" element={<SinglePostWithSidebarPage />} />
        <Route path="/portfolio/detail"   element={<SinglePortfolioNoSidebarPage />} />
      </Routes>

      {menuOpen && (
        <FullscreenMenu onClose={() => setMenuOpen(false)} />
      )}
    </>
  );
}

export default App;