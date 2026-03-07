"use client"

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react"

import { cn } from "@/lib/utils"

type MeshGradientBackgroundProps = {
  className?: string
}

export function MeshGradientBackground({ className }: MeshGradientBackgroundProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 bg-[#070b14]", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(80%_100%_at_12%_15%,rgba(34,197,94,0.42),transparent_58%),radial-gradient(70%_85%_at_85%_22%,rgba(79,156,249,0.32),transparent_60%),linear-gradient(180deg,#0b1220_0%,#070b14_60%,#05070d_100%)]" />
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
        }}
        lazyLoad={false}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uSpeed={0.24}
          uStrength={0.33}
          uDensity={0.95}
          uFrequency={5}
          uAmplitude={2.7}
          positionX={-0.08}
          positionY={-0.15}
          positionZ={0}
          rotationX={0}
          rotationY={130}
          rotationZ={65}
          color1="#22c55e"
          color2="#b9e43a"
          color3="#4f9cf9"
          reflection={0.28}
          cAzimuthAngle={250}
          cPolarAngle={175}
          cDistance={0.7}
          cameraZoom={13.2}
          lightType="env"
          brightness={0.72}
          envPreset="city"
          grain="on"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/20 via-[#0b1220]/26 to-[#05070d]/40" />
    </div>
  )
}
