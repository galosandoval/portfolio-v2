"use client";

import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { AboutMe } from "~/components/about-me";
import { Experience } from "~/components/experience";
import { GradiantOnMouseMove } from "~/components/gradient-on-mouse-move";
import { ModeToggle } from "~/components/mode-toggle";
import { ParagraphLink } from "~/components/paragraph-link";
import { Projects } from "~/components/projects";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

function useHighlightOnScroll() {
  useEffect(() => {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll(
      "section[id]",
    ) as unknown as HTMLScriptElement[];

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
      // Get current scroll position
      const scrollY = window.scrollY;

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute("id");

        /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.add("w-full");
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.remove("w-0");
        } else {
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.remove("w-full");
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.add("w-0");
        }
      });
    }
  }, []);
}

export default function HomePage() {
  useHighlightOnScroll();

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
        <h2 className="text-lg font-medium sm:text-xl">
          Software Engineer at BrightInsight
        </h2>
        <p className="max-w-sm whitespace-nowrap font-light leading-normal">
          Passionate App Developer | Web Enthusiast | Culinary Explorer
        </p>
        <nav
          id="navigation"
          className="nav hidden flex-col justify-start pt-16 lg:flex"
        >
          <Link
            href="#aboutMe"
            className="group relative w-fit whitespace-nowrap"
          >
            <span id="black" className="font-bold">
              About me
            </span>
            <span
              id="linkaboutMe"
              className={cn(
                "absolute left-0 z-10 w-full overflow-hidden font-bold text-primary duration-500 group-hover:w-full motion-reduce:duration-0",
                // { "w-full": isAboutMeActive, "w-0": !isAboutMeActive },
              )}
            >
              About me
            </span>
          </Link>
          <Link
            href="#experience"
            className="group relative w-fit whitespace-nowrap"
          >
            <span id="black" className="font-bold">
              Experience
            </span>
            <span
              id="linkexperience"
              className={cn(
                "absolute left-0 z-10 w-0 overflow-hidden font-bold text-primary duration-500 group-hover:w-full motion-reduce:duration-0",
              )}
            >
              Experience
            </span>
          </Link>
          <Link
            href="#projects"
            className="group relative w-fit whitespace-nowrap"
          >
            <span id="black" className="font-bold">
              Projects
            </span>
            <span
              id="linkprojects"
              className={cn(
                "absolute left-0 z-10 w-0 overflow-hidden font-bold text-primary duration-500 group-hover:w-full motion-reduce:duration-0",
              )}
            >
              Projects
            </span>
          </Link>
        </nav>
      </div>

      <ul className="flex gap-2">
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
  );
}

function Footer() {
  return (
    <footer className="pt-16 text-sm text-muted-foreground md:pt-24 lg:pt-36 ">
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
  );
}
