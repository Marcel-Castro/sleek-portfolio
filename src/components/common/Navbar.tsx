'use client';

import { navbarConfig } from '@/config/Navbar';
import clsx from 'clsx';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';

import Container from './Container';
import NavDropDown from './NavDropDown';
import { ThemeToggleButton } from './ThemeSwitch';

// Defines how far the user needs to scroll before the avatar's display mode changes
const SCROLL_THRESHOLD = 100;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set scroll state when component is first mounted
    setScrolled(window.scrollY > SCROLL_THRESHOLD);

    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div
        className={clsx(
          'flex items-center px-6',
          isHome && !scrolled
            ? 'justify-end md:justify-between'
            : 'justify-between',
        )}
      >
        <Link className={clsx(isHome && !scrolled ? 'hidden' : '')} href="/">
          <Image
            className="h-12 w-12 rounded-md border border-gray-200 bg-linear-to-t from-cyan-500 to-blue-500 transition-all duration-300 ease-in-out hover:scale-90"
            src={navbarConfig.logo.src}
            alt={navbarConfig.logo.alt}
            width={navbarConfig.logo.width}
            height={navbarConfig.logo.height}
          />
        </Link>
        <div
          className={clsx(
            'hidden md:flex items-center justify-center gap-8',
            isHome && !scrolled
              ? ''
              : 'bg-black/2 dark:bg-gray-950/25 border dark:border-white/18 border-black/10 skill-inner-shadow py-2 px-6 rounded-full',
          )}
        >
          {navbarConfig.navItems.map((item) => (
            <Link
              className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
              key={item.label}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggleButton
            className="dark:bg-gray-950/25 border"
            variant="circle"
            start="top-right"
            blur
          />
        </div>
        <div className="block md:hidden">
          <NavDropDown navItems={navbarConfig.navItems} />
        </div>
      </div>
    </Container>
  );
}
