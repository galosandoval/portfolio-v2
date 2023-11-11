import { ArrowRightIcon, Link2Icon } from "lucide-react";
import Link from "next/link";
import { Card } from "./card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
      "As a Frontend Developer at BrightInsight, I actively contribute to their Disease Management Platform (DMP), working in a team of eight professionals. My role involves creating and documenting processes, using Agile practices, and leveraging React, TypeScript, and more. I continue to be a part of the team, contributing to the development of enterprise healthcare solutions.",
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
    href: "https://brightinsight.com/disease-management-solution",
  },
  {
    from: "May 2021",
    to: "Feb 2022",
    prevTitles: [],
    titleAndCompany: "Application Developer Apprentice · IBM",
    description:
      "At IBM, I served as an Application Developer Apprentice, gaining insights into enterprise-level project workflows and Agile practices. My responsibilities included troubleshooting technical issues, conducting daily stand-up meetings, and understanding IBM's Hybrid Cloud Services. This experience enhanced my adaptability in dynamic work environments.",
    badges: [
      "Typescript/Javascript",
      "Agile",
      "React",
      "IBM Hybrid Cloud Services",
    ],
    links: [],
    href: "https://www.ibm.com/impact/feature/apprenticeship",
  },
  {
    from: "Feb 2017",
    to: "Mar 2020",
    prevTitles: ["Lead Barista", "Barista"],
    titleAndCompany: "General Manager · Go Get Em Tiger",
    description:
      "During my tenure as General Manager at Go Get Em Tiger, a Downtown LA coffee bar, I optimized store operations, reduced expenses, and improved staff allocation. I also played a key role in the hiring and training of new staff, emphasizing effective leadership and teamwork.",
    badges: [
      "Team Management",
      "Customer Service",
      "Leadership",
      "Financial Management",
      "Operaitions Optimization",
    ],
    links: [
      { title: "Upstatement", url: "https://upstatement.com" },
      { title: "Harvard Business School", url: "https://hbs.edu" },
    ],
    href: "https://gget.com/",
  },
];

export function Experience() {
  return (
    <section id="experience" className="lg:scroll-mt-24">
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
            <span className="absolute -right-6 mt-[5px] transition group-hover:translate-x-2">
              <ArrowRightIcon className="h-4 w-4" />
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
