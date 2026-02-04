import { useState } from 'react';
import api from '../api/axios';
import { FaArrowRight, FaUndo } from 'react-icons/fa';

const Circulation = () => {
    const [borrowData, setBorrowData] = useState({ memberId: '', bookId: '' });
    const [returnData, setReturnData] = useState({ memberId: '', bookId: '' });
    const [message, setMessage] = useState('');

    const handleBorrow = async (e) => {
        e.preventDefault();
        try {
            await api.post('/library/borrow', borrowData);
            setMessage('Book borrowed successfully!');
            setBorrowData({ memberId: '', bookId: '' });
        } catch (error) {
            setMessage('Error borrowing book. Check ID availability.');
        }
    };

    const handleReturn = async (e) => {
        e.preventDefault();
        try {
            await api.post('/library/return', returnData);
            setMessage('Book returned successfully!');
            setReturnData({ memberId: '', bookId: '' });
        } catch (error) {
            setMessage('Error returning book.');
        }
    };

    return (
        <div className="container animate-fade-in">
            <h2 style={{ marginBottom: '2rem' }}>Circulation Desk</h2>
            
            {message && (
                <div style={{ 
                    padding: '1rem', 
                    marginBottom: '2rem', 
                    borderRadius: '8px', 
                    background: message.includes('Error') ? 'rgba(248, 113, 113, 0.2)' : 'rgba(74, 222, 128, 0.2)',
                    color: message.includes('Error') ? 'var(--error)' : 'var(--success)',
                    border: `1px solid ${message.includes('Error') ? 'var(--error)' : 'var(--success)'}`
                }}>
                    {message}
                </div>
            )}

            <div className="grid-3">
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Borrow Book</h3>
                    <form onSubmit={handleBorrow}>
                        <div className="input-group">
                            <label>Member ID</label>
                            <input 
                                className="input-field" 
                                type="number"
                                value={borrowData.memberId} 
                                onChange={(e) => setBorrowData({...borrowData, memberId: e.target.value})}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Book ID</label>
                            <input 
                                className="input-field" 
                                type="number"
                                value={borrowData.bookId} 
                                onChange={(e) => setBorrowData({...borrowData, bookId: e.target.value})}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Borrow <FaArrowRight />
                        </button>
                    </form>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--success)' }}>Return Book</h3>
                    <form onSubmit={handleReturn}>
                        <div className="input-group">
                            <label>Member ID</label>
                            <input 
                                className="input-field" 
                                type="number"
                                value={returnData.memberId} 
                                onChange={(e) => setReturnData({...returnData, memberId: e.target.value})}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Book ID</label>
                            <input 
                                className="input-field" 
                                type="number"
                                value={returnData.bookId} 
                                onChange={(e) => setReturnData({...returnData, bookId: e.target.value})}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #10b981, #34d399)' }}>
                            <FaUndo /> Return
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Circulation;
