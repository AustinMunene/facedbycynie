import { useState } from 'react';
import { authStorage } from '../../../utils/localStorage';

export function useAdminAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const session = await authStorage.login(email, password);
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
  };

  return {
    login,
    logout,
    isLoading,
    error
  };
}