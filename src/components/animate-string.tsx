export function AnimateString({ string }: { string: string }) {
  return string.split("").map((letter, index) => {
    if (letter === " ")
      return (
        <span
          key={index}
          className="inline-block transition duration-75 group-hover/formula:-translate-y-px group-hover/formula:text-primary"
          style={{ transitionDelay: `${index * 25 + 50}ms` }}
        >
          &nbsp;
        </span>
      );

    return (
      <span
        key={index}
        className="inline-block transition duration-75 group-hover/formula:-translate-y-px group-hover/formula:text-primary"
        style={{ transitionDelay: `${index * 25 + 50}ms` }}
      >
        {letter}
      </span>
    );
  });
}
