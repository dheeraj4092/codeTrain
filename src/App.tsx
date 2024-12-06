import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Testimonials } from './components/home/Testimonials';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/portal/DashboardPage';
import { PortalLayout } from './components/portal/PortalLayout';
import { EnrollmentContact } from './pages/EnrollmentContact';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { StudentList } from './pages/admin/StudentList';
import { MaterialUpload } from './pages/admin/MaterialUpload';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { useThemeStore } from './store/themeStore';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}

function App() {
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/enroll" element={<EnrollmentContact />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portal" element={<PortalLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>
            <Route path="/admin" element={<PortalLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="students" element={<StudentList />} />
              <Route path="materials" element={<MaterialUpload />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
