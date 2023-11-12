"use client"

import { useEffect } from "react"

export default function HighlightOnScrollWrapper({
  children
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Get all sections that have an ID defined
    const sections = document.querySelectorAll(
      "section[id]"
    ) as unknown as HTMLScriptElement[]

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlighter)

    function navHighlighter() {
      // Get current scroll position
      const scrollY = window.scrollY

      // Now we loop through sections to get height, top and ID values for each
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200
        const sectionId = current.getAttribute("id")

        /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.add("w-full")
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.remove("w-0")
        } else {
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.remove("w-full")
          document
            ?.querySelector("#navigation span[id=link" + sectionId + "]")!
            .classList.add("w-0")
        }
      })
    }
  }, [])

  return <>{children}</>
}
