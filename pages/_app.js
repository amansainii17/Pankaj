import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#1A1A26',
            color: '#F0EDE4',
            border: '1px solid rgba(212,175,55,0.4)',
            fontFamily: 'Raleway, sans-serif',
          },
          success: {
            iconTheme: { primary: '#D4AF37', secondary: '#0A0A0F' },
          },
          error: {
            iconTheme: { primary: '#E8473F', secondary: '#0A0A0F' },
          },
        }}
      />
    </>
  );
}
