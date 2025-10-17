import React from 'react';

import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-secondary text-center">
          Built with the{' '}
          <a
            href="https://next.jqueryscript.net/next-js/sleek-portfolio-template/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400"
          >
            Sleek Portfolio Template
          </a>{' '}
          by <b>Ramxcodes</b>
          <br /> &copy; {new Date().getFullYear()} Marcel Castro · All rights
          reserved
        </p>
      </div>
    </Container>
  );
}
