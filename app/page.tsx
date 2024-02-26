"use client"

import { useState } from "react";
import { CubeActions, Face, RubiksCube } from "./types";
import useRubikCube from "./hooks/useRubiksCube";

const Cube_3x3: RubiksCube = {
  "F": [['bg-gray-500', 'bg-gray-500', 'bg-gray-500'],
        ['bg-gray-500', 'bg-gray-500', 'bg-gray-500'],
        ['bg-gray-500', 'bg-gray-500', 'bg-gray-500']],
  "R": [['bg-orange-500', 'bg-orange-500', 'bg-orange-500'],
        ['bg-orange-500', 'bg-orange-500', 'bg-orange-500'],
        ['bg-orange-500', 'bg-orange-500', 'bg-orange-500']],
  "L": [['bg-red-500', 'bg-red-500', 'bg-red-500'],
        ['bg-red-500', 'bg-red-500', 'bg-red-500'],
        ['bg-red-500', 'bg-red-500', 'bg-red-500']],
  "U": [['bg-green-500', 'bg-green-500', 'bg-green-500'],
        ['bg-green-500', 'bg-green-500', 'bg-green-500'],
        ['bg-green-500', 'bg-green-500', 'bg-green-500']],
  "D": [['bg-blue-500', 'bg-blue-500', 'bg-blue-500'],
        ['bg-blue-500', 'bg-blue-500', 'bg-blue-500'],
        ['bg-blue-500', 'bg-blue-500', 'bg-blue-500']],
  "B": [['bg-yellow-500', 'bg-yellow-500', 'bg-yellow-500'],
        ['bg-yellow-500', 'bg-yellow-500', 'bg-yellow-500'],
        ['bg-yellow-500', 'bg-yellow-500', 'bg-yellow-500']],
} 

const gridPositions: {[key in Face]: string}  = {
  "U": "col-start-2 row-start_1 col-end-3 row-end-2",
  "L": "col-start-1 row-start_2 col-end-2 row-end-3",
  "F": "col-start-2 row-start_2 col-end-3 row-end-3",
  "R": "col-start-3 row-start_2 col-end-4 row-end-3",
  "B": "col-start-4 row-start_2 col-end-5 row-end-3",
  "D": "col-start-2 row-start_3 col-end-3 row-end-4",
}

// const Effect3D = {
//   "U":" -rotate-[43deg] skew-x-[22deg] skew-y-[14deg] -translate-x-[5.2rem] translate-y-9",
//   "L":" skew-y-[25deg]",
//   "F":" -skew-y-[30deg] -translate-y-2",
//   "R":" -skew-y-[25deg]",
//   "B":" skew-y-[30deg] translate-y-2",
//   "D":" -rotate-[132deg] -skew-x-[16deg] -skew-y-[20deg] translate-x-[5.6rem] -translate-y-9",
// }
  
export default function Home() {

  const [isIn3D, togleIsIn3D] = useState<boolean>(false)

  const {cube, history, Reset, ClockwiseMoves, CounterClockwiseMoves, SliceTurnsMoves, DoubleLayerMoves, InverseDoubleLayerMoves } = useRubikCube(Cube_3x3)

  return (
    <main className="flex min-h-screen items-center p-10 ">
      <div className={`grid ${isIn3D ? "grid-cols-5 w-[52,5rem]" : "grid-cols-4 w-[42rem]"}  grid-rows-3 `} >
        {
          Object.entries(cube).map(([face, rows], i) => 
          <div key={`${face}-${i}`} className={`flex border border-white rounded-lg flex-col ${gridPositions[face as Face]}`}>
              {
                rows.map((row, j) => 
                  <div className="flex flex-row" key={`row-${face}-${i}-${j}`}>
                    {
                      row.map((cell, k) => 
                        <div key={`cell-${face}-${i}-${j}-${k}`}
                          className={`${cell} border-2 border-black rounded-lg h-14 w-14 min-w-14 flex justify-center items-center text-black font-extrabold `}
                        >
                          {j == 1 && k == 1 && face}

                        </div>
                      )
                    }
                  </div>
                )
              }
            </div>
          )
        }
      </div>
      <div className="flex flex-col items-center p-5 bg-white text-black rounded-xl fixed top-2 right-2 gap-1">
        <ActionGroup title={"Clockwise moves"} actions={ClockwiseMoves}/>
        <ActionGroup title={"Counter clockwise moves"} actions={CounterClockwiseMoves}/>
        <ActionGroup title={"Slice turns moves"} actions={SliceTurnsMoves}/>
        {/* <ActionGroup title={"Double layer moves"} actions={DoubleLayerMoves}/>
        <ActionGroup title={"Inverse double layer moves"} actions={InverseDoubleLayerMoves}/> */}
        
        {!!history.length && 
          <>
            <div className="w-80 mt-5 p-4 bg-orange-300 rounded-lg">
              {
                history.map((e,i) => 
                  <span className="text-red font-bold text-lg" key={i}>{e}{i != history.length - 1 ? ", " : "..." }</span>
                )
              }
              <p>Number of Moves: {history.length}</p>
            </div>
            <button 
              onClick={Reset}
              className="p-2 px-5 rounded-lg bg-red-600 hover:bg-red-500 mt-3 font-bold"
            >
              Reset
            </button>
          </>
        }
      </div>
    </main>
  );
}

type ActionGroupProps = {
  title: string,
  actions: { [key in CubeActions]?: () => void }
}

const ActionGroup = ({title, actions}: ActionGroupProps) => {
  return (
    <>
    <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex gap-2">
        {
          Object.entries(actions).map(([key, move]) =>
            <button 
              className="h-12 w-12 bg-green-400 hover:bg-green-600 rounded-md border-2 border-black font-semibold"
              key={key}
              onClick={() => move()}
            >
              {key}
            </button> 
          )
        }
      </div>
    </>
  )
} 
