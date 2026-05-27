import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pankaj Light Decoration – Event Lighting Guna, Madhya Pradesh</title>
        <meta name="description" content="Pankaj Light Decoration – Premium wedding, festival, party & corporate event lighting in Guna, Madhya Pradesh. Contact Arvind Saini for expert decoration services." />
        <meta name="keywords" content="light decoration Guna, wedding lighting MP, event decoration Madhya Pradesh, Pankaj decoration, Arvind Saini" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Pankaj Light Decoration – Guna, MP" />
        <meta property="og:description" content="Premium event lighting & decoration services in Guna, Madhya Pradesh." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✦</text></svg>" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
