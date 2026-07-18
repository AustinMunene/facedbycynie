import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
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
import { BackToTop } from './components/ui/BackToTop';
// --- TEMPORARY birthday surprise (lazy so it stays out of the main bundle) ---
import { BIRTHDAY, AUTO_REDIRECT_ON_BIRTHDAY } from './birthday/config';
const BirthdayExperience = lazy(() => import('./birthday/BirthdayExperience'));

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
        {/* Catch-all: never leave a visitor on a broken/blank URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

/** Optional: on her birthday, send visitors to the surprise once per session. */
function BirthdayGate() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!AUTO_REDIRECT_ON_BIRTHDAY) return;
    const now = new Date();
    const isBirthday =
      now.getMonth() + 1 === BIRTHDAY.month && now.getDate() === BIRTHDAY.day;
    if (
      isBirthday &&
      location.pathname === '/' &&
      sessionStorage.getItem('bday_redirected') !== '1'
    ) {
      sessionStorage.setItem('bday_redirected', '1');
      navigate('/birthday');
    }
  }, [navigate, location.pathname]);
  return null;
}

function AppShell() {
  const location = useLocation();

  // Birthday surprise renders full-screen, without the site chrome.
  if (location.pathname === '/birthday') {
    return (
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <BirthdayExperience />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <BirthdayGate />
      <Header />
      <main className="flex-1">
        <AnimatedRoutes />
        <ScrollToTop />
      </main>
      <Footer />
      <StickyBookButton />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <Router>
        <AppShell />
      </Router>
    </AdminProvider>
  );
}
