import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AdminLogin() {
  const mockLogin = async (email, password) => {
    // Simulate a successful login for the provided credentials
    if (email === 'admin@cynthiachiuri.com' && password === 'Cynie1998') {
      return Promise.resolve('Login successful');
    } else {
      return Promise.reject(new Error('Invalid email or password'));
    }
  };

  const [error, setError] = useState('');

  const handleLogin = async () => {
    const email = 'admin@cynthiachiuri.com';
    const password = 'Cynie1998';
    try {
      await mockLogin(email, password);
      setError(''); // Clear error on success
      alert('Logged in successfully!');
    } catch (err) {
      setError('Invalid email or password'); // Set error on failure
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm"
        >
          <h2 className="text-2xl font-semibold mb-6">Admin Login</h2>
          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
          >
            Login as Admin
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </motion.div>
      </div>
    </div>
  );
}
