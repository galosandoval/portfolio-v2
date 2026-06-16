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
    - If our current scroll position enters the space where current section on screen is, mark the corresponding nav link / button as active, else clear it
    - To know which element needs the active state, we use the sectionId we get while looping through sections as a selector
    */
        const isActive =
          scrollY > sectionTop && scrollY <= sectionTop + sectionHeight

        // The Contact Me section drives the header CTA's glow instead of a nav link
        const navLink = document.querySelector(
          "#navigation span[id=link" + sectionId + "]"
        )
        navLink?.classList.toggle("w-full", isActive)
        navLink?.classList.toggle("w-0", !isActive)

        if (sectionId === "contactMe") {
          document
            .getElementById("contactMeButton")
            ?.classList.toggle("animate-glow-pulse", isActive)
        }
      })
    }
  }, [])

  return <>{children}</>
}
