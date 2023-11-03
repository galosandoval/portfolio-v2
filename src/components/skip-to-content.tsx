import { Button } from "./ui/button";

export function SkipToContent() {
  return (
    <Button asChild>
      <a
        href="#content"
        className="absolute -left-1 top-1 z-40 block -translate-x-full scale-50 transition-transform duration-200 focus-visible:left-1 focus-visible:translate-x-0 focus-visible:scale-100 motion-reduce:transition-none"
      >
        Skip to content
      </a>
    </Button>
  );
}
