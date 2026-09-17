import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaTools,
  FaBriefcase,
  FaLanguage,
  FaBars,
  FaTimes,
  FaDownload,
  FaArrowRight,
  FaEye,
  FaWhatsapp,
  FaChevronRight,
} from "react-icons/fa";

// ===============================
// TYPEWRITER
// ===============================
function TypewriterEffect({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800,
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[index];
    let timer;

    if (!deleting) {
      if (text.length < fullText.length) {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setDeleting(true), pauseTime);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <>
      {text}
      <span className="text-cyan-400 animate-pulse">|</span>
    </>
  );
}

// ===============================
// APP
// ===============================
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("studio");

  // ===============================
  // PROJECTS
  // ===============================
  const studioProjects = [
    { id: 1, title: "Studio Apartment - View 01", img: "/p1.jpg" },
    { id: 2, title: "Studio Apartment - View 02", img: "/p2.jpg" },
    { id: 3, title: "Studio Apartment - View 03", img: "/p3.jpg" },
    { id: 4, title: "Studio Apartment - View 04", img: "/p4.jpg" },
    { id: 5, title: "Studio Apartment - View 05", img: "/p5.jpg" },
  ];

  const livingProjects = [
    { id: 6, title: "Living Room & Kitchen - View 01", img: "/p6.jpg" },
    { id: 7, title: "Living Room & Kitchen - View 02", img: "/p7.jpg" },
    { id: 8, title: "Living Room & Kitchen - View 03", img: "/p8.jpg" },
    { id: 9, title: "Living Room & Kitchen - View 04", img: "/p9.jpg" },
    { id: 10, title: "Living Room & Kitchen - View 05", img: "/p10.jpg" },
  ];

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

  const currentProjects =
    activeTab === "studio"
      ? studioProjects
      : activeTab === "living"
      ? livingProjects
      : otherProjects;

  // ===============================
  // NAV ITEMS
  // ===============================
  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Education", "#education"],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020d1d] text-slate-100 font-sans selection:bg-cyan-400 selection:text-slate-950">

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[130px]" />
      </div>

      {/* =====================================================
          WHATSAPP
      ===================================================== */}
      <a
        href="https://wa.me/923213423312"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 bottom-5 z-[100] group"
      >
        <div className="flex items-center gap-2">

          <span className="hidden sm:block bg-slate-900 border border-cyan-400/30 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
            WhatsApp
          </span>

          <div className="w-14 h-14 rounded-full bg-[#20c76a] flex items-center justify-center shadow-[0_0_30px_rgba(32,199,106,0.45)] hover:scale-110 transition">
            <FaWhatsapp className="text-3xl text-white" />
          </div>

        </div>
      </a>

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6">

        <div className="max-w-6xl mx-auto rounded-full border border-cyan-400/40 bg-[#020b18]/90 backdrop-blur-xl px-4 sm:px-6 py-2.5 shadow-[0_0_30px_rgba(34,211,238,0.10)]">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <a href="#home" className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-300 text-slate-950 flex items-center justify-center font-serif font-bold text-lg">
                NS
              </div>

              <div className="hidden sm:block">
                <p className="text-cyan-400 font-serif font-bold tracking-[0.18em] text-sm">
                  NIMRA SARFRAZ
                </p>

                <p className="text-[8px] tracking-[0.35em] text-slate-400">
                  INTERIOR DESIGNER
                </p>
              </div>

            </a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-6">

              {navItems.map(([name, link], i) => (
                <a
                  key={name}
                  href={link}
                  className={`text-[10px] uppercase tracking-widest transition ${
                    i === 0
                      ? "text-cyan-400 border-b border-cyan-400 pb-1"
                      : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {name}
                </a>
              ))}

            </div>

            {/* TALK */}
            <a
              href="#contact"
              className="hidden sm:block px-5 py-2 border border-cyan-400 rounded-full text-[10px] uppercase tracking-widest text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 transition"
            >
              Let's Talk
            </a>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-cyan-400 text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="lg:hidden mt-4 pb-3 border-t border-slate-800 pt-4 flex flex-col gap-2">

              {navItems.map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs uppercase tracking-widest text-slate-300 hover:text-cyan-400 py-2"
                >
                  {name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-cyan-400 text-slate-950 py-3 rounded-full text-xs font-bold mt-2"
              >
                Let's Talk
              </a>

            </div>
          )}

        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-32 pb-20 px-5"
      >

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="relative z-10 text-center lg:text-left">

            <div className="inline-flex px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/5 text-cyan-400 text-[9px] uppercase tracking-widest mb-7">
              ✦ Available For Interior Design Projects
            </div>

            <p className="text-slate-300 text-lg mb-3">
              Hi there 👋, I am
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
              <TypewriterEffect
                texts={[
                  "Nimra Sarfraz",
                  "Interior Designer",
                  "Spatial Architect",
                ]}
              />
            </h1>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-cyan-400 mt-4">
              Interior Designer
            </h2>

            <p className="text-slate-400 max-w-xl mt-6 leading-7 text-sm sm:text-base mx-auto lg:mx-0">
              Transforming spaces into breathtaking visual masterpieces
              with cutting-edge spatial planning, AutoCAD, Sketchup,
              and modern design architecture.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-cyan-300 transition flex items-center gap-2"
              >
                Hire Me
                <FaArrowRight />
              </a>

              <button
                onClick={() => setCvOpen(true)}
                className="px-7 py-3.5 rounded-full border border-cyan-400/70 text-cyan-400 text-xs font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-slate-950 transition flex items-center gap-2"
              >
                <FaEye />
                View CV
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden md:block">

            <div className="absolute inset-0 bg-cyan-400/10 blur-[70px]" />

            <div className="relative rounded-[40px] overflow-hidden border border-cyan-400/30 shadow-[0_0_50px_rgba(34,211,238,0.12)]">

              <img
                src="/hero-interior.jpg"
                alt="Interior Design"
                className="w-full h-[520px] object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#020d1d] via-transparent to-transparent" />

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTACT STRIP
      ===================================================== */}
      <section
        id="about"
        className="border-y border-cyan-400/10 bg-[#031326] py-8 px-5"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">

          {/* PHONE */}
          <div className="flex items-center gap-4 border border-cyan-400/20 rounded-2xl p-5 bg-[#02101f]">

            <div className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400">
              <FaPhoneAlt />
            </div>

            <div>
              <p className="text-[9px] text-cyan-400 uppercase tracking-widest">
                Phone
              </p>
              <p className="text-sm mt-1">
                0321-3423312
              </p>
            </div>

          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4 border border-cyan-400/20 rounded-2xl p-5 bg-[#02101f]">

            <div className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-[9px] text-cyan-400 uppercase tracking-widest">
                Email
              </p>
              <p className="text-xs mt-1">
                Nimrasarfraz12@gmail.com
              </p>
            </div>

          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-4 border border-cyan-400/20 rounded-2xl p-5 bg-[#02101f]">

            <div className="w-12 h-12 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="text-[9px] text-cyan-400 uppercase tracking-widest">
                Location
              </p>
              <p className="text-sm mt-1">
                Rawalpindi
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-5 py-24"
      >

        <div className="text-center mb-12">

          <p className="text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-bold">
            Visual Gallery
          </p>

          <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-2">
            Featured Projects
          </h2>

          <p className="max-w-xl mx-auto text-slate-400 text-sm mt-4">
            Explore selected interior works ranging from compact modern
            studio apartments to elegant living rooms and kitchens.
          </p>

        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">

          <button
            onClick={() => setActiveTab("studio")}
            className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition ${
              activeTab === "studio"
                ? "bg-cyan-400 text-slate-950 border-cyan-400"
                : "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            }`}
          >
            Studio Apartment
          </button>

          <button
            onClick={() => setActiveTab("living")}
            className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition ${
              activeTab === "living"
                ? "bg-cyan-400 text-slate-950 border-cyan-400"
                : "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            }`}
          >
            Living Room & Kitchen
          </button>

          <button
            onClick={() => setActiveTab("other")}
            className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition ${
              activeTab === "other"
                ? "bg-cyan-400 text-slate-950 border-cyan-400"
                : "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            }`}
          >
            Other
          </button>

        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {currentProjects.map((project) => (

            <div
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#031326] hover:border-cyan-400/60 transition"
            >

              <div className="h-64 overflow-hidden relative">

                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020d1d] via-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">

                  <div>
                    <p className="text-[9px] text-cyan-400 uppercase tracking-widest">
                      Click to Preview
                    </p>

                    <h3 className="text-sm font-semibold mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <FaEye className="text-cyan-400" />

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section
        id="skills"
        className="border-y border-cyan-400/10 bg-[#031326] py-24 px-5"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-bold">
              Expertise & Software
            </p>

            <h2 className="text-4xl sm:text-5xl font-serif font-bold mt-2">
              Professional Skills
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

            {[
              ["AutoCAD", "Advanced"],
              ["Sketchup", "Expert"],
              ["V-Ray", "Professional"],
              ["Enscape", "Expert"],
              ["Photoshop", "Advanced"],
            ].map(([name, level]) => (

              <div
                key={name}
                className="border border-cyan-400/20 bg-[#02101f] rounded-2xl p-7 text-center hover:border-cyan-400/60 hover:-translate-y-1 transition"
              >

                <div className="w-14 h-14 rounded-full border border-cyan-400/40 bg-cyan-400/5 flex items-center justify-center mx-auto text-cyan-400 text-xl">
                  <FaTools />
                </div>

                <h3 className="font-bold mt-5">
                  {name}
                </h3>

                <p className="text-xs text-slate-500 mt-2">
                  {level}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE + EDUCATION
      ===================================================== */}
      <section className="py-24 px-5">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* EXPERIENCE */}
          <div id="experience">

            <div className="flex items-center gap-3 mb-8">

              <FaBriefcase className="text-cyan-400 text-xl" />

              <h2 className="text-3xl font-serif font-bold">
                Experience
              </h2>

            </div>

            <div className="border border-cyan-400/20 rounded-2xl bg-[#031326] p-7 border-l-4 border-l-cyan-400">

              <p className="text-cyan-400 text-xs uppercase tracking-widest font-bold">
                1.5 Years Experience
              </p>

              <h3 className="text-2xl font-bold mt-2">
                RMG Development
              </h3>

              <p className="text-slate-400 text-sm leading-7 mt-4">
                Working as a professional interior designer, handling
                high-end architectural layouts, 3D rendering, and
                execution.
              </p>

            </div>

          </div>

          {/* EDUCATION */}
          <div id="education">

            <div className="flex items-center gap-3 mb-8">

              <FaGraduationCap className="text-cyan-400 text-xl" />

              <h2 className="text-3xl font-serif font-bold">
                Education & Diploma
              </h2>

            </div>

            <div className="space-y-3">

              {[
                ["DIPLOMA", "Rawalpindi Institute Art & Design"],
                ["BACHELOR", "Virtual University"],
                ["HSSC", "Government Viqar-un-Nisa College"],
                ["SSC", "The Amaranth School"],
              ].map(([degree, school]) => (

                <div
                  key={degree}
                  className="flex items-center gap-5 p-5 rounded-xl border border-cyan-400/20 bg-[#031326]"
                >

                  <span className="text-cyan-400 text-[9px] font-bold tracking-widest min-w-[65px]">
                    {degree}
                  </span>

                  <span className="text-sm text-slate-300">
                    {school}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LANGUAGES
      ===================================================== */}
      <section className="border-y border-cyan-400/10 bg-[#031326] py-16 px-5">

        <div className="text-center">

          <FaLanguage className="text-cyan-400 text-3xl mx-auto" />

          <h2 className="text-3xl font-serif font-bold mt-3">
            Languages
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mt-7">

            {["English", "Urdu", "Punjabi"].map((language) => (

              <span
                key={language}
                className="px-7 py-3 rounded-full border border-cyan-400/50 text-cyan-400 text-xs font-semibold"
              >
                {language}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer
        id="contact"
        className="bg-[#010914] pt-20 pb-8 px-5"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-400 to-teal-300 flex items-center justify-center text-slate-950 font-serif font-bold">
                NS
              </div>

              <div>
                <p className="text-cyan-400 font-serif font-bold tracking-widest">
                  NIMRA SARFRAZ
                </p>

                <p className="text-[8px] text-slate-500 tracking-[0.3em]">
                  INTERIOR DESIGNER
                </p>
              </div>

            </div>

            <p className="text-slate-500 text-sm leading-6 mt-5 max-w-sm">
              Professional Interior Designer specializing in creating
              aesthetically pleasing, functional, and modern spatial
              environments.
            </p>

          </div>

          {/* LINKS */}
          <div>

            <h3 className="text-cyan-400 text-xs uppercase tracking-widest font-bold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              {navItems.slice(0, 5).map(([name, link]) => (

                <a
                  key={name}
                  href={link}
                  className="block text-sm text-slate-500 hover:text-cyan-400 transition"
                >
                  <FaChevronRight className="inline text-[8px] mr-2" />
                  {name}
                </a>

              ))}

            </div>

          </div>

          {/* CONNECT */}
          <div>

            <h3 className="text-cyan-400 text-xs uppercase tracking-widest font-bold mb-5">
              Let's Connect
            </h3>

            <p className="text-slate-500 text-sm leading-6 mb-5">
              Get in touch for professional interior design
              consultations and project inquiries.
            </p>

            <a
              href="mailto:Nimrasarfraz12@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-slate-950 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-cyan-300 transition"
            >
              Hire Me Now
              <FaArrowRight />
            </a>

          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-7 border-t border-slate-900 flex flex-col sm:flex-row justify-between gap-3 text-center sm:text-left text-xs text-slate-600">

          <p>
            © {new Date().getFullYear()} Nimra Sarfraz. All rights reserved.
          </p>

          <p>
            Rawalpindi, Pakistan
          </p>

        </div>

      </footer>

      {/* =====================================================
          CV MODAL
      ===================================================== */}
      {cvOpen && (

        <div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setCvOpen(false)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[92vh] bg-[#031326] border border-cyan-400/40 rounded-3xl p-5 overflow-hidden"
          >

            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">

              <h3 className="text-cyan-400 font-serif font-bold">
                NIMRA SARFRAZ — CV
              </h3>

              <button
                onClick={() => setCvOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-400 hover:text-slate-950 transition"
              >
                <FaTimes />
              </button>

            </div>

            <div className="max-h-[65vh] overflow-y-auto flex justify-center">

              <img
                src="/cv.jpg"
                alt="Nimra Sarfraz CV"
                className="max-w-full rounded-xl"
              />

            </div>

            <div className="flex gap-3 mt-5">

              <a
                href="/cv.jpg"
                download="Nimra_Sarfraz_CV.jpg"
                className="flex-1 py-3 rounded-full bg-cyan-400 text-slate-950 text-center text-xs font-bold uppercase tracking-widest"
              >
                <FaDownload className="inline mr-2" />
                Download CV
              </a>

              <button
                onClick={() => setCvOpen(false)}
                className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-xs uppercase"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}
      {selectedImage && (

        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#031326] border border-cyan-400/40 rounded-3xl p-4 sm:p-6"
          >

            <div className="flex justify-between items-center mb-4">

              <h3 className="text-cyan-400 font-serif font-bold text-sm">
                {selectedImage.title}
              </h3>

              <button
                onClick={() => setSelectedImage(null)}
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center"
              >
                <FaTimes />
              </button>

            </div>

            <div className="flex justify-center bg-black rounded-2xl overflow-hidden">

              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="max-h-[75vh] max-w-full object-contain"
              />

            </div>

            <div className="text-right mt-4">

              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2.5 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold uppercase"
              >
                Close Preview
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}