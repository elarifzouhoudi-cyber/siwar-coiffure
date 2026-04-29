content = """import './globals.css';

export const metadata = {
  metadataBase: new URL('https://siwarcoiffure.fr'),
  title: {
    default: 'Siwar Coiffure - Visagiste Coloriste Aix-en-Provence',
    template: '%s | Siwar Coiffure',
  },
  description: "Salon de coiffure Aix-en-Provence depuis 2002. Visagiste, coloriste, lissage, meches, balayage. Tel: 06 95 55 34 68.",
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://siwarcoiffure.fr',
    siteName: 'Siwar Coiffure',
    title: 'Siwar Coiffure - Visagiste Coloriste Aix-en-Provence',
    description: "Salon de coiffure Aix-en-Provence depuis 2002.",
  },
  alternates: { canonical: 'https://siwarcoiffure.fr' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#0f0d0b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
"""
with open('app/layout.jsx', 'w') as f:
    f.write(content)
print('OK')
