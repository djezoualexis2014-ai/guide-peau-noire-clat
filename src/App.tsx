/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Modules from './components/Modules';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Promises from './components/Promises';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navigation />
      <Hero />
      <Story />
      <Modules />
      <Promises />
      <Bonuses />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
