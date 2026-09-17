import React, { useState, useEffect } from 'react';
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, 
  FaTools, FaBriefcase, FaLanguage, FaBars, FaTimes, FaDownload, FaArrowRight, FaEye,
  FaImages, FaWhatsapp
} from 'react-icons/fa';

// Reusable Typewriter Component for smooth typing and erasing animation
function TypewriterEffect({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentDisplayText, setCurrentDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    let timer;

    if (!isDeleting) {
      // Typing forward
      if (currentDisplayText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentDisplayText(fullText.substring(0, currentDisplayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at full text before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting backward
      if (currentDisplayText.length > 0) {
        timer = setTimeout(() => {
          setCurrentDisplayText(fullText.substring(0, currentDisplayText.length - 1));
        }, deletingSpeed);
      } else {
        // Move to next text string
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentDisplayText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span>
      {currentDisplayText}
      <span className="animate-pulse text-teal-400">|</span>
    </span>
  );
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false); // CV Modal State
  const [activeTab, setActiveTab] = useState('studio'); // Projects Tab State ('studio', 'living-kitchen', or 'other')
  const [selectedImage, setSelectedImage] = useState(null); // Lightbox Image State

  // Projects Data Arrays
  const studioApartmentProjects = [
    { id: 1, title: "Studio Apartment - View 01", img: "/p1.jpg" },
    { id: 2, title: "Studio Apartment - View 02", img: "/p2.jpg" },
    { id: 3, title: "Studio Apartment - View 03", img: "/p3.jpg" },
    { id: 4, title: "Studio Apartment - View 04", img: "/p4.jpg" },
    { id: 5, title: "Studio Apartment - View 05", img: "/p5.jpg" },
  ];

  const livingKitchenProjects = [
    { id: 6, title: "Living Room & Kitchen - View 01", img: "/p6.jpg" },
    { id: 7, title: "Living Room & Kitchen - View 02", img: "/p7.jpg" },
    { id: 8, title: "Living Room & Kitchen - View 03", img: "/p8.jpg" },
    { id: 9, title: "Living Room & Kitchen - View 04", img: "/p9.jpg" },
    { id: 10, title: "Living Room & Kitchen - View 05", img: "/p10.jpg" },
  ];

  // New Other Projects Array (p11 to p20)
  const otherProjects = [
    { id: 11, title: "Other Project - View 01", img: "/p11.jpg" },
    { id: 12, title: "Other Project - View 02", img: "/p12.jpg" },
    { id: 13, title: "Other Project - View 03", img: "/p13.jpg" },
    { id: 14, title: "Other Project - View 04", img: "/p14.jpg" },
    { id: 15, title: "Other Project - View 05", img: "/p15.jpg" },
    { id: 16, title: "Other Project - View 06", img: "/p16.jpg" },
    { id: 17, title: "Other Project - View 07", img: "/p17.jpg" },
    { id: 18, title: "Other Project - View 08", img: "/p18.jpg" },
    { id: 19, title: "Other Project - View 09", img: "/p19.jpg" },
    { id: 20, title: "Other Project - View 10", img: "/p20.jpg" },
  ];

  // Helper function to get current projects based on active tab
  const getCurrentProjects = () => {
    if (activeTab === 'studio') return studioApartmentProjects;
    if (activeTab === 'living-kitchen') return livingKitchenProjects;
    if (activeTab === 'other') return otherProjects;
    return [];
  };

  return (
    <div className="bg-[#0b1329] text-slate-100 font-sans min-h-screen selection:bg-teal-500 selection:text-slate-950 overflow-x-hidden w-full relative">
      
      {/* Floating Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/923213423312" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-3.5 sm:p-4 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-white font-bold text-xs uppercase tracking-wider pl-0 group-hover:pl-2">
          WhatsApp
        </span>
      </a>

      {/* Floating Stylish Navbar */}
      <nav className="fixed top-3 left-0 w-full z-50 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto bg-slate-950/85 backdrop-blur-xl border border-teal-500/30 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center shadow-[0_0_25px_rgba(20,184,166,0.15)]">
          
          {/* Logo with Initials NS */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-teal-600 to-teal-300 flex items-center justify-center text-slate-950 font-serif font-bold text-base sm:text-lg shadow-md group-hover:scale-105 transition">
              NS
            </div>
            <span className="text-xs sm:text-sm md:text-base font-serif tracking-widest text-teal-400 font-bold hidden xs:inline min-w-[145px]">
              <TypewriterEffect texts={["NIMRA SARFRAZ", "INTERIOR DESIGNER"]} />
            </span>
          </a>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-xs tracking-widest uppercase font-medium">
            <a href="#home" className="text-teal-400 hover:text-teal-300 transition relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400">Home</a>
            <a href="#about" className="text-slate-300 hover:text-teal-400 transition">About</a>
            <a href="#projects" className="text-slate-300 hover:text-teal-400 transition">Projects</a>
            <a href="#skills" className="text-slate-300 hover:text-teal-400 transition">Skills</a>
            <a href="#experience" className="text-slate-300 hover:text-teal-400 transition">Experience</a>
            <a href="#education" className="text-slate-300 hover:text-teal-400 transition">Education</a>
          </div>

          {/* Let's Talk Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="px-6 py-2 border border-teal-400/60 text-teal-400 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-teal-400 hover:text-slate-950 transition shadow-[0_0_15px_rgba(20,184,166,0.2)]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setNavOpen(!navOpen)} 
            className="md:hidden text-2xl text-teal-400 focus:outline-none p-1"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {navOpen && (
          <div className="md:hidden max-w-6xl mx-auto mt-2 bg-slate-950/95 backdrop-blur-2xl border border-teal-500/30 rounded-2xl px-6 py-5 flex flex-col space-y-3 text-xs uppercase tracking-widest shadow-2xl">
            <a href="#home" onClick={() => setNavOpen(false)} className="text-teal-400 py-2 border-b border-slate-800">Home</a>
            <a href="#about" onClick={() => setNavOpen(false)} className="text-slate-300 hover:text-teal-400 py-2 border-b border-slate-800">About</a>
            <a href="#projects" onClick={() => setNavOpen(false)} className="text-slate-300 hover:text-teal-400 py-2 border-b border-slate-800">Projects</a>
            <a href="#skills" onClick={() => setNavOpen(false)} className="text-slate-300 hover:text-teal-400 py-2 border-b border-slate-800">Skills</a>
            <a href="#experience" onClick={() => setNavOpen(false)} className="text-slate-300 hover:text-teal-400 py-2 border-b border-slate-800">Experience</a>
            <a href="#education" onClick={() => setNavOpen(false)} className="text-slate-300 hover:text-teal-400 py-2 border-b border-slate-800">Education</a>
            <a href="#contact" onClick={() => setNavOpen(false)} className="text-center py-3 bg-teal-400 text-slate-950 font-bold rounded-full mt-2">Let's Talk</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-rose-300/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto w-full text-center space-y-8 z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-semibold tracking-widest uppercase">
            ✨ Available For Interior Design Projects
          </div>
          
          <h2 className="text-lg md:text-xl text-slate-300 font-light">
            Hi there 👋, I am
          </h2>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white min-h-[1.2em]">
            <TypewriterEffect texts={["Nimra Sarfraz", "Interior Designer", "Spatial Architect"]} />
          </h1>

          <h3 className="text-2xl md:text-3xl text-teal-400 font-medium tracking-wide">
            Professional Interior Designer
          </h3>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transforming spaces into breathtaking visual masterpieces with cutting-edge spatial planning, AutoCAD, Sketchup, and modern design architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3.5 bg-teal-500 text-slate-950 font-bold text-xs tracking-wider uppercase rounded-full hover:bg-teal-400 transition shadow-lg shadow-teal-500/25 flex items-center gap-2"
            >
              Hire Me <FaArrowRight className="text-xs" />
            </a>
            
            {/* View/Download CV Button that opens the Modal */}
            <button 
              onClick={() => setShowCvModal(true)}
              className="px-8 py-3.5 border border-slate-700 text-slate-200 font-semibold text-xs tracking-wider uppercase rounded-full hover:border-teal-400 hover:text-teal-400 transition flex items-center gap-2 cursor-pointer"
            >
              <FaEye className="text-xs" /> View CV
            </button>
          </div>
        </div>
      </header>

      {/* CV Popup Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative bg-slate-900 border border-teal-500/40 rounded-3xl max-w-2xl w-full p-6 shadow-2xl overflow-hidden flex flex-col items-center max-h-[90vh]">
            
            <div className="w-full flex justify-between items-center pb-4 mb-4 border-b border-slate-800">
              <h3 className="text-teal-400 font-serif font-bold text-lg tracking-wider">NIMRA SARFRAZ - CV</h3>
              <button 
                onClick={() => setShowCvModal(false)}
                className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition text-lg"
              >
                <FaTimes />
              </button>
            </div>

            <div className="w-full max-h-[65vh] overflow-y-auto flex justify-center p-2">
              <img 
                src="/cv.jpg" 
                alt="Nimra Sarfraz CV" 
                className="rounded-xl shadow-lg max-w-full object-contain border border-slate-700" 
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full mt-6">
              <a 
                href="/cv.jpg" 
                download="Nimra_Sarfraz_CV.jpg"
                className="w-full sm:flex-1 py-3 bg-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-teal-400 transition flex items-center justify-center gap-2 text-center"
              >
                <FaDownload /> Download Image
              </a>
              <button 
                onClick={() => setShowCvModal(false)}
                className="w-full sm:w-auto px-6 py-3 border border-slate-700 text-slate-300 font-semibold text-xs uppercase rounded-full hover:bg-slate-800 transition text-center"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Contact & Location Info Strip */}
      <section id="about" className="py-16 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
            <div className="p-4 bg-teal-500/10 text-teal-400 rounded-xl text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Phone</p>
              <a href="tel:03213423312" className="text-base font-medium hover:text-teal-400 transition">0321-3423312</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
            <div className="p-4 bg-teal-500/10 text-teal-400 rounded-xl text-xl">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Email</p>
              <a href="mailto:Nimrasarfraz12@gmail.com" className="text-sm font-medium hover:text-teal-400 transition">Nimrasarfraz12@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
            <div className="p-4 bg-teal-500/10 text-teal-400 rounded-xl text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Location</p>
              <span className="text-base font-medium">Rawalpindi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section id="projects" className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-teal-400 uppercase tracking-[0.2em] text-xs font-semibold">Visual Gallery</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Featured Projects</h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">Explore selected interior works ranging from compact modern studio apartments to elegant living rooms and kitchens.</p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('studio')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              activeTab === 'studio' 
                ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25' 
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-teal-500/50'
            }`}
          >
            Studio Apartment
          </button>
          <button 
            onClick={() => setActiveTab('living-kitchen')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              activeTab === 'living-kitchen' 
                ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25' 
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-teal-500/50'
            }`}
          >
            Living Room & Kitchen
          </button>
          <button 
            onClick={() => setActiveTab('other')}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
              activeTab === 'other' 
                ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25' 
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-teal-500/50'
            }`}
          >
            Other
          </button>
        </div>

        {/* Gallery Grid Display */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {getCurrentProjects().map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
              className="group relative bg-slate-900 border border-slate-800 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-md hover:border-teal-500/50 transition"
            >
              <div className="h-36 sm:h-64 overflow-hidden bg-slate-950">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e)=>{
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 hidden sm:flex items-end p-4">
                <div>
                  <span className="text-teal-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Click to preview</span>
                  <h3 className="text-white font-serif font-bold text-sm sm:text-lg">{item.title}</h3>
                </div>
              </div>
              <div className="p-2.5 sm:p-4 bg-slate-950 flex justify-between items-center border-t border-slate-800/80">
                <span className="text-[11px] sm:text-sm font-medium text-slate-200 truncate">{item.title}</span>
                <FaEye className="text-teal-400 text-xs sm:text-sm shrink-0 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative bg-slate-900 border border-teal-500/40 rounded-3xl max-w-4xl w-full p-4 sm:p-6 shadow-2xl flex flex-col items-center">
            
            <div className="w-full flex justify-between items-center pb-3 mb-3 border-b border-slate-800">
              <h3 className="text-teal-400 font-serif font-bold text-sm sm:text-base tracking-wide">{selectedImage.title}</h3>
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition text-lg cursor-pointer"
              >
                <FaTimes />
              </button>
            </div>

            <div className="w-full max-h-[75vh] flex justify-center overflow-hidden rounded-xl bg-slate-950">
              <img 
                src={selectedImage.img} 
                alt={selectedImage.title} 
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 flex justify-end w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2.5 bg-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-teal-400 transition"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-800">
        <div className="text-center mb-16">
          <span className="text-teal-400 uppercase tracking-[0.2em] text-xs font-semibold">Expertise & Software</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Professional Skills</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { name: "AutoCAD", level: "Advanced" },
            { name: "Sketchup", level: "Expert" },
            { name: "V-Ray", level: "Professional" },
            { name: "Enscape", level: "Expert" },
            { name: "Photoshop", level: "Advanced" }
          ].map((skill, index) => (
            <div key={index} className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl text-center hover:border-teal-500/50 transition group">
              <div className="w-12 h-12 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                <FaTools />
              </div>
              <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
              <p className="text-xs text-slate-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-24 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <div id="experience">
            <div className="flex items-center space-x-3 mb-10">
              <FaBriefcase className="text-teal-400 text-2xl" />
              <h2 className="text-3xl font-serif font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative pl-8 border-l-4 border-l-teal-400">
                <span className="text-xs text-teal-400 font-semibold uppercase tracking-wider">1.5 Years Experience</span>
                <h3 className="text-2xl font-bold mt-1">RMG Development</h3>
                <p className="text-slate-400 text-sm mt-2">Working as a professional interior designer, handling high-end architectural layouts, 3D rendering, and execution.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <div className="flex items-center space-x-3 mb-10">
              <FaGraduationCap className="text-teal-400 text-2xl" />
              <h2 className="text-3xl font-serif font-bold">Education & Diploma</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-teal-400 uppercase font-semibold">Diploma</span>
                  <h4 className="text-base font-bold">Rawalpindi Institute Art & Design</h4>
                </div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-teal-400 uppercase font-semibold">Bachelor</span>
                  <h4 className="text-base font-bold">Virtual University</h4>
                </div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-teal-400 uppercase font-semibold">HSSC</span>
                  <h4 className="text-base font-bold">Government Viqar-un-Nisa College</h4>
                </div>
              </div>
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-teal-400 uppercase font-semibold">SSC</span>
                  <h4 className="text-base font-bold">The Amaranth School</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <FaLanguage className="text-teal-400 text-3xl mx-auto mb-3" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold">Languages</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {["English", "Urdu", "Punjabi"].map((lang, idx) => (
            <span key={idx} className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-full font-medium tracking-wide text-teal-400 shadow-sm">
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* Professional Footer / Contact Section */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-teal-300 flex items-center justify-center text-slate-950 font-serif font-bold text-lg shadow-md">
                NS
              </div>
              <span className="font-serif tracking-widest text-teal-400 font-bold text-base">
                NIMRA SARFRAZ
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional Interior Designer specializing in creating aesthetically pleasing, functional, and modern spatial environments.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-teal-400 font-serif font-bold text-base uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="text-slate-400 hover:text-teal-400 transition">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-teal-400 transition">About & Info</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-teal-400 transition">Projects Gallery</a></li>
              <li><a href="#skills" className="text-slate-400 hover:text-teal-400 transition">Skills & Software</a></li>
              <li><a href="#experience" className="text-slate-400 hover:text-teal-400 transition">Experience</a></li>
            </ul>
          </div>

          {/* Column 3: Let's Connect */}
          <div>
            <h3 className="text-teal-400 font-serif font-bold text-base uppercase tracking-wider mb-4">Let's Connect</h3>
            <p className="text-slate-400 text-sm mb-4">Get in touch for professional interior design consultations and project inquiries.</p>
            <a 
              href="mailto:Nimrasarfraz12@gmail.com" 
              className="inline-block px-6 py-3 bg-teal-500 text-slate-950 font-bold tracking-wider uppercase text-xs rounded-full hover:bg-teal-400 transition shadow-lg shadow-teal-500/20"
            >
              Hire Me Now
            </a>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 text-center flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nimra Sarfraz. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 text-teal-500/80">Rawalpindi, Pakistan</p>
        </div>
      </footer>

    </div>
  );
}