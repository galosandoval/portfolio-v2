import { ArrowRightIcon, Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimateString } from "~/components/animate-string";
import { Card } from "~/components/card";
import { GradiantOnMouseMove } from "~/components/gradient-on-mouse-move";
import { ModeToggle } from "~/components/mode-toggle";
import { ParagraphLink } from "~/components/paragraph-link";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <>
      <GradiantOnMouseMove />

      <div className="relative z-30 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main id="content" className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
            <AboutMe />

            <Experience />

            <Projects />

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
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
  );
}

function AboutMe() {
  const formulaOne = "Formula 1";
  const cooking = "cooking";
  const golf = "golf";
  const dancing = "dancing";
  const flagFootball = "flag football league";

  return (
    <section className="mb-16 flex flex-col gap-4 md:mb-24 lg:mb-36">
      <p>
        My coding journey began with a{" "}
        <ParagraphLink href="https://www.bloomtech.com/">
          fullstack web development boot camp
        </ParagraphLink>
        , where I honed my skills in web development. Proficient in React.js,
        TypeScript, and Agile methodologies, I&rsquo;ve transitioned from boot
        camp graduate to an{" "}
        <ParagraphLink href="http://https://www.ibm.com/impact/feature/apprenticeship">
          application developer apprentice
        </ParagraphLink>
        . This experience laid the foundation for my journey as a software
        engineer.
      </p>

      <p>
        Currently, I excel as a software engineer at a {""}
        <ParagraphLink href="https://brightinsight.com/">
          medtech company
        </ParagraphLink>
        , emphasizing user-centric design, operational efficiency, and seamless
        experiences.
      </p>

      <p>
        Beyond work, I&rsquo;m passionate about{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/chef-hat.svg),_pointer]">
          <AnimateString string={cooking} />
        </span>
        ,{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/golf.svg),_pointer]">
          <AnimateString string={golf} />
        </span>
        ,{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/dancing.svg),_pointer]">
          <AnimateString string={dancing} />
        </span>
        ,{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/racecar.svg),_pointer]">
          <span className="sr-only">{formulaOne}</span>
          <AnimateString string={formulaOne} />
        </span>
        , and active participation in a{" "}
        <span className="group/formula inline-flex font-bold lg:cursor-[url(/images/football.svg),_pointer]">
          <AnimateString string={flagFootball} />
        </span>
        .
      </p>
    </section>
  );
}

type Job = {
  from: string;
  to: string;
  prevTitles: string[];
  titleAndCompany: string;
  description: string;
  badges: string[];
  href: string;
  links: { title: string; url: string }[];
};

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
      "BitBucket",
    ],
    links: [],
    href: "https://upstatement.com",
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
      "IBM Hybrid Cloud Services",
    ],
    links: [],
    href: "https://upstatement.com",
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
      { title: "Harvard Business School", url: "https://hbs.edu" },
    ],
    href: "https://upstatement.com",
  },
];

function Experience() {
  return (
    <section className="scroll-mt-16 pb-16 md:pb-24 lg:scroll-mt-24 lg:pb-36">
      <ol className="group/list flex flex-col gap-12">
        {experience.map((job) => (
          <Job job={job} key={job.href} />
        ))}
      </ol>

      <div className="pt-10">
        <Link
          className="group font-semibold"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative border-b-2 border-b-transparent group-hover:border-b-primary">
            View full resume
            <span className="absolute -right-8 mt-px transition group-hover:translate-x-2">
              <ArrowRightIcon />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
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

      <p className="leading-normal">{job.description}</p>

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

      {job.badges.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {job.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      )}
    </Card>
  );
}

const projects = [
  {
    title: "RecipeChat",
    description:
      "An app that uses ChatGPT to generate recipes. Save, edit, and make grocery lists from your favorite recipes.",
    href: "https://recipechat.app/",
    icon: "/images/recipechat.png",
  },
  {
    title: "Breathing Helper",
    description:
      "Breathing exercises can improve your well-being. With the 4-7-8 Breathing Helper, control your cravings and sleep faster. You'll find links to more information in the app.",
    href: "https://478-breathing.vercel.app/",
    icon: "/images/breathe-helper.png",
  },
  {
    title: "Portfolio v1",
    description:
      "My first portfolio site. Built with React and Styled Components.",
    href: "https://galosandovalportfolio.vercel.app/",
    icon: "/images/portfolio-v1.png",
  },
];

function Projects() {
  return (
    <section className="scroll-mt-16 pb-16 md:pb-24 lg:scroll-mt-24 lg:pb-36">
      <ol className="group/list flex flex-col gap-12">
        {projects.map((project) => (
          <Card
            key={project.title}
            leftCol={
              <Image
                alt="recipe chat landing page"
                src={project.icon}
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
          </Card>
        ))}
      </ol>
    </section>
  );
}

function Footer() {
  return (
    <footer className="text-sm text-muted-foreground">
      <p>
        This site draws significant inspiration from{" "}
        <ParagraphLink href="https://brittanychiang.com/">
          Brittany Chiang
        </ParagraphLink>
        , and it was crafted using Typescript, Next.js, and Tailwind CSS. It is
        proudly hosted on Vercel, and the font used is sourced from Vercel as
        well.
      </p>
    </footer>
  );
}
