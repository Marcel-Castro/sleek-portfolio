import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import CSS from '@/components/technologies/CSS';
import Contentful from '@/components/technologies/Contentful';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shopify from '@/components/technologies/Shopify';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website?: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Freelance for Various Clients',
    position: 'Software Developer',
    location: 'United States (Remote)',
    image: '/company/freelance_logo.png',
    description: [
      'Developed and maintained Shopify and Next.js web applications for small businesses and marketing agencies.',
      'Continued collaboration with Gorilla Marketing Group, supporting site updates, theme customizations, and CMS integrations.',
      'Designed and deployed a Next.js web portal integrating Twilio APIs to centralize account management and streamline lead outreach for a marketing client.',
      'Delivered projects focused on performance, responsiveness, and maintainability, working directly with clients to clarify requirements and deploy production-ready solutions.',
    ],
    startDate: 'January 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'Shopify',
        href: 'https://www.shopify.com/',
        icon: <Shopify />,
      },
      {
        name: 'Contentful',
        href: 'https://www.contentful.com/',
        icon: <Contentful />,
      },
      {
        name: 'Next.js',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
      {
        name: 'TypeScript',
        href: 'https://typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'Vercel',
        href: 'https://vercel.com/',
        icon: <Vercel />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
    ],
  },
  {
    isCurrent: false,
    company: 'Gorilla Marketing Group',
    position: 'Software Developer',
    location: 'Miami, FL',
    image: '/company/gorilla_logo.png',
    description: [
      'Refactored and optimized Shopify Liquid codebases to improve readability, performance, and visual design.',
      'Built responsive front-end components aligned with product owner guidelines.',
      'Integrated Contentful CMS into multiple Shopify storefronts to enable marketing teams to manage content without developer intervention.',
      'Created and maintained Power Automate flows and Azure Functions to process and sync company data across Microsoft 365 services.',
    ],
    startDate: 'January 2022',
    endDate: 'January 2024',
    technologies: [
      {
        name: 'Shopify',
        href: 'https://www.shopify.com/',
        icon: <Shopify />,
      },
      {
        name: 'Contentful',
        href: 'https://www.contentful.com/',
        icon: <Contentful />,
      },
      {
        name: 'HTML',
        href: 'https://html.com/',
        icon: <Html />,
      },
      {
        name: 'CSS',
        href: 'https://css.com/',
        icon: <CSS />,
      },
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
    ],
    website: 'http://gmgadvertising.com/',
    linkedin: 'https://www.linkedin.com/company/pitch-management-gmg/',
  },
  {
    isCurrent: false,
    company: 'Beck College Prep',
    position: 'Software Developer',
    location: 'Miami, FL',
    image: '/company/beck_logo.png',
    description: [
      'Developed and deployed a high-performance static website using Gatsby.js to represent the company online, attracting new clients.',
      'Built a checkout flow using Reach Router through Gatsby.js for purchasing tutoring sessions directly on the site.',
      'Developed AWS SDK-based endpoints for securely managing file uploads to AWS S3 buckets.',
      'Contributed to a RESTful API using Express and Mongoose to manage backend data operations.',
      'Collaborated with company leadership to translate business requirements into scalable technical solutions.',
    ],
    startDate: 'August 2020',
    endDate: 'May 2021',
    technologies: [
      {
        name: 'Node.js',
        href: 'https://nodejs.org/',
        icon: <NodeJs />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'React',
        href: 'https://react.dev/',
        icon: <ReactIcon />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'Figma',
        href: 'https://figma.com/',
        icon: <Figma />,
      },
      {
        name: 'JavaScript',
        href: 'https://javascript.com/',
        icon: <JavaScript />,
      },
      {
        name: 'MongoDB',
        href: 'https://mongodb.com/',
        icon: <MongoDB />,
      },
      {
        name: 'BootStrap',
        href: 'https://getbootstrap.com/',
        icon: <BootStrap />,
      },
    ],
    website: 'https://www.beckcollegeprep.com/',
    linkedin: 'https://www.linkedin.com/company/beck-college-prep',
  },
];
