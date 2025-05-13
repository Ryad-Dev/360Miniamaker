"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-white" />
          </div> */}
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            360Miniamaker
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('portfolio')} className="text-foreground/80 hover:text-foreground transition-colors">
            Realisations
          </button>
          {/* <button onClick={() => scrollToSection('process')} className="text-foreground/80 hover:text-foreground transition-colors">
            Etapes
          </button>
          <button onClick={() => scrollToSection('benefits')} className="text-foreground/80 hover:text-foreground transition-colors">
            Avantages
          </button> */}
          <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-foreground transition-colors">
            Pricing
          </button>
          {/* <button onClick={() => scrollToSection('testimonials')} className="text-foreground/80 hover:text-foreground transition-colors">
            Avis Clients
          </button> */}
          <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-foreground transition-colors">
            FAQ
          </button>
        </nav>

        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('pricing')}
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-0"
          >
            Voir les tarifs
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Realisations
            </button>
            {/* <button onClick={() => scrollToSection('process')} className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Etapes
            </button>
            <button onClick={() => scrollToSection('benefits')} className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Avantages
            </button> */}
            <button onClick={() => scrollToSection('pricing')} className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Pricing
            </button>
            {/* <button onClick={() => scrollToSection('testimonials')} className="text-foreground/80 hover:text-foreground transition-colors py-2">
              Avis Clients
            </button> */}
            <button onClick={() => scrollToSection('faq')} className="text-foreground/80 hover:text-foreground transition-colors py-2">
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-0 w-full"
            >
             Voir les tarifs
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;