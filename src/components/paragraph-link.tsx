import Link from "next/link";

export function ParagraphLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="font-bold hover:text-primary focus-visible:text-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
