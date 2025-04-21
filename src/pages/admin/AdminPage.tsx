import React from 'react';
import { useParams } from 'react-router-dom';
import { AdminDashboard } from './AdminDashboard';

export function AdminPage() {
  const { adminKey } = useParams();
  
  // Simple admin key check
  if (adminKey !== 'cyniee-admin-2024') {
    return (
      <div className="pt-20 text-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-gray-600 mt-2">Invalid admin access key</p>
      </div>
    );
  }

  return <AdminDashboard />;
}