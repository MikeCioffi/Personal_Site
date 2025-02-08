import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin');
        } catch (error) {
            setError('Failed to login. Please check your credentials.');
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-theme-primary-1 flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 bg-theme-primary-2 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-white text-center">Admin Login</h2>
                {error && (
                    <div className="bg-red/20 border border-red text-white p-3 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-3 rounded bg-theme-primary-1 text-white border border-blue focus:ring-2 focus:ring-blue"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full p-3 rounded bg-theme-primary-1 text-white border border-blue focus:ring-2 focus:ring-blue"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue hover:bg-blue-light text-white p-3 rounded font-medium"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
} 