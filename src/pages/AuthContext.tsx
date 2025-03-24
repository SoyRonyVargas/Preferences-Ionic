import { createContext, useContext, useEffect, useState } from 'react';
import { Preferences } from '@capacitor/preferences';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => useContext(AuthContext)!;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { value } = await Preferences.get({ key: 'token' });
      setIsAuthenticated(!!value);
    };
    checkAuth();
  }, []);

  const login = async () => {
    await Preferences.set({ key: 'token', value: 'fakeToken123' });
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await Preferences.remove({ key: 'token' });
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
