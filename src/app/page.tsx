'use client';
import Head from 'next/head';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Patricia's Portfolio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
    </div>
  );
}
