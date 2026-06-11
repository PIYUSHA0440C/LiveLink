import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  ArrowUpRight, 
  Sparkles, 
  MessageSquare, 
  Video, 
  MapPin, 
  CheckCircle 
} from 'lucide-react';
import ThemeSelector from '../components/ThemeSelector';
import { useThemeStore } from '../store/useThemeStore';
import { LANGUAGE_TO_FLAG, LANGUAGES } from '../constants';

const DiscoverIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="discoverClip">
        <circle cx="0" cy="0" r="14" />
      </clipPath>
      <linearGradient id="discoverGlobeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary, #4f46e5)" stopOpacity="0.25" />
        <stop offset="100%" stopColor="var(--color-secondary, #ec4899)" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    
    {/* Outer Glow */}
    <circle cx="200" cy="200" r="140" fill="url(#discoverGlobeGrad)" />
    
    {/* Globe Lines */}
    <circle cx="200" cy="200" r="110" stroke="var(--color-base-content, #fff)" strokeOpacity="0.15" strokeWidth="2" fill="none" />
    <path d="M90,200 Q200,80 310,200 Q200,320 90,200 Z" stroke="var(--color-base-content, #fff)" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
    <path d="M200,90 Q110,200 200,310 Q290,200 200,90 Z" stroke="var(--color-base-content, #fff)" strokeOpacity="0.15" strokeWidth="1.5" fill="none" />
    <line x1="200" y1="90" x2="200" y2="310" stroke="var(--color-base-content, #fff)" strokeOpacity="0.15" strokeWidth="1.5" />
    <line x1="90" y1="200" x2="310" y2="200" stroke="var(--color-base-content, #fff)" strokeOpacity="0.15" strokeWidth="1.5" />

    {/* Connection Links */}
    <path d="M110,160 C 180,80 220,80 290,160" fill="none" stroke="var(--color-primary, #4f46e5)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 4" />
    <path d="M110,240 C 180,320 220,320 290,240" fill="none" stroke="var(--color-secondary, #ec4899)" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 4" />

    {/* Person 1 Avatar Left */}
    <g transform="translate(110, 160)">
      <circle r="26" fill="var(--color-primary, #4f46e5)" />
      {/* Stylized Head/Shoulders */}
      <path d="M -15,18 C -15,5 -8,2 0,2 C 8,2 15,5 15,18 Z" fill="#fff" />
      <circle cx="0" cy="-4" r="9" fill="#fff" />
      {/* Native flag */}
      <g transform="translate(16, 16)">
        <circle r="12" fill="var(--color-base-100, #1d232a)" stroke="var(--color-base-content, #fff)" strokeOpacity="0.2" strokeWidth="1.5" />
        <g clipPath="url(#discoverClip)" transform="scale(0.85)">
          <rect x="-14" y="-14" width="28" height="28" fill="#fff" />
          <rect x="-14" y="-14" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="-6" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="2" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="10" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="-14" width="15" height="14" fill="#3c3b6e" />
          <polygon points="-7,-10 -8,-7 -11,-7 -9,-5 -10,-2 -7,-4 -4,-2 -5,-5 -3,-7 -6,-7" fill="#fff" transform="scale(0.6) translate(-4, -5)" />
        </g>
      </g>
    </g>

    {/* Person 2 Avatar Right */}
    <g transform="translate(290, 160)">
      <circle r="26" fill="var(--color-secondary, #ec4899)" />
      {/* Stylized Head/Shoulders */}
      <path d="M -15,18 C -15,5 -8,2 0,2 C 8,2 15,5 15,18 Z" fill="#fff" />
      <circle cx="0" cy="-4" r="9" fill="#fff" />
      {/* Native flag */}
      <g transform="translate(-16, 16)">
        <circle r="12" fill="var(--color-base-100, #1d232a)" stroke="var(--color-base-content, #fff)" strokeOpacity="0.2" strokeWidth="1.5" />
        <g clipPath="url(#discoverClip)" transform="scale(0.85)">
          <rect x="-14" y="-14" width="28" height="28" fill="#c60b1e" />
          <rect x="-14" y="-7" width="28" height="14" fill="#ffc400" />
          <circle cx="-3" cy="0" r="3" fill="#c60b1e" />
        </g>
      </g>
    </g>

    {/* Floating Speech Bubbles */}
    <g transform="translate(60, 75)">
      <path d="M10,40 L10,15 A10,10 0 0 1 20,5 H70 A10,10 0 0 1 80,15 V30 A10,10 0 0 1 70,40 H25 L10,50 Z" fill="var(--color-base-100, #1d232a)" stroke="var(--color-primary, #4f46e5)" strokeWidth="2" />
      <text x="45" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="var(--color-base-content, #fff)" className="font-mono">¡Hola!</text>
    </g>

    <g transform="translate(250, 70)">
      <path d="M70,40 L70,15 A10,10 0 0 0 60,5 H10 A10,10 0 0 0 0,15 V30 A10,10 0 0 0 10,40 H55 L70,50 Z" fill="var(--color-base-100, #1d232a)" stroke="var(--color-secondary, #ec4899)" strokeWidth="2" />
      <text x="35" y="26" textAnchor="middle" fontSize="13" fontWeight="bold" fill="var(--color-base-content, #fff)" className="font-mono">Hello!</text>
    </g>

    {/* Scanning radar/stars */}
    <circle cx="200" cy="200" r="15" fill="var(--color-primary, #4f46e5)" fillOpacity="0.3" className="animate-ping" />
    <circle cx="200" cy="200" r="6" fill="var(--color-primary, #4f46e5)" />
    
    {/* Decorative small flags */}
    <g transform="translate(200, 310)">
      <circle r="14" fill="var(--color-base-100, #1d232a)" stroke="var(--color-base-content, #fff)" strokeOpacity="0.2" strokeWidth="1.5" />
      <g clipPath="url(#discoverClip)" transform="scale(1.0)">
        <rect x="-14" y="-14" width="28" height="28" fill="#fff" />
        <circle cx="0" cy="0" r="6.5" fill="#bc002d" />
      </g>
    </g>
    <g transform="translate(200, 90)">
      <circle r="14" fill="var(--color-base-100, #1d232a)" stroke="var(--color-base-content, #fff)" strokeOpacity="0.2" strokeWidth="1.5" />
      <g clipPath="url(#discoverClip)" transform="scale(1.0)">
        <rect x="-14" y="-14" width="28" height="28" fill="#fff" />
        <rect x="-14" y="-14" width="9.3" height="28" fill="#002395" />
        <rect x="4.7" y="-14" width="9.3" height="28" fill="#ed2939" />
      </g>
    </g>
  </svg>
);

const ConnectIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="connectClip">
        <circle cx="0" cy="0" r="14" />
      </clipPath>
      <linearGradient id="connectCardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary, #4f46e5)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="var(--color-primary, #4f46e5)" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="connectCardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-secondary, #ec4899)" stopOpacity="0.4" />
        <stop offset="100%" stopColor="var(--color-secondary, #ec4899)" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Left Profile Card */}
    <g transform="translate(60, 80) rotate(-6)">
      <rect width="160" height="200" rx="24" fill="url(#connectCardGrad1)" stroke="var(--color-primary, #4f46e5)" strokeWidth="2" />
      <circle cx="80" cy="65" r="30" fill="var(--color-base-100, #1d232a)" />
      {/* Stylized face on avatar */}
      <path d="M 62,90 C 62,75 70,72 80,72 C 90,72 98,75 98,90 Z" fill="var(--color-base-content, #fff)" fillOpacity="0.4" />
      <circle cx="80" cy="58" r="10" fill="var(--color-base-content, #fff)" fillOpacity="0.4" />
      
      {/* Text Lines */}
      <rect x="35" y="115" width="90" height="10" rx="5" fill="var(--color-base-content, #fff)" fillOpacity="0.3" />
      <rect x="50" y="135" width="60" height="8" rx="4" fill="var(--color-base-content, #fff)" fillOpacity="0.2" />
      
      {/* Language Tag */}
      <g transform="translate(45, 158)">
        <rect width="70" height="18" rx="9" fill="var(--color-primary, #4f46e5)" />
        <text x="35" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--color-primary-content, #fff)" className="font-mono">NATIVE: FR</text>
      </g>
    </g>

    {/* Right Profile Card */}
    <g transform="translate(180, 110) rotate(8)">
      <rect width="160" height="200" rx="24" fill="url(#connectCardGrad2)" stroke="var(--color-secondary, #ec4899)" strokeWidth="2" />
      <circle cx="80" cy="65" r="30" fill="var(--color-base-100, #1d232a)" />
      {/* Stylized face on avatar */}
      <path d="M 62,90 C 62,75 70,72 80,72 C 90,72 98,75 98,90 Z" fill="var(--color-base-content, #fff)" fillOpacity="0.4" />
      <circle cx="80" cy="58" r="10" fill="var(--color-base-content, #fff)" fillOpacity="0.4" />
      
      {/* Text Lines */}
      <rect x="35" y="115" width="90" height="10" rx="5" fill="var(--color-base-content, #fff)" fillOpacity="0.3" />
      <rect x="50" y="135" width="60" height="8" rx="4" fill="var(--color-base-content, #fff)" fillOpacity="0.2" />
      
      {/* Language Tag */}
      <g transform="translate(45, 158)">
        <rect width="70" height="18" rx="9" fill="var(--color-secondary, #ec4899)" />
        <text x="35" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="var(--color-secondary-content, #fff)" className="font-mono">NATIVE: EN</text>
      </g>
    </g>

    {/* Central Connection / Match Banner */}
    <g transform="translate(130, 210)">
      {/* Connection line */}
      <path d="M-20,0 C20,-40 100,-40 140,0" fill="none" stroke="var(--color-accent, #10b981)" strokeWidth="4" strokeLinecap="round" />
      
      {/* Pulse glow */}
      <circle cx="60" cy="-20" r="32" fill="var(--color-accent, #10b981)" fillOpacity="0.15" />
      <circle cx="60" cy="-20" r="22" fill="var(--color-accent, #10b981)" fillOpacity="0.25" className="animate-pulse" />
      
      {/* Friendship handshake or checkmark */}
      <circle cx="60" cy="-20" r="16" fill="var(--color-accent, #10b981)" />
      <path d="M53,-20 L58,-15 L67,-24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Floating items: Heart, Paper Airplane */}
    {/* Heart (Left top) */}
    <g transform="translate(190, 50)" className="animate-bounce" style={{ animationDuration: '3s' }}>
      <path d="M12,5 C8,1.5 2,2 2,8 C2,13 8,17 12,20 C16,17 22,13 22,8 C22,2 16,1.5 12,5 Z" fill="#ff4b91" />
    </g>

    {/* Paper Airplane (Right bottom) */}
    <g transform="translate(50, 310) rotate(-15)">
      <path d="M0,20 L30,0 L12,28 L8,20 Z M12,28 L17,21 L30,0 Z" fill="var(--color-primary, #4f46e5)" />
    </g>
  </svg>
);

