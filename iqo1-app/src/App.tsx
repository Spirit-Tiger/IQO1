import React, { Suspense, useEffect, useRef, useState } from 'react';
import './App.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { LOCALES } from './i18n/constants';
import{messages} from './i18n/eng';
import styled from 'styled-components';
import { Canvas, useFrame, useLoader, } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three/src/Three'


const RenderGltf = () => {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(() => {if (mesh.current !== null) {
    mesh.current.rotation.y += 0.01;
  }})
  return (
    <mesh ref={mesh}>
      <Suspense fallback={null}>
        <primitive object={gltf.scene} scale={3} />
      </Suspense>
    </mesh>
  )
}

function App() {

   const[locale, setLocale]= useState(LOCALES.ENGLISH);
   console.log(IntlProvider);

  

  return (
    <IntlProvider messages={messages[locale]} locale={locale} >
    <div>
      <Canvas style={{height:500}}>
          <RenderGltf />
      </Canvas>
      <StyledMessage>
        <FormattedMessage id="english" />
      </StyledMessage>
    </div>
    </IntlProvider>
  );
}

const StyledMessage = styled.p`
font-size: 4em;
`;

export default App;

