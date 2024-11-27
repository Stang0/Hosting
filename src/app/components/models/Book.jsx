"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
    const { nodes, materials } = useGLTF('/models/Book.glb')

    const modelRef = useRef()

    useFrame((state,delta,xrFrame)=>{
        modelRef.current.position.y = 1 + Math.sin(state.clock.elapsedTime)*0.5

    })
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0,1,0]}
    scale={[10,10,10]}
    rotation={[0,0.1,0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_texturing_v2_book_paladins_book_0.geometry}
        material={materials.paladins_book}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book_texturing_v2_pages_paladin_pages_0.geometry}
        material={materials.paladin_pages}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/Book.glb')
