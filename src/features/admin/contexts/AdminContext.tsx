import React, { createContext, useContext, useEffect, useState } from 'react';
import { authStorage, type AuthSession } from '../../../utils/localStorage';

interface User {
  email: string;
  id: string;
}

interface AdminContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | null>(null);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check active session
    const session = authStorage.getSession();
    if (session) {
      setUser(session.user);
    }
    setIsLoading(false);

    // Check session periodically
    const interval = setInterval(() => {
      const currentSession = authStorage.getSession();
      if (currentSession) {
        setUser(currentSession.user);
      } else {
        setUser(null);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const session = await authStorage.login(email, password);
      setUser(session.user);
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    authStorage.logout();
    setUser(null);
  };

  return (
    <AdminContext.Provider value={{ user, isLoading, error, login, logout }}>
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