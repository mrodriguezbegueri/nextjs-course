// app/layout.tsx
import { Metadata } from 'next';
import {Providers} from "./providers";
import './globals.css'
import { Navbar } from '../components/ui';

export const metadata: Metadata = {
  title: 'Pokemon',
  authors: {
    name: 'Matías Rodríguez',
    url: ''
  },
  keywords: ['Pokemon', 'XXXXXX']
  
}

export default function RootLayout({children}: { children: React.ReactNode}) {

  return (
    <html lang="es" className='dark'>
      <body>
        <Navbar></Navbar>
        <Providers>
          <main style={{
            padding: '0px 20px'
          }}>
          {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}