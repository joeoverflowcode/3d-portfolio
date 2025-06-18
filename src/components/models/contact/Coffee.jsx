import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../../../components/Loader";

const Coffee = () => {
  const coffee = useGLTF("/3d-portfolio/models/coffee/scene.gltf");

  return (
    <primitive
      object={coffee.scene}
      scale={5}
      //   position-y={-5}
      rotation-y={0}
      position={[0, -3, 0]}
      rotation={[0.55, 0, 0]}
    />
  );
};

const CoffeeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 8, 10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        {/* <hemisphereLight intensity={3} groundColor="black"/> */}
        <directionalLight position={[5, -5, -5]} intensity={0.7} castShadow />

        {/* <directionalLight position={[5,-5,-10]} intensity={2} castShadow/> */}
        <directionalLight
          position={[-5, 5, 5]}
          intensity={4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Coffee />
        <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CoffeeCanvas;
