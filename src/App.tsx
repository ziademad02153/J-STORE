import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import './i18n';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen relative">
        <Toaster 
          position="top-center"
          toastOptions={{
            className: 'bg-white dark:bg-gray-800 dark:text-white',
            style: {
              background: 'var(--toast-bg)',
              color: 'var(--toast-color)',
            },
          }} 
        />
        <Navbar />
        <Cart />
        <Hero />
        <FeaturedProducts />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;