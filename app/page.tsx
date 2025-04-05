import Header from '@/components/header';
import Hero from '@/components/hero';
import Portfolio from '@/components/portfolio';
import Process from '@/components/process';
import Benefits from '@/components/benefits';
import Collaborations from '@/components/collaborations';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Footer from '@/components/footer';
import { ThemeToggle } from '@/components/theme-toggle';
import Script from 'next/script';

export default function Home() {
  return (
    
    <main className="relative min-h-screen bg-background">
      {/* Gradient background effects */}
      {/* <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(29,78,216,0.15)"></div>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(29,78,216,0.15)"></div> */}
   
  
   <>
      {/* Facebook Pixel Script */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1006391200999792');
            fbq('track', 'PageView');
          `,
        }}
      />
     
    </>
      <Header />
      <Hero />
      <Collaborations />
      <Benefits />
      <Portfolio />
      <Process />
      <Pricing />
      {/* <Testimonials /> */}
      <FAQ />
      <Footer />
      
      {/* Floating theme toggle */}
      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </main>
  );
}