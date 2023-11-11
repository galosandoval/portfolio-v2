import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./card";
import Image from "next/image";
import { GithubIcon, ZapIcon } from "lucide-react";

const projects = [
  {
    title: "RecipeChat",
    description:
      "An app that uses ChatGPT to generate recipes. Save, edit, and make grocery lists from your favorite recipes.",
    href: "https://recipechat.app/",
    imgSrc: "/images/recipechat.png",
    links: [
      {
        icon: <GithubIcon className="h-4 w-4" />,
        label: "View on GitHub",
        href: "https://github.com/galosandoval/recipe-chat/",
      },
      {
        icon: <ZapIcon className="h-4 w-4" />,
        label: "View Website",
        href: "https://www.recipechat.app/",
      },
    ],
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio site. Built with React and Styled Components.",
    href: "https://galosandovalportfolio.vercel.app/",
    imgSrc: "/images/portfolio-v1.png",
    links: [
      {
        icon: <GithubIcon className="h-4 w-4" />,
        label: "View on GitHub",
        href: "https://github.com/galosandoval/portfolio",
      },
      {
        icon: <ZapIcon className="h-4 w-4" />,
        label: "View Website",
        href: "https://galosandovalportfolio.vercel.app/",
      },
    ],
  },
  {
    title: "Breathing Helper",
    description:
      "Breathing exercises can improve your well-being. With the 4-7-8 Breathing Helper, control your cravings and sleep faster. You'll find links to more information in the app.",
    href: "https://478-breathing.vercel.app/",
    imgSrc: "/images/breathe-helper.png",
    links: [
      {
        icon: <GithubIcon className="h-4 w-4" />,
        label: "View on GitHub",
        href: "https://github.com/galosandoval/478-breathing",
      },
      {
        icon: <ZapIcon className="h-4 w-4" />,
        label: "View Website",
        href: "https://478-breathing.vercel.app/",
      },
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mb-80 pt-16 md:pt-24 lg:scroll-mt-24 lg:pt-36"
    >
      <ol className="group/list flex flex-col gap-12">
        {projects.map((project) => (
          <Card
            key={project.title}
            leftCol={
              <Image
                alt="recipe chat landing page"
                src={project.imgSrc}
                className="rounded-md border-2 border-background transition group-hover:border-primary sm:order-1 sm:col-span-2 sm:translate-y-1"
                height={48}
                width={200}
              />
            }
          >
            <h3 className="text-lg leading-snug">
              <Link
                className="font-medium leading-tight transition-all duration-300 hover:text-primary focus-visible:text-primary"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              </Link>
            </h3>

            <p className="">{project.description}</p>

            <div className="flex flex-wrap gap-x-4">
              {project.links.map((link) => (
                <Button key={link.label} size="sm" variant="link" asChild>
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-2 hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </ol>
    </section>
  );
}
