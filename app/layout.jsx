import './globals.css';

export const metadata = {
  title: 'Smolji - Customize & Convert Emojis to PNG Image Stickers',
  description: 'Compose & Transform Emojis into High-Res PNG Stickers',
  authors: [{ name: 'Smolji Studio' }],
  metadataBase: new URL('https://smolji.labs.gregorium.com'),
  openGraph: {
    title: 'Smolji - Compose & Transform Emojis into High-Res PNG Stickers',
    description: 'Compose & Transform Emojis into High-Res PNG Stickers',
    url: 'https://smolji.labs.gregorium.com/',
    images: [{ url: '/logo.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smolji - Create and Convert Emojis to High-Def PNG',
    description: 'Compose & Transform Emojis into High-Res PNG Stickers',
    images: ['/logo.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
