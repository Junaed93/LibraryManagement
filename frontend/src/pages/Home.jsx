import { Link } from 'react-router-dom';
import { FaBook, FaUsers, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container animate-fade-in">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Library Management <br /> Reinvented.
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Experience the future of library administration. Manage books, members, and circulation with a premium, lightning-fast interface.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link to="/books" className="btn btn-primary">
            Manage Books <FaArrowRight />
          </Link>
          <Link to="/members" className="btn btn-secondary">
            View Members
          </Link>
        </div>
      </div>

      <div className="grid-3" style={{ marginTop: '4rem' }}>
        <div className="card">
          <div style={{ fontSize: '2rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}><FaBook /></div>
          <h3>Book Inventory</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Track your entire collection with real-time availability status.</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}><FaUsers /></div>
          <h3>Member Management</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Register new members and view their borrowing history.</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', color: 'var(--success)', marginBottom: '1rem' }}><FaArrowRight /></div>
          <h3>Seamless Circulation</h3>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Borrow and return books instantly with our optimized workflow.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
