import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: './favicon.svg' },
  title: 'Facundo Mendoza | Desarrollador de software',
  description: 'Portfolio de Facundo Mendoza. Desarrollo de software para salud, educación y gestión inmobiliaria. Analista Programador Universitario por la UNLP, La Plata, Argentina.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

