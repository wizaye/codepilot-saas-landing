import type { Metadata } from 'next';
import './globals.css'; // Already correctly importing globals.css
import { Providers } from './providers'; // Import the new client component providers

export const metadata: Metadata = {
  // From index.html <title>
  title: 'Codelit - Migrate Smarter, Build Faster',
  // From index.html <meta name="description">
  description: 'Automate migrations, SDK upgrades, and repetitive dev tasks so you can focus on building, not babysitting versions.',
  // From index.html <meta name="author"> - Next.js has an 'authors' field
  authors: [{ name: 'Codelit' }],
  // Viewport meta is handled by Next.js by default, but can be customized if needed.
  // For example: viewport: 'width=device-width, initial-scale=1.0',
  // OG metadata from index.html
  openGraph: {
    title: 'Codelit - Migrate Smarter, Build Faster',
    description: 'Automate migrations, SDK upgrades, and repetitive dev tasks so you can focus on building, not babysitting versions.',
    type: 'website',
    images: [
      {
        url: 'https://lovable.dev/opengraph-image-p98pqg.png', // Assuming this is the intended image
      },
    ],
  },
  // Twitter metadata from index.html
  twitter: {
    card: 'summary_large_image',
    site: '@codelit_dev', // Note: Next.js 'twitter' metadata doesn't have a direct 'site' field in the typed object.
                         // It might be better to use 'creator' or include it in the 'title' or 'description' if essential.
                         // For now, including it as 'site' for completeness, but it might not be officially picked up.
                         // Official fields are: card, creator, creatorId, description, images, title
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
    // title and description can be inherited from the main metadata or overridden here.
  },
  // It's good practice to set a theme color if applicable
  // themeColor: '#ffffff', // Example
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts from index.html - directly linked here.
            Consider using next/font for optimization in a later step. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> {/* corrected crossOrigin attribute */}
        <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
