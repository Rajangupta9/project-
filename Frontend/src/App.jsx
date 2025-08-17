import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Login } from './component/Auth/Login';
import { Signup } from './component/Auth/Signup';




const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token') != null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
  
export const App = () => {
  return (
    <Router>
    
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoutes>
            }
          />

          <Route
            path="/tasks"
            element={
              <ProtectedRoutes>
                <DashboardLayout>
                  <Tasks />
                </DashboardLayout>
              </ProtectedRoutes>
            }
          />

          <Route path="/message" element={<DashboardLayout />} />
          <Route path="/calendar" element={<DashboardLayout />} />
          <Route path="/files" element={<DashboardLayout />} />
          <Route path="/request" element={<DashboardLayout />} />
          <Route path="/contact" element={<DashboardLayout />} /> */}

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
 
    </Router>
  );
};

export default App;
