import { useState, useEffect } from 'react';
import api from '../api/axios';
import { FaPlus, FaSearch } from 'react-icons/fa';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: '', author: '', isbn: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await api.get('/books');
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            await api.post('/books', newBook);
            setNewBook({ title: '', author: '', isbn: '' });
            fetchBooks();
        } catch (error) {
            alert('Error adding book');
        }
    };

    return (
        <div className="container animate-fade-in">
            <h2 style={{ marginBottom: '2rem' }}>Book Management</h2>
            
            <div className="grid-3" style={{ marginBottom: '3rem', gridTemplateColumns: '1fr 2fr' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Add New Book</h3>
                    <form onSubmit={handleAddBook}>
                        <div className="input-group">
                            <label>Title</label>
                            <input 
                                className="input-field" 
                                value={newBook.title} 
                                onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Author</label>
                            <input 
                                className="input-field" 
                                value={newBook.author} 
                                onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>ISBN</label>
                            <input 
                                className="input-field" 
                                value={newBook.isbn} 
                                onChange={(e) => setNewBook({...newBook, isbn: e.target.value})}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            <FaPlus /> Add Book
                        </button>
                    </form>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Library Inventory</h3>
                    {loading ? <p>Loading...</p> : (
                        <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid var(--text-secondary)', textAlign: 'left' }}>
                                        <th style={{ padding: '1rem' }}>ID</th>
                                        <th style={{ padding: '1rem' }}>Title</th>
                                        <th style={{ padding: '1rem' }}>Author</th>
                                        <th style={{ padding: '1rem' }}>ISBN</th>
                                        <th style={{ padding: '1rem' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books.map(book => (
                                        <tr key={book.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>#{book.id}</td>
                                            <td style={{ padding: '1rem', fontWeight: 500 }}>{book.title}</td>
                                            <td style={{ padding: '1rem' }}>{book.author}</td>
                                            <td style={{ padding: '1rem', fontFamily: 'monospace' }}>{book.isbn}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span className={`badge ${book.available ? 'badge-available' : 'badge-borrowed'}`}>
                                                    {book.available ? 'Available' : 'Borrowed'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookList;
