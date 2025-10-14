import AWS from '@/components/technologies/AWS';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import ShopifyIcon from '@/components/technologies/Shopify';
import TailwindCss from '@/components/technologies/TailwindCss';
import Twilio from '@/components/technologies/Twilio';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Panda Kitchen and Bath Website',
    description:
      'A responsive marketing website built for Panda Kitchen & Bath to showcase products, generate customer inquiries, and attract new wholesale partners. Developed on Shopify, the site emphasizes product presentation and quote requests rather than direct sales, supporting both retail visibility and vendor outreach.',
    image: '/project/notesbuddy.png',
    link: 'https://pkbcabinetry.com/',
    technologies: [
      { name: 'Shopify', icon: <ShopifyIcon key="shopify" /> },
      { name: 'Javascript', icon: <JavaScript key="javascript" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'Github', icon: <Github key="github" /> },
    ],
    live: 'https://pkbcabinetry.com/',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
  },
  {
    title: 'Capital Infusion Lead Engagement Web App',
    description:
      'A login-based web app that unifies multiple Twilio accounts and automates bulk lead messaging. Handles CSV uploads, tracks responses, and flags promising leads for sales follow-up — accelerating Capital Infusion’s client engagement process.',
    image: '/project/notesbuddy.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://www.capital-infusion.com/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Twilio', icon: <Twilio key="twilio" /> },
      { name: 'Github', icon: <Github key="github" /> },
    ],
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
  },
  {
    title: 'Beck College Prep Website',
    description:
      'Designed and developed key portions of Beck College Prep’s website using Figma and modern web tools. Built the animated landing page with custom graphics and SVG animations, implemented backend systems for the internal client management portal, and developed a secure multi-step checkout with Stripe and AWS S3.',
    image: '/project/notesbuddy.png',
    link: 'https://beckcollegeprep.com/',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Github', icon: <Github key="github" /> },
      { name: 'NodeJs', icon: <NodeJs key="node" /> },
      { name: 'ExpressJs', icon: <ExpressJs key="express" /> },
      { name: 'AWS', icon: <AWS key="aws" /> },
    ],
    live: 'https://beckcollegeprep.com/',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
  },
];
