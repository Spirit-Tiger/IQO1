import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader, } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three/src/Three'
import { Stage,} from '@react-three/drei';

const RenderGltf = () => {
    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    const mesh = useRef<THREE.Mesh>(null);
    useFrame(() => {if (mesh.current !== null) {
      mesh.current.rotation.y += 0.01;
    }})
    useEffect(()=>{
      gltf.scene.scale.set(2,2,2);
    },[]);
  
    console.log(gltf);
   
  
    return (
      <Stage contactShadow={false} intensity={1}> 
      <mesh ref={mesh}  >
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />
        </Suspense>
      </mesh>
     </Stage>
    )
}

export default RenderGltf