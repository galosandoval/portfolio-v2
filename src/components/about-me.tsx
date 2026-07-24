import { ParagraphLink } from "./paragraph-link"
import { AnimatedLetters } from "./animate-string"
import { StickyTitle } from "./sticky-title"

export function AboutMe() {
  const formulaOne = "Formula 1"
  const cooking = "cooking"
  const golf = "golf"
  const dancing = "dancing"
  const flagFootball = "flag football league"

  return (
    <section
      id="aboutMe"
      className="relative flex scroll-mt-16 flex-col gap-4 pb-16 md:pb-24 lg:pb-36"
    >
      <StickyTitle title="About Me" />

      <p>
        I&rsquo;m a senior frontend engineer who gravitates toward the systems
        other people avoid. At{" "}
        <ParagraphLink href="https://www.spiderstrategies.com/">
          Spider Strategies
        </ParagraphLink>
        , I set technical direction for an in-flight TypeScript migration,
        own the typed client layer I built to bridge our JavaScript/jQuery/Backbone
        frontend with a Java and Kotlin backend, and mentor
        engineers navigating the shift to modern patterns.
      </p>

      <p>
        That instinct for untangling complexity started with a{" "}
        <ParagraphLink href="https://www.bloomtech.com/">
          fullstack web development boot camp
        </ParagraphLink>{" "}
        and an{" "}
        <ParagraphLink href="https://www.ibm.com/impact/feature/apprenticeship">
          application developer apprenticeship at IBM
        </ParagraphLink>
        , followed by several years shipping React and TypeScript products
        for healthcare and mobile teams. Enterprise or startup, legacy or
        greenfield, I get productive fast in unfamiliar codebases.
      </p>

      <p>
        Beyond work, I&rsquo;m passionate about{" "}
        <span className="group/formula relative inline-flex overflow-hidden font-bold lg:cursor-[url(/chef-hat.svg),_pointer]">
          <AnimatedLetters letters={cooking} fileName="chef-hat.svg" />
        </span>
        , <AnimatedLetters letters={golf} fileName="golf.svg" />,{" "}
        <AnimatedLetters letters={dancing} fileName="dancing.svg" />,{" "}
        <AnimatedLetters letters={formulaOne} fileName="racecar.svg" />, and
        active participation in a{" "}
        <AnimatedLetters letters={flagFootball} fileName="football.svg" />.
      </p>
    </section>
  )
}
