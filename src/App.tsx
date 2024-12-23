import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { PostDetail } from './pages/PostDetail';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { AdminDashboard } from './pages/AdminDashboard';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { PublicRoute } from './components/PublicRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/categoria/:categorySlug" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/login" 
                     element={
                      <PublicRoute>
                        <Login />
                      </PublicRoute>
                     } 
                     />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/privacypolicy" element ={<PrivacyPolicy />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
