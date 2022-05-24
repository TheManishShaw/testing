import Head from "next/head";
import React from "react";
import Hero from "../../components/Hero";
import Contents from "./elements/Contents";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Hero
        className="w-full h-screen bg-technology bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        heading="We are Tecblic an"
        heading1=" innovation-driven company"
      />
      <Contents />
    </div>
  );
};

export default AboutPage;
