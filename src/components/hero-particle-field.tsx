"use client"

import dynamic from "next/dynamic"
import { Component, type ReactNode, useEffect, useState } from "react"

const HeroParticleScene = dynamic(() => import("./hero-particle-scene"), {
  ssr: false
})

/**
 * Decorative full-viewport 3D particle background behind the hero and the
 * sections that follow it. Only renders on desktop and when the user hasn't
 * requested reduced motion, and disappears once the Contact Me section
 * scrolls into view. Fails silently if WebGL is unavailable — this is a
 * visual flourish, not content.
 */
export function HeroParticleField() {
  const shouldRender = useShouldRenderScene()
  if (!shouldRender) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <HeroSceneErrorBoundary>
        <HeroParticleScene />
      </HeroSceneErrorBoundary>
    </div>
  )
}

function useShouldRenderScene() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isBeforeContactMe, setIsBeforeContactMe] = useState(true)

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)")
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsDesktop(desktopQuery.matches)
    setPrefersReducedMotion(motionQuery.matches)

    const handleDesktopChange = (event: MediaQueryListEvent) =>
      setIsDesktop(event.matches)
    const handleMotionChange = (event: MediaQueryListEvent) =>
      setPrefersReducedMotion(event.matches)
    desktopQuery.addEventListener("change", handleDesktopChange)
    motionQuery.addEventListener("change", handleMotionChange)

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange)
      motionQuery.removeEventListener("change", handleMotionChange)
    }
  }, [])

  useEffect(() => {
    const contactMe = document.getElementById("contactMe")
    if (!contactMe) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsBeforeContactMe(!entry?.isIntersecting),
      { rootMargin: "0px 0px -50% 0px" }
    )
    observer.observe(contactMe)
    return () => observer.disconnect()
  }, [])

  return isDesktop && !prefersReducedMotion && isBeforeContactMe
}

class HeroSceneErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}
