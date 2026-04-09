/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Palette, 
  FileText, 
  Globe, 
  Plane, 
  Trophy, 
  Edit, 
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  Sun,
  Moon,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';

// --- Data ---
const profile = {
  name: "AURELIA ZHAFIRA",
  title: "Creative Director & Brand Architect",
  summary: "Seorang visioner kreatif yang berfokus pada pembangunan identitas brand yang kuat dan kampanye digital yang berdampak. Dengan pengalaman lebih dari 7 tahun, saya membantu brand bertransformasi melalui desain yang bermakna dan strategi yang tajam.",
  contact: {
    phone: "0812-9876-5432",
    email: "aurelia.zhafira@studio.com",
    location: "Kec. Kebayoran Baru, Jakarta Selatan",
    socials: {
      linkedin: "https://www.linkedin.com/in/aurelia-zhafira-dummy",
      instagram: "https://www.instagram.com/AureliaZhafira_Studio",
      github: "https://github.com/AureliaZhafira"
    }
  },
  profileImage: "https://picsum.photos/seed/fashion/1200/1600",
  resumeImage: "/cv_aurelia.jpg",
  skills: [
    { name: "Brand Identity", level: 98 },
    { name: "Creative Direction", level: 95 },
    { name: "UI/UX Design", level: 92 },
    { name: "Motion Graphics", level: 88 },
    { name: "Digital Strategy", level: 90 }
  ],
  experience: [
    {
      company: "STUDIO ZHAFIRA",
      role: "Founder & Creative Director",
      period: "2021 - Sekarang",
      location: "Jakarta",
      description: "Memimpin tim kreatif dalam mengembangkan identitas visual dan strategi brand untuk klien startup hingga korporasi besar. Berhasil meningkatkan brand awareness klien rata-rata sebesar 60%."
    },
    {
      company: "GLOBAL CREATIVE AGENCY",
      role: "Senior Art Director",
      period: "2018 - 2021",
      location: "Singapore",
      description: "Mengawasi produksi kreatif untuk kampanye regional di Asia Tenggara. Memenangkan 3 penghargaan desain internasional untuk kategori Brand Transformation."
    },
    {
      company: "MODERN MEDIA GROUP",
      role: "Graphic Designer",
      period: "2016 - 2018",
      location: "Jakarta",
      description: "Bertanggung jawab atas desain visual untuk majalah gaya hidup digital dan konten media sosial yang menjangkau jutaan audiens."
    }
  ],
  education: [
    {
      school: "INSTITUT TEKNOLOGI BANDUNG",
      period: "2012 - 2016",
      major: "Desain Komunikasi Visual",
      location: "Bandung",
      status: "Lulus dengan Pujian (Cum Laude)"
    }
  ],
  languages: [
    { name: "Indonesia", level: 100 },
    { name: "Inggris", level: 95 },
    { name: "Prancis", level: 40 }
  ],
  hobbies: [
    { name: "Art Curation", icon: <Palette className="w-6 h-6" /> },
    { name: "Travel Photography", icon: <Plane className="w-6 h-6" /> },
    { name: "Minimalist Architecture", icon: <Globe className="w-6 h-6" /> }
  ]
};

