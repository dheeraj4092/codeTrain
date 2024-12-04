//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Testimonials } from './components/home/Testimonials';
import { CoursesPage } from './pages/CoursePage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/portal/DashboardPage';
import { PortalLayout } from './components/portal/PortalLayout';

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
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/portal" element={<PortalLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;