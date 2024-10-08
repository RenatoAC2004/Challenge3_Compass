import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { userLoggedIn } = useAuth();


  return userLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
