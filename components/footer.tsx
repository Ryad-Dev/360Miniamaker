"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  ImageIcon,
  Mail,
  MessageSquare,
  Send,
  Youtube,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <footer id="contact" className="pt-20 pb-10 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-8">
            {/* <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your thumbnail needs..."
                  rows={5}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white border-0"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form> */}
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src="https://lh3.googleusercontent.com/d/1XApPZ2SHik4Ohec9EUL-VCu3n2dudmC5"
                  alt="logo_360miniamaker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  360Miniamaker
                </span>
                {/* <p className="text-sm text-muted-foreground">{testimonial.channel}</p> */}
              </div>
            </div>
          

            <p className="text-muted-foreground mb-8 max-w-md">
              Service professionnel de conception de miniatures YouTube aidant les créateurs de contenu à augmenter leur CTR, à augmenter le nombre de vues et à développer leurs chaînes avec des miniatures accrocheuses.
            </p>
          </div>

          {/* Company Info */}
          <div className="flex flex-col  justify-center">
            <div>


              <div className="space-y-4 mb-12">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-500 mr-3" />
                  <span>miniamaker360@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Chat en direct disponible de 9 h à 17 h HNE</span>
                </div>
              </div>

              {/* <div className="flex space-x-4">
                <Link href="#" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-blue-500/10 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-blue-500/10 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-blue-500/10 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-blue-500/10 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} 360Miniamaker  Tous droits réservés.
          </p>

          {/* <div className="flex space-x-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;