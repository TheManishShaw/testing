import React from 'react'
import Hero from '../../components/Hero';
import TechnologyContent from './elements/TechnologyContent';
import VideoBanner from '../../components/VideoBanner';
import Services from '../services/elements/Services';
import Blogs from '../blogs/Blogs';
import Head from 'next/head';
const index = () => {
  return (
    <div>
      <Head>
        <title>Technology - Tecblic</title>
      </Head>
      <Hero
        classs="w-full h-screen bg-technology bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        priority
        heading="IDEAS THAT DELIVER"
        heading1="RESULTS."
      />
      <TechnologyContent />
      <VideoBanner />
      <Services />
      <Blogs />
    </div>
  );
}

export default index;