import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const isFrontpage = pathname === '/';

  return (
    <div className="app">
      {!isFrontpage && <Header />}
      <main>
        <Outlet /> {/* Renders child routes (pages) */}
      </main>
      <Footer /> {/* Optional: Keep or conditionally render */}
    </div>
  );
}