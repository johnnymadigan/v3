import { useGLTF } from "@react-three/drei";

const MacbookKeyboard = () => {
  const { nodes, materials } = useGLTF("/models/macbook.glb") as any;

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box106_07_-_Default_0"].geometry}
        material={materials["07_-_Default"]}
        position={[-2.016, 32.21, 44.416]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone002__0.geometry}
        material={materials.RootNode}
        position={[-100.537, 26.548, -64.961]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone009__0.geometry}
        material={materials.RootNode}
        position={[-44.543, 26.227, -64.961]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box027__0.geometry}
        material={materials.RootNode}
        position={[-32.647, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone008__0.geometry}
        material={materials.RootNode}
        position={[40.718, 26.117, -64.961]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box023__0.geometry}
        material={materials.RootNode}
        position={[-58.765, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box022__0.geometry}
        material={materials.RootNode}
        position={[-46.016, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box013__0.geometry}
        material={materials.RootNode}
        position={[103.453, 29.386, -27.582]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[5.868, 0.673, 0.977]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box020__0.geometry}
        material={materials.RootNode}
        position={[-84.656, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box021__0.geometry}
        material={materials.RootNode}
        position={[-71.906, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box101_09_-_Default_0"].geometry}
        material={materials["09_-_Default"]}
        position={[1.096, 27.63, -24.234]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text068__0.geometry}
        material={materials.RootNode}
        position={[-84.791, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004__0.geometry}
        material={materials.RootNode}
        position={[-89.752, 24.373, -57.079]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.155]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003__0.geometry}
        material={materials.RootNode}
        position={[92.197, 24.373, -57.079]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.155]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box026__0.geometry}
        material={materials.RootNode}
        position={[-19.898, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box024__0.geometry}
        material={materials.RootNode}
        position={[5.993, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box025__0.geometry}
        material={materials.RootNode}
        position={[-6.757, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text016__0.geometry}
        material={materials.RootNode}
        position={[85.976, 34.836, -46.553]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text021__0.geometry}
        material={materials.RootNode}
        position={[-25.642, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text038__0.geometry}
        material={materials.RootNode}
        position={[-41.48, 34.836, -8.065]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text019__0.geometry}
        material={materials.RootNode}
        position={[-53.362, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text036__0.geometry}
        material={materials.RootNode}
        position={[-54.581, 34.836, -8.057]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text041__0.geometry}
        material={materials.RootNode}
        position={[30.772, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text051__0.geometry}
        material={materials.RootNode}
        position={[43.243, 34.836, -9.333]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text055__0.geometry}
        material={materials.RootNode}
        position={[-3.6, 34.836, -8.381]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text048__0.geometry}
        material={materials.RootNode}
        position={[42.104, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text044__0.geometry}
        material={materials.RootNode}
        position={[-9.693, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box102__0.geometry}
        material={materials.RootNode}
        position={[32.705, 35.263, 5.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.811, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text072__0.geometry}
        material={materials.RootNode}
        position={[-7.092, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text017__0.geometry}
        material={materials.RootNode}
        position={[-82.641, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text042__0.geometry}
        material={materials.RootNode}
        position={[17.567, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text059__0.geometry}
        material={materials.RootNode}
        position={[-71.205, 34.836, 8.906]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text031__0.geometry}
        material={materials.RootNode}
        position={[83.775, 34.836, -21.975]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text058__0.geometry}
        material={materials.RootNode}
        position={[-84.738, 34.836, 8.906]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text024__0.geometry}
        material={materials.RootNode}
        position={[12.512, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text033__0.geometry}
        material={materials.RootNode}
        position={[-84.738, 34.836, -4.845]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text018__0.geometry}
        material={materials.RootNode}
        position={[-66.008, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text032__0.geometry}
        material={materials.RootNode}
        position={[87.541, 34.836, -5.39]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text029__0.geometry}
        material={materials.RootNode}
        position={[73.96, 34.836, -34.555]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text043__0.geometry}
        material={materials.RootNode}
        position={[3.902, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text023__0.geometry}
        material={materials.RootNode}
        position={[-0.676, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text028__0.geometry}
        material={materials.RootNode}
        position={[61.156, 34.836, -34.555]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text046__0.geometry}
        material={materials.RootNode}
        position={[66.581, 34.836, -20.791]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text050__0.geometry}
        material={materials.RootNode}
        position={[56.926, 34.836, -9.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text057__0.geometry}
        material={materials.RootNode}
        position={[-28.172, 34.836, -8.381]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text020__0.geometry}
        material={materials.RootNode}
        position={[-39.922, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text037__0.geometry}
        material={materials.RootNode}
        position={[-49.452, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text060__0.geometry}
        material={materials.RootNode}
        position={[-59.059, 34.836, 4.333]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text063__0.geometry}
        material={materials.RootNode}
        position={[45.626, 34.836, 4.333]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text064__0.geometry}
        material={materials.RootNode}
        position={[85.273, 34.836, 8.38]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text025__0.geometry}
        material={materials.RootNode}
        position={[24.296, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text065__0.geometry}
        material={materials.RootNode}
        position={[58.47, 34.836, 8.38]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text066__0.geometry}
        material={materials.RootNode}
        position={[71.202, 34.836, 0.662]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text026__0.geometry}
        material={materials.RootNode}
        position={[37.04, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text052__0.geometry}
        material={materials.RootNode}
        position={[30.449, 34.836, -9.238]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text053__0.geometry}
        material={materials.RootNode}
        position={[19.415, 34.836, -8.381]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text067__0.geometry}
        material={materials.RootNode}
        position={[73.011, 34.836, 7.863]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text054__0.geometry}
        material={materials.RootNode}
        position={[8.04, 34.836, -8.381]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text030__0.geometry}
        material={materials.RootNode}
        position={[86.075, 34.836, -34.555]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text069__0.geometry}
        material={materials.RootNode}
        position={[-46.594, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text071__0.geometry}
        material={materials.RootNode}
        position={[5.746, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text034__0.geometry}
        material={materials.RootNode}
        position={[-81.825, 34.836, -20.87]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text061__0.geometry}
        material={materials.RootNode}
        position={[-46.089, 34.836, 4.333]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text073__0.geometry}
        material={materials.RootNode}
        position={[-19.614, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text022__0.geometry}
        material={materials.RootNode}
        position={[-12.961, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text074__0.geometry}
        material={materials.RootNode}
        position={[-32.451, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text078__0.geometry}
        material={materials.RootNode}
        position={[70.536, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text079__0.geometry}
        material={materials.RootNode}
        position={[57.153, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text027__0.geometry}
        material={materials.RootNode}
        position={[49.146, 34.836, -34.005]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text040__0.geometry}
        material={materials.RootNode}
        position={[-36.269, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text047__0.geometry}
        material={materials.RootNode}
        position={[54.351, 34.836, -21.465]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text056__0.geometry}
        material={materials.RootNode}
        position={[-15.3, 34.836, -8.381]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text070__0.geometry}
        material={materials.RootNode}
        position={[-59.431, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text080__0.geometry}
        material={materials.RootNode}
        position={[43.556, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text081__0.geometry}
        material={materials.RootNode}
        position={[31.035, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text082__0.geometry}
        material={materials.RootNode}
        position={[18.197, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text035__0.geometry}
        material={materials.RootNode}
        position={[-62.762, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text039__0.geometry}
        material={materials.RootNode}
        position={[-22.312, 34.836, -20.253]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text062__0.geometry}
        material={materials.RootNode}
        position={[32.699, 34.836, 4.333]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text015__0.geometry}
        material={materials.RootNode}
        position={[-20.849, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box104__0.geometry}
        material={materials.RootNode}
        position={[86.068, 35.23, -58.241]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.621, 0.336, 0.621]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box105__0.geometry}
        material={materials.RootNode}
        position={[86.047, 35.23, -59.517]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.621}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box017_08_-_Default_0"].geometry}
        material={materials["08_-_Default"]}
        position={[-2.556, 32.026, 74.29]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box031__0.geometry}
        material={materials.RootNode}
        position={[57.461, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box038__0.geometry}
        material={materials.RootNode}
        position={[5.182, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box035__0.geometry}
        material={materials.RootNode}
        position={[-72.995, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box040__0.geometry}
        material={materials.RootNode}
        position={[-20.877, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box054__0.geometry}
        material={materials.RootNode}
        position={[-58.808, 35.263, 5.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box055__0.geometry}
        material={materials.RootNode}
        position={[-6.869, 35.263, 5.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4.147, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box030__0.geometry}
        material={materials.RootNode}
        position={[44.165, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box034__0.geometry}
        material={materials.RootNode}
        position={[-85.504, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box028__0.geometry}
        material={materials.RootNode}
        position={[18.275, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box049__0.geometry}
        material={materials.RootNode}
        position={[-80.915, 35.263, -21.427]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.074, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box053__0.geometry}
        material={materials.RootNode}
        position={[-46.082, 35.263, 5.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.811, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box032__0.geometry}
        material={materials.RootNode}
        position={[71.412, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box043__0.geometry}
        material={materials.RootNode}
        position={[44.058, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box036__0.geometry}
        material={materials.RootNode}
        position={[-59.785, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box045__0.geometry}
        material={materials.RootNode}
        position={[18.339, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box039__0.geometry}
        material={materials.RootNode}
        position={[-7.667, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box056__0.geometry}
        material={materials.RootNode}
        position={[45.366, 35.263, 5.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box059__0.geometry}
        material={materials.RootNode}
        position={[71.936, 35.263, 7.585]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.685, 0.85, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box066__0.geometry}
        material={materials.RootNode}
        position={[24.393, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box048__0.geometry}
        material={materials.RootNode}
        position={[-82.428, 35.263, -34.822]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.861, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box061__0.geometry}
        material={materials.RootNode}
        position={[71.936, 35.263, 0.721]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.685, 0.85, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box029__0.geometry}
        material={materials.RootNode}
        position={[31.416, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box067__0.geometry}
        material={materials.RootNode}
        position={[11.603, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box060__0.geometry}
        material={materials.RootNode}
        position={[85.329, 35.263, 7.585]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.685, 0.85, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box063__0.geometry}
        material={materials.RootNode}
        position={[-53.318, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box042__0.geometry}
        material={materials.RootNode}
        position={[56.907, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box051__0.geometry}
        material={materials.RootNode}
        position={[-82.978, 35.263, 5.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box058__0.geometry}
        material={materials.RootNode}
        position={[58.655, 35.263, 7.585]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.685, 0.85, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box068__0.geometry}
        material={materials.RootNode}
        position={[-0.726, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box044__0.geometry}
        material={materials.RootNode}
        position={[30.848, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box062__0.geometry}
        material={materials.RootNode}
        position={[-65.931, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box033__0.geometry}
        material={materials.RootNode}
        position={[86.195, 35.263, -59.051]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.606, 1, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box046__0.geometry}
        material={materials.RootNode}
        position={[69.671, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box064__0.geometry}
        material={materials.RootNode}
        position={[-39.572, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box047__0.geometry}
        material={materials.RootNode}
        position={[83.844, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.94, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box065__0.geometry}
        material={materials.RootNode}
        position={[-25.601, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box041__0.geometry}
        material={materials.RootNode}
        position={[-33.386, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box069__0.geometry}
        material={materials.RootNode}
        position={[-12.818, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box050__0.geometry}
        material={materials.RootNode}
        position={[-75.874, 35.263, -8.471]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.685, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box037__0.geometry}
        material={materials.RootNode}
        position={[-46.936, 35.263, -47.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box052__0.geometry}
        material={materials.RootNode}
        position={[-71.227, 35.263, 5.749]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box073__0.geometry}
        material={materials.RootNode}
        position={[36.86, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box092__0.geometry}
        material={materials.RootNode}
        position={[-28.013, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text007__0.geometry}
        material={materials.RootNode}
        position={[-33.297, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text008__0.geometry}
        material={materials.RootNode}
        position={[-7.338, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text012__0.geometry}
        material={materials.RootNode}
        position={[43.79, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text013__0.geometry}
        material={materials.RootNode}
        position={[57.2, 34.836, -48.035]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text014__0.geometry}
        material={materials.RootNode}
        position={[69.974, 34.836, -48.035]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box095__0.geometry}
        material={materials.RootNode}
        position={[8.061, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box071__0.geometry}
        material={materials.RootNode}
        position={[61.104, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005__0.geometry}
        material={materials.RootNode}
        position={[-59.715, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box087__0.geometry}
        material={materials.RootNode}
        position={[66.244, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box081__0.geometry}
        material={materials.RootNode}
        position={[-9.016, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box070__0.geometry}
        material={materials.RootNode}
        position={[73.84, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box083__0.geometry}
        material={materials.RootNode}
        position={[17.559, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box093__0.geometry}
        material={materials.RootNode}
        position={[-14.974, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box072__0.geometry}
        material={materials.RootNode}
        position={[49.189, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box078__0.geometry}
        material={materials.RootNode}
        position={[-49.432, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box079__0.geometry}
        material={materials.RootNode}
        position={[-36.242, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box082__0.geometry}
        material={materials.RootNode}
        position={[3.632, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box094__0.geometry}
        material={materials.RootNode}
        position={[-3.873, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box096__0.geometry}
        material={materials.RootNode}
        position={[19.2, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box098__0.geometry}
        material={materials.RootNode}
        position={[43.762, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box086__0.geometry}
        material={materials.RootNode}
        position={[54.329, 35.263, -21.178]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box099__0.geometry}
        material={materials.RootNode}
        position={[56.692, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box075__0.geometry}
        material={materials.RootNode}
        position={[86.156, 35.263, -34.614]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box076__0.geometry}
        material={materials.RootNode}
        position={[83.434, 35.263, -21.427]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.074, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box077__0.geometry}
        material={materials.RootNode}
        position={[-62.398, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box089__0.geometry}
        material={materials.RootNode}
        position={[78.18, 35.263, -9.029]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.685, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box080__0.geometry}
        material={materials.RootNode}
        position={[-22.876, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box091__0.geometry}
        material={materials.RootNode}
        position={[-40.808, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box084__0.geometry}
        material={materials.RootNode}
        position={[29.532, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002__0.geometry}
        material={materials.RootNode}
        position={[-71.953, 34.836, -58.142]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003__0.geometry}
        material={materials.RootNode}
        position={[-85.689, 34.836, -47.191]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text009__0.geometry}
        material={materials.RootNode}
        position={[5.473, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text010__0.geometry}
        material={materials.RootNode}
        position={[18.537, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text011__0.geometry}
        material={materials.RootNode}
        position={[31.402, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box090__0.geometry}
        material={materials.RootNode}
        position={[-53.936, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box097__0.geometry}
        material={materials.RootNode}
        position={[30.778, 35.263, -9.028]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004__0.geometry}
        material={materials.RootNode}
        position={[-72.773, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box085__0.geometry}
        material={materials.RootNode}
        position={[42, 35.263, -21.235]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.57, 1.783, 4.796]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006__0.geometry}
        material={materials.RootNode}
        position={[-46.566, 34.836, -47.55]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.067, 0.056, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone006__0.geometry}
        material={materials.RootNode}
        position={[-100.537, 26.302, 3.943]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone011__0.geometry}
        material={materials.RootNode}
        position={[40.718, 26.723, 67.252]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone007__0.geometry}
        material={materials.RootNode}
        position={[101.982, 26.302, 3.943]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone005__0.geometry}
        material={materials.RootNode}
        position={[-100.537, 26.548, 3.943]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone010__0.geometry}
        material={materials.RootNode}
        position={[-44.543, 26.703, 67.252]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone001__0.geometry}
        material={materials.RootNode}
        position={[-100.537, 26.548, 65.307]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone003__0.geometry}
        material={materials.RootNode}
        position={[101.999, 26.548, -64.961]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone004__0.geometry}
        material={materials.RootNode}
        position={[101.999, 26.548, 65.307]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002__0.geometry}
        material={materials.RootNode}
        position={[92.197, 24.373, 56.679]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.155]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001__0.geometry}
        material={materials.RootNode}
        position={[-89.752, 24.373, 56.679]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 0.155]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box003_08_-_Default_0"].geometry}
        material={materials["08_-_Default"]}
        position={[-54.65, 24.303, -1.369]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.907, 1.882, 0.164]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box004__0.geometry}
        material={materials.RootNode}
        position={[1.498, 30.176, -69.018]}
        rotation={[Math.PI, 0, -Math.PI]}
        scale={[1, 1.602, 3.125]}
      />
    </>
  );
};

useGLTF.preload("/models/macbook.glb");

export default MacbookKeyboard;