// --- Components ---

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsVisible(true);
    const handleMouseUp = () => {
      // Keep visible if moving, but this helps on some mobile browsers if CSS fails
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="cursor-follower"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
};

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-2xl px-6 py-3 flex justify-between items-center ${scrolled ? 'bg-glass shadow-glow' : 'bg-transparent'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-black tracking-tighter"
          >
            <span className="text-brand-600">AURELIA</span>
            <span className="text-slate-900 dark:text-white">.Z</span>
          </motion.div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="ml-4 p-2.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-all"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-brand-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-200 dark:shadow-brand-900/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 md:hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden z-50 p-4"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-white/5 rounded-2xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-4 bg-brand-600 text-white text-center font-bold rounded-2xl shadow-lg shadow-brand-200"
              >
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, center = false }: { children: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center flex flex-col items-center' : ''}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-black tracking-widest uppercase mb-4"
    >
      {children}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-slate-900 dark:text-white mb-6 leading-tight italic"
    >
      {subtitle}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-2 bg-linear-to-r from-brand-600 to-accent-cyan rounded-full"
    />
  </div>
);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (type: 'whatsapp' | 'email') => {
    const { name, email, subject, message } = formData;
    const bodyText = `Halo ${profile.name.split(' ')[0]},\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    
    if (type === 'whatsapp') {
      const waUrl = `https://wa.me/${profile.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(bodyText)}`;
      window.open(waUrl, '_blank');
    } else {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.contact.email}&su=${encodeURIComponent(subject || 'Kontak dari Portfolio')}&body=${encodeURIComponent(bodyText)}`;
      window.open(gmailUrl, '_blank');
    }
    
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = profile.resumeImage;
    link.download = `CV_${profile.name.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-50 selection:bg-brand-100 dark:selection:bg-brand-900/30 selection:text-brand-900 dark:selection:text-brand-100 transition-colors duration-300">
      <CursorFollower />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-900/50 hidden lg:block" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-200/20 dark:bg-brand-900/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 dark:bg-accent-cyan/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-black tracking-widest uppercase mb-6">
                  Creative Director
                </span>
                
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter mb-8">
                  AURELIA <br /> 
                  <span className="text-brand-600 italic font-serif font-normal lowercase tracking-normal">Zhafira</span>
                </h1>
                
                <div className="flex items-center gap-6 mb-10">
                  <div className="h-px w-12 bg-slate-300 dark:bg-slate-700" />
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium max-w-md">
                    Membangun narasi visual yang kuat untuk brand masa depan.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact" 
                    className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-lg hover:bg-brand-600 dark:hover:bg-brand-400 transition-all flex items-center gap-3"
                  >
                    Start Project
                    <ChevronRight size={20} />
                  </motion.a>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDownloadCV}
                    className="px-8 py-4 bg-transparent text-slate-900 dark:text-white border-2 border-slate-200 dark:border-white/10 rounded-full font-bold text-lg hover:border-brand-600 transition-all flex items-center gap-3"
                  >
                    View Resume
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
              className="relative aspect-[3/4] lg:aspect-auto lg:h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img 
                src={profile.profileImage} 
                alt={profile.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="text-white">
                  <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Based in</p>
                  <p className="text-lg font-bold">Jakarta, ID</p>
                </div>
                <div className="flex gap-4">
                  {[Instagram, Linkedin, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6 sm:pt-12">
                  <div className="aspect-square bg-brand-50 dark:bg-brand-900/10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-6 md:p-8 text-center group hover:bg-brand-600 transition-all duration-500">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Palette size={28} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors">Art Direction</h4>
                  </div>
                  <div className="aspect-square bg-slate-50 dark:bg-slate-900/40 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-6 md:p-8 text-center group hover:bg-accent-cyan transition-all duration-500">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-accent-cyan shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Globe size={28} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors">Brand Strategy</h4>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="aspect-square bg-slate-900 dark:bg-slate-800 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-6 md:p-8 text-center group hover:bg-brand-500 transition-all duration-500">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Code size={28} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white transition-colors">UI/UX Design</h4>
                  </div>
                  <div className="aspect-square bg-brand-100 dark:bg-brand-900/20 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-6 md:p-8 text-center group hover:bg-accent-rose transition-all duration-500">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-accent-rose shadow-sm mb-4 group-hover:scale-110 transition-transform">
                      <Edit size={28} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors">Motion Design</h4>
                  </div>
                </div>
              </div>
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-50 dark:bg-brand-900/5 rounded-full -z-0 opacity-50" />
            </motion.div>

            <div className="relative">
              <SectionHeading subtitle="Bersemangat untuk menciptakan dampak yang berarti melalui desain yang bermakna.">
                Tentang Saya
              </SectionHeading>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
              >
                {profile.summary}
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: <MapPin className="text-brand-600 dark:text-brand-400" />, label: 'Lokasi', value: profile.contact.location },
                  { icon: <Mail className="text-accent-cyan" />, label: 'Email', value: profile.contact.email },
                  { icon: <Phone className="text-accent-rose" />, label: 'Telepon', value: profile.contact.phone },
                  { icon: <Globe className="text-accent-violet" />, label: 'Bahasa', value: 'Indo, Inggris, Prancis' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-5 p-4 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/10 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-brand-900/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[150px]">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4">
                {profile.languages.map((lang) => (
                  <div key={lang.name} className="px-5 py-2 bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 rounded-full text-sm font-bold border border-brand-100 dark:border-brand-800">
                    {lang.name} {lang.level}%
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-100/20 dark:bg-brand-900/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading center subtitle="Lihat lebih detail perjalanan profesional saya.">
            Resume Saya
          </SectionHeading>
          
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group max-w-4xl w-full"
            >
              {/* Decorative background cards */}
              <div className="absolute inset-0 bg-brand-600 rounded-[3rem] rotate-2 scale-[1.02] -z-10 opacity-10 group-hover:rotate-3 transition-transform duration-500" />
              <div className="absolute inset-0 bg-accent-cyan rounded-[3rem] -rotate-2 scale-[1.02] -z-10 opacity-10 group-hover:-rotate-3 transition-transform duration-500" />
              
              <div className="bg-white dark:bg-slate-900 p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-100 dark:bg-brand-900/30 rounded-3xl flex items-center justify-center text-brand-600 dark:text-brand-400 mx-auto mb-6 md:mb-8">
                  <FileText size={40} />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 dark:text-white mb-4">Resume Profesional</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 md:mb-10 max-w-md mx-auto text-base md:text-lg">
                  Dokumen lengkap yang merangkum kualifikasi, pengalaman kerja, dan latar belakang pendidikan saya.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="px-8 md:px-12 py-4 md:py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg md:text-xl flex items-center gap-3 hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 dark:shadow-brand-900/40 mx-auto"
                >
                  <FileText size={24} />
                  Unduh CV (PDF/JPG)
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex flex-wrap justify-center gap-6"
            >
              <a 
                href="#contact"
                className="px-10 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-lg flex items-center gap-3"
              >
                <Mail size={24} className="text-accent-cyan" />
                Hubungi Saya
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Alat dan teknologi yang saya kuasai untuk memberikan hasil berkualitas tinggi.">
            Keahlian Saya
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-100 dark:border-white/10 group hover:bg-white dark:hover:bg-slate-900 hover:shadow-glow hover:border-brand-200 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                    {skill.name.includes('Design') || skill.name.includes('Identity') ? (
                      <Palette size={32} />
                    ) : skill.name.includes('Strategy') ? (
                      <Globe size={32} />
                    ) : skill.name.includes('Graphics') ? (
                      <Edit size={32} />
                    ) : (
                      <Briefcase size={32} />
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-display font-black text-slate-200 dark:text-slate-800 group-hover:text-brand-100 dark:group-hover:text-brand-900 transition-colors">
                      {skill.level}%
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">{skill.name}</h3>
                
                <div className="relative h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute top-0 left-0 h-full bg-linear-to-r from-brand-600 to-accent-cyan rounded-full"
                  />
                </div>
                
                <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Penguasaan</span>
                  <span className="text-sm font-black text-brand-600 dark:text-brand-400">Lanjutan</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Garis waktu pertumbuhan profesional dan pencapaian saya.">
            Perjalanan Kerja
          </SectionHeading>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-brand-600 via-accent-cyan to-accent-violet rounded-full transform -translate-x-1/2 opacity-20" />
            
            <div className="space-y-20">
              {profile.experience.map((exp, index) => (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 top-0 w-10 h-10 bg-white dark:bg-slate-900 rounded-2xl border-4 border-brand-600 shadow-glow transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <Briefcase size={16} className="text-brand-600" />
                  </div>
                  
                  <div className="md:w-1/2 pl-16 md:pl-0">
                    <div className={`bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-brand-900/10 hover:shadow-glow hover:border-brand-200 transition-all duration-500 group ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-6 md:mb-8">
                        <div>
                          <div className="inline-block px-4 py-1 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 md:mb-4">
                            {exp.period}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 dark:text-white leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-slate-500 dark:text-slate-400 font-bold mt-4">
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs md:text-sm">
                              <Briefcase size={14} className="text-brand-400" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-xs md:text-sm">
                              <MapPin size={14} className="text-accent-cyan" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
        {/* Background Accents */}
          <div className="absolute top-0 left-0 w-full h-full -z-0 opacity-30">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-600 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-cyan rounded-full blur-[150px]" />
          </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:20 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-brand-300 text-xs font-black tracking-widest uppercase mb-4"
            >
              Akademik
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6">Pendidikan</h2>
            <div className="h-2 w-20 md:w-24 bg-linear-to-r from-brand-400 to-accent-cyan rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {profile.education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-500 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
                  <GraduationCap size={28} className="text-white" />
                </div>
                <span className="text-brand-400 font-black text-xs tracking-widest uppercase">{edu.period}</span>
                <h3 className="text-xl md:text-2xl font-display font-black mt-4 mb-2">{edu.school}</h3>
                <p className="text-brand-200 font-bold mb-6 text-sm md:text-base">{edu.major}</p>
                
                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin size={16} className="text-accent-cyan" />
                    <span className="text-xs md:text-sm font-medium">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <ChevronRight size={16} className="text-brand-400" />
                    <span className="text-xs md:text-sm font-bold text-white/80">{edu.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 dark:bg-slate-900/50 rounded-[4rem] p-8 md:p-20 overflow-hidden relative border border-white/5">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[120px] -mr-48 -mt-48 opacity-40" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan rounded-full blur-[120px] -ml-48 -mb-48 opacity-30" />
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-brand-300 text-xs font-black tracking-widest uppercase mb-6"
                >
                  Kontak
                </motion.div>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6 md:mb-8 leading-tight">
                  Mari Bangun Sesuatu yang <span className="text-accent-cyan">Luar Biasa</span>.
                </h2>
                <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-md leading-relaxed">
                  Punya proyek dalam pikiran? Saya selalu terbuka untuk mendiskusikan peluang baru dan ide-ide kreatif.
                </p>
                
                <div className="space-y-6 md:space-y-8">
                  {[
                    { icon: <Mail size={24} />, label: 'Email Saya', value: profile.contact.email, href: `mailto:${profile.contact.email}`, color: 'bg-brand-500' },
                    { icon: <Phone size={24} />, label: 'Telepon Saya', value: profile.contact.phone, href: `tel:${profile.contact.phone}`, color: 'bg-accent-cyan' },
                    { icon: <MapPin size={24} />, label: 'Kunjungi Saya', value: profile.contact.location, href: '#', color: 'bg-accent-rose' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 md:gap-6 group"
                    >
                      <div className={`w-12 h-12 md:w-14 md:h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0`}>
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <a href={item.href} className="text-base md:text-xl font-bold text-white hover:text-brand-400 transition-colors truncate block">
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-12">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${profile.contact.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-green-500 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-200 dark:shadow-green-900/20 hover:bg-green-600 transition-all"
                  >
                    <MessageCircle size={24} />
                    WhatsApp
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${profile.contact.email}`}
                    className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-brand-200 dark:shadow-brand-900/20 hover:bg-brand-700 transition-all"
                  >
                    <Mail size={24} />
                    Email
                  </motion.a>
                </div>

                <div className="flex gap-4 md:gap-5 mt-12 md:mt-16">
                  {[
                    { icon: <Instagram size={24} />, href: profile.contact.socials.instagram },
                    { icon: <Linkedin size={24} />, href: profile.contact.socials.linkedin },
                    { icon: <Github size={24} />, href: profile.contact.socials.github }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      whileHover={{ y: -5 }}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 md:w-14 md:h-14 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10 hover:bg-white hover:text-slate-900 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-6 sm:p-10 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-slate-100 dark:border-white/5"
              >
                <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Nama</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        required
                        className="w-full px-5 md:px-6 py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold text-sm md:text-base dark:text-white"
                      />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@anda.com"
                        required
                        className="w-full px-5 md:px-6 py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold text-sm md:text-base dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Subjek</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Tentang apa ini?"
                      required
                      className="w-full px-5 md:px-6 py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold text-sm md:text-base dark:text-white"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Pesan</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Ceritakan lebih banyak tentang proyek Anda..."
                      required
                      className="w-full px-5 md:px-6 py-3 md:py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 transition-all font-bold text-sm md:text-base dark:text-white resize-none"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => handleSendMessage('whatsapp')}
                      disabled={isSent || !formData.name || !formData.message}
                      className={`py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
                        isSent 
                          ? 'bg-green-500 text-white shadow-green-200' 
                          : 'bg-green-600 text-white hover:bg-green-700 shadow-green-200 dark:shadow-green-900/40 disabled:opacity-50 disabled:cursor-not-allowed'
                      }`}
                    >
                      <MessageCircle size={24} />
                      {isSent ? 'Terkirim!' : 'WhatsApp'}
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => handleSendMessage('email')}
                      disabled={isSent || !formData.name || !formData.message}
                      className={`py-4 md:py-5 rounded-2xl font-black text-base md:text-lg transition-all shadow-xl flex items-center justify-center gap-3 ${
                        isSent 
                          ? 'bg-green-500 text-white shadow-green-200' 
                          : 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-200 dark:shadow-brand-900/40 disabled:opacity-50 disabled:cursor-not-allowed'
                      }`}
                    >
                      <Mail size={24} />
                      {isSent ? 'Terkirim!' : 'Email'}
                    </motion.button>
                  </div>
                  <p className="text-center text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Balasan langsung dalam 24 jam
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            <div className="text-3xl font-display font-black tracking-tighter text-center md:text-left">
              <span className="text-brand-600">AURELIA</span>
              <span className="text-slate-900 dark:text-white">.Z</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {['Tentang', 'Keahlian', 'Pengalaman', 'Pendidikan', 'Kontak'].map((item) => (
                <a key={item} href={`#${item === 'Tentang' ? 'about' : item === 'Keahlian' ? 'skills' : item === 'Pengalaman' ? 'experience' : item === 'Pendidikan' ? 'education' : 'contact'}`} className="text-xs sm:text-sm font-black text-slate-400 hover:text-brand-600 uppercase tracking-widest transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, href: profile.contact.socials.instagram },
                { icon: <Linkedin size={20} />, href: profile.contact.socials.linkedin },
                { icon: <Github size={20} />, href: profile.contact.socials.github }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 md:mt-20 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-widest text-center">
              © {new Date().getFullYear()} {profile.name}. Dibuat dengan Sepenuh Hati.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-widest">
              <span>Didesain di</span>
              <span className="text-brand-600">{profile.contact.location.split(',')[1]?.trim() || 'Indonesia'}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
