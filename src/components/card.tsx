export function Card({ children }: { children: React.ReactNode }) {
  return (
    <li className="group relative grid rounded-lg transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-2 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-background/50"></div>

      {children}
    </li>
  );
}
