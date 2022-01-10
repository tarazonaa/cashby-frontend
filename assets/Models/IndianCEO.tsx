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
    mesh_71: THREE.Mesh;
    mesh_72: THREE.Mesh;
    mesh_73: THREE.Mesh;
    mesh_74: THREE.Mesh;
    mesh_75: THREE.Mesh;
    mesh_76: THREE.Mesh;
    mesh_77: THREE.Mesh;
    mesh_78: THREE.Mesh;
    mesh_79: THREE.Mesh;
    mesh_80: THREE.Mesh;
    mesh_81: THREE.Mesh;
    mesh_82: THREE.Mesh;
    mesh_83: THREE.Mesh;
    mesh_84: THREE.Mesh;
    mesh_85: THREE.Mesh;
    mesh_86: THREE.Mesh;
    mesh_87: THREE.Mesh;
    mesh_88: THREE.Mesh;
    mesh_89: THREE.Mesh;
    mesh_90: THREE.Mesh;
    mesh_91: THREE.Mesh;
    mesh_92: THREE.Mesh;
    mesh_93: THREE.Mesh;
    mesh_94: THREE.Mesh;
    mesh_95: THREE.Mesh;
    mesh_96: THREE.Mesh;
    mesh_97: THREE.Mesh;
    mesh_98: THREE.Mesh;
    mesh_99: THREE.Mesh;
    mesh_100: THREE.Mesh;
    mesh_101: THREE.Mesh;
    mesh_102: THREE.Mesh;
    mesh_103: THREE.Mesh;
    mesh_104: THREE.Mesh;
    mesh_105: THREE.Mesh;
    mesh_106: THREE.Mesh;
    mesh_107: THREE.Mesh;
    mesh_108: THREE.Mesh;
    mesh_109: THREE.Mesh;
    mesh_110: THREE.Mesh;
    mesh_111: THREE.Mesh;
    mesh_112: THREE.Mesh;
    mesh_113: THREE.Mesh;
    mesh_114: THREE.Mesh;
    mesh_115: THREE.Mesh;
    mesh_116: THREE.Mesh;
    mesh_117: THREE.Mesh;
    mesh_118: THREE.Mesh;
    mesh_119: THREE.Mesh;
    mesh_120: THREE.Mesh;
    mesh_121: THREE.Mesh;
    mesh_122: THREE.Mesh;
    mesh_123: THREE.Mesh;
    mesh_124: THREE.Mesh;
    mesh_125: THREE.Mesh;
    mesh_126: THREE.Mesh;
    mesh_127: THREE.Mesh;
    mesh_128: THREE.Mesh;
    mesh_129: THREE.Mesh;
    mesh_130: THREE.Mesh;
    mesh_131: THREE.Mesh;
    mesh_132: THREE.Mesh;
    mesh_133: THREE.Mesh;
    mesh_134: THREE.Mesh;
    mesh_135: THREE.Mesh;
    mesh_136: THREE.Mesh;
    mesh_137: THREE.Mesh;
    mesh_138: THREE.Mesh;
    mesh_139: THREE.Mesh;
    mesh_140: THREE.Mesh;
    mesh_141: THREE.Mesh;
    mesh_142: THREE.Mesh;
    mesh_143: THREE.Mesh;
    mesh_144: THREE.Mesh;
    mesh_145: THREE.Mesh;
    mesh_146: THREE.Mesh;
    mesh_147: THREE.Mesh;
    mesh_148: THREE.Mesh;
    mesh_149: THREE.Mesh;
    mesh_150: THREE.Mesh;
    mesh_151: THREE.Mesh;
    mesh_152: THREE.Mesh;
    mesh_153: THREE.Mesh;
    mesh_154: THREE.Mesh;
    mesh_155: THREE.Mesh;
    mesh_156: THREE.Mesh;
    mesh_157: THREE.Mesh;
    mesh_158: THREE.Mesh;
    mesh_159: THREE.Mesh;
    mesh_160: THREE.Mesh;
    mesh_161: THREE.Mesh;
    mesh_162: THREE.Mesh;
    mesh_163: THREE.Mesh;
    mesh_164: THREE.Mesh;
    mesh_165: THREE.Mesh;
    mesh_166: THREE.Mesh;
    mesh_167: THREE.Mesh;
    mesh_168: THREE.Mesh;
    mesh_169: THREE.Mesh;
    mesh_170: THREE.Mesh;
    mesh_171: THREE.Mesh;
    mesh_172: THREE.Mesh;
    mesh_173: THREE.Mesh;
    mesh_174: THREE.Mesh;
    mesh_175: THREE.Mesh;
    mesh_176: THREE.Mesh;
    mesh_177: THREE.Mesh;
    mesh_178: THREE.Mesh;
    mesh_179: THREE.Mesh;
    mesh_180: THREE.Mesh;
    mesh_181: THREE.Mesh;
    mesh_182: THREE.Mesh;
    mesh_183: THREE.Mesh;
    mesh_184: THREE.Mesh;
    mesh_185: THREE.Mesh;
    mesh_186: THREE.Mesh;
    mesh_187: THREE.Mesh;
    mesh_188: THREE.Mesh;
    mesh_189: THREE.Mesh;
    mesh_190: THREE.Mesh;
    mesh_191: THREE.Mesh;
    mesh_192: THREE.Mesh;
    mesh_193: THREE.Mesh;
    mesh_194: THREE.Mesh;
    mesh_195: THREE.Mesh;
    mesh_196: THREE.Mesh;
    mesh_197: THREE.Mesh;
    mesh_198: THREE.Mesh;
    mesh_199: THREE.Mesh;
    mesh_200: THREE.Mesh;
    mesh_201: THREE.Mesh;
    mesh_202: THREE.Mesh;
    mesh_203: THREE.Mesh;
    mesh_204: THREE.Mesh;
    mesh_205: THREE.Mesh;
    mesh_206: THREE.Mesh;
    mesh_207: THREE.Mesh;
    mesh_208: THREE.Mesh;
    mesh_209: THREE.Mesh;
    mesh_210: THREE.Mesh;
    mesh_211: THREE.Mesh;
    mesh_212: THREE.Mesh;
    mesh_213: THREE.Mesh;
    mesh_214: THREE.Mesh;
    mesh_215: THREE.Mesh;
    mesh_216: THREE.Mesh;
    mesh_217: THREE.Mesh;
    mesh_218: THREE.Mesh;
    mesh_219: THREE.Mesh;
    mesh_220: THREE.Mesh;
    mesh_221: THREE.Mesh;
    mesh_222: THREE.Mesh;
    mesh_223: THREE.Mesh;
    mesh_224: THREE.Mesh;
    mesh_225: THREE.Mesh;
    mesh_226: THREE.Mesh;
    mesh_227: THREE.Mesh;
    mesh_228: THREE.Mesh;
    mesh_229: THREE.Mesh;
    mesh_230: THREE.Mesh;
    mesh_231: THREE.Mesh;
    mesh_232: THREE.Mesh;
    mesh_233: THREE.Mesh;
    mesh_234: THREE.Mesh;
    mesh_235: THREE.Mesh;
    mesh_236: THREE.Mesh;
    mesh_237: THREE.Mesh;
    mesh_238: THREE.Mesh;
    mesh_239: THREE.Mesh;
    mesh_240: THREE.Mesh;
    mesh_241: THREE.Mesh;
    mesh_242: THREE.Mesh;
    mesh_243: THREE.Mesh;
    mesh_244: THREE.Mesh;
    mesh_245: THREE.Mesh;
    mesh_246: THREE.Mesh;
    mesh_247: THREE.Mesh;
  };
  materials: {
    ["Material.1"]: THREE.MeshStandardMaterial;
  };
};

