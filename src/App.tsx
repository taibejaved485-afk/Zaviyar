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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Commitment />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
