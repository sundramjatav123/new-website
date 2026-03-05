import './globals.css';

export const metadata = {
  title: 'AlphaWeb Studio | Premium Web Development Agency',
  description: 'AlphaWeb Studio builds high-performance, scalable web applications using Next.js, Tailwind CSS, Node.js, and modern backend architecture.',
  keywords: 'AlphaWeb Studio, web agency, Next.js development, full-stack development, API development',
  openGraph: {
    title: 'AlphaWeb Studio',
    description: 'Premium web development agency for modern digital products.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
