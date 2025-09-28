import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Creative UI Designer Portfolio | Modern Web & Mobile Design Expert</title>
        <meta
          name="description"
          content="Professional UI/UX designer specializing in modern web and mobile interfaces. View my creative portfolio featuring innovative design solutions and user-centered experiences."
        />
        <meta property="og:title" content="Creative UI Designer Portfolio | Modern Web & Mobile Design Expert" />
        <meta property="og:description" content="Professional UI/UX designer specializing in modern web and mobile interfaces. View my creative portfolio featuring innovative design solutions and user-centered experiences." />
      </Helmet>

      <div className="min-h-screen bg-background-dark">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;