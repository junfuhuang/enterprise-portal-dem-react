import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Statistics } from './components/Statistics';
import { News } from './components/News';
import { Footer } from './components/Footer';
import { Login } from './components/Login';

export default function App() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // 从 localStorage 恢复用户状态
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        user={user} 
        onLoginClick={() => setIsLoginOpen(true)} 
        onLogout={handleLogout}
      />
      <main>
        <Hero />
        <Features />
        <Statistics />
        <News />
      </main>
      <Footer />
      
      <Login 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin}
      />
    </div>
  );
}