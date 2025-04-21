import React from 'react';
import { Navigate } from 'react-router-dom';
import { AdminTabs } from './components/AdminTabs';
import { AdminHeader } from './components/AdminHeader';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';

export function AdminDashboard() {
  const { user, isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24">
        <AdminHeader />
        <div className="container mx-auto px-4 py-8">
          <AdminTabs />
        </div>
      </div>
    </div>
  );
}