import React, { Suspense, useLayoutEffect, useRef, useMemo, useState, useCallback } from 'react';
import { Canvas, useFrame, useLoader, } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three/src/Three'
import { Stage,} from '@react-three/drei';

interface myProps {
 shadow:boolean,
 scale:number,
 version:number
}

const RenderGltf: React.FC<myProps> = ({ shadow, scale, version }: myProps) => {
    const gltf = useLoader(GLTFLoader, '/scene.gltf')
    const gltf2 = useLoader(GLTFLoader, '/scene2.gltf')
    const mesh = useRef<THREE.Mesh>(null);
    let dir :boolean;
    useFrame(() => {if (mesh.current !== null) {
      mesh.current.rotation.y += 0.01;
      if (version == 2) {
        if( parseFloat(mesh.current.position.y.toPrecision(5)) <= 0.00){
          dir = true
        }
        if(parseFloat(mesh.current.position.y.toPrecision(5)) >= 0.6){
          dir = false
        }
        dir ? mesh.current.position.y += 0.01 : mesh.current.position.y -= 0.01;
      }
    }})
    useLayoutEffect(()=>{
      version==1 ?
      gltf.scene.scale.set(scale,scale,scale):
      gltf2.scene.scale.set(scale,scale,scale);
      
    },[]);
  
    return (
      shadow ?
      
      <Stage intensity={1} contactShadow={false} > 
      <mesh ref={mesh} >
        <Suspense fallback={null}>
          <primitive object={gltf2.scene} />
        </Suspense>
      </mesh>
     </Stage>
     : 
     <Stage contactShadow={false} intensity={1}> 
     <mesh ref={mesh}  >
       <Suspense fallback={null}>
         <primitive object={gltf.scene} />
       </Suspense>
     </mesh>
    </Stage>
    )
}

export default RenderGltf;