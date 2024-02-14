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
        My coding journey began with a{" "}
        <ParagraphLink href="https://www.bloomtech.com/">
          fullstack web development boot camp
        </ParagraphLink>
        , where I honed my skills in web development. Proficient in React.js,
        TypeScript, and Agile methodologies, I&rsquo;ve transitioned from boot
        camp graduate to an{" "}
        <ParagraphLink href="https://www.ibm.com/impact/feature/apprenticeship">
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
