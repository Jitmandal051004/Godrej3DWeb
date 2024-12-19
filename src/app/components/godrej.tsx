"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/godrej/result.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    gltf.scene.scale.set(0.02, 0.02, 0.02);

    useFrame(() => {
        mesh.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={mesh}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export function Godrej() {
    return (
        <div className='flex justify-center items-center h-[50%] lg:w-[67.5%] xl:w-[30%] bg-zinc-800 mt-9 rounded-2xl'>
            <Canvas className='h-full w-full aspect-square'>
                <PerspectiveCamera/>
                <Environment preset="city"/>
                <OrbitControls />
                <MeshComponent />
            </Canvas>
        </div>
    );
}
