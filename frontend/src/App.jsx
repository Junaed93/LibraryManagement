import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookList from './pages/BookList';
import MemberList from './pages/MemberList';
import Circulation from './pages/Circulation';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/circulation" element={<Circulation />} />
          </Routes>
        </main>
        <footer style={{ 
          textAlign: 'center', 
          padding: '2rem', 
          color: 'var(--text-secondary)',
          borderTop: 'var(--glass-border)',
          background: 'var(--bg-primary)'
        }}>
          <p>© 2026 LibManager System. Built with Spring Boot & React.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
