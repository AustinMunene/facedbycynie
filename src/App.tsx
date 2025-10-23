import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ServicesPage } from './pages/ServicesPage';
import { BookingPage } from './pages/BookingPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminRoute } from './features/admin/components/AdminRoute';
import { AdminProvider } from './features/admin/contexts/AdminContext';
import ScrollToTop from './components/ScrollToTop';
import { StickyBookButton } from './components/ui/StickyBookButton';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/post/:id" element={<BlogPostPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <AnimatedRoutes />
            <ScrollToTop />
          </main>
          <StickyBookButton />
        </div>
      </Router>
    </AdminProvider>
  );
}
