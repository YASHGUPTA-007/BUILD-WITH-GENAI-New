import { Inter, Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], variable: '--font-space',
  weight: ['300','400','500','600','700'],
});
const inter = Inter({
  subsets: ['latin'], variable: '--font-inter',
  weight: ['300','400','500'],
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'], variable: '--font-cormorant',
  weight: ['400','500','600'],
  style: ['normal','italic'],
});

export const metadata = {
  title: 'GenAI Academy — Build With GenAI · AI Engineering Bootcamp',
  description: "India's premier 6-month AI engineering bootcamp by Soham Sharma. 24 weeks, 180+ live hours, 13 production projects. Cohort-based. ₹1,50,000.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${cormorant.variable}`}>
      <body style={{ background: '#F0EBE1', color: '#1C1917' }}>
        {children}
      </body>
    </html>
  );
}
