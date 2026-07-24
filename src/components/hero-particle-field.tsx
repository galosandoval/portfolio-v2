"use client"

import dynamic from "next/dynamic"
import { Component, type ReactNode, useEffect, useState } from "react"

const HeroParticleScene = dynamic(() => import("./hero-particle-scene"), {
  ssr: false
})

/**
 * Decorative full-viewport 3D particle background behind the hero and the
 * rest of the page. Only renders on desktop and when the user hasn't
 * requested reduced motion. Fails silently if WebGL is unavailable — this
 * is a visual flourish, not content.
 */
export function HeroParticleField() {
  const isEligibleViewport = useIsEligibleViewport()
  if (!isEligibleViewport) return null

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70">
      <HeroSceneErrorBoundary>
        <HeroParticleScene />
      </HeroSceneErrorBoundary>
    </div>
  )
}

function useIsEligibleViewport() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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

  return isDesktop && !prefersReducedMotion
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
