import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export const metadata = {
  title: 'Zeeshan Haider | Portfolio',
  description: 'My personal portfolio website showcasing projects, skills, and contact info.',
  keywords: ['Zeeshan Haider', 'Portfolio', 'React Developer', 'Frontend Developer', 'MERN Stack'],
  authors: [{ name: 'Zeeshan Haider', url: 'https://m-zeeshan-haider.vercel.app/' }],
  openGraph: {
    title: 'Zeeshan Haider | Portfolio',
    description: 'My personal portfolio website showcasing projects, skills, and contact info.',
    url: 'https://m-zeeshan-haider.vercel.app/',
    siteName: 'Zeeshan Haider Portfolio',
    images: [
      {
        url: '/assets/images/Blog-Image.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeeshan Haider | Portfolio',
    description: 'My personal portfolio website showcasing projects, skills, and contact info.',
    images: ['/og-image.png'],
    creator: '@yourTwitterHandle',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/code.png" />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
