import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  User, 
  Users, 
  Utensils, 
  Lock, 
  Download, 
  Search, 
  Sparkles,
  Music
} from 'lucide-react';

// Custom SVG Chrome Hearts Horseshoe Emblem Component
const ChromeHeartsEmblem = ({ className = "w-24 h-24", glow = true }) => {
  return (
    <svg 
      className={`${className} ${glow ? 'filter drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]' : ''}`} 
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Chrome Metallic Gradients */}
        <linearGradient id="chromeGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#e5e7eb" />
          <stop offset="40%" stopColor="#4b5563" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="65%" stopColor="#9ca3af" />
          <stop offset="85%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#030712" />
        </linearGradient>

        <linearGradient id="chromeGradBevel" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#9ca3af" />
          <stop offset="50%" stopColor="#1f2937" />
          <stop offset="70%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>

        <radialGradient id="silverGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
          <stop offset="50%" stopColor="rgba(156, 163, 175, 0.3)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </radialGradient>

        <filter id="chromeGlint">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="1.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="100" cy="100" r="90" fill="url(#silverGlow)" opacity="0.15" />

      {/* HORSESHOE MAIN BODY */}
      <g filter="url(#chromeGlint)">
        {/* Horseshoe Bevel Underlayer */}
        <path 
          d="M 50 155 C 22 125 18 70 48 38 C 78 6 122 6 152 38 C 182 70 178 125 150 155 C 140 166 122 170 122 150 C 122 132 138 116 142 98 C 148 70 132 40 100 40 C 68 40 52 70 58 98 C 62 116 78 132 78 150 C 78 170 60 166 50 155 Z" 
          fill="none"
          stroke="url(#chromeGradBevel)"
          strokeWidth="18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Horseshoe Core Surface */}
        <path 
          d="M 50 155 C 22 125 18 70 48 38 C 78 6 122 6 152 38 C 182 70 178 125 150 155 C 140 166 122 170 122 150 C 122 132 138 116 142 98 C 148 70 132 40 100 40 C 68 40 52 70 58 98 C 62 116 78 132 78 150 C 78 170 60 166 50 155 Z" 
          fill="none"
          stroke="url(#chromeGradMain)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Outer Specular Metallic Rim */}
        <path 
          d="M 45 150 C 18 120 12 65 44 32 C 75 0 125 0 156 32 C 188 65 182 120 155 150" 
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Inner Specular Rim */}
        <path 
          d="M 82 145 C 82 128 66 112 62 96 C 56 70 70 46 100 46 C 130 46 144 70 138 96 C 134 112 118 128 118 145" 
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Bottom Scroll / Horseshoe Ends */}
        <path d="M 46 150 C 40 162 55 174 68 166 C 74 162 70 148 64 146 Z" fill="url(#chromeGradMain)" stroke="#fff" strokeWidth="1" />
        <path d="M 154 150 C 160 162 145 174 132 166 C 126 162 130 148 136 146 Z" fill="url(#chromeGradMain)" stroke="#fff" strokeWidth="1" />

        {/* Horseshoe Gothic Notches */}
        {[-70, -45, -20, 0, 20, 45, 70].map((angle, idx) => {
          const rad = (angle - 90) * (Math.PI / 180);
          const cx = 100 + 60 * Math.cos(rad);
          const cy = 95 + 60 * Math.sin(rad);
          return (
            <rect 
              key={idx}
              x={cx - 3} 
              y={cy - 3} 
              width="6" 
              height="6" 
              transform={`rotate(${angle}, ${cx}, ${cy})`}
              fill="#000000" 
              stroke="#ffffff" 
              strokeWidth="0.8" 
            />
          );
        })}
      </g>

      {/* CENTRAL CHROME HEARTS FLORAL CROSS */}
      <g transform="translate(100, 95)">
        <path 
          d="M 0 -36 C 4 -22 10 -16 22 -18 C 16 -8 16 -2 30 0 C 16 2 16 8 22 18 C 10 16 4 22 0 36 C -4 22 -10 16 -22 18 C -16 8 -16 2 -30 0 C -16 -2 -16 -8 -22 -18 C -10 -16 -4 -22 0 -36 Z" 
          fill="#000000"
          opacity="0.8"
          transform="scale(1.08)"
        />

        <path 
          d="M 0 -36 C 4 -22 10 -16 22 -18 C 16 -8 16 -2 30 0 C 16 2 16 8 22 18 C 10 16 4 22 0 36 C -4 22 -10 16 -22 18 C -16 8 -16 2 -30 0 C -16 -2 -16 -8 -22 -18 C -10 -16 -4 -22 0 -36 Z" 
          fill="url(#chromeGradMain)"
          stroke="#ffffff"
          strokeWidth="1.2"
        />

        <path 
          d="M 0 -26 C 2 -16 6 -12 15 -13 C 11 -6 11 -1 20 0 C 11 1 11 6 15 13 C 6 12 2 16 0 26 C -2 16 -6 12 -15 13 C -11 6 -11 1 -20 0 C -11 -1 -11 -6 -15 -13 C -6 -12 -2 -16 0 -26 Z" 
          fill="#0a0a0c"
          stroke="url(#chromeGradBevel)"
          strokeWidth="0.8"
        />

        <circle cx="0" cy="0" r="5" fill="url(#chromeGradMain)" stroke="#ffffff" strokeWidth="1" />
        <circle cx="-1.5" cy="-1.5" r="1.5" fill="#ffffff" />
      </g>
    </svg>
  );
};

