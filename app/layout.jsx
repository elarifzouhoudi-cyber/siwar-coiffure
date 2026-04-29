import './globals.css';
export const metadata = {
  metadataBase: new URL('https://siwarcoiffure.fr'),
  title: { default: 'Siwar Coiffure - Visagiste Coloriste Aix-en-Provence', template: '%s | Siwar Coiffure' },
  description: "Salon de coiffure Aix-en-Provence depuis 2002. Visagiste, coloriste, lissage, meches, balayage.",
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }) {
  return (<html lang="fr"><head><meta name="theme-color" content="#0f0d0b"/></head><body>{children}</body></html>);
}
