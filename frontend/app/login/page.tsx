'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) setError(error.message);
        else router.push('/dashboard');
    };

    const handleGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
        if (error) setError(error.message);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
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
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mb-2">Login</button>
                <button type="button" onClick={handleGoogle} className="w-full bg-gray-100 text-gray-800 py-2 rounded">Login with Google</button>
                <p className="mt-4 text-sm">Don&apos;t have an account? <a href="/signup" className="text-blue-600">Sign up</a></p>
            </form>
        </main>
    );
} 