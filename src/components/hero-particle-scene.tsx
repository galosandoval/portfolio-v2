"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useMemo, useRef } from "react"
import * as THREE from "three"

gsap.registerPlugin(ScrollTrigger)

const PARTICLE_COUNT = 2000

/**
 * A starfield of instanced points the camera flies through as the page
 * scrolls, mounted as a full-viewport background from the top of the page
 * down to the Contact Me section.
 */
export default function HeroParticleScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 60 }}>
      <Scene />
    </Canvas>
  )
}

function Scene() {
  const progress = useScrollProgress()
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    const t = progress.current
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02
    }

    state.camera.position.z = THREE.MathUtils.lerp(5, -20, t)
    if (state.camera instanceof THREE.PerspectiveCamera) {
      state.camera.fov = THREE.MathUtils.lerp(60, 90, t)
      state.camera.updateProjectionMatrix()
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={getAccentColor()}
        sizeAttenuation
        transparent
        opacity={0.85}
      />
    </points>
  )
}

/**
 * Tracks scroll progress (0 to 1) from the top of the page to the top of
 * the Contact Me section — the scene's full visible lifetime, since
 * HeroParticleField unmounts it once Contact Me scrolls into view — via
 * GSAP ScrollTrigger, exposed as a ref so useFrame can read it every frame
 * without triggering React re-renders. Respects prefers-reduced-motion by
 * freezing progress at 0 instead of registering the scrub.
 */
function useScrollProgress() {
  const progress = useRef(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (reducedMotion) return

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      endTrigger: "#contactMe",
      end: "top top",
      scrub: true,
      onUpdate: (self) => {
        progress.current = self.progress
      }
    })

    return () => trigger.kill()
  }, [])

  return progress
}

/**
 * Reads the site's `--primary` CSS variable for the particle color. Tailwind
 * stores it as space-separated "H S% L%", but three.js's Color.setStyle only
 * matches comma-separated hsl() syntax, so the components are re-joined.
 */
function getAccentColor() {
  if (typeof window === "undefined") return "#d946ef"
  const [h, s, l] = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary")
    .trim()
    .split(" ")
  return h && s && l ? `hsl(${h}, ${s}, ${l})` : "#d946ef"
}
