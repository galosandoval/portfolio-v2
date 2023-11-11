import { ParagraphLink } from "./paragraph-link";
import { AnimateString } from "./animate-string";

export function AboutMe() {
  const formulaOne = "Formula 1";
  const cooking = "cooking";
  const golf = "golf";
  const dancing = "dancing";
  const flagFootball = "flag football league";

  return (
    <section
      id="aboutMe"
      className="flex scroll-mt-16 flex-col gap-4 pb-16 md:pb-24 lg:pb-36"
    >
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
