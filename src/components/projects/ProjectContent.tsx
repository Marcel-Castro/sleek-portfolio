import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProjectCaseStudyFrontmatter } from '@/types/project';
import rehypeHighlight from '@shikijs/rehype';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import Github from '../svgs/Github';
import Website from '../svgs/Website';
import { ProjectComponents } from './ProjectComponents';

const BADGES_TO_SHOW = 4;

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    website,
    role,
    team,
  } = frontmatter;

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          {/* Project Status and Technologies */}
          <div className="flex flex-wrap items-center gap-3">
            {technologies.slice(0, BADGES_TO_SHOW).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs bg-gray-50/10"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > BADGES_TO_SHOW && (
              <Badge variant="outline" className="text-xs bg-gray-50/10">
                +{technologies.length - BADGES_TO_SHOW} more
              </Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            {title}
          </h1>

          <p className="text-xl text-muted-foreground">{description}</p>

          {/* Project Meta Information */}
          <div className="grid gap-4 rounded-lg border bg-muted/20 p-4 grid-cols-2">
            {role && (
              <div>
                <h5 className="text-sm font-semibold text-muted-foreground">
                  Role
                </h5>
                <p className="text-sm">{role}</p>
              </div>
            )}
            {team && (
              <div>
                <h5 className="text-sm font-semibold text-muted-foreground">
                  Team
                </h5>
                <p className="text-sm">{team}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {website && (
              <Button asChild>
                <Link
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Website className="size-4" />
                  Website
                </Link>
              </Button>
            )}
            {live && (
              <Button asChild>
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Website className="size-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {github && (
              <Button variant="outline" asChild>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator />
      </header>

      {/* Technology Stack */}
      <div className="mb-8">
        <div className="rounded-lg border bg-muted/20 p-4">
          <h3 className="mb-3 text-lg font-semibold">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="inline-flex items-center gap-2 rounded-full bg-muted/70 px-3 py-1.5 text-sm font-medium"
              >
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <MDXRemote
          source={content}
          components={ProjectComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: 'github-dark',
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
