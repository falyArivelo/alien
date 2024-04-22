import React, { useEffect, useRef } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, useTexture } from '@react-three/drei'
import { LUTPass, LUTCubeLoader } from 'three-stdlib'

extend({ LUTPass })


function Grading() {
    const { texture3D } = useLoader(LUTCubeLoader, '/cubicle-99.CUBE')
    return (
        <Effects>
            <lUTPass lut={texture3D} intensity={0.75} />
        </Effects>
    )
}

function Sphere(props) {
    const texture = useTexture('/assets/2k_earth_daymap.jpg')

    const mesh = useRef();

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
      })
    
    return (
        <mesh ref={mesh} {...props}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
        </mesh>
    )
}


const index = () => {
    return (
        <div className='earth' >
            <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45, aspect: 500 }}>
                <ambientLight />
                <spotLight intensity={50} angle={0.2} penumbra={10} position={[5, 15, 10]} />
                <Sphere />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div >
    )
}

export default index