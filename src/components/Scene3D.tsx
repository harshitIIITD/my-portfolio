// src/components/Scene3D.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import { Vector3 } from 'three'

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className="absolute inset-0"
    >
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      <Float
        speed={4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#4338ca"
            attach="material"
            distort={0.5}
            speed={1.5}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float
        speed={2}
        rotationIntensity={2}
        floatIntensity={1}
        position={new Vector3(-2, -1, -1)}
      >
        <Sphere args={[0.4, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color="#60a5fa"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      <Float
        speed={3}
        rotationIntensity={1.5}
        floatIntensity={1.2}
        position={new Vector3(2, 1, -2)}
      >
        <Sphere args={[0.6, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color="#818cf8"
            attach="material"
            distort={0.3}
            speed={1.8}
            roughness={0.3}
          />
        </Sphere>
      </Float>

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -5]} intensity={1} />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}