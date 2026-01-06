'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function CoffeeCup() {
  const cupRef = useRef<THREE.Mesh>(null)
  const steamRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (cupRef.current) {
      cupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      cupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }
    if (steamRef.current) {
      steamRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.position.y = Math.sin(state.clock.elapsedTime * 2 + i) * 0.3 + i * 0.5
          child.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3 + i) * 0.2)
        }
      })
    }
  })

  return (
    <group>
      {/* Coffee Cup */}
      <mesh ref={cupRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.8, 1.5, 32]} />
        <meshStandardMaterial
          color="#8B6B4F"
          metalness={0.3}
          roughness={0.4}
          envMapIntensity={1}
        />
      </mesh>

      {/* Cup Handle */}
      <mesh position={[1.1, 0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <torusGeometry args={[0.3, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#735642"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Coffee Liquid */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.95, 0.75, 0.1, 32]} />
        <meshStandardMaterial
          color="#4a2c1a"
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>

      {/* Foam */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.98, 0.98, 0.05, 32]} />
        <meshStandardMaterial
          color="#d4c2ab"
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* Steam */}
      <group ref={steamRef}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[i * 0.3 - 0.3, 1, 0]}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <MeshDistortMaterial
              color="#ffffff"
              transparent
              opacity={0.3}
              distort={0.3}
              speed={2}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default function CoffeeCup3D() {
  return (
    <div className="w-full h-[600px] md:h-[700px] relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Environment preset="sunset" />
        <CoffeeCup />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}

