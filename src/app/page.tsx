import { ArrowRightIcon, Link2Icon } from "@radix-ui/react-icons"
import Link from "next/link"
import { GradiantOnMouseMove } from "~/components/gradient-on-mouse-move"
import { ModeToggle } from "~/components/mode-toggle"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"

export default function HomePage() {
  return (
    <>
      <GradiantOnMouseMove />

      <div className="relative z-30 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
            <AboutMe />

            <Experience />

            <div className="pt-10">
              <Link
                className="group flex items-center gap-2 font-semibold"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="group-hover:border-b-primary border-b-2 border-b-transparent">
                  View full resume
                </span>{" "}
                <span className="-mt-px transition group-hover:translate-x-2">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Galo Sandoval</h1>
        <h2 className="text-lg font-medium sm:text-xl">Software Engineer</h2>
        <p className="max-w-sm font-light leading-normal">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
        <nav className="nav hidden lg:block"></nav>
      </div>

      <ul>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </header>
  )
}

function animateString(string: string) {
  return string.split("").map((letter, index) => {
    if (letter === " ")
      return (
        <span
          key={index}
          className="group-hover/formula:text-primary inline-block transition duration-75 group-hover/formula:-translate-y-px"
          style={{ transitionDelay: `${index * 25 + 50}ms` }}
        >
          &nbsp;
        </span>
      )

    return (
      <span
        key={index}
        className="group-hover/formula:text-primary inline-block transition duration-75 group-hover/formula:-translate-y-px"
        style={{ transitionDelay: `${index * 25 + 50}ms` }}
      >
        {letter}
      </span>
    )
  })
}

function AboutMe() {
  const formulaOne = "Formula 1"
  const cooking = "cooking"
  const golf = "golf"
  const dancing = "dancing"
  const flagFootball = "flag football league"

  return (
    <section className="mb-16 flex flex-col gap-4 md:mb-24 lg:mb-36">
      <p>
        My coding journey began with a{" "}
        <a
          href="https://www.bloomtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary focus-visible:text-primary font-bold"
        >
          fullstack web development boot camp
        </a>
        , where I honed my skills in web development. Proficient in React.js,
        TypeScript, and Agile methodologies, I've transitioned from boot camp
        graduate to an{" "}
        <a
          href="http://https://www.ibm.com/impact/feature/apprenticeship"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary focus-visible:text-primary font-bold"
        >
          application developer apprentice
        </a>
        . This experience laid the foundation for my journey as a software
        engineer.
      </p>

      <p>
        Currently, I excel as a software engineer at a {""}
        <a
          href="https://brightinsight.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary focus-visible:text-primary font-bold"
        >
          medtech company
        </a>
        , emphasizing user-centric design, operational efficiency, and seamless
        experiences.
      </p>

      <p>
        Beyond work, I'm passionate about{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/chef-hat.svg),_pointer]">
          {animateString(cooking)}
        </span>
        ,{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/golf.svg),_pointer]">
          {animateString(golf)}
        </span>
        ,{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/dancing.svg),_pointer]">
          {animateString(dancing)}
        </span>
        ,{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/racecar.svg),_pointer]">
          <span className="sr-only">{formulaOne}</span>
          {animateString(formulaOne)}
        </span>
        , and active participation in a{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/football.svg),_pointer]">
          {animateString(flagFootball)}
        </span>
        .
      </p>
    </section>
  )
}

type Job = {
  from: string
  to: string
  prevTitles: string[]
  titleAndCompany: string
  description: string
  badges: string[]
  href: string
  links: { title: string; url: string }[]
}

const experience: Job[] = [
  {
    from: "Jan 2022",
    to: "Present",
    prevTitles: ["React Engineer"],
    titleAndCompany: "Software Engineer · BrightInsight",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
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
    href: "https://upstatement.com"
  },
  {
    from: "May 2021",
    to: "Feb 2022",
    prevTitles: [],
    titleAndCompany: "Application Developer Apprentice · IBM",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    badges: [
      "Typescript/Javascript",
      "Agile",
      "React",
      "IBM Hybrid Cloud Services"
    ],
    links: [],
    href: "https://upstatement.com"
  },
  {
    from: "Feb 2017",
    to: "Mar 2020",
    prevTitles: ["Lead Barista", "Barista"],
    titleAndCompany: "General Manager · Go Get Em Tiger",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    badges: [],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" }
    ],
    href: "https://upstatement.com"
  }
]

function Experience() {
  return (
    <section className="">
      <ol className="group/list flex flex-col gap-12">
        {experience.map((job, index) => (
          <Job job={job} index={index} />
        ))}
      </ol>
    </section>
  )
}

function Job({ job, index }: { job: Job; index: number }) {
  return (
    <li
      key={index}
      className="group relative grid rounded-lg transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-2 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      <div className="lg:group-hover:bg-background/50 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block"></div>
      <header className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
        <span className="whitespace-nowrap">{job.from}</span> -{" "}
        <span className="whitespace-nowrap">{job.to}</span>
      </header>
      <div className="z-10 flex flex-col gap-2 sm:col-span-6">
        <div className="text-lg leading-snug">
          <Link
            href={job.href}
            className="hover:text-primary focus-visible:text-primary font-medium leading-tight transition-all duration-300"
          >
            {job.titleAndCompany}
            <span className="absolute inset-0 hidden lg:block"></span>
          </Link>
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
        <p className="">{job.description}</p>

        {job.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {job.links.map((link) => (
              <Button
                key={link.url}
                size="sm"
                variant="link"
                className="text-sm"
              >
                <Link2Icon className="mr-1" />
                <Link href={link.url}>{link.title}</Link>
              </Button>
            ))}
          </div>
        )}

        {job.badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {job.badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