const PracticeIllustration = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full fill-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="practiceClip">
        <circle cx="0" cy="0" r="14" />
      </clipPath>
      <linearGradient id="practiceVideoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary, #4f46e5)" />
        <stop offset="100%" stopColor="var(--color-secondary, #ec4899)" />
      </linearGradient>
      <linearGradient id="practiceVideoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-accent, #10b981)" />
        <stop offset="100%" stopColor="var(--color-primary, #4f46e5)" />
      </linearGradient>
    </defs>

    {/* Main Screen Container */}
    <rect x="40" y="50" width="320" height="250" rx="32" fill="var(--color-base-300, #2a303c)" stroke="var(--color-base-content, #fff)" strokeOpacity="0.2" strokeWidth="2" />
    
    {/* Screen header bar */}
    <circle cx="70" cy="75" r="5" fill="#ff5f56" />
    <circle cx="85" cy="75" r="5" fill="#ffbd2e" />
    <circle cx="100" cy="75" r="5" fill="#27c93f" />
    
    {/* Participants Grids inside the screen */}
    {/* Participant 1 (Left) */}
    <g transform="translate(60, 95)">
      <rect width="130" height="180" rx="20" fill="url(#practiceVideoGrad1)" />
      {/* Person silhouette */}
      <path d="M 15,180 C 15,130 35,120 65,120 C 95,120 115,130 115,180 Z" fill="#fff" fillOpacity="0.9" />
      <circle cx="65" cy="80" r="25" fill="#fff" fillOpacity="0.9" />
      
      {/* Name tag */}
      <rect x="15" y="15" width="75" height="20" rx="10" fill="#000" fillOpacity="0.4" />
      <text x="35" y="28" fontSize="9" fontWeight="bold" fill="#fff" className="font-sans">Marie</text>
      <g transform="translate(62, 25)">
        <g clipPath="url(#practiceClip)" transform="scale(0.4)">
          <rect x="-14" y="-14" width="28" height="28" fill="#fff" />
          <rect x="-14" y="-14" width="9.3" height="28" fill="#002395" />
          <rect x="4.7" y="-14" width="9.3" height="28" fill="#ed2939" />
        </g>
      </g>
    </g>

    {/* Participant 2 (Right) */}
    <g transform="translate(210, 95)">
      <rect width="130" height="180" rx="20" fill="url(#practiceVideoGrad2)" />
      {/* Person silhouette */}
      <path d="M 15,180 C 15,130 35,120 65,120 C 95,120 115,130 115,180 Z" fill="#fff" fillOpacity="0.9" />
      <circle cx="65" cy="80" r="25" fill="#fff" fillOpacity="0.9" />
      
      {/* Name tag */}
      <rect x="15" y="15" width="70" height="20" rx="10" fill="#000" fillOpacity="0.4" />
      <text x="32" y="28" fontSize="9" fontWeight="bold" fill="#fff" className="font-sans">Alex</text>
      <g transform="translate(56, 25)">
        <g clipPath="url(#practiceClip)" transform="scale(0.4)">
          <rect x="-14" y="-14" width="28" height="28" fill="#fff" />
          <rect x="-14" y="-14" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="-6" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="2" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="10" width="28" height="4" fill="#b22234" />
          <rect x="-14" y="-14" width="15" height="14" fill="#3c3b6e" />
          <polygon points="-7,-10 -8,-7 -11,-7 -9,-5 -10,-2 -7,-4 -4,-2 -5,-5 -3,-7 -6,-7" fill="#fff" transform="scale(0.6) translate(-4, -5)" />
        </g>
      </g>
    </g>

    {/* Floating Audio waves under the screen representing speech */}
    <g transform="translate(120, 335)">
      <rect x="0" y="-15" width="6" height="30" rx="3" fill="var(--color-primary, #4f46e5)" />
      <rect x="12" y="-25" width="6" height="50" rx="3" fill="var(--color-primary, #4f46e5)" fillOpacity="0.8" className="animate-pulse" />
      <rect x="24" y="-35" width="6" height="70" rx="3" fill="var(--color-accent, #10b981)" />
      <rect x="36" y="-20" width="6" height="40" rx="3" fill="var(--color-secondary, #ec4899)" fillOpacity="0.8" className="animate-pulse" />
      <rect x="48" y="-45" width="6" height="90" rx="3" fill="var(--color-secondary, #ec4899)" />
      <rect x="60" y="-25" width="6" height="50" rx="3" fill="var(--color-primary, #4f46e5)" fillOpacity="0.6" className="animate-pulse" />
      <rect x="72" y="-35" width="6" height="70" rx="3" fill="var(--color-accent, #10b981)" />
      <rect x="84" y="-15" width="6" height="30" rx="3" fill="var(--color-secondary, #ec4899)" fillOpacity="0.5" />
      <rect x="96" y="-5" width="6" height="10" rx="3" fill="var(--color-primary, #4f46e5)" fillOpacity="0.3" />
    </g>

    {/* Float Translation Card above */}
    <g transform="translate(120, 30)">
      <rect width="160" height="35" rx="12" fill="var(--color-base-100, #1d232a)" stroke="var(--color-success, #22c55e)" strokeWidth="2" />
      <text x="80" y="22" textAnchor="middle" fontSize="11" fontWeight="bold" fill="var(--color-success, #22c55e)" className="font-sans">✓ Instant Language Practice</text>
    </g>

    {/* Mic and Cam Icons */}
    <g transform="translate(45, 305)">
      <circle cx="20" cy="20" r="18" fill="var(--color-base-100, #1d232a)" stroke="var(--color-base-content, #fff)" strokeOpacity="0.1" strokeWidth="1" />
      <path d="M20,13 V23" stroke="var(--color-base-content, #fff)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="18" r="3" fill="var(--color-base-content, #fff)" />
    </g>
    <g transform="translate(315, 305)">
      <circle cx="20" cy="20" r="18" fill="var(--color-base-100, #1d232a)" stroke="var(--color-base-content, #fff)" strokeOpacity="0.1" strokeWidth="1" />
      <rect x="13" y="15" width="10" height="10" rx="2" fill="var(--color-base-content, #fff)" />
      <path d="M23,17 L29,14 V26 L23,23 Z" fill="var(--color-base-content, #fff)" />
    </g>
  </svg>
);

