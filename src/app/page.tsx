'use client';
import Head from 'next/head';
// import Header from '../../components/Header';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
    </div>
  );
}
