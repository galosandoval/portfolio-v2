export function Card({
  children,
  leftCol
}: {
  children: React.ReactNode
  leftCol: React.ReactNode
}) {
  return (
    <li className="group relative grid rounded-lg transition-all duration-300 sm:grid-cols-8 lg:hover:!opacity-100 lg:focus-within:!opacity-100 lg:group-hover/list:opacity-50 lg:group-focus-within/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-background/50 lg:group-focus-within:bg-background/50"></div>

      <div className="absolute -inset-x-4 -top-4 z-0 hidden h-0.5 origin-center scale-x-0 bg-primary transition-transform duration-300 ease-out motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:scale-x-100 lg:group-focus-within:scale-x-100 rounded-t-3xl mx-0.5"></div>

      <div className="absolute -inset-x-4 -bottom-4 z-0 hidden h-0.5 origin-center scale-x-0 bg-primary transition-transform duration-300 ease-out motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:scale-x-100 lg:group-focus-within:scale-x-100 rounded-b-3xl mx-0.5"></div>

      <div className="z-10 flex flex-col gap-2 sm:order-3 sm:col-span-5">
        {children}
      </div>

      <div className="col-span-1 sm:order-2"></div>

      <div className="z-10 py-4 text-xs font-semibold uppercase tracking-wide sm:order-1 sm:col-span-2 lg:py-0 whitespace-nowrap">
        {leftCol}
      </div>
    </li>
  )
}
