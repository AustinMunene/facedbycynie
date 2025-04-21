import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';
import { AdminLogin } from '../components/admin/AdminLogin';
import { PortfolioManager } from '../components/admin/PortfolioManager';
import { HomepageManager } from '../components/admin/HomepageManager';

export function AdminPage() {
  const { user, isAdmin } = useAdmin();
  const [activeTab, setActiveTab] = useState<'portfolio' | 'homepage'>('portfolio');

  if (!user) {
    return <AdminLogin />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'portfolio'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Portfolio Manager
          </button>
          <button
            onClick={() => setActiveTab('homepage')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'homepage'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Homepage Manager
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'portfolio' ? <PortfolioManager /> : <HomepageManager />}
        </motion.div>
      </div>
    </div>
  );
}