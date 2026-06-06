import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Freelancer Contract Scanner — Spot Dangerous Clauses Instantly',
  description: 'AI-powered contract analysis for freelancers. Detect IP ownership traps, non-competes, payment risks, and liability issues before you sign.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2faae3b-951c-4ba4-a081-076c7ac360bb"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
