import React from 'react';
import './App.css';
import './components/section/sectionMain/style.css'
import './components/section/sectionAbout/style.css'
import './components/section/sectionSlider/style.css'
import './components/section/sectionHelp/style.css'
import './components/section/sectionDonation/style.css'
import './components/header/style.css'
import './components/footer/style.css'
import { SectionMain } from './components/section/sectionMain/SectionMain';
import { SectionAbout } from './components/section/sectionAbout/SectionAbout';
import { SectionSlider } from './components/section/sectionSlider/SectionSlider';
import { SectionHelp } from './components/section/sectionHelp/SectionHelp';
import { SectionDonation } from './components/section/sectionDonation/SectionDonation';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <SectionMain />
      <SectionAbout />
      <SectionSlider />
      <SectionHelp />
      <SectionDonation />
      <Footer />
    </div>
  );
}

export default App;
