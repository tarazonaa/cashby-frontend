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
  const { nodes } = useGLTF("/gltfModels/india_common_ceo.gltf") as GLTFResult;

  useFrame((state, delta) => (group.current.rotation.y += 0.01));

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
          <mesh
            geometry={nodes.mesh_66.geometry}
            material={nodes.mesh_66.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_67.geometry}
            material={nodes.mesh_67.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_68.geometry}
            material={nodes.mesh_68.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_69.geometry}
            material={nodes.mesh_69.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_70.geometry}
            material={nodes.mesh_70.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_71.geometry}
            material={nodes.mesh_71.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_72.geometry}
            material={nodes.mesh_72.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_73.geometry}
            material={nodes.mesh_73.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_74.geometry}
            material={nodes.mesh_74.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_75.geometry}
            material={nodes.mesh_75.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_76.geometry}
            material={nodes.mesh_76.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_77.geometry}
            material={nodes.mesh_77.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_78.geometry}
            material={nodes.mesh_78.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_79.geometry}
            material={nodes.mesh_79.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_80.geometry}
            material={nodes.mesh_80.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_81.geometry}
            material={nodes.mesh_81.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_82.geometry}
            material={nodes.mesh_82.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_83.geometry}
            material={nodes.mesh_83.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_84.geometry}
            material={nodes.mesh_84.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_85.geometry}
            material={nodes.mesh_85.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_86.geometry}
            material={nodes.mesh_86.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_87.geometry}
            material={nodes.mesh_87.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_88.geometry}
            material={nodes.mesh_88.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_89.geometry}
            material={nodes.mesh_89.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_90.geometry}
            material={nodes.mesh_90.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_91.geometry}
            material={nodes.mesh_91.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_92.geometry}
            material={nodes.mesh_92.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_93.geometry}
            material={nodes.mesh_93.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_94.geometry}
            material={nodes.mesh_94.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_95.geometry}
            material={nodes.mesh_95.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_96.geometry}
            material={nodes.mesh_96.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_97.geometry}
            material={nodes.mesh_97.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_98.geometry}
            material={nodes.mesh_98.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_99.geometry}
            material={nodes.mesh_99.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_100.geometry}
            material={nodes.mesh_100.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_101.geometry}
            material={nodes.mesh_101.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_102.geometry}
            material={nodes.mesh_102.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_103.geometry}
            material={nodes.mesh_103.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_104.geometry}
            material={nodes.mesh_104.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_105.geometry}
            material={nodes.mesh_105.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_106.geometry}
            material={nodes.mesh_106.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_107.geometry}
            material={nodes.mesh_107.material}
          />
          <mesh
            geometry={nodes.mesh_108.geometry}
            material={nodes.mesh_108.material}
            position={[16, 0, 0]}
          />
          <mesh
            geometry={nodes.mesh_109.geometry}
            material={nodes.mesh_109.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_110.geometry}
            material={nodes.mesh_110.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_111.geometry}
            material={nodes.mesh_111.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_112.geometry}
            material={nodes.mesh_112.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_113.geometry}
            material={nodes.mesh_113.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_114.geometry}
            material={nodes.mesh_114.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_115.geometry}
            material={nodes.mesh_115.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_116.geometry}
            material={nodes.mesh_116.material}
          />
          <mesh
            geometry={nodes.mesh_117.geometry}
            material={nodes.mesh_117.material}
            position={[16, 0, 0]}
          />
          <mesh
            geometry={nodes.mesh_118.geometry}
            material={nodes.mesh_118.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_119.geometry}
            material={nodes.mesh_119.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_120.geometry}
            material={nodes.mesh_120.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_121.geometry}
            material={nodes.mesh_121.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_122.geometry}
            material={nodes.mesh_122.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_123.geometry}
            material={nodes.mesh_123.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_124.geometry}
            material={nodes.mesh_124.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_125.geometry}
            material={nodes.mesh_125.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_126.geometry}
            material={nodes.mesh_126.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_127.geometry}
            material={nodes.mesh_127.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_128.geometry}
            material={nodes.mesh_128.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_129.geometry}
            material={nodes.mesh_129.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_130.geometry}
            material={nodes.mesh_130.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_131.geometry}
            material={nodes.mesh_131.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_132.geometry}
            material={nodes.mesh_132.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_133.geometry}
            material={nodes.mesh_133.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_134.geometry}
            material={nodes.mesh_134.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_135.geometry}
            material={nodes.mesh_135.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_136.geometry}
            material={nodes.mesh_136.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_137.geometry}
            material={nodes.mesh_137.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_138.geometry}
            material={nodes.mesh_138.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_139.geometry}
            material={nodes.mesh_139.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_140.geometry}
            material={nodes.mesh_140.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_141.geometry}
            material={nodes.mesh_141.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_142.geometry}
            material={nodes.mesh_142.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_143.geometry}
            material={nodes.mesh_143.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_144.geometry}
            material={nodes.mesh_144.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_145.geometry}
            material={nodes.mesh_145.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_146.geometry}
            material={nodes.mesh_146.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_147.geometry}
            material={nodes.mesh_147.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_148.geometry}
            material={nodes.mesh_148.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_149.geometry}
            material={nodes.mesh_149.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_150.geometry}
            material={nodes.mesh_150.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_151.geometry}
            material={nodes.mesh_151.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_152.geometry}
            material={nodes.mesh_152.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_153.geometry}
            material={nodes.mesh_153.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_154.geometry}
            material={nodes.mesh_154.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_155.geometry}
            material={nodes.mesh_155.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_156.geometry}
            material={nodes.mesh_156.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_157.geometry}
            material={nodes.mesh_157.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_158.geometry}
            material={nodes.mesh_158.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_159.geometry}
            material={nodes.mesh_159.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_160.geometry}
            material={nodes.mesh_160.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_161.geometry}
            material={nodes.mesh_161.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_162.geometry}
            material={nodes.mesh_162.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_163.geometry}
            material={nodes.mesh_163.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_164.geometry}
            material={nodes.mesh_164.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_165.geometry}
            material={nodes.mesh_165.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_166.geometry}
            material={nodes.mesh_166.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_167.geometry}
            material={nodes.mesh_167.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_168.geometry}
            material={nodes.mesh_168.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_169.geometry}
            material={nodes.mesh_169.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_170.geometry}
            material={nodes.mesh_170.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_171.geometry}
            material={nodes.mesh_171.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_172.geometry}
            material={nodes.mesh_172.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_173.geometry}
            material={nodes.mesh_173.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_174.geometry}
            material={nodes.mesh_174.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_175.geometry}
            material={nodes.mesh_175.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_176.geometry}
            material={nodes.mesh_176.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_177.geometry}
            material={nodes.mesh_177.material}
          />
          <mesh
            geometry={nodes.mesh_178.geometry}
            material={nodes.mesh_178.material}
            position={[16, 0, 0]}
          />
          <mesh
            geometry={nodes.mesh_179.geometry}
            material={nodes.mesh_179.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_180.geometry}
            material={nodes.mesh_180.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_181.geometry}
            material={nodes.mesh_181.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_182.geometry}
            material={nodes.mesh_182.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_183.geometry}
            material={nodes.mesh_183.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_184.geometry}
            material={nodes.mesh_184.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_185.geometry}
            material={nodes.mesh_185.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_186.geometry}
            material={nodes.mesh_186.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_187.geometry}
            material={nodes.mesh_187.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_188.geometry}
            material={nodes.mesh_188.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_189.geometry}
            material={nodes.mesh_189.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_190.geometry}
            material={nodes.mesh_190.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_191.geometry}
            material={nodes.mesh_191.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_192.geometry}
            material={nodes.mesh_192.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_193.geometry}
            material={nodes.mesh_193.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_194.geometry}
            material={nodes.mesh_194.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_195.geometry}
            material={nodes.mesh_195.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_196.geometry}
            material={nodes.mesh_196.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_197.geometry}
            material={nodes.mesh_197.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_198.geometry}
            material={nodes.mesh_198.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_199.geometry}
            material={nodes.mesh_199.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_200.geometry}
            material={nodes.mesh_200.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_201.geometry}
            material={nodes.mesh_201.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_202.geometry}
            material={nodes.mesh_202.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_203.geometry}
            material={nodes.mesh_203.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_204.geometry}
            material={nodes.mesh_204.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_205.geometry}
            material={nodes.mesh_205.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_206.geometry}
            material={nodes.mesh_206.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_207.geometry}
            material={nodes.mesh_207.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_208.geometry}
            material={nodes.mesh_208.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_209.geometry}
            material={nodes.mesh_209.material}
            position={[0, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_210.geometry}
            material={nodes.mesh_210.material}
            position={[16, 0, 48]}
          />
          <mesh
            geometry={nodes.mesh_211.geometry}
            material={nodes.mesh_211.material}
            position={[0, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_212.geometry}
            material={nodes.mesh_212.material}
            position={[16, 16, 48]}
          />
          <mesh
            geometry={nodes.mesh_213.geometry}
            material={nodes.mesh_213.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_214.geometry}
            material={nodes.mesh_214.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_215.geometry}
            material={nodes.mesh_215.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_216.geometry}
            material={nodes.mesh_216.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_217.geometry}
            material={nodes.mesh_217.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_218.geometry}
            material={nodes.mesh_218.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_219.geometry}
            material={nodes.mesh_219.material}
            position={[0, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_220.geometry}
            material={nodes.mesh_220.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_221.geometry}
            material={nodes.mesh_221.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_222.geometry}
            material={nodes.mesh_222.material}
            position={[16, 0, 32]}
          />
          <mesh
            geometry={nodes.mesh_223.geometry}
            material={nodes.mesh_223.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_224.geometry}
            material={nodes.mesh_224.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_225.geometry}
            material={nodes.mesh_225.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_226.geometry}
            material={nodes.mesh_226.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_227.geometry}
            material={nodes.mesh_227.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_228.geometry}
            material={nodes.mesh_228.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_229.geometry}
            material={nodes.mesh_229.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_230.geometry}
            material={nodes.mesh_230.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_231.geometry}
            material={nodes.mesh_231.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_232.geometry}
            material={nodes.mesh_232.material}
            position={[0, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_233.geometry}
            material={nodes.mesh_233.material}
          />
          <mesh
            geometry={nodes.mesh_234.geometry}
            material={nodes.mesh_234.material}
            position={[16, 0, 0]}
          />
          <mesh
            geometry={nodes.mesh_235.geometry}
            material={nodes.mesh_235.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_236.geometry}
            material={nodes.mesh_236.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_237.geometry}
            material={nodes.mesh_237.material}
            position={[16, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_238.geometry}
            material={nodes.mesh_238.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_239.geometry}
            material={nodes.mesh_239.material}
            position={[0, 16, 32]}
          />
          <mesh
            geometry={nodes.mesh_240.geometry}
            material={nodes.mesh_240.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_241.geometry}
            material={nodes.mesh_241.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_242.geometry}
            material={nodes.mesh_242.material}
            position={[16, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_243.geometry}
            material={nodes.mesh_243.material}
            position={[0, 16, 16]}
          />
          <mesh
            geometry={nodes.mesh_244.geometry}
            material={nodes.mesh_244.material}
            position={[0, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_245.geometry}
            material={nodes.mesh_245.material}
            position={[16, 0, 16]}
          />
          <mesh
            geometry={nodes.mesh_246.geometry}
            material={nodes.mesh_246.material}
            position={[16, 16, 0]}
          />
          <mesh
            geometry={nodes.mesh_247.geometry}
            material={nodes.mesh_247.material}
            position={[0, 16, 0]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/gltfModels/india_common_ceo.gltf");

export default IndianCEO;
