import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_3: THREE.Mesh;
    mesh_4: THREE.Mesh;
    mesh_5: THREE.Mesh;
    mesh_6: THREE.Mesh;
    mesh_7: THREE.Mesh;
    mesh_8: THREE.Mesh;
    mesh_9: THREE.Mesh;
    mesh_10: THREE.Mesh;
    mesh_11: THREE.Mesh;
    mesh_12: THREE.Mesh;
    mesh_13: THREE.Mesh;
    mesh_14: THREE.Mesh;
    mesh_15: THREE.Mesh;
    mesh_16: THREE.Mesh;
    mesh_17: THREE.Mesh;
    mesh_18: THREE.Mesh;
    mesh_19: THREE.Mesh;
    mesh_20: THREE.Mesh;
    mesh_21: THREE.Mesh;
    mesh_22: THREE.Mesh;
    mesh_23: THREE.Mesh;
    mesh_24: THREE.Mesh;
    mesh_25: THREE.Mesh;
    mesh_26: THREE.Mesh;
    mesh_27: THREE.Mesh;
    mesh_28: THREE.Mesh;
    mesh_29: THREE.Mesh;
    mesh_30: THREE.Mesh;
    mesh_31: THREE.Mesh;
    mesh_32: THREE.Mesh;
    mesh_33: THREE.Mesh;
    mesh_34: THREE.Mesh;
    mesh_35: THREE.Mesh;
    mesh_36: THREE.Mesh;
    mesh_37: THREE.Mesh;
    mesh_38: THREE.Mesh;
    mesh_39: THREE.Mesh;
    mesh_40: THREE.Mesh;
    mesh_41: THREE.Mesh;
    mesh_42: THREE.Mesh;
    mesh_43: THREE.Mesh;
    mesh_44: THREE.Mesh;
    mesh_45: THREE.Mesh;
    mesh_46: THREE.Mesh;
    mesh_47: THREE.Mesh;
    mesh_48: THREE.Mesh;
    mesh_49: THREE.Mesh;
    mesh_50: THREE.Mesh;
    mesh_51: THREE.Mesh;
    mesh_52: THREE.Mesh;
    mesh_53: THREE.Mesh;
    mesh_54: THREE.Mesh;
    mesh_55: THREE.Mesh;
    mesh_56: THREE.Mesh;
    mesh_57: THREE.Mesh;
    mesh_58: THREE.Mesh;
    mesh_59: THREE.Mesh;
    mesh_60: THREE.Mesh;
    mesh_61: THREE.Mesh;
    mesh_62: THREE.Mesh;
    mesh_63: THREE.Mesh;
    mesh_64: THREE.Mesh;
    mesh_65: THREE.Mesh;
    mesh_66: THREE.Mesh;
    mesh_67: THREE.Mesh;
    mesh_68: THREE.Mesh;
    mesh_69: THREE.Mesh;
    mesh_70: THREE.Mesh;
  };
  materials: {
    ["Material.1"]: THREE.MeshStandardMaterial;
  };
};

function MarkZuckerberg({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | any>();
  // @ts-ignore
  const { nodes } = useGLTF("/gltfModels/MarkZuckerberg.gltf") as GLTFResult;

  useFrame(() => (group.current.rotation.y += 0.01));

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group position={[-15, -27, 18]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_1.geometry}
            material={nodes.mesh_1.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_2.geometry}
            material={nodes.mesh_2.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_3.geometry}
            material={nodes.mesh_3.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_4.geometry}
            material={nodes.mesh_4.material}
            position={[0, 32, 32]}
          />
          <mesh
            geometry={nodes.mesh_5.geometry}
            material={nodes.mesh_5.material}
            position={[16, 32, 32]}
          />
          <mesh
            geometry={nodes.mesh_6.geometry}
            material={nodes.mesh_6.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_7.geometry}
            material={nodes.mesh_7.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_8.geometry}
            material={nodes.mesh_8.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_9.geometry}
            material={nodes.mesh_9.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_10.geometry}
            material={nodes.mesh_10.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_11.geometry}
            material={nodes.mesh_11.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_12.geometry}
            material={nodes.mesh_12.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_13.geometry}
            material={nodes.mesh_13.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_14.geometry}
            material={nodes.mesh_14.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_15.geometry}
            material={nodes.mesh_15.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_16.geometry}
            material={nodes.mesh_16.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_17.geometry}
            material={nodes.mesh_17.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_18.geometry}
            material={nodes.mesh_18.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_19.geometry}
            material={nodes.mesh_19.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_20.geometry}
            material={nodes.mesh_20.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_21.geometry}
            material={nodes.mesh_21.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_22.geometry}
            material={nodes.mesh_22.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_23.geometry}
            material={nodes.mesh_23.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_24.geometry}
            material={nodes.mesh_24.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_25.geometry}
            material={nodes.mesh_25.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_26.geometry}
            material={nodes.mesh_26.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_27.geometry}
            material={nodes.mesh_27.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_28.geometry}
            material={nodes.mesh_28.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_29.geometry}
            material={nodes.mesh_29.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_30.geometry}
            material={nodes.mesh_30.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_31.geometry}
            material={nodes.mesh_31.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_32.geometry}
            material={nodes.mesh_32.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_33.geometry}
            material={nodes.mesh_33.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_34.geometry}
            material={nodes.mesh_34.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_35.geometry}
            material={nodes.mesh_35.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_36.geometry}
            material={nodes.mesh_36.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_37.geometry}
            material={nodes.mesh_37.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_38.geometry}
            material={nodes.mesh_38.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_39.geometry}
            material={nodes.mesh_39.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_40.geometry}
            material={nodes.mesh_40.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_41.geometry}
            material={nodes.mesh_41.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_42.geometry}
            material={nodes.mesh_42.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_43.geometry}
            material={nodes.mesh_43.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_44.geometry}
            material={nodes.mesh_44.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_45.geometry}
            material={nodes.mesh_45.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_46.geometry}
            material={nodes.mesh_46.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_47.geometry}
            material={nodes.mesh_47.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_48.geometry}
            material={nodes.mesh_48.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_49.geometry}
            material={nodes.mesh_49.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_50.geometry}
            material={nodes.mesh_50.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_51.geometry}
            material={nodes.mesh_51.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_52.geometry}
            material={nodes.mesh_52.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_53.geometry}
            material={nodes.mesh_53.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_54.geometry}
            material={nodes.mesh_54.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_55.geometry}
            material={nodes.mesh_55.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_56.geometry}
            material={nodes.mesh_56.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_57.geometry}
            material={nodes.mesh_57.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_58.geometry}
            material={nodes.mesh_58.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_59.geometry}
            material={nodes.mesh_59.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_60.geometry}
            material={nodes.mesh_60.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_61.geometry}
            material={nodes.mesh_61.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_62.geometry}
            material={nodes.mesh_62.material}
          />
          <mesh
            geometry={nodes.mesh_63.geometry}
            material={nodes.mesh_63.material}
            position={[16, 0, 0]}
          />
          <mesh
            geometry={nodes.mesh_64.geometry}
            material={nodes.mesh_64.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_65.geometry}
            material={nodes.mesh_65.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_66.geometry}
            material={nodes.mesh_66.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_67.geometry}
            material={nodes.mesh_67.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_68.geometry}
            material={nodes.mesh_68.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_69.geometry}
            material={nodes.mesh_69.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_70.geometry}
            material={nodes.mesh_70.material}
            position={[16, 16, 32]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/gltfModels/MarkZuckerberg.gltf");

export default MarkZuckerberg;
