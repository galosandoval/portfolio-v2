export function Card({
  children,
  leftCol,
}: {
  children: React.ReactNode;
  leftCol: React.ReactNode;
}) {
  return (
    <li className="group relative grid rounded-lg transition-all duration-300 sm:grid-cols-8 sm:gap-8 md:gap-2 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-background/50"></div>

      <div className="z-10 text-xs font-semibold uppercase tracking-wide sm:col-span-2">
        {leftCol}
      </div>
      <div className="z-10 flex flex-col gap-2 sm:col-span-6">{children}</div>
    </li>
  );
}
