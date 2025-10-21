import Container from '@/components/common/Container';
import ContactForm from '@/components/contact/ContactForm';
import { Separator } from '@/components/ui/separator';
import { contactConfig, socialLinks } from '@/config/Contact';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import React from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../../components/ui/tooltip';

export const metadata: Metadata = {
  ...getMetadata('/contact'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            {contactConfig.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {contactConfig.description}
          </p>
        </div>
        <Separator />

        {/* Contact Form */}
        <div className="mx-auto max-w-2xl mb-2">
          <ContactForm />
        </div>
        <Separator />

        <div className="space-y-4 text-center">
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Alternatively, you can reach me at <br></br>
            <b className="text-primary">marcelcastro786@gmail.com</b> <br></br>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-secondary flex items-center gap-2"
                >
                  <span className="size-8">{link.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Container>
  );
}
