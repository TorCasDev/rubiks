"use client"

import { CubeActions, Face, RubiksCube } from "./types";
import useRubikCube from "./useRubiksCube";

const Cube_3x3: RubiksCube = {
  "F": [['gray', 'gray', 'gray'],
        ['gray', 'gray', 'gray'],
        ['gray', 'gray', 'gray']],
  "R": [['orange', 'orange', 'orange'],
        ['orange', 'orange', 'orange'],
        ['orange', 'orange', 'orange']],
  "L": [['red', 'red', 'red'],
        ['red', 'red', 'red'],
        ['red', 'red', 'red']],
  "U": [['green', 'green', 'green'],
        ['green', 'green', 'green'],
        ['green', 'green', 'green']],
  "D": [['blue', 'blue', 'blue'],
        ['blue', 'blue', 'blue'],
        ['blue', 'blue', 'blue']],
  "B": [['yellow', 'yellow', 'yellow'],
        ['yellow', 'yellow', 'yellow'],
        ['yellow', 'yellow', 'yellow']],
} 

const gridPositions: {[key in Face]: string}  = {
  "U": "col-start-2 row-start_1 col-end-3 row-end-2 -rotate-[45deg] skew-x-[20deg] skew-y-[22deg] -translate-x-20 translate-y-10",
  "L": "col-start-1 row-start_2 col-end-2 row-end-3 skew-y-[25deg]",
  "F": "col-start-2 row-start_2 col-end-3 row-end-3 -skew-y-[25deg]",
  "R": "col-start-4 row-start_2 col-end-5 row-end-3 -skew-y-[25deg]",
  "B": "col-start-5 row-start_2 col-end-6 row-end-3 skew-y-[25deg]",
  "D": "col-start-4 row-start_3 col-end-5 row-end-4 -rotate-[135deg]",
}

export default function Home() {

  const {cube, ClockwiseMoves, CounterClockwiseMoves, SliceTurnsMoves, DoubleLayerMoves, InverseDoubleLayerMoves } = useRubikCube(Cube_3x3)

  return (
    <main className="flex min-h-screen items-center p-10 ">
      <div className="grid grid-cols-5 grid-rows-3 w-[52,5rem]" >
        {
          Object.entries(cube).map(([face, rows], i) => 
          <div key={`${face}-${i}`} className={`flex border-2 border-white rounded-lg flex-col ${gridPositions[face as Face]}`}>
              {
                rows.map((row, j) => 
                  <div className="flex flex-row" key={`row-${face}-${i}-${j}`}>
                    {
                      row.map((cell, k) => 
                        <div key={`cell-${face}-${i}-${j}-${k}`}
                          className={`bg-${cell}-500 border-2 border-black rounded-lg h-14 w-14 min-w-14 flex justify-center items-center text-black font-extrabold `}
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
        <ActionGroup title={"Double layer moves"} actions={DoubleLayerMoves}/>
        <ActionGroup title={"Inverse double layer moves"} actions={InverseDoubleLayerMoves}/>
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
