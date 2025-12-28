import { useState, useEffect } from 'react';
import { authStorage, type AuthSession } from '../../../utils/localStorage';

interface User {
  email: string;
  id: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkSession = () => {
      try {
        const session = authStorage.getSession();
        if (session) {
          setUser(session.user);
          setIsAdmin(session.user.email === 'admin@facedby.cynie');
        } else {
          setUser(null);
          setIsAdmin(false);
        }
      } catch (err) {
        console.error('Session check failed:', err);
        setUser(null);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();

    // Check session periodically
    const interval = setInterval(checkSession, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const session = await authStorage.login(email, password);
      setUser(session.user);
      setIsAdmin(session.user.email === 'admin@facedby.cynie');
      return { user: session.user };
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    authStorage.logout();
    setUser(null);
    setIsAdmin(false);
  };

  return {
    user,
    login,
    logout,
    isLoading,
    error,
    isAdmin
  };
}