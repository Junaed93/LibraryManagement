import { NavLink } from 'react-router-dom';
import { FaBook, FaUsers, FaExchangeAlt, FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav style={{
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: 'var(--glass-border)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
        <h1 style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          LibManager
        </h1>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/books" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
            <FaBook /> Books
          </NavLink>
          <NavLink to="/members" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
            <FaUsers /> Members
          </NavLink>
          <NavLink to="/circulation" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }}>
            <FaExchangeAlt /> Circulation
          </NavLink>
        </div>
      </div>
      <style>{`
        .nav-link { color: var(--text-secondary); text-decoration: none; font-weight: 500; }
        .nav-link:hover { color: var(--text-primary); }
        .nav-link.active { color: var(--accent-primary); }
      `}</style>
    </nav>
  );
};

export default Navbar;
