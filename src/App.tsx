/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Commitment from './components/Commitment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Reveal } from './components/Reveal';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <ScrollProgress />
      <Navbar />
      <main className="space-y-6 sm:space-y-10 lg:space-y-12">
        <Hero />
        
        <SectionDivider variant="glow" icon="sparkles" title="About Zaviyar" />
        
        <Reveal>
          <About />
        </Reveal>
        
        <SectionDivider variant="badge" icon="award" title="Key Highlights" />
        
        <Stats />
        
        <SectionDivider variant="dots" />
        
        <Reveal>
          <Commitment />
        </Reveal>
        
        <SectionDivider variant="gradient-bar" icon="compass" title="Our Proven Roadmap" />
        
        <Reveal>
          <Process />
        </Reveal>
        
        <SectionDivider variant="glow" icon="star" title="Client Experience" />
        
        <Reveal>
          <Testimonials />
        </Reveal>
        
        <SectionDivider variant="badge" icon="layers" title="Core Solutions" />
        
        <Reveal>
          <Services />
        </Reveal>
        
        <SectionDivider variant="gradient-bar" icon="hexagon" title="Help & Support" />
        
        <Reveal>
          <FAQ />
        </Reveal>
        
        <SectionDivider variant="glow" icon="diamond" title="Let's Connect" />
        
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