const workflows = [
  { 
    id: 'discover', 
    title: 'Find Language Partners', 
    subtitle: '01 — Discover',
    desc: 'Browse a directory of active learners to find partners whose native language is your learning language, and vice-versa.',
    component: <DiscoverIllustration />
  },
  { 
    id: 'connect', 
    title: 'Send Friend Requests', 
    subtitle: '02 — Connect',
    desc: 'Establish a connection by sending friend requests. Once accepted, a private conversation thread is instantly unlocked.',
    component: <ConnectIllustration />
  },
  { 
    id: 'practice', 
    title: 'Practice Face-to-Face', 
    subtitle: '03 — Speak',
    desc: 'Converse in real-time, and launch voice and video call practice sessions directly inside your chat thread with a single click.',
    component: <PracticeIllustration />
  }
];

const LandingPage = () => {
  const { theme } = useThemeStore();
  const navigate = useNavigate();
  
  const [hoveredWorkflow, setHoveredWorkflow] = useState(null);
  const [isHoveringSection, setIsHoveringSection] = useState(false);

  // Language Matching Form States
  const [nativeLang, setNativeLang] = useState('');
  const [learningLang, setLearningLang] = useState('');

  const [localMousePos, setLocalMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setLocalMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFindPartners = (e) => {
    e.preventDefault();
    if (!nativeLang || !learningLang) return;
    navigate(`/signup?native=${nativeLang.toLowerCase()}&learning=${learningLang.toLowerCase()}`);
  };

  return (
    <div data-theme={theme} className="min-h-screen bg-base-100 text-base-content font-sans overflow-x-hidden selection:bg-primary selection:text-primary-content">
      
      {/* ---------------- AWWWARDS STYLE DYNAMIC IMAGE FOLLOWER ---------------- */}
      <div 
        className="fixed pointer-events-none z-50 transition-all duration-500 ease-out hidden lg:block"
        style={{
          width: '380px',
          height: '380px',
          opacity: isHoveringSection && hoveredWorkflow ? 1 : 0,
          transform: `translate(${localMousePos.x + 30}px, ${localMousePos.y - 190}px) scale(${isHoveringSection && hoveredWorkflow ? 1 : 0.9}) rotate(${isHoveringSection ? '2deg' : '0deg'})`,
        }}
      >
        <div 
          className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] border-2 relative flex items-center justify-center p-6"
          style={{ 
            backgroundColor: 'var(--color-base-200, #1d232a)', 
            borderColor: 'var(--color-primary, #4f46e5)' 
          }}
        >
          {workflows.map((flow) => (
            <div 
              key={flow.id}
              className="absolute inset-6 transition-opacity duration-700 ease-in-out flex items-center justify-center"
              style={{ opacity: hoveredWorkflow === flow.id ? 1 : 0 }}
            >
              {flow.component}
            </div>
          ))}
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}

      {/* DYNAMIC THEME AMBIENT LIGHTING */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[140px] opacity-70"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/15 rounded-full blur-[140px] opacity-70"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-45 bg-base-200 border-b border-base-300 h-16 flex items-center backdrop-blur-xl">
        <div className="max-w-[100rem] mx-auto w-full px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary tracking-wider">
              LiveLink
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold opacity-80">
            <a href="#about" className="hover:text-primary transition-colors">Fluency Gap</a>
            <a href="#workflows" className="hover:text-primary transition-colors">Workflow</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#usecases" className="hover:text-primary transition-colors">Use Cases</a>
            <a href="#faqs" className="hover:text-primary transition-colors">FAQs</a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeSelector />
            <Link to="/login" className="text-sm font-bold uppercase tracking-wider text-base-content/75 hover:text-base-content transition-colors hidden sm:block">
              Log in
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm rounded-full px-6 shadow-md shadow-primary/20">
              Start Practicing
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-24">
         
         {/* HERO SECTION */}
         <section className="min-h-[85vh] flex items-center max-w-[100rem] mx-auto px-6 lg:px-12 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
              
              {/* Left Column: Authentic Copy */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8 w-max">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider uppercase">Active Language Exchange</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none mb-6">
                  Studying a language is slow. <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                    Practicing it is instant.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-base-content/70 font-light leading-relaxed max-w-2xl mb-10">
                  Textbooks can't teach real conversational confidence. LiveLink connects you directly with native speakers who want to learn your language. Message, coordinate speaking sessions, and join voice or video calls right inside your chat thread.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/20">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a href="#workflows" className="btn btn-outline btn-lg rounded-full px-8">
                    See How it Works
                  </a>
                </div>

                <div className="text-xs opacity-60 flex flex-wrap items-center gap-3 mt-8">
                  <span className="flex items-center gap-1">✓ Instant video calls</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">✓ Complementary matching</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">✓ 25+ visual themes</span>
                </div>
              </div>

              {/* Right Column: Language Match Finder Form Widget */}
              <div className="lg:col-span-5 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/5 rounded-[2rem] blur-3xl opacity-60"></div>
                <div className="relative border border-base-300 bg-base-200 rounded-3xl shadow-2xl p-8 text-left max-w-md mx-auto">
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">Find Your Match</h3>
                      <p className="text-xs opacity-60 mt-0.5">Specify your languages to explore partners</p>
                    </div>
                  </div>

                  <form onSubmit={handleFindPartners} className="space-y-4">
                    {/* NATIVE LANGUAGE */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold text-xs uppercase tracking-wider opacity-70">My Native Language</span>
                      </label>
                      <select
                        value={nativeLang}
                        onChange={(e) => setNativeLang(e.target.value)}
                        className="select select-bordered w-full bg-base-100"
                        required
                      >
                        <option value="">Select your native language</option>
                        {LANGUAGES.map((lang) => (
                          <option key={`native-${lang}`} value={lang.toLowerCase()}>
                            {lang}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* LEARNING LANGUAGE */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold text-xs uppercase tracking-wider opacity-70">I Want to Learn</span>
                      </label>
                      <select
                        value={learningLang}
                        onChange={(e) => setLearningLang(e.target.value)}
                        className="select select-bordered w-full bg-base-100"
                        required
                      >
                        <option value="">Select language you are learning</option>
                        {LANGUAGES.map((lang) => (
                          <option key={`learn-${lang}`} value={lang.toLowerCase()}>
                            {lang}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* SUBMIT */}
                    <button type="submit" className="btn btn-primary w-full mt-4 rounded-full py-3 h-auto shadow-md">
                      Search Active Partners
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                  
                  <p className="text-[10px] text-center opacity-50 mt-4 leading-relaxed">
                    You will be redirected to create a free profile to secure your practice matching channel.
                  </p>
                </div>
              </div>

            </div>
         </section>

         {/* POSITIONING NARRATIVE ("THE STUDYING GAP") */}
         <section id="about" className="py-24 max-w-[100rem] mx-auto px-6 lg:px-12 border-t border-base-300/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
              
              <div className="lg:col-span-5 text-left">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3 block">The LiveLink Difference</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
                  Study for structure. Practice for confidence.
                </h2>
                <p className="text-base-content/70 font-light leading-relaxed">
                  Traditional study methods focus on reading and grammar in a vacuum, leaving learners unprepared for real conversations. LiveLink bridges this gap by providing immediate conversational practice with native speakers.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
                {/* Contrast 1 */}
                <div className="card bg-base-200 border border-base-content/5 p-6 rounded-2xl">
                  <h3 className="font-bold text-lg mb-2 text-error flex items-center gap-2">
                    <span>✕</span> The Fluency Gap
                  </h3>
                  <p className="text-sm opacity-75 font-light leading-relaxed">
                    Streaks and cards teach vocabulary rules but block output. Users review items in isolation, missing syntax nuances and immediate verbal correction.
                  </p>
                </div>

                {/* Contrast 2 */}
                <div className="card bg-base-200 border border-base-content/5 p-6 rounded-2xl">
                  <h3 className="font-bold text-lg mb-2 text-success flex items-center gap-2">
                    <span>✓</span> Collaborative Practice
                  </h3>
                  <p className="text-sm opacity-75 font-light leading-relaxed">
                    LiveLink leverages mutual goals: you help someone speak your language, and they help you speak theirs. You practice under realistic conditions via messaging chat and call rooms.
                  </p>
                </div>
              </div>

            </div>
         </section>

         {/* THE IMMERSION WORKFLOW HOVER EFFECT */}
         <section id="workflows" className="bg-base-200/50 py-40 border-y border-base-content/5">
            <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
              
              <div className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-base-content/10 pb-16">
                <div className="text-left">
                  <h2 className="text-sm font-black tracking-[0.25em] uppercase text-primary mb-6">How it works</h2>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter">The Practice Workflow.</h3>
                </div>
                <p className="text-xl opacity-60 font-light max-w-sm mt-8 md:mt-0 leading-relaxed text-left">
                  Hover over the workflow below to explore the LiveLink language exchange ecosystem.
                </p>
              </div>

              <div 
                className="flex flex-col"
                onMouseEnter={() => setIsHoveringSection(true)}
                onMouseLeave={() => {
                  setIsHoveringSection(false);
                  setHoveredWorkflow(null);
                }}
              >
                {workflows.map((flow) => (
                  <div 
                    key={flow.id}
                    className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-16 cursor-pointer hover:bg-base-100 transition-colors duration-500 px-6 sm:px-12 -mx-6 sm:-mx-12 rounded-[2rem]"
                    onMouseEnter={() => setHoveredWorkflow(flow.id)}
                  >
                    {/* Growing borders */}
                    <span className="absolute top-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out z-20"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out z-20"></span>

                    <div className="flex flex-col relative z-10 lg:w-1/2 text-left">
                      <div className="overflow-hidden mb-6">
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-secondary block transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          {flow.subtitle}
                        </span>
                      </div>
                      <h4 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-base-content/20 group-hover:text-base-content transition-colors duration-500 ease-in-out">
                        {flow.title}
                      </h4>
                    </div>
                    
                    <div className="relative z-10 lg:w-1/3 mt-8 lg:mt-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 text-left">
                      <p className="text-xl md:text-2xl font-light text-base-content leading-relaxed">
                        {flow.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
         </section>

         {/* COMPLEX BENTO GRID FOR CORE CAPABILITIES */}
         <section id="features" className="py-40 max-w-[100rem] mx-auto px-6 lg:px-12">
            
            <div className="mb-20 text-left">
              <h2 className="text-sm font-black tracking-[0.25em] uppercase text-base-content/50 mb-6">Features</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter max-w-4xl">Engineered for real-time human connection.</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
              
              {/* Video calling */}
              <div className="md:col-span-8 bg-base-200/50 border border-base-content/10 p-12 lg:p-16 rounded-[3rem] hover:bg-base-200 transition-colors duration-500 group flex flex-col justify-between">
                <div>
                  <Video className="w-16 h-16 text-primary mb-12 group-hover:scale-110 transition-transform duration-500" />
                  <h4 className="text-4xl lg:text-6xl font-bold tracking-tighter mb-6">High-Definition Calling</h4>
                  <p className="text-2xl text-base-content/60 font-light max-w-2xl leading-relaxed">
                    Practice speaking in crystal-clear sessions. Initiate video calls instantly inside your active conversation window to practice pronunciation face-to-face.
                  </p>
                </div>
                <div className="mt-8 border-t border-base-content/10 pt-4 flex gap-4 text-sm opacity-60">
                  <span>✓ Built-in Call Controls</span>
                  <span>•</span>
                  <span>✓ Speaker Layouts</span>
                </div>
              </div>
              
              {/* Text Chat */}
              <div className="md:col-span-4 bg-base-content text-base-100 p-12 lg:p-16 rounded-[3rem] flex flex-col justify-between group overflow-hidden relative">
                <div className="relative z-10">
                  <h4 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-6">Real-Time Chat</h4>
                  <p className="text-xl text-base-100/70 font-light">
                    Direct messaging threads featuring instant typing status updates and online indicator lists.
                  </p>
                </div>
                <MessageSquare className="w-24 h-24 mt-12 opacity-20 group-hover:opacity-40 transition-opacity duration-500 relative z-10" />
                
                {/* Dynamic hover glow inside the dark card */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>

            </div>
         </section>

         {/* USE CASES */}
         <section id="usecases" className="bg-base-200/30 py-40 border-y border-base-content/5">
            <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
              <div className="mb-20 text-left">
                <h2 className="text-sm font-black tracking-[0.25em] uppercase text-primary mb-6">Use Cases</h2>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter">Practice for Real-World Goals.</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
                <div className="card bg-base-100 border border-base-content/10 p-8 rounded-3xl">
                  <h4 className="font-bold text-2xl mb-4 text-primary">For Expatriates</h4>
                  <p className="text-lg opacity-85 leading-relaxed font-light">
                    Adjusting to a new country can be challenging. Connect with local native speakers to practice accents, colloquialisms, and regional slang before stepping outside.
                  </p>
                </div>

                <div className="card bg-base-100 border border-base-content/10 p-8 rounded-3xl">
                  <h4 className="font-bold text-2xl mb-4 text-secondary">For Polyglots</h4>
                  <p className="text-lg opacity-85 leading-relaxed font-light">
                    Retaining multiple languages requires regular output. LiveLink lets you connect with study partners globally to conduct focused speaking practice daily.
                  </p>
                </div>

                <div className="card bg-base-100 border border-base-content/10 p-8 rounded-3xl">
                  <h4 className="font-bold text-2xl mb-4 text-accent">For Professionals</h4>
                  <p className="text-lg opacity-85 leading-relaxed font-light">
                    Preparing for client pitches or global interviews? Connect with sector peers to master formal vocabulary patterns and professional communication style.
                  </p>
                </div>
              </div>
            </div>
         </section>

         {/* FAQs */}
         <section id="faqs" className="py-40 max-w-[60rem] mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-sm font-black tracking-[0.25em] uppercase text-primary mb-6">FAQ</h2>
              <h3 className="text-5xl font-black tracking-tighter">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-6 text-left">
              
              <div className="collapse collapse-arrow bg-base-200 border border-base-content/10 rounded-[2rem] p-4">
                <input type="checkbox" name="faq-accordion" defaultChecked /> 
                <div className="collapse-title text-2xl font-bold">
                  How do video calls connect?
                </div>
                <div className="collapse-content mt-4"> 
                  <p className="opacity-80 text-lg leading-relaxed font-light">
                    Inside any active chat window, click the video call icon. LiveLink generates a calling room link and posts it directly to your conversation thread, letting you and your partner join instantly.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200 border border-base-content/10 rounded-[2rem] p-4">
                <input type="checkbox" name="faq-accordion" /> 
                <div className="collapse-title text-2xl font-bold">
                  How do I find language partners?
                </div>
                <div className="collapse-content mt-4"> 
                  <p className="opacity-80 text-lg leading-relaxed font-light">
                    Onboard your profile, choose your native and target language settings, and browse the "Meet New Learners" dashboard. Send friend requests to connect.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200 border border-base-content/10 rounded-[2rem] p-4">
                <input type="checkbox" name="faq-accordion" /> 
                <div className="collapse-title text-2xl font-bold">
                  Are messaging and video calls free?
                </div>
                <div className="collapse-content mt-4"> 
                  <p className="opacity-80 text-lg leading-relaxed font-light">
                    Yes. LiveLink is built entirely on collaborative language exchange. You help someone practice your native tongue, and they help you practice theirs. There are no tokens, coins, daily limits, or subscription paywalls.
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200 border border-base-content/10 rounded-[2rem] p-4">
                <input type="checkbox" name="faq-accordion" /> 
                <div className="collapse-title text-2xl font-bold">
                  Can I change the interface appearance?
                </div>
                <div className="collapse-content mt-4"> 
                  <p className="opacity-80 text-lg leading-relaxed font-light">
                    Yes. Use the navbar theme dropdown palette to instantly swap visual variables across 25+ dynamic themes (including Light, Dark, Retro, and Forest).
                  </p>
                </div>
              </div>

            </div>
         </section>

         {/* MASSIVE CTA FOOTER */}
         <section className="bg-primary text-primary-content py-40 rounded-t-[4rem] relative overflow-hidden mt-20">
            <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-base-100/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
               <Globe className="w-20 h-20 mb-12 opacity-80" />
               <h2 className="text-6xl sm:text-8xl lg:text-[8rem] font-black tracking-tighter mb-12 leading-[0.9]">
                 Ready to reach <br /> fluency?
               </h2>
               <p className="text-2xl sm:text-4xl opacity-80 mb-16 max-w-4xl mx-auto font-light leading-snug">
                 Join dedicated learners and native speakers already practicing daily on LiveLink.
               </p>
               <Link to="/signup" className="group flex items-center gap-6 bg-base-100 text-primary text-xl lg:text-2xl font-black tracking-widest uppercase px-12 lg:px-16 py-8 lg:py-10 rounded-full hover:bg-base-200 hover:scale-105 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                 Initialize Profile
                 <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform duration-300" />
               </Link>
            </div>
         </section>
      </main>

      {/* MINIMAL FOOTER */}
      <footer className="footer items-center p-12 bg-base-300 text-base-content border-t border-base-content/5">
        <aside className="items-center grid-flow-col gap-6">
          <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            LiveLink.
          </span>
          <p className="opacity-60 font-medium tracking-wide">© {new Date().getFullYear()} - The Global Language Exchange Platform</p>
        </aside> 
        <nav className="grid-flow-col gap-10 md:place-self-center md:justify-self-end">
          <Link to="/login" className="link link-hover font-bold uppercase tracking-widest text-xs">Log in</Link>
          <Link to="/signup" className="link link-hover font-bold uppercase tracking-widest text-xs">Sign up</Link>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
