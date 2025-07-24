'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) setError(error.message);
        else router.push('/dashboard');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <form onSubmit={handleSignup} className="w-full max-w-sm bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full mb-2 p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                    required
                />
                {error && <div className="text-red-600 mb-2">{error}</div>}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mb-2">Sign Up</button>
                <p className="mt-4 text-sm">Already have an account? <a href="/login" className="text-blue-600">Login</a></p>
            </form>
        </main>
    );
} 