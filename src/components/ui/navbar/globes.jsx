import React from 'react'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const ImagePlane = ({ url }) => {
    const texture = useLoader(TextureLoader, url)
    return (
        <mesh>
            <planeBufferGeometry args={[5, 5]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    )
}

export const Globes = () => {
    return (
        <Canvas>
            <ImagePlane url="../assets/your_image.jpg" />
            <EffectComposer>
                <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </Canvas>
    )
}