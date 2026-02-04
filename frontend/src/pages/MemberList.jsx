import { useState, useEffect } from 'react';
import api from '../api/axios';
import { FaUserPlus } from 'react-icons/fa';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const [newMember, setNewMember] = useState({ name: '', email: '' });

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await api.get('/members');
            setMembers(response.data);
        } catch (error) {
            console.error("Error fetching members", error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await api.post('/members', newMember);
            setNewMember({ name: '', email: '' });
            fetchMembers();
        } catch (error) {
            alert('Error registering member');
        }
    };

    return (
        <div className="container animate-fade-in">
            <h2 style={{ marginBottom: '2rem' }}>Member Directory</h2>
            
            <div className="grid-3" style={{ marginBottom: '3rem', gridTemplateColumns: '1fr 2fr' }}>
                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Register Member</h3>
                    <form onSubmit={handleRegister}>
                        <div className="input-group">
                            <label>Name</label>
                            <input 
                                className="input-field" 
                                value={newMember.name} 
                                onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                className="input-field" 
                                type="email"
                                value={newMember.email} 
                                onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            <FaUserPlus /> Register
                        </button>
                    </form>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Registered Members</h3>
                    <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--text-secondary)', textAlign: 'left' }}>
                                    <th style={{ padding: '1rem' }}>ID</th>
                                    <th style={{ padding: '1rem' }}>Name</th>
                                    <th style={{ padding: '1rem' }}>Email</th>
                                    <th style={{ padding: '1rem' }}>Joined</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map(member => (
                                    <tr key={member.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>#{member.id}</td>
                                        <td style={{ padding: '1rem', fontWeight: 500 }}>{member.name}</td>
                                        <td style={{ padding: '1rem' }}>{member.email}</td>
                                        <td style={{ padding: '1rem' }}>{member.membershipDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberList;