function IndianCEO({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | any>();
  // @ts-ignore
  const { nodes, geometry } = useGLTF(
    "/gltfModels/indiaCEO.gltf"
  ) as GLTFResult;

  useFrame(() => (group.current.rotation.y += 0.01));

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group position={[-15, -27, 18]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={nodes.mesh_0.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_1.geometry}
            material={nodes.mesh_1.material}
            position={[16, 0, 32]}
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
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_5.geometry}
            material={nodes.mesh_5.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_6.geometry}
            material={nodes.mesh_6.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_7.geometry}
            material={nodes.mesh_7.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_8.geometry}
            material={nodes.mesh_8.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_9.geometry}
            material={nodes.mesh_9.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_10.geometry}
            material={nodes.mesh_10.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_11.geometry}
            material={nodes.mesh_11.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_12.geometry}
            material={nodes.mesh_12.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_13.geometry}
            material={nodes.mesh_13.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_14.geometry}
            material={nodes.mesh_14.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_15.geometry}
            material={nodes.mesh_15.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_16.geometry}
            material={nodes.mesh_16.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_17.geometry}
            material={nodes.mesh_17.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_18.geometry}
            material={nodes.mesh_18.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_19.geometry}
            material={nodes.mesh_19.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_20.geometry}
            material={nodes.mesh_20.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_21.geometry}
            material={nodes.mesh_21.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_22.geometry}
            material={nodes.mesh_22.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_23.geometry}
            material={nodes.mesh_23.material}
            position={[16, 16, 32]}
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
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_27.geometry}
            material={nodes.mesh_27.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_28.geometry}
            material={nodes.mesh_28.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_29.geometry}
            material={nodes.mesh_29.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_30.geometry}
            material={nodes.mesh_30.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_31.geometry}
            material={nodes.mesh_31.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_32.geometry}
            material={nodes.mesh_32.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_33.geometry}
            material={nodes.mesh_33.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_34.geometry}
            material={nodes.mesh_34.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_35.geometry}
            material={nodes.mesh_35.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_36.geometry}
            material={nodes.mesh_36.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_37.geometry}
            material={nodes.mesh_37.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_38.geometry}
            material={nodes.mesh_38.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_39.geometry}
            material={nodes.mesh_39.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_40.geometry}
            material={nodes.mesh_40.material}
            position={[0, 32, 32]}
          />
          <mesh
            geometry={nodes.mesh_41.geometry}
            material={nodes.mesh_41.material}
            position={[16, 32, 32]}
          />
          <mesh
            geometry={nodes.mesh_42.geometry}
            material={nodes.mesh_42.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_43.geometry}
            material={nodes.mesh_43.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_44.geometry}
            material={nodes.mesh_44.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_45.geometry}
            material={nodes.mesh_45.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_46.geometry}
            material={nodes.mesh_46.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_47.geometry}
            material={nodes.mesh_47.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_48.geometry}
            material={nodes.mesh_48.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_49.geometry}
            material={nodes.mesh_49.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_50.geometry}
            material={nodes.mesh_50.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_51.geometry}
            material={nodes.mesh_51.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_52.geometry}
            material={nodes.mesh_52.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_53.geometry}
            material={nodes.mesh_53.material}
          />
          <mesh
            geometry={nodes.mesh_54.geometry}
            material={nodes.mesh_54.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_55.geometry}
            material={nodes.mesh_55.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_56.geometry}
            material={nodes.mesh_56.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_57.geometry}
            material={nodes.mesh_57.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_58.geometry}
            material={nodes.mesh_58.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_59.geometry}
            material={nodes.mesh_59.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_60.geometry}
            material={nodes.mesh_60.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_61.geometry}
            material={nodes.mesh_61.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_62.geometry}
            material={nodes.mesh_62.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_63.geometry}
            material={nodes.mesh_63.material}
            position={[16, 0, 16]}
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
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/gltfModels/indiaCEO.gltf");

export default IndianCEO;
