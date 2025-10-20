'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { NavItem } from '@/config/Navbar';
import { Menu } from 'lucide-react';
import Link from 'next/link';

import { ThemeToggleButton } from './ThemeSwitch';

interface NavDropDownProps {
  navItems: NavItem[];
}

export default function NavDropDown({ navItems }: NavDropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex justify-center items-center h-11 w-11 rounded-md bg-black/2 dark:bg-gray-950/25 border dark:border-white/18 border-black/20 skill-inner-shadow">
          <Menu className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="rounded-md bg-black/2 dark:bg-gray-950/25 border dark:border-white/18 border-black/20 skill-inner-shadow backdrop-blur-md py-2 px-4"
      >
        {navItems.map(({ label, href }) => (
          <DropdownMenuItem key={href} asChild>
            <Link
              href={href}
              className="w-full cursor-pointer hover:bg-gray-200/50 dark:hover:bg-black/35 rounded-sm"
            >
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem key="theme" asChild>
          <ThemeToggleButton
            className="w-full h-8 bg-none border-none shadow-none! py-1.5"
            variant="circle"
            start="top-right"
            blur
            showLabel
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
