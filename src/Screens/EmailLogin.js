import React, { useState, useEffect } from 'react';
import { auth, actionCodeSettings } from '../config/firebase';
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function EmailLogin() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is coming back from email link
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let emailFromStorage = window.localStorage.getItem('emailForSignIn');

            if (!emailFromStorage) {
                emailFromStorage = window.prompt('Please provide your email for confirmation');
            }

            setLoading(true);
            signInWithEmailLink(auth, emailFromStorage, window.location.href)
                .then((result) => {
                    window.localStorage.removeItem('emailForSignIn');
                    setMessage('Successfully signed in!');
                    navigate('/admin');
                })
                .catch((error) => {
                    setMessage('Error signing in: ' + error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', email);
            setMessage('Check your email for the login link!');
        } catch (error) {
            setMessage('Error sending email: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-theme-primary-1 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-theme-primary-1 flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 bg-theme-primary-2 p-8 rounded-lg">
                <h2 className="text-3xl font-bold text-white text-center">Admin Login</h2>

                {message && (
                    <div className={`p-4 rounded ${message.includes('Error')
                            ? 'bg-red-500/20 border border-red-500'
                            : 'bg-green-500/20 border border-green-500'
                        }`}>
                        <p className="text-white text-center">{message}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your admin email"
                            required
                            className="w-full p-3 rounded bg-theme-primary-1 text-white border border-blue focus:ring-2 focus:ring-blue"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue hover:bg-blue-light text-white p-3 rounded font-medium disabled:opacity-50"
                    >
                        Send Login Link
                    </button>
                </form>
            </div>
        </div>
    );
} 