import Link from "next/link"
import { Button } from "./ui/button"
import { Card } from "./card"
import Image from "next/image"
import { GithubIcon, ZapIcon } from "lucide-react"
import { StickyTitle } from "./sticky-title"

type Project = {
  title: string
  description: string
  bullets?: string[]
  href: string
  imgSrc: string
  links: { icon: React.ReactNode; label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: "RecipeChat",
    description:
      "Full-stack conversational recipe assistant built solo on Next.js 15, React 19, tRPC, and Prisma.",
    bullets: [
      "Shipped a tool-calling AI pipeline for recipe generation and a pgvector layer that semantically deduplicates suggestions.",
      "Built Stripe-gated subscription tiers end to end, from checkout through webhook-driven status sync.",
      "Reached 89% test coverage across 217 unit/integration tests plus 12 Playwright E2E specs; live in production with early users onboarded.",
      "Extracted the project's AI dev-agent tooling into the open-source @galosandoval/shopfloor package, a typed harness that runs Claude Code headlessly against GitHub issues, drafting PRs with guardrails and automated verification."
    ],
    href: "https://recipechat.app/",
    imgSrc: "/recipechat.png",
    links: [
      {
        icon: <GithubIcon className="h-4 w-4" />,
        label: "View on GitHub",
        href: "https://github.com/galosandoval/recipe-chat/"
      },
      {
        icon: <ZapIcon className="h-4 w-4" />,
        label: "View Website",
        href: "https://www.recipechat.app/"
      }
    ]
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio site. Built with React and Styled Components.",
    href: "https://galosandovalportfolio.vercel.app/",
    imgSrc: "/portfolio-v1.png",
    links: [
      {
        icon: <GithubIcon className="h-4 w-4" />,
        label: "View on GitHub",
        href: "https://github.com/galosandoval/portfolio"
      },
      {
        icon: <ZapIcon className="h-4 w-4" />,
        label: "View Website",
        href: "https://galosandovalportfolio.vercel.app/"
      }
    ]
  },
  {
    title: "Breathing Helper",
    description:
      "Breathing exercises can improve your well-being. With the 4-7-8 Breathing Helper, control your cravings and sleep faster. You'll find links to more information in the app.",
    href: "https://478-breathing.vercel.app/",
    imgSrc: "/breathe-helper.png",
    links: [
      {
        icon: <GithubIcon className="h-4 w-4" />,
        label: "View on GitHub",
        href: "https://github.com/galosandoval/478-breathing"
      },
      {
        icon: <ZapIcon className="h-4 w-4" />,
        label: "View Website",
        href: "https://478-breathing.vercel.app/"
      }
    ]
  }
]

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mb-80 pt-16 md:pt-24 lg:scroll-mt-24 lg:pt-36"
    >
      <StickyTitle title="Projects" />

      <ol className="group/list flex flex-col gap-12">
        {projects.map((project) => (
          <Card
            key={project.title}
            leftCol={
              <Image
                alt="recipe chat landing page"
                src={project.imgSrc}
                className="rounded-md border-2 border-background transition group-hover:border-primary group-focus-within:border-primary sm:order-1 sm:col-span-2 sm:translate-y-1"
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

            {project.bullets && (
              <ul className="flex list-disc flex-col gap-1.5 pl-5 pb-2 leading-normal">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-x-4">
              {project.links.map((link) => (
                <Button key={link.label} size="sm" variant="link" asChild>
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-2 text-sm hover:text-primary"
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
  )
}
