import React, { createContext, useContext } from 'react';

interface AdminContextType {
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const logout = () => {
    // Simple logout - just for structure
    console.log('Logged out');
  };

  return (
    <AdminContext.Provider value={{ logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}