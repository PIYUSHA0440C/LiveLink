import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Video, Shield, Zap, Sparkles } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

const LandingPage = () => {
  const { theme } = useThemeStore();

  return (
    <div className="min-h-screen bg-base-300 flex flex-col relative overflow-hidden" data-theme={theme}>
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Navbar */}
      <nav className="w-full z-10 bg-base-100/70 backdrop-blur-md border-b border-base-content/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30">
                <MessageCircle className="w-6 h-6 text-primary-content" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                LiveLink
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="btn btn-ghost rounded-full hover:bg-base-content/10 transition-colors">
                Log in
              </Link>
              <Link to="/signup" className="btn btn-primary rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300">
                Sign up free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-content/5 border border-base-content/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-warning" />
          <span className="text-sm font-medium">The new way to connect with friends</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Connect, Chat, and <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Share Moments
          </span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-base-content/70 max-w-3xl mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Experience seamless communication with high-quality video calls, real-time messaging, and immersive social interactions. LiveLink brings your network closer than ever.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Link to="/signup" className="btn btn-primary btn-lg rounded-full px-8 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300 group">
            Get Started Now
            <Zap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Link>
          <Link to="/login" className="btn btn-outline btn-lg rounded-full px-8 hover:-translate-y-1 transition-all duration-300 bg-base-100/50 backdrop-blur-sm">
            I already have an account
          </Link>
        </div>

        {/* Feature Highlights - Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full max-w-5xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="bg-base-100/50 backdrop-blur-lg border border-base-content/10 p-8 rounded-3xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group text-left">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Video className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Crystal Clear Calls</h3>
            <p className="text-base-content/70">Connect face-to-face with high-definition video and crisp audio that feels like you're in the same room.</p>
          </div>
          
          <div className="bg-base-100/50 backdrop-blur-lg border border-base-content/10 p-8 rounded-3xl hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-2 group text-left">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast Chat</h3>
            <p className="text-base-content/70">Send messages, share media, and express yourself instantly with our highly responsive chat engine.</p>
          </div>
          
          <div className="bg-base-100/50 backdrop-blur-lg border border-base-content/10 p-8 rounded-3xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 group text-left">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Shield className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
            <p className="text-base-content/70">Your conversations and personal data are protected with industry-leading security and privacy controls.</p>
          </div>
        </div>
      </main>

      {/* Decorative styling in CSS */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
