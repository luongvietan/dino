"use client"

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react"

import { cn } from "@/lib/utils"

type MeshGradientBackgroundProps = {
  className?: string
}

export function MeshGradientBackground({ className }: MeshGradientBackgroundProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
        }}
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/65 via-[#0b1220]/72 to-[#05070d]/90" />
    </div>
  )
}
