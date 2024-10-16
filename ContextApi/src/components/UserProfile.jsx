// src/components/UserProfile.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

  return user ? (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <h1>Please log in</h1>
  );
};

export default UserProfile;
