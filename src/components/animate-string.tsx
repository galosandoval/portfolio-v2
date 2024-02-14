export function AnimatedLetters({
  letters,
  fileName
}: {
  letters: string
  fileName: string
}) {
  return (
    <span
      className={`group/formula relative inline-flex overflow-hidden font-bold`}
      style={{
        cursor: `url(/${fileName}), pointer`
      }}
    >
      <span className="sr-only">{letters}</span>
      <Letters input={letters} />
    </span>
  )
}

function Letters({ input }: { input: string }) {
  return input.split("").map((letter, index) => {
    if (letter === " ")
      return (
        <span
          key={index}
          className="inline-block transition duration-75 group-hover/formula:-translate-y-px group-hover/formula:text-primary"
          style={{ transitionDelay: `${index * 25 + 50}ms` }}
        >
          &nbsp;
        </span>
      )

    return (
      <span
        key={index}
        className="inline-block transition duration-75 group-hover/formula:-translate-y-px group-hover/formula:text-primary"
        style={{ transitionDelay: `${index * 25 + 50}ms` }}
      >
        {letter}
      </span>
    )
  })
}