export default function App() {
  // Navigation & Screen States
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlayerModal, setShowPlayerModal] = useState(false);
  const [rsvpState, setRsvpState] = useState('form'); // 'form' | 'submitted' | 'editing'
  
  // RSVP Form Input States
  const [guestName, setGuestName] = useState('');
  const [attending, setAttending] = useState(null); // true | false
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState('');
  const [dietaryNotes, setDietaryNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [userRsvpId, setUserRsvpId] = useState('');

  // Admin Host Dashboard States
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminError, setAdminError] = useState('');
  const [rsvps, setRsvps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAttending, setFilterAttending] = useState('all');

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Audio & Canvas Refs
  const audioRef = useRef(null);
  const iframeRef = useRef(null);
  const canvasRef = useRef(null);

  // Initialize LocalStorage Sync on Mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('zion_birthday_rsvps');
      if (stored) {
        setRsvps(JSON.parse(stored));
      } else {
        const mockRSVPs = [
          { id: '1', name: 'Zion Host', attending: true, plusOne: true, plusOneName: 'VIP Guest', dietaryNotes: 'VIP Table', updatedAt: new Date().toLocaleDateString() },
          { id: '2', name: 'Alex M.', attending: true, plusOne: false, plusOneName: '', dietaryNotes: 'Gluten Free', updatedAt: new Date().toLocaleDateString() }
        ];
        localStorage.setItem('zion_birthday_rsvps', JSON.stringify(mockRSVPs));
        setRsvps(mockRSVPs);
      }

      const existingUserRsvp = localStorage.getItem('zion_user_rsvp');
      if (existingUserRsvp) {
        const parsed = JSON.parse(existingUserRsvp);
        setGuestName(parsed.name || '');
        setAttending(parsed.attending);
        setPlusOne(parsed.plusOne || false);
        setPlusOneName(parsed.plusOneName || '');
        setDietaryNotes(parsed.dietaryNotes || '');
        setUserRsvpId(parsed.id);
        setRsvpState('submitted');
      }
    } catch (e) {
      console.warn("Storage access restricted:", e);
    }
  }, []);

  // Handle Play/Pause Sync with Audio Element & YouTube Streamer
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Autoplay blocked or audio stream loading:", err);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Countdown Timer Logic
  useEffect(() => {
    const targetDate = new Date('2026-11-08T17:30:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Floating Particle Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 12 + 6,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      opacity: Math.random() * 0.5 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;

        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#111827';
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.moveTo(0, -p.radius);
        ctx.quadraticCurveTo(p.radius * 0.2, -p.radius * 0.2, p.radius, 0);
        ctx.quadraticCurveTo(p.radius * 0.2, p.radius * 0.2, 0, p.radius);
        ctx.quadraticCurveTo(-p.radius * 0.2, p.radius * 0.2, -p.radius, 0);
        ctx.quadraticCurveTo(-p.radius * 0.2, -p.radius * 0.2, 0, -p.radius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Immediate First-Click Audio Trigger to fulfill browser autoplay rules
  useEffect(() => {
    const handleFirstUserInteraction = () => {
      if (!hasEntered) {
        setHasEntered(true);
        setIsPlaying(true);
      }
    };

    window.addEventListener('click', handleFirstUserInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstUserInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };
  }, [hasEntered]);

  // Enter Site & Trigger Video Audio Embed
  const handleEnterSite = () => {
    setHasEntered(true);
    setIsPlaying(true);
  };

  const openYouTubeTrack = () => {
    window.open("https://www.youtube.com/watch?v=PTpidh2J7X0&t=15s", "_blank");
  };

  // Handle RSVP Submission
  const handleSubmitRSVP = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!guestName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (attending === null) {
      setErrorMessage('Please select whether you will attend.');
      return;
    }

    setIsSubmitting(true);

    try {
      const recordId = userRsvpId || 'rsvp_' + Date.now();
      const newRecord = {
        id: recordId,
        name: guestName.trim(),
        attending,
        plusOne: attending ? plusOne : false,
        plusOneName: attending && plusOne ? plusOneName.trim() : '',
        dietaryNotes: attending ? dietaryNotes.trim() : '',
        updatedAt: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      // Update Local State list
      const updatedList = rsvps.filter(r => r.id !== recordId && r.name.toLowerCase() !== guestName.trim().toLowerCase());
      const newList = [newRecord, ...updatedList];

      setRsvps(newList);
      setUserRsvpId(recordId);

      // Save to localStorage
      localStorage.setItem('zion_birthday_rsvps', JSON.stringify(newList));
      localStorage.setItem('zion_user_rsvp', JSON.stringify(newRecord));

      setRsvpState('submitted');
    } catch (err) {
      setErrorMessage('Failed to save response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Admin Passcode Authenticate
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPasscode.trim() === 'ZION2026') {
      setIsAdminAuthenticated(true);
      setAdminError('');
    } else {
      setAdminError('Invalid host passcode.');
    }
  };

  // Admin Dashboard Calculations
  const filteredRsvps = useMemo(() => {
    return rsvps.filter((item) => {
      const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.plusOneName?.toLowerCase().includes(searchTerm.toLowerCase());
      if (filterAttending === 'yes') return matchesSearch && item.attending === true;
      if (filterAttending === 'no') return matchesSearch && item.attending === false;
      return matchesSearch;
    });
  }, [rsvps, searchTerm, filterAttending]);

  const analytics = useMemo(() => {
    let attendingCount = 0;
    let declinedCount = 0;
    let plusOneCount = 0;

    rsvps.forEach((r) => {
      if (r.attending) {
        attendingCount += 1;
        if (r.plusOne) plusOneCount += 1;
      } else if (r.attending === false) {
        declinedCount += 1;
      }
    });

    return {
      attendingCount,
      declinedCount,
      totalHeadcount: attendingCount + plusOneCount,
      plusOneCount
    };
  }, [rsvps]);

  // Export CSV
  const handleExportCSV = () => {
    if (rsvps.length === 0) return;
    
    const headers = ['Name', 'Attending', 'Plus One', 'Plus One Name', 'Dietary/Notes', 'Submission Date'];
    const rows = rsvps.map(r => [
      `"${r.name || ''}"`,
      r.attending ? 'Yes' : 'No',
      r.plusOne ? 'Yes' : 'No',
      `"${r.plusOneName || ''}"`,
      `"${r.dietaryNotes || ''}"`,
      `"${r.updatedAt || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Zion_Birthday_GuestList.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Google Calendar Integration
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("ZION'S BIRTHDAY DINNER");
    const details = encodeURIComponent("Luxury Birthday Celebration for Zion. Dress Code: Black Tie / Chrome Gothic.");
    const location = encodeURIComponent("To Be Announced");
    const startDate = "20261108T173000Z";
    const endDate = "20261108T220000Z";
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleUrl, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-neutral-800 selection:text-white">
      {/* Dynamic 3D Chrome Floating Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Dark Ambient Vignette Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black pointer-events-none z-0" />

      {/* --- EMBEDDED AUDIO PLAYER CONTROLLER --- */}
      {hasEntered && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 rounded-2xl border border-neutral-700/80 bg-neutral-950/90 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.15)] animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-white shadow-[0_0_10px_#fff] animate-pulse' : 'bg-neutral-600'}`} />
            <Music className="w-4 h-4 text-neutral-300" />
            <div className="flex flex-col">
              <span className="text-[10px] tracking-widest uppercase text-white font-semibold">
                FlocDaMvp - Codeine Crazy
              </span>
              <span className="text-[9px] text-neutral-400 tracking-wider">
                Playing from 0:15
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label="Toggle Audio Playback"
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition flex items-center justify-center border border-neutral-600"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 translate-x-0.5" />}
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            aria-label="Mute Audio"
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition flex items-center justify-center border border-neutral-700"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={openYouTubeTrack}
            title="Open on YouTube"
            className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition flex items-center justify-center border border-neutral-700"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
          </button>
        </div>
      )}

      {/* Embedded YouTube Player Stream starting at 0:15 (PTpidh2J7X0) */}
      {hasEntered && (
        <div className="fixed -bottom-96 right-0 opacity-0 pointer-events-none">
          <audio
            ref={audioRef}
            src="https://files.catbox.moe/ff6zp3.mp3"
            preload="auto"
            loop
          />
          <iframe
            ref={iframeRef}
            width="200"
            height="200"
            src={`https://www.youtube.com/embed/PTpidh2J7X0?autoplay=1&start=15&enablejsapi=1${isPlaying ? '' : '&mute=1'}`}
            title="Codeine Crazy by FlocDaMvp"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}

      {/* --- CINEMATIC ENTRANCE SCREEN --- */}
      {!hasEntered ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6 bg-black/95 backdrop-blur-2xl transition-all duration-1000">
          <div className="relative flex flex-col items-center text-center max-w-md w-full p-8 border border-neutral-800/80 rounded-3xl bg-neutral-950/80 shadow-[0_0_80px_rgba(255,255,255,0.08)]">
            
            <div className="relative mb-8 cursor-pointer group" onClick={handleEnterSite}>
              <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/20 via-white/30 to-neutral-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <ChromeHeartsEmblem className="w-28 h-28 transform group-hover:scale-105 transition duration-500" />
            </div>

            <p className="text-xs tracking-[0.4em] uppercase text-neutral-400 font-medium mb-2 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-neutral-300" /> Exclusive Invitation
            </p>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-8">
              ZION'S DINNER
            </h1>

            <button
              onClick={handleEnterSite}
              className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-400 text-black font-semibold tracking-widest uppercase text-xs hover:from-white hover:to-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Enter Invitation & Play Song
            </button>

            <p className="mt-6 text-[10px] tracking-widest text-neutral-500 uppercase">
              Sunday • Nov 08 • 2026
            </p>
          </div>
        </div>
      ) : (
        /* --- MAIN INVITATION CONTENT --- */
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-20">
          
          {/* Host Admin Button */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.2em] uppercase rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-600 backdrop-blur-md transition-all duration-300"
            >
              <Lock className="w-3 h-3" /> Host Passcode
            </button>
          </div>

          {/* MAIN GLASSMORPHISM CARD */}
          <div className="relative w-full max-w-xl rounded-3xl border border-neutral-700/60 bg-gradient-to-b from-neutral-900/80 via-neutral-950/90 to-black backdrop-blur-xl p-8 sm:p-12 shadow-[0_0_90px_rgba(0,0,0,0.9)] overflow-hidden">
            
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-80" />
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            {/* Emblem Header */}
            <div className="flex flex-col items-center text-center mb-8">
              <ChromeHeartsEmblem className="w-24 h-24 mb-4" />
              <div className="inline-block px-3 py-1 rounded-full border border-neutral-700/50 bg-neutral-900/60 text-[10px] tracking-[0.35em] text-neutral-300 uppercase mb-3">
                You Are Cordially Invited
              </div>
              <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 drop-shadow-sm mb-2">
                ZION'S
              </h1>
              <h2 className="text-lg sm:text-xl font-light tracking-[0.3em] text-neutral-300 uppercase">
                Birthday Dinner
              </h2>
            </div>

            {/* Event Details Grid */}
            <div className="my-8 py-6 border-y border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Calendar className="w-4 h-4 text-neutral-400 mb-1" />
                <span className="text-[10px] tracking-widest text-neutral-500 uppercase mb-0.5">Date</span>
                <span className="text-sm font-semibold text-neutral-200 tracking-wider">SUN, NOV 8</span>
                <span className="text-[11px] text-neutral-400">2026</span>
              </div>
              <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-neutral-800/80 py-4 sm:py-0">
                <Clock className="w-4 h-4 text-neutral-400 mb-1" />
                <span className="text-[10px] tracking-widest text-neutral-500 uppercase mb-0.5">Time</span>
                <span className="text-sm font-semibold text-neutral-200 tracking-wider">5:30 PM</span>
                <span className="text-[11px] text-neutral-400">Punctual Arrival</span>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-4 h-4 text-neutral-400 mb-1" />
                <span className="text-[10px] tracking-widest text-neutral-500 uppercase mb-0.5">Location</span>
                <span className="text-sm font-semibold text-neutral-200 tracking-wider">To Be Announced</span>
                <span className="text-[11px] text-neutral-400">Private Dining</span>
              </div>
            </div>

            {/* Countdown Clock */}
            <div className="mb-10 p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-[10px] tracking-[0.25em] text-center text-neutral-400 uppercase mb-3">
                Countdown To The Evening
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">{timeLeft.days}</div>
                  <div className="text-[9px] uppercase tracking-widest text-neutral-500">Days</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-[9px] uppercase tracking-widest text-neutral-500">Hours</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-[9px] uppercase tracking-widest text-neutral-500">Mins</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-[9px] uppercase tracking-widest text-neutral-500">Secs</div>
                </div>
              </div>
            </div>

            {/* --- RSVP FORM & STATES --- */}
            {rsvpState === 'submitted' ? (
              /* Confirmation Card */
              <div className="text-center p-6 rounded-2xl bg-neutral-900/70 border border-neutral-700/50 shadow-inner">
                <div className="inline-flex p-3 rounded-full bg-neutral-800/80 border border-neutral-600 mb-4">
                  {attending ? <CheckCircle2 className="w-8 h-8 text-white" /> : <XCircle className="w-8 h-8 text-neutral-400" />}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {attending ? "RSVP Confirmed" : "Response Recorded"}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  {attending 
                    ? `Thank you, ${guestName}. Your presence is requested and confirmed for Zion's Birthday Dinner.`
                    : `Thank you for letting us know, ${guestName}. You will be missed.`}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {attending && (
                    <button
                      onClick={handleAddToCalendar}
                      className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-neutral-200 text-black font-semibold text-xs tracking-wider uppercase hover:bg-white transition flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5" /> Calendar
                    </button>
                  )}
                  <button
                    onClick={() => setRsvpState('editing')}
                    className={`w-full ${attending ? 'sm:w-1/2' : 'w-full'} py-3 px-4 rounded-xl border border-neutral-700 text-neutral-300 text-xs tracking-wider uppercase hover:bg-neutral-800 transition`}
                  >
                    Edit Response
                  </button>
                </div>
              </div>
            ) : (
              /* Submission Form */
              <form onSubmit={handleSubmitRSVP} className="space-y-6">
                
                {/* Guest Name */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-neutral-300 mb-2 font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-neutral-400" /> Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition text-sm"
                  />
                </div>

                {/* Attendance Option Buttons */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-neutral-300 mb-2 font-medium">
                    Attendance *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending(true)}
                      className={`py-4 px-4 rounded-xl font-bold tracking-wider text-xs uppercase border transition-all duration-300 ${
                        attending === true
                          ? 'bg-gradient-to-r from-neutral-100 via-neutral-300 to-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-[1.02]'
                          : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-600'
                      }`}
                    >
                      Yes, I'll Be There
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setAttending(false);
                        setPlusOne(false);
                      }}
                      className={`py-4 px-4 rounded-xl font-bold tracking-wider text-xs uppercase border transition-all duration-300 ${
                        attending === false
                          ? 'bg-neutral-800 text-white border-neutral-400 shadow-md scale-[1.02]'
                          : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-600'
                      }`}
                    >
                      No, I Can't Make It
                    </button>
                  </div>
                </div>

                {/* Plus One & Dietary Fields */}
                {attending === true && (
                  <div className="space-y-4 pt-2 border-t border-neutral-800/80 animate-fadeIn">
                    
                    {/* Plus One Check */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/40 border border-neutral-800">
                      <span className="text-xs text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-neutral-400" /> Bringing a Plus One?
                      </span>
                      <button
                        type="button"
                        onClick={() => setPlusOne(!plusOne)}
                        className={`w-12 h-6 rounded-full transition-colors relative ${plusOne ? 'bg-neutral-200' : 'bg-neutral-800'}`}
                      >
                        <span className={`block w-4 h-4 rounded-full bg-black transition-transform ${plusOne ? 'translate-x-7' : 'translate-x-1'}`} />
                      </button>
                    </div>

                    {plusOne && (
                      <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1">
                          Plus One Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Guest's Name"
                          value={plusOneName}
                          onChange={(e) => setPlusOneName(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:border-white text-xs"
                        />
                      </div>
                    )}

                    {/* Dietary Notes */}
                    <div>
                      <label className="block text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1 flex items-center gap-1.5">
                        <Utensils className="w-3 h-3 text-neutral-400" /> Dietary Restrictions / Special Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Vegetarian, Gluten-Free, Allergies"
                        value={dietaryNotes}
                        onChange={(e) => setDietaryNotes(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 focus:outline-none focus:border-white text-xs"
                      />
                    </div>
                  </div>
                )}

                {/* Error Banner */}
                {errorMessage && (
                  <p className="text-xs text-red-400 text-center">{errorMessage}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-400 text-black font-bold text-xs tracking-[0.2em] uppercase hover:from-white hover:to-neutral-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming...' : 'Submit RSVP'}
                </button>
              </form>
            )}

            <div className="mt-8 text-center text-[10px] tracking-[0.2em] text-neutral-400 uppercase font-medium">
              Dress Code: Black & Silver or Blue
            </div>
          </div>
        </div>
      )}

      {/* --- HOST ADMIN DASHBOARD MODAL --- */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setIsAdminOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white text-xl"
            >
              ✕
            </button>

            {!isAdminAuthenticated ? (
              /* Host Passcode Screen */
              <div className="text-center py-8 max-w-sm mx-auto">
                <ChromeHeartsEmblem className="w-16 h-16 mx-auto mb-4" glow={false} />
                <h3 className="text-lg font-serif font-bold text-white mb-2 uppercase tracking-wider">
                  Host Passcode Required
                </h3>
                <p className="text-xs text-neutral-400 mb-6">
                  Please enter your host passcode to view private guest list metrics.
                </p>

                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Enter Passcode"
                    value={adminPasscode}
                    onChange={(e) => setAdminPasscode(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white text-center tracking-widest focus:outline-none focus:border-white text-sm"
                  />
                  {adminError && <p className="text-xs text-red-400">{adminError}</p>}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition"
                  >
                    Authenticate
                  </button>
                </form>
              </div>
            ) : (
              /* Authenticated Dashboard Panel */
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white tracking-wider">
                      HOST DASHBOARD
                    </h3>
                    <p className="text-xs text-neutral-400">Zion's Birthday Guest List & Analytics</p>
                  </div>
                  <button
                    onClick={handleExportCSV}
                    className="self-start sm:self-auto px-4 py-2 rounded-xl bg-neutral-800 border border-neutral-600 text-xs text-neutral-200 hover:bg-neutral-700 transition flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Export CSV
                  </button>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
                    <div className="text-2xl font-bold text-white">{analytics.attendingCount}</div>
                    <div className="text-[10px] uppercase text-neutral-400 tracking-wider">Attending</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
                    <div className="text-2xl font-bold text-white">{analytics.totalHeadcount}</div>
                    <div className="text-[10px] uppercase text-neutral-400 tracking-wider">Headcount</div>
                  </div>
                  <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center">
                    <div className="text-2xl font-bold text-neutral-500">{analytics.declinedCount}</div>
                    <div className="text-[10px] uppercase text-neutral-500 tracking-wider">Declined</div>
                  </div>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Search guest name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white focus:outline-none focus:border-neutral-600"
                    />
                  </div>
                  <select
                    value={filterAttending}
                    onChange={(e) => setFilterAttending(e.target.value)}
                    className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 focus:outline-none"
                  >
                    <option value="all">All Responses</option>
                    <option value="yes">Attending Only</option>
                    <option value="no">Declined Only</option>
                  </select>
                </div>

                {/* Guest List */}
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {filteredRsvps.length === 0 ? (
                    <div className="text-center py-8 text-neutral-500 text-xs">
                      No matching RSVP records found.
                    </div>
                  ) : (
                    filteredRsvps.map((rsvp, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div>
                          <div className="font-semibold text-white">{rsvp.name}</div>
                          {rsvp.plusOne && (
                            <div className="text-[10px] text-neutral-400">
                              +1: {rsvp.plusOneName || 'Guest'}
                            </div>
                          )}
                          {rsvp.dietaryNotes && (
                            <div className="text-[10px] text-amber-300/80 italic mt-0.5">
                              Note: {rsvp.dietaryNotes}
                            </div>
                          )}
                        </div>
                        <div>
                          <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            rsvp.attending 
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                              : 'bg-neutral-800 text-neutral-400'
                          }`}>
                            {rsvp.attending ? 'Attending' : 'Declined'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
