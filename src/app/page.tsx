import { GithubIcon, LinkedinIcon } from "lucide-react"
import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AboutMe } from "~/components/about-me"
import { ContactMe } from "~/components/contact-me"
import { Experience } from "~/components/experience"
import { GradiantOnMouseMove } from "~/components/gradient-on-mouse-move"
import HighlightOnScrollWrapper from "~/components/highlight-on-scroll-wrapper"
import { ModeToggle } from "~/components/mode-toggle"
import { ParagraphLink } from "~/components/paragraph-link"
import { Projects } from "~/components/projects"
import { Button } from "~/components/ui/button"

export const metadata: Metadata = {
  title: "Galo Sandoval",
  description: "Galo Sandoval is a software engineer based in Los Angeles.",
  icons: [
    { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png"
    }
  ],
  manifest: "/site.webmanifest"
}

export default function HomePage() {
  return (
    <HighlightOnScrollWrapper>
      <GradiantOnMouseMove />

      <div className="relative z-30 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main id="content" className="flex flex-col pt-24 lg:w-1/2 lg:py-24">
            <AboutMe />

            <Experience />

            <Projects />

            <ContactMe />

            <Footer />
          </main>
        </div>
      </div>
    </HighlightOnScrollWrapper>
  )
}

function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold sm:text-5xl">Galo Sandoval</h1>
        <h2 className="text-lg font-medium sm:text-xl">
          Software Engineer at BrightInsight
        </h2>
        <p className="max-w-sm text-sm font-light leading-normal lg:whitespace-nowrap">
          Passionate App Developer | Web Enthusiast | Culinary Explorer
        </p>
        <Navigation />
      </div>

      <ul className="flex gap-2 pt-8">
        <li>
          <ModeToggle />
        </li>
        <li>
          <Button asChild variant="ghost" size="icon">
            <Link
              href="https://github.com/galosandoval"
              target="_black"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="ghost" size="icon">
            <Link
              href="https://www.linkedin.com/in/galo-sandoval/"
              target="_black"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </Link>
          </Button>
        </li>
      </ul>
    </header>
  )
}

function Navigation() {
  return (
    <nav
      id="navigation"
      className="nav hidden flex-col justify-start pt-16 lg:flex"
    >
      <Link
        href="#aboutMe"
        className="group relative w-fit whitespace-nowrap tracking-widest"
      >
        <span className="font-bold">About me</span>
        <span
          id="linkaboutMe"
          className="absolute left-0 z-10 w-0 overflow-hidden border-b-2 border-b-primary font-bold text-primary duration-500 group-hover:w-full group-focus-visible:w-full motion-reduce:duration-0"
        >
          About me
        </span>
      </Link>
      <Link
        href="#experience"
        className="group relative w-fit whitespace-nowrap tracking-widest"
      >
        <span className="font-bold">Experience</span>
        <span
          id="linkexperience"
          className="absolute left-0 z-10 w-0 overflow-hidden border-b-2 border-b-primary font-bold text-primary duration-500 group-hover:w-full group-focus-visible:w-full motion-reduce:duration-0"
        >
          Experience
        </span>
      </Link>
      <Link
        href="#projects"
        className="group group relative w-fit whitespace-nowrap tracking-widest"
      >
        <span className="font-bold">Projects</span>
        <span
          id="linkprojects"
          className="absolute left-0 z-10 w-0 overflow-hidden border-b-2 border-b-primary font-bold text-primary duration-500 group-hover:w-full group-focus-visible:w-full motion-reduce:duration-0"
        >
          Projects
        </span>
      </Link>
      <Link
        href="#contactMe"
        className="group relative w-fit whitespace-nowrap tracking-widest"
      >
        <span className="border-b-2 border-transparent font-bold">
          Contact Me
        </span>
        <span
          id="linkcontactMe"
          className="absolute left-0 z-10 w-0 overflow-hidden border-b-2 border-b-primary font-bold text-primary duration-500 group-hover:w-full group-focus-visible:w-full motion-reduce:duration-0"
        >
          Contact Me
        </span>
      </Link>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="pt-16 text-sm text-muted-foreground">
      <p>
        This site draws significant inspiration from{" "}
        <ParagraphLink href="https://brittanychiang.com/">
          Brittany Chiang
        </ParagraphLink>
        , and it was crafted using{" "}
        <ParagraphLink href="https://www.typescriptlang.org/">
          Typescript
        </ParagraphLink>
        , <ParagraphLink href="https://nextjs.org/">Next.js</ParagraphLink>, and{" "}
        <ParagraphLink href="https://tailwindcss.com/">
          Tailwind CSS
        </ParagraphLink>
        . It is proudly hosted on{" "}
        <ParagraphLink href="https://vercel.com/">Vercel</ParagraphLink>, and
        the font used is sourced from{" "}
        <ParagraphLink href="https://vercel.com/font">Vercel</ParagraphLink> as
        well.
      </p>
    </footer>
  )
}
