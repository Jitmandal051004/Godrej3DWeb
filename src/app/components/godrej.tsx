"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/godrej/result.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export function Godrej() {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <Canvas className='h-full w-full aspect-square'>
                <ambientLight intensity={Math.PI/2} />
                <spotLight position={[10, 10, 10]} angle={130} penumbra={4} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <OrbitControls />
                {/* <ambientLight />
                <pointLight position={[10, 10, 10]} scale={[100, 100, 100]}/> */}
                <MeshComponent />
            </Canvas>
        </div>
    );
}
