import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Plane } from '@react-three/drei';
import { technologies } from '../constants/index';

const TechImage = React.forwardRef(({ url, position }, ref) => {
  const texture = useLoader(TextureLoader, url);
  return (
    <Plane args={[1, 1]} position={position} ref={ref}>
      <meshBasicMaterial attach="material" map={texture} transparent />
    </Plane>
  );
});

const TechImages = () => {
  const planesRef = useRef([]);

  useFrame(({ mouse, camera, raycaster }) => {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(planesRef.current);

    planesRef.current.forEach((plane) => {
      plane.position.z = 0;
    });

    if (intersects.length > 0) {
      intersects[0].object.position.z = 0.5;
    }
  });

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {technologies.map((tech, index) => (
        <TechImage
          key={index}
          url={tech.icon}
          position={[index * 1.5 - (technologies.length - 1) * 0.75, 0, 0]}
          ref={(el) => (planesRef.current[index] = el)}
        />
      ))}
    </Canvas>
  );
};

export default TechImages;