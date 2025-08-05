import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Leaderboard from './pages/leaderboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/leaderboard"
          element={isLoggedIn ? <Leaderboard /> : <Navigate to="/" />}
        />

        {/* Fallback */}
        <Route path="*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>
    </BrowserRouter>
  );
}
