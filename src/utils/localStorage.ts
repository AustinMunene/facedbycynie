/**
 * LocalStorage utilities for replacing Supabase
 * This is a temporary solution for client-side data storage
 */

const ADMIN_EMAIL = 'admin@facedby.cynie';
const STORAGE_KEYS = {
  AUTH: 'facedbycynie_auth',
  BLOG_POSTS: 'facedbycynie_blog_posts',
  PORTFOLIO: 'facedbycynie_portfolio',
} as const;

export interface AuthSession {
  user: {
    email: string;
    id: string;
  };
  expiresAt: number;
}

/**
 * Auth utilities
 */
export const authStorage = {
  login: (email: string, password: string): Promise<AuthSession> => {
    return new Promise((resolve, reject) => {
      // Simple auth check - in production, this should be server-side
      if (email === ADMIN_EMAIL) {
        const session: AuthSession = {
          user: {
            email,
            id: 'admin-1',
          },
          expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
        };
        localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(session));
        resolve(session);
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  },

  logout: (): void => {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  },

  getSession: (): AuthSession | null => {
    const stored = localStorage.getItem(STORAGE_KEYS.AUTH);
    if (!stored) return null;

    try {
      const session: AuthSession = JSON.parse(stored);
      if (session.expiresAt < Date.now()) {
        localStorage.removeItem(STORAGE_KEYS.AUTH);
        return null;
      }
      return session;
    } catch {
      return null;
    }
  },

  isAuthenticated: (): boolean => {
    const session = authStorage.getSession();
    return session !== null && session.user.email === ADMIN_EMAIL;
  },
};

/**
 * Blog storage utilities
 */
export const blogStorage = {
  getAll: <T>(): T[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.BLOG_POSTS);
    return stored ? JSON.parse(stored) : [];
  },

  save: <T>(items: T[]): void => {
    localStorage.setItem(STORAGE_KEYS.BLOG_POSTS, JSON.stringify(items));
  },

  add: <T extends { id: string }>(item: T): T => {
    const items = blogStorage.getAll<T>();
    items.push(item);
    blogStorage.save(items);
    return item;
  },

  update: <T extends { id: string }>(id: string, updates: Partial<T>): T | null => {
    const items = blogStorage.getAll<T>();
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...updates };
    blogStorage.save(items);
    return items[index];
  },

  delete: (id: string): void => {
    const items = blogStorage.getAll<{ id: string }>();
    const filtered = items.filter((item) => item.id !== id);
    blogStorage.save(filtered);
  },
};

/**
 * Portfolio storage utilities
 */
export const portfolioStorage = {
  getAll: <T>(): T[] => {
    const stored = localStorage.getItem(STORAGE_KEYS.PORTFOLIO);
    return stored ? JSON.parse(stored) : [];
  },

  save: <T>(items: T[]): void => {
    localStorage.setItem(STORAGE_KEYS.PORTFOLIO, JSON.stringify(items));
  },

  add: <T extends { id: string }>(item: T): T => {
    const items = portfolioStorage.getAll<T>();
    items.push(item);
    portfolioStorage.save(items);
    return item;
  },

  update: <T extends { id: string }>(id: string, updates: Partial<T>): T | null => {
    const items = portfolioStorage.getAll<T>();
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...updates };
    portfolioStorage.save(items);
    return items[index];
  },

  delete: (id: string): void => {
    const items = portfolioStorage.getAll<{ id: string }>();
    const filtered = items.filter((item) => item.id !== id);
    portfolioStorage.save(filtered);
  },
};

