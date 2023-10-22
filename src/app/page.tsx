'use client';
import Head from 'next/head';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

// import Header from '../../components/Header';
import { SocialIcon } from 'react-social-icons';
import Hero from './components/Hero';
import Header from './components/Header';
export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Patricia's Portfolio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
    </div>
  );
}
