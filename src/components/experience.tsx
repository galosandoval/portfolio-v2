import { ArrowRightIcon, Link2Icon } from "lucide-react"
import Link from "next/link"
import { Card } from "./card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StickyTitle } from "./sticky-title"

type Job = {
  from: string
  to: string
  prevTitles: string[]
  titleAndCompany: string
  summary: string
  badges: string[]
  href: string
  links: { title: string; url: string }[]
}

const experience: Job[] = [
  {
    from: "Sep 2024",
    to: "Present",
    prevTitles: [],
    titleAndCompany: "Senior Frontend Developer · Spider Strategies",
    summary:
      "Modernizing legacy JavaScript, jQuery, and Backbone.js architecture into maintainable React features for a global user base, partnering with backend engineers on Java/Kotlin services.",
    badges: [
      "Javascript",
      "Typescript",
      "jQuery",
      "Backbone.js",
      "Java",
      "Kotlin",
      "Jasmine Testing",
      "Github"
    ],
    links: [],
    href: "https://www.spiderstrategies.com/"
  },
  {
    from: "Feb 2024",
    to: "Sep 2024",
    prevTitles: [],
    titleAndCompany: "Software Engineer · Codifi",
    summary:
      "Built mobile and web tooling for archaeological field teams using React Native, Redux, and Realm, with offline-first data sync and mapping.",
    badges: [
      "React Native",
      "Typescript",
      "Figma",
      "Realm",
      "TailwindCSS",
      "Vitest",
      "Github"
    ],
    links: [],
    href: "https://codifi.com/"
  },
  {
    from: "Jan 2022",
    to: "Feb 2024",
    prevTitles: ["Frontend Developer (Contract)"],
    titleAndCompany: "Software Engineer · BrightInsight",
    summary:
      "Built React applications for a regulated healthcare platform, owning speed, usability, and test coverage across clinician and patient workflows.",
    badges: [
      "React",
      "Typescript",
      "Agile",
      "Redux",
      "TailwindCSS",
      "Vitest",
      "BitBucket"
    ],
    links: [],
    href: "https://brightinsight.com/disease-management-solution"
  },
  {
    from: "May 2021",
    to: "Feb 2022",
    prevTitles: [],
    titleAndCompany: "Application Developer Apprentice · IBM",
    summary:
      "Completed 20+ hands-on modules in Agile, DevOps, and hybrid cloud architecture, building foundational CI/CD troubleshooting skills.",
    badges: [
      "Typescript/Javascript",
      "Agile",
      "React",
      "IBM Hybrid Cloud Services"
    ],
    links: [],
    href: "https://www.ibm.com/impact/feature/apprenticeship"
  },
  {
    from: "Feb 2017",
    to: "Mar 2020",
    prevTitles: ["Lead Barista", "Barista"],
    titleAndCompany: "General Manager · Go Get Em Tiger",
    summary:
      "Rose from barista to general manager over three years, running daily operations, scheduling, and P&L for a high-volume specialty café.",
    badges: [
      "Team Management",
      "Customer Service",
      "Leadership",
      "Financial Management",
      "Operaitions Optimization"
    ],
    links: [
      // { title: "Upstatement", url: "https://upstatement.com" },
      // { title: "Harvard Business School", url: "https://hbs.edu" }
    ],
    href: "https://gget.com/"
  }
]

export function Experience() {
  return (
    <section id="experience" className="lg:scroll-mt-24">
      <StickyTitle title="Experience" />

      <ol className="group/list flex flex-col gap-12">
        {experience.map((job) => (
          <Job job={job} key={job.href} />
        ))}
      </ol>
      <div className="pt-10">
        <Link
          className="group font-semibold"
          href="/Galo Sandoval Public Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative border-b-2 border-b-transparent group-hover:border-b-primary">
            View full resume
            <span className="absolute -right-6 mt-[5px] transition group-hover:translate-x-2">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </span>
        </Link>
      </div>
    </section>
  )
}

function Job({ job }: { job: Job }) {
  return (
    <Card
      leftCol={
        <>
          {" "}
          <span className="whitespace-nowrap">{job.from}</span> -{" "}
          <span className="whitespace-nowrap">{job.to}</span>
        </>
      }
    >
      <div className="-mt-1 flex flex-col">
        <h3 className="text-lg leading-snug">
          <Link
            href={job.href}
            className="font-medium leading-tight transition-all duration-300 hover:text-primary focus-visible:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {job.titleAndCompany}
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
          </Link>
        </h3>
        {job.prevTitles.length > 0 &&
          job.prevTitles.map((title) => (
            <h3
              className="text-muted-foreground"
              aria-hidden={true}
              key={title}
            >
              {title}
            </h3>
          ))}
      </div>

      {job.badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {job.badges.map((badge) => (
            <Badge variant="outline" key={badge}>{badge}</Badge>
          ))}
        </div>
      )}

      <p className="leading-normal">{job.summary}</p>

      {job.links.length > 0 && (
        <div className="flex flex-wrap gap-x-2">
          {job.links.map((link) => (
            <Button key={link.url} size="sm" variant="link" asChild>
              <Link
                href={link.url}
                className="relative hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Link2Icon aria-hidden={true} className="mr-1" />
                {link.title}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </Card>
  )
}
