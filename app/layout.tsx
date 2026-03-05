import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '360Miniamaker - Professional YouTube Thumbnails',
  description: 'Service professionnel de création de miniature YouTube pour les créateurs de contenu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><link rel="icon" href="/favicon.ico" />

      <script
  defer
  data-website-id="dfid_9r5p2rdzawygoMf7SGNkT"
  data-domain="360-miniamaker.vercel.app"
  src="https://datafa.st/js/script.js">
</script>
<script defer 
data-website-id="site_gxt347iwq_1772676497851" 
data-domain="360-miniamaker.vercel.app" 
src="https://dataview-mu.vercel.app/js/script.js">
  
</script>


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
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}