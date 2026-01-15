import React, { useEffect, useRef } from 'react';
import { CAESER_CV, PORTFOLIO_ITEMS } from './constants';
import { SectionHeader } from './components/SectionHeader';
import { LanguageDots } from './components/LanguageDots';

// --- Navbar Component ---
const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 bg-white/80 backdrop-blur-sm transition-all duration-300 border-b border-transparent hover:border-black/5 uppercase">
      <div className="flex gap-12 text-sm font-display tracking-widest uppercase text-black">
        <button 
          onClick={() => scrollToSection('resume')}
          className="hover:font-bold transition-all"
        >
          Resume
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')}
          className="hover:font-bold transition-all"
        >
          Portfolio
        </button>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  // --- Fade In Animation Logic ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-enter-active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-enter');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-12 py-24 bg-white font-body selection:bg-gray-800 selection:text-white relative uppercase">
      
      <Navbar />
      
      {/* PAGE 1: RESUME (Dark Theme) */}
      <div id="resume" className="fade-enter bg-black w-full max-w-[1024px] shadow-2xl p-6 md:p-12 lg:p-16 flex flex-col gap-12 text-white mx-4 md:mx-0">
        
        {/* HEADER: Massive Name */}
        <header className="relative border-b-2 border-white pb-4">
          <h1 className="font-display text-[15vw] md:text-[10rem] leading-[0.8] tracking-tighter uppercase text-center md:text-left text-white">
            {CAESER_CV.name.split(' ')[0]} <span className="md:ml-4">{CAESER_CV.name.split(' ')[1]}</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-end mt-4">
            <h2 className="uppercase tracking-[0.2em] text-sm md:text-base font-bold w-full md:w-auto text-center md:text-left text-white">
              {CAESER_CV.title}
            </h2>
          </div>
        </header>

        {/* TOP GRID: Summary | Photo | Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Summary */}
          <div className="md:col-span-3 flex flex-col gap-4 text-justify md:text-left order-2 md:order-1">
             <p className="text-xs md:text-sm leading-relaxed font-light uppercase tracking-wide text-white">
               {CAESER_CV.summary}
             </p>
          </div>

          {/* Center Column: Image */}
          <div className="md:col-span-6 flex justify-center items-start order-1 md:order-2">
            <div className="relative w-full aspect-[3/4] overflow-hidden grayscale contrast-125 brightness-110">
              <img 
                src="https://picsum.photos/600/800?grayscale" 
                alt="Caeser Gama" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column: Contact Details */}
          <div className="md:col-span-3 flex flex-col justify-end gap-6 order-3">
             <div className="group">
               <span className="block text-[10px] tracking-widest uppercase mb-1 opacity-60">Date of Birth</span>
               <span className="text-sm border-b border-white pb-1 block">
                 {CAESER_CV.contact.dob}
               </span>
             </div>
             <div className="group">
               <span className="block text-[10px] tracking-widest uppercase mb-1 opacity-60">Nationality</span>
               <span className="text-sm border-b border-white pb-1 block">
                 {CAESER_CV.contact.nationality}
               </span>
             </div>
             <div className="group">
               <span className="block text-[10px] tracking-widest uppercase mb-1 opacity-60">Email</span>
               <a href={`mailto:${CAESER_CV.contact.email}`} className="text-sm border-b border-white pb-1 block hover:bg-white hover:text-black transition-colors truncate">
                 {CAESER_CV.contact.email}
               </a>
             </div>
             <div className="group">
               <span className="block text-[10px] tracking-widest uppercase mb-1 opacity-60">Phone</span>
               <a href={`tel:${CAESER_CV.contact.phone.replace(/\s/g, '')}`} className="text-sm border-b border-white pb-1 block hover:bg-white hover:text-black transition-colors">
                 {CAESER_CV.contact.phone}
               </a>
             </div>
             <div className="group">
               <span className="block text-[10px] tracking-widest uppercase mb-1 opacity-60">Address</span>
               <span className="text-sm border-b border-white pb-1 block">
                 {CAESER_CV.contact.location}
               </span>
             </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Work Experience */}
        <section className="pt-8 border-t border-white/20">
          <SectionHeader title="Work Experience" className="mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
             {CAESER_CV.experience.map((job, idx) => (
               <React.Fragment key={idx}>
                 <div className="md:col-span-4">
                   <h4 className="font-bold text-lg uppercase tracking-wider">{job.company}</h4>
                   <p className="text-sm text-white mb-1">{job.role}</p>
                   <p className="text-xs font-mono text-white">{job.period}</p>
                 </div>
                 <div className="md:col-span-8">
                    <p className="text-sm md:text-base leading-relaxed mb-6 font-light text-white">
                      {job.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {job.details?.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs md:text-sm border-l-2 border-white pl-3 leading-snug text-white">
                          {detail}
                        </li>
                      ))}
                    </ul>
                 </div>
               </React.Fragment>
             ))}
          </div>
        </section>

        {/* BOTTOM SECTION: 3 Columns (Languages, Skills, Education) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t-2 border-white">
          
          {/* Column 1: Languages */}
          <div>
            <SectionHeader title="Languages" />
            <div className="flex flex-col gap-6 mt-6">
              {CAESER_CV.languages.map((lang, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg text-white">{lang.name}</span>
                    <LanguageDots level={lang.proficiency} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">{lang.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Skills */}
          <div>
            <SectionHeader title="Skills" />
            <div className="mt-6 flex flex-col gap-8">
              {CAESER_CV.skills.map((cat, idx) => (
                <div key={idx}>
                  <h5 className="font-bold text-xs uppercase tracking-widest mb-3 border-b border-gray-700 pb-1 text-white">{cat.title}</h5>
                  <ul className="text-sm leading-relaxed">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="mb-1 block text-white">
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Education */}
          <div>
            <SectionHeader title="Education" />
            <div className="mt-6 flex flex-col gap-8">
              {CAESER_CV.education.map((edu, idx) => (
                <div key={idx} className="group">
                  <h5 className="font-bold text-sm uppercase tracking-wide group-hover:underline decoration-1 underline-offset-4 decoration-white">
                    {edu.institution}
                  </h5>
                  <p className="text-sm text-white mt-1 mb-2 leading-tight">
                    {edu.degree}
                  </p>
                  <span className="inline-block px-2 py-1 bg-white text-black text-[10px] font-mono">
                    {edu.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* PAGE 2: PORTFOLIO GALLERY (Updated to Dark Theme) */}
      <div id="portfolio" className="fade-enter bg-black w-full max-w-[1024px] shadow-2xl p-6 md:p-12 lg:p-16 flex flex-col text-white mx-4 md:mx-0 min-h-[1400px]">
        
        {/* Portfolio Header */}
        <header className="border-b-2 border-white pb-4 mb-8 flex flex-col md:flex-row justify-between items-end">
          <h1 className="font-display text-[8vw] md:text-[6rem] leading-none tracking-tighter uppercase">
            Portfolio
          </h1>
          <p className="text-sm md:text-base mb-2 opacity-80">
            A visual archive of recent projects
          </p>
        </header>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr h-full my-auto">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group relative w-full h-full flex flex-col">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-900">
                <img 
                  src={item.image} 
                  alt="" 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default App;