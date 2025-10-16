// import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
// import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
// import { Quote } from '@/components/common/Quote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <>
            <div className="fixed inset-0 bg-gradient-to-bl from-white from-40% to-blue-100 -z-10 dark:hidden" />
            <div className="hidden dark:block fixed inset-0 bg-gradient-to-tr from-neutral-950 from-45% to-indigo-950 -z-10" />
          </>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <Navbar />
              {children}
              <OnekoCat />
              {/* <Quote /> */}
              <Footer />
              {/* <ChatBubble /> */}
              {/* <UmamiAnalytics /> */}
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
