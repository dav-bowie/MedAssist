import "../globals.css";
import * as Sentry from "@sentry/nextjs";
import type { Metadata } from "next";

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
});

export const metadata: Metadata = {
    title: "Healthcare Platform",
    description: "Modern healthcare coordination platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-50 text-gray-900">
                {children}
            </body>
        </html>
    );
} 