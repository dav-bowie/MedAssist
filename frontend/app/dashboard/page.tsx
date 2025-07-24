'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            if (!data.user) {
                router.push('/login');
            } else {
                setUser(data.user);
                setLoading(false);
            }
        };
        getUser();
    }, [router]);

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}</h2>
            <p className="mb-4">This is your dashboard.</p>
            <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={async () => {
                    await supabase.auth.signOut();
                    router.push('/login');
                }}
            >
                Sign Out
            </button>
        </main>
    );
} 