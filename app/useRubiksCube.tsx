import { useState } from "react"
import { ClockwiseFaceRotation, CounterClockwiseFaceRotation, DoubleLayerTurns, InverseDoubleLayerTurns, RubiksCube, SlycesTurns } from "./types"

export default function useRubikCube (initialState: RubiksCube) {

    const [cube, setCube] = useState(initialState)

    const ClockwiseMoves: {[key in ClockwiseFaceRotation]: () => void} = {
        "U": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [prev.U[2][0], prev.U[1][0], prev.U[0][0]],
                [prev.U[2][1], prev.U[1][1], prev.U[0][1]],
                [prev.U[2][2], prev.U[1][2], prev.U[0][2]]
              ],
              B: [
                [prev.L[0][0], prev.L[0][1], prev.L[0][2]],
                [...prev.B[1]],
                [...prev.B[2]]
              ],
              R: [
                [prev.B[0][0], prev.B[0][1], prev.B[0][2]],
                [...prev.R[1]],
                [...prev.R[2]]
              ],
              F: [
                [prev.R[0][0], prev.R[0][1], prev.R[0][2]],
                [...prev.F[1]],
                [...prev.F[2]]
              ],
              L: [
                [prev.F[0][0], prev.F[0][1], prev.F[0][2]],
                [...prev.L[1]],
                [...prev.L[2]]
              ]
            }
          ))
        },
        "L": () => {
          setCube(prev => (
            {
              ...prev,
              L: [
                [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
                [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
                [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
              ],
              U: [
                [prev.B[0][2], prev.U[0][1], prev.U[0][2]],
                [prev.B[1][2], prev.U[1][1], prev.U[1][2]],
                [prev.B[2][2], prev.U[2][1], prev.U[2][2]]
              ],
              F: [
                [prev.U[0][0], prev.F[0][1], prev.F[0][2]],
                [prev.U[1][0], prev.F[1][1], prev.F[1][2]],
                [prev.U[2][0], prev.F[2][1], prev.F[2][2]]
              ],
              D: [
                [prev.F[0][0], prev.D[0][1], prev.D[0][2]],
                [prev.F[1][0], prev.D[1][1], prev.D[1][2]],
                [prev.F[2][0], prev.D[2][1], prev.D[2][2]]
              ],
              B: [
                [prev.B[0][0], prev.B[0][1], prev.D[0][0]],
                [prev.B[1][0], prev.B[1][1], prev.D[1][0]],
                [prev.B[2][0], prev.B[2][1], prev.D[2][0]]
              ]
              ,
            }
          ))
        },
        "F": () => {
          setCube(prev => (
            {
              ...prev,
              F: [
                [prev.F[2][0], prev.F[1][0], prev.F[0][0]],
                [prev.F[2][1], prev.F[1][1], prev.F[0][1]],
                [prev.F[2][2], prev.F[1][2], prev.F[0][2]]
              ],
              U: [
                [prev.U[0][0], prev.U[0][1], prev.U[0][2]],
                [prev.U[1][0], prev.U[1][1], prev.U[1][2]],
                [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
              ],
              R: [
                [prev.U[2][0], prev.R[0][1], prev.R[0][2]],
                [prev.U[2][1], prev.R[1][1], prev.R[1][2]],
                [prev.U[2][2], prev.R[2][1], prev.R[2][2]]
              ],
              D: [
                [prev.R[0][0], prev.R[1][0], prev.R[2][0]],
                [prev.D[1][0], prev.D[1][1], prev.D[1][2]],
                [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
              ],
              L: [
                [prev.L[0][0], prev.L[0][1], prev.D[0][0]],
                [prev.L[1][0], prev.L[1][1], prev.D[0][1]],
                [prev.L[2][0], prev.L[2][1], prev.D[0][2]]
              ]
              ,
            }
          ))
        },
        "R": () => {
          setCube(prev => (
            {
              ...prev,
              R: [
                [prev.R[2][0], prev.R[1][0], prev.R[0][0]],
                [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
                [prev.R[2][2], prev.R[1][2], prev.R[0][2]]
              ],
              U: [
                [prev.U[0][0], prev.U[0][1], prev.F[0][2]],
                [prev.U[1][0], prev.U[1][1], prev.F[1][2]],
                [prev.U[2][0], prev.U[2][1], prev.F[2][2]]
              ],
              B: [
                [prev.U[0][2], prev.B[0][1], prev.B[0][2]],
                [prev.U[1][2], prev.B[1][1], prev.B[1][2]],
                [prev.U[2][2], prev.B[2][1], prev.B[2][2]]
              ],
              D: [
                [prev.D[0][0], prev.D[0][1], prev.B[0][0]],
                [prev.D[1][0], prev.D[1][1], prev.B[1][0]],
                [prev.D[2][0], prev.D[2][1], prev.B[2][0]]
              ],
              F: [
                [prev.F[0][0], prev.F[0][1], prev.D[0][2]],
                [prev.F[1][0], prev.F[1][1], prev.D[1][2]],
                [prev.F[2][0], prev.F[2][1], prev.D[2][2]]
              ]
              ,
            }
          ))
        },
        "B": () => {
          setCube(prev => (
            {
              ...prev,
              B: [
                [prev.B[2][0], prev.B[1][0], prev.B[0][0]],
                [prev.B[2][1], prev.B[1][1], prev.B[0][1]],
                [prev.B[2][2], prev.B[1][2], prev.B[0][2]]
              ],
              D: [
                [prev.D[0][0], prev.D[0][1], prev.D[0][2]],
                [prev.D[1][0], prev.D[1][1], prev.D[1][2]],
                [prev.L[0][0], prev.L[1][0], prev.L[2][0]]
              ],
              L: [
                [prev.U[0][0], prev.L[0][1], prev.L[0][2]],
                [prev.U[0][1], prev.L[1][1], prev.L[1][2]],
                [prev.U[0][2], prev.L[2][1], prev.L[2][2]]
              ],
              U: [
                [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
                [prev.U[1][0], prev.U[1][1], prev.U[1][2]],
                [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
              ],
              R: [
                [prev.R[0][0], prev.R[0][1], prev.D[2][0]],
                [prev.R[1][0], prev.R[1][1], prev.D[2][1]],
                [prev.R[2][0], prev.R[2][1], prev.D[2][2]]
              ]
              ,
            }
          ))
        },
        "D": () => {
          setCube(prev => (
            {
              ...prev,
              D: [
                [prev.D[2][0], prev.D[1][0], prev.D[0][0]],
                [prev.D[2][1], prev.D[1][1], prev.D[0][1]],
                [prev.D[2][2], prev.D[1][2], prev.D[0][2]]
              ],
              F: [
                [...prev.F[0]],
                [...prev.F[1]],
                [prev.L[2][0], prev.L[2][1], prev.L[2][2]]
              ],
              R: [
                [...prev.R[0]],
                [...prev.R[1]],
                [prev.F[2][0], prev.F[2][1], prev.F[2][2]]
              ],
              B: [
                [...prev.B[0]],
                [...prev.B[1]],
                [prev.R[2][0], prev.R[2][1], prev.R[2][2]],
              ],
              L: [
                [...prev.L[0]],
                [...prev.L[1]],
                [prev.B[2][0], prev.B[2][1], prev.B[2][2]],
              ]
            }
          ))
        },
      }
      
      const CounterClockwiseMoves: {[key in CounterClockwiseFaceRotation]: () => void} = {
        "U'": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [prev.U[0][2], prev.U[1][2], prev.U[2][2]],
                [prev.U[0][1], prev.U[1][1], prev.U[2][1]],
                [prev.U[0][0], prev.U[1][0], prev.U[2][0]]
              ],
              B: [
                [prev.R[0][0], prev.R[0][1], prev.R[0][2]],
                [...prev.B[1]],
                [...prev.B[2]]
              ],
              R: [
                [prev.F[0][0], prev.F[0][1], prev.F[0][2]],
                [...prev.R[1]],
                [...prev.R[2]]
              ],
              F: [
                [prev.L[0][0], prev.L[0][1], prev.L[0][2]],
                [...prev.F[1]],
                [...prev.F[2]]
              ],
              L: [
                [prev.B[0][0], prev.B[0][1], prev.B[0][2]],
                [...prev.L[1]],
                [...prev.L[2]]
              ]
            }
          ))
        },
        "L'": () => {
          setCube(prev => (
            {
              ...prev,
              L: [
                [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
                [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
                [prev.L[0][0], prev.L[1][0], prev.L[2][0]]
              ],
              U: [
                [prev.F[0][0], prev.U[0][1], prev.U[0][2]],
                [prev.F[1][0], prev.U[1][1], prev.U[1][2]],
                [prev.F[2][0], prev.U[2][1], prev.U[2][2]]
              ],
              F: [
                [prev.D[0][0], prev.F[0][1], prev.F[0][2]],
                [prev.D[1][0], prev.F[1][1], prev.F[1][2]],
                [prev.D[2][0], prev.F[2][1], prev.F[2][2]]
              ],
              D: [
                [prev.B[0][2], prev.D[0][1], prev.D[0][2]],
                [prev.B[1][2], prev.D[1][1], prev.D[1][2]],
                [prev.B[2][2], prev.D[2][1], prev.D[2][2]]
              ],
              B: [
                [prev.B[0][0], prev.B[0][1], prev.U[0][0]],
                [prev.B[1][0], prev.B[1][1], prev.U[1][0]],
                [prev.B[2][0], prev.B[2][1], prev.U[2][0]]
              ]
              ,
            }
          ))
        },
        "F'": () => {
          setCube(prev => (
            {
              ...prev,
              F: [
                [prev.F[0][2], prev.F[1][2], prev.F[2][2]],
                [prev.F[0][1], prev.F[1][1], prev.F[2][1]],
                [prev.F[0][0], prev.F[1][0], prev.F[2][0]]
              ],
              U: [
                [prev.U[0][0], prev.U[0][1], prev.U[0][2]],
                [prev.U[1][0], prev.U[1][1], prev.U[1][2]],
                [prev.R[0][0], prev.R[1][0], prev.R[2][0]]
              ],
              R: [
                [prev.D[0][0], prev.R[0][1], prev.R[0][2]],
                [prev.D[0][1], prev.R[1][1], prev.R[1][2]],
                [prev.D[0][2], prev.R[2][1], prev.R[2][2]]
              ],
              D: [
                [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
                [prev.D[1][0], prev.D[1][1], prev.D[1][2]],
                [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
              ],
              L: [
                [prev.L[0][0], prev.L[0][1], prev.U[2][0]],
                [prev.L[1][0], prev.L[1][1], prev.U[2][1]],
                [prev.L[2][0], prev.L[2][1], prev.U[2][2]]
              ]
              ,
            }
          ))
        },
        "R'": () => {
          setCube(prev => (
            {
              ...prev,
              R: [
                [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
                [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
                [prev.R[0][0], prev.R[1][0], prev.R[2][0]]
              ],
              U: [
                [prev.U[0][0], prev.U[0][1], prev.B[0][0]],
                [prev.U[1][0], prev.U[1][1], prev.B[1][0]],
                [prev.U[2][0], prev.U[2][1], prev.B[2][0]]
              ],
              B: [
                [prev.D[0][2], prev.B[0][1], prev.B[0][2]],
                [prev.D[1][2], prev.B[1][1], prev.B[1][2]],
                [prev.D[2][2], prev.B[2][1], prev.B[2][2]]
              ],
              D: [
                [prev.D[0][0], prev.D[0][1], prev.F[0][2]],
                [prev.D[1][0], prev.D[1][1], prev.F[1][2]],
                [prev.D[2][0], prev.D[2][1], prev.F[2][2]]
              ],
              F: [
                [prev.F[0][0], prev.F[0][1], prev.U[0][2]],
                [prev.F[1][0], prev.F[1][1], prev.U[1][2]],
                [prev.F[2][0], prev.F[2][1], prev.U[2][2]]
              ]
              ,
            }
          ))
        },
        "B'": () => {
          setCube(prev => (
            {
              ...prev,
              B: [
                [prev.B[0][2], prev.B[1][2], prev.B[2][2]],
                [prev.B[0][1], prev.B[1][1], prev.B[2][1]],
                [prev.B[0][0], prev.B[1][0], prev.B[2][0]]
              ],
              D: [
                [prev.D[0][0], prev.D[0][1], prev.D[0][2]],
                [prev.D[1][0], prev.D[1][1], prev.D[1][2]],
                [prev.R[0][2], prev.R[1][2], prev.R[2][2]]
              ],
              L: [
                [prev.D[2][0], prev.L[0][1], prev.L[0][2]],
                [prev.D[2][1], prev.L[1][1], prev.L[1][2]],
                [prev.D[2][2], prev.L[2][1], prev.L[2][2]]
              ],
              U: [
                [prev.L[0][0], prev.L[1][0], prev.L[2][0]],
                [prev.U[1][0], prev.U[1][1], prev.U[1][2]],
                [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
              ],
              R: [
                [prev.R[0][0], prev.R[0][1], prev.U[0][0]],
                [prev.R[1][0], prev.R[1][1], prev.U[0][1]],
                [prev.R[2][0], prev.R[2][1], prev.U[0][2]]
              ]
              ,
            }
          ))
        },
        "D'": () => {
          setCube(prev => (
            {
              ...prev,
              D: [
                [prev.D[0][2], prev.D[1][2], prev.D[2][2]],
                [prev.D[0][1], prev.D[1][1], prev.D[2][1]],
                [prev.D[0][0], prev.D[1][0], prev.D[2][0]]
              ],
              F: [
                [...prev.F[0]],
                [...prev.F[1]],
                [prev.R[2][0], prev.R[2][1], prev.R[2][2]]
              ],
              R: [
                [...prev.R[0]],
                [...prev.R[1]],
                [prev.B[2][0], prev.B[2][1], prev.B[2][2]]
              ],
              B: [
                [...prev.B[0]],
                [...prev.B[1]],
                [prev.L[2][0], prev.L[2][1], prev.L[2][2]],
              ],
              L: [
                [...prev.L[0]],
                [...prev.L[1]],
                [prev.F[2][0], prev.F[2][1], prev.F[2][2]],
              ]
            }
          ))
        },
      }

      const SliceTurnsMoves: {[key in SlycesTurns]: () => void} = {
        "M": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [prev.U[0][0], prev.B[0][1], prev.U[0][2]],
                [prev.U[1][0], prev.B[1][1], prev.U[1][2]],
                [prev.U[2][0], prev.B[2][1], prev.U[2][2]]
              ],
              F: [
                [prev.F[0][0], prev.U[0][1], prev.F[0][2]],
                [prev.F[1][0], prev.U[1][1], prev.F[1][2]],
                [prev.F[2][0], prev.U[2][1], prev.F[2][2]]
              ],
              D: [
                [prev.D[0][0], prev.F[0][1], prev.D[0][2]],
                [prev.D[1][0], prev.F[1][1], prev.D[1][2]],
                [prev.D[2][0], prev.F[2][1], prev.D[2][2]]
              ],
              B: [
                [prev.B[0][0], prev.D[0][1], prev.B[0][2]],
                [prev.B[1][0], prev.D[1][1], prev.B[1][2]],
                [prev.B[2][0], prev.D[2][1], prev.B[2][2]]
              ]
            }
          ))
        },
        "M'": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [prev.U[0][0], prev.F[0][1], prev.U[0][2]],
                [prev.U[1][0], prev.F[1][1], prev.U[1][2]],
                [prev.U[2][0], prev.F[2][1], prev.U[2][2]]
              ],
              F: [
                [prev.F[0][0], prev.D[0][1], prev.F[0][2]],
                [prev.F[1][0], prev.D[1][1], prev.F[1][2]],
                [prev.F[2][0], prev.D[2][1], prev.F[2][2]]
              ],
              D: [
                [prev.D[0][0], prev.B[0][1], prev.D[0][2]],
                [prev.D[1][0], prev.B[1][1], prev.D[1][2]],
                [prev.D[2][0], prev.B[2][1], prev.D[2][2]]
              ],
              B: [
                [prev.B[0][0], prev.U[0][1], prev.B[0][2]],
                [prev.B[1][0], prev.U[1][1], prev.B[1][2]],
                [prev.B[2][0], prev.U[2][1], prev.B[2][2]]
              ]
            }
          ))
        },
        "E": () => {
          setCube(prev => (
            {
              ...prev,
              L: [
                [...prev.L[0]],
                [prev.F[1][0], prev.F[1][1], prev.F[1][2]],
                [...prev.L[2]]
              ],
              F: [
                [...prev.F[0]],
                [prev.R[1][0], prev.R[1][1], prev.R[1][2]],
                [...prev.F[2]]
              ],
              R: [
                [...prev.R[0]],
                [prev.B[1][0], prev.B[1][1], prev.B[1][2]],
                [...prev.R[2]]
              ],
              B: [
                [...prev.B[0]],
                [prev.L[1][0], prev.L[1][1], prev.L[1][2]],
                [...prev.B[2]]
              ]
            }
          ))
        },
        "E'": () => {
          setCube(prev => (
            {
              ...prev,
              L: [
                [...prev.L[0]],
                [prev.B[1][0], prev.B[1][1], prev.B[1][2]],
                [...prev.L[2]]
              ],
              F: [
                [...prev.F[0]],
                [prev.L[1][0], prev.L[1][1], prev.L[1][2]],
                [...prev.F[2]]
              ],
              R: [
                [...prev.R[0]],
                [prev.F[1][0], prev.F[1][1], prev.F[1][2]],
                [...prev.R[2]]
              ],
              B: [
                [...prev.B[0]],
                [prev.R[1][0], prev.R[1][1], prev.R[1][2]],
                [...prev.B[2]]
              ]
            }
          ))
        },
        "S": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [...prev.U[0]],
                [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
                [...prev.U[2]]
              ],
              R: [
                [prev.R[0][0], prev.U[1][0], prev.R[0][2]],
                [prev.R[1][0], prev.U[1][1], prev.R[1][2]],
                [prev.R[2][0], prev.U[1][2], prev.R[2][2]]
              ],
              D: [
                [...prev.D[0]],
                [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
                [...prev.D[2]]
              ],
              L: [
                [prev.L[0][0], prev.D[1][0], prev.L[0][2]],
                [prev.L[1][0], prev.D[1][1], prev.L[1][2]],
                [prev.L[2][0], prev.D[1][2], prev.L[2][2]]
              ]
            }
          ))
        },
        "S'": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [...prev.U[0]],
                [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
                [...prev.U[2]]
              ],
              R: [
                [prev.R[0][0], prev.D[1][0], prev.R[0][2]],
                [prev.R[1][0], prev.D[1][1], prev.R[1][2]],
                [prev.R[2][0], prev.D[1][2], prev.R[2][2]]
              ],
              D: [
                [...prev.D[0]],
                [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
                [...prev.D[2]]
              ],
              L: [
                [prev.L[0][0], prev.U[1][0], prev.L[0][2]],
                [prev.L[1][0], prev.U[1][1], prev.L[1][2]],
                [prev.L[2][0], prev.U[1][2], prev.L[2][2]]
              ]
            }
          ))
        },
      }

      const DoubleLayerMoves: {[key in DoubleLayerTurns]: () => void} = {
        "u": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [prev.U[2][0], prev.U[1][0], prev.U[0][0]],
                [prev.U[2][1], prev.U[1][1], prev.U[0][1]],
                [prev.U[2][2], prev.U[1][2], prev.U[0][2]]
              ],
              B: [
                [prev.L[0][0], prev.L[0][1], prev.L[0][2]],
                [prev.L[1][0], prev.L[1][1], prev.L[1][2]],
                [...prev.B[2]]
              ],
              R: [
                [prev.B[0][0], prev.B[0][1], prev.B[0][2]],
                [prev.B[1][0], prev.B[1][1], prev.B[1][2]],
                [...prev.R[2]]
              ],
              F: [
                [prev.R[0][0], prev.R[0][1], prev.R[0][2]],
                [prev.R[1][0], prev.R[1][1], prev.R[1][2]],
                [...prev.F[2]]
              ],
              L: [
                [prev.F[0][0], prev.F[0][1], prev.F[0][2]],
                [prev.F[1][0], prev.F[1][1], prev.F[1][2]],
                [...prev.L[2]]
              ]
            }
          ))
        },
        "l": () => {
          setCube(prev => (
            {
              ...prev,
              L: [
                [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
                [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
                [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
              ],
              U: [
                [prev.B[0][2], prev.B[0][1], prev.U[0][2]],
                [prev.B[1][2], prev.B[1][1], prev.U[1][2]],
                [prev.B[2][2], prev.B[2][1], prev.U[2][2]]
              ],
              F: [
                [prev.U[0][0], prev.U[0][1], prev.F[0][2]],
                [prev.U[1][0], prev.U[1][1], prev.F[1][2]],
                [prev.U[2][0], prev.U[2][1], prev.F[2][2]]
              ],
              D: [
                [prev.F[0][0], prev.F[0][1], prev.D[0][2]],
                [prev.F[1][0], prev.F[1][1], prev.D[1][2]],
                [prev.F[2][0], prev.F[2][1], prev.D[2][2]]
              ],
              B: [
                [prev.B[0][0], prev.D[0][1], prev.D[0][0]],
                [prev.B[1][0], prev.D[1][1], prev.D[1][0]],
                [prev.B[2][0], prev.D[2][1], prev.D[2][0]]
              ]
              ,
            }
          ))
        },
        "f": () => {
          setCube(prev => (
            {
              ...prev,
              F: [
                [prev.F[2][0], prev.F[1][0], prev.F[0][0]],
                [prev.F[2][1], prev.F[1][1], prev.F[0][1]],
                [prev.F[2][2], prev.F[1][2], prev.F[0][2]]
              ],
              U: [
                [prev.U[0][0], prev.U[0][1], prev.U[0][2]],
                [prev.L[2][1], prev.L[1][1], prev.L[0][2]],
                [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
              ],
              R: [
                [prev.U[2][0], prev.U[1][0], prev.R[0][2]],
                [prev.U[2][1], prev.U[1][1], prev.R[1][2]],
                [prev.U[2][2], prev.U[1][2], prev.R[2][2]]
              ],
              D: [
                [prev.R[0][0], prev.R[1][0], prev.R[2][0]],
                [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
                [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
              ],
              L: [
                [prev.L[0][0], prev.D[1][0], prev.D[0][0]],
                [prev.L[1][0], prev.D[1][1], prev.D[0][1]],
                [prev.L[2][0], prev.D[1][2], prev.D[0][2]]
              ]
              ,
            }
          ))
        },
        "r": () => {
          setCube(prev => (
            {
              ...prev,
              R: [
                [prev.R[2][0], prev.R[1][0], prev.R[0][0]],
                [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
                [prev.R[2][2], prev.R[1][2], prev.R[0][2]]
              ],
              U: [
                [prev.U[0][0], prev.F[0][1], prev.F[0][2]],
                [prev.U[1][0], prev.F[1][1], prev.F[1][2]],
                [prev.U[2][0], prev.F[2][1], prev.F[2][2]]
              ],
              B: [
                [prev.U[0][2], prev.U[0][1], prev.B[0][2]],
                [prev.U[1][2], prev.U[1][1], prev.B[1][2]],
                [prev.U[2][2], prev.U[2][1], prev.B[2][2]]
              ],
              D: [
                [prev.D[0][0], prev.B[0][1], prev.B[0][0]],
                [prev.D[1][0], prev.B[1][1], prev.B[1][0]],
                [prev.D[2][0], prev.B[2][1], prev.B[2][0]]
              ],
              F: [
                [prev.F[0][0], prev.D[0][1], prev.D[0][2]],
                [prev.F[1][0], prev.D[1][1], prev.D[1][2]],
                [prev.F[2][0], prev.D[2][1], prev.D[2][2]]
              ]
              ,
            }
          ))
        },
        "b": () => {
          setCube(prev => (
            {
              ...prev,
              B: [
                [prev.B[2][0], prev.B[1][0], prev.B[0][0]],
                [prev.B[2][1], prev.B[1][1], prev.B[0][1]],
                [prev.B[2][2], prev.B[1][2], prev.B[0][2]]
              ],
              D: [
                [prev.D[0][0], prev.D[0][1], prev.D[0][2]],
                [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
                [prev.L[0][0], prev.L[1][0], prev.L[2][0]]
              ],
              L: [
                [prev.U[0][0], prev.U[1][0], prev.L[0][2]],
                [prev.U[0][1], prev.U[1][1], prev.L[1][2]],
                [prev.U[0][2], prev.U[1][2], prev.L[2][2]]
              ],
              U: [
                [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
                [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
                [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
              ],
              R: [
                [prev.R[0][0], prev.D[1][0], prev.D[2][0]],
                [prev.R[1][0], prev.D[1][1], prev.D[2][1]],
                [prev.R[2][0], prev.D[1][2], prev.D[2][2]]
              ]
              ,
            }
          ))
        },
        "d": () => {
          setCube(prev => (
            {
              ...prev,
              D: [
                [prev.D[2][0], prev.D[1][0], prev.D[0][0]],
                [prev.D[2][1], prev.D[1][1], prev.D[0][1]],
                [prev.D[2][2], prev.D[1][2], prev.D[0][2]]
              ],
              F: [
                [...prev.F[0]],
                [prev.L[1][0], prev.L[1][1], prev.L[1][2]],
                [prev.L[2][0], prev.L[2][1], prev.L[2][2]]
              ],
              R: [
                [...prev.R[0]],
                [prev.F[1][0], prev.F[1][1], prev.F[1][2]],
                [prev.F[2][0], prev.F[2][1], prev.F[2][2]]
              ],
              B: [
                [...prev.B[0]],
                [prev.R[1][0], prev.R[1][1], prev.R[1][2]],
                [prev.R[2][0], prev.R[2][1], prev.R[2][2]],
              ],
              L: [
                [...prev.L[0]],
                [prev.B[1][0], prev.B[1][1], prev.B[1][2]],
                [prev.B[2][0], prev.B[2][1], prev.B[2][2]],
              ]
            }
          ))
        },
      }

      const InverseDoubleLayerMoves: {[key in InverseDoubleLayerTurns]: () => void} = {
        "u'": () => {
          setCube(prev => (
            {
              ...prev,
              U: [
                [prev.U[2][0], prev.U[1][0], prev.U[0][0]],
                [prev.U[2][1], prev.U[1][1], prev.U[0][1]],
                [prev.U[2][2], prev.U[1][2], prev.U[0][2]]
              ],
              B: [
                [prev.R[0][0], prev.R[0][1], prev.R[0][2]],
                [prev.R[1][0], prev.R[1][1], prev.R[1][2]],
                [...prev.B[2]]
              ],
              R: [
                [prev.F[0][0], prev.F[0][1], prev.F[0][2]],
                [prev.F[1][0], prev.F[1][1], prev.F[1][2]],
                [...prev.R[2]]
              ],
              F: [
                [prev.L[0][0], prev.L[0][1], prev.L[0][2]],
                [prev.L[1][0], prev.L[1][1], prev.L[1][2]],
                [...prev.F[2]]
              ],
              L: [
                [prev.B[0][0], prev.B[0][1], prev.B[0][2]],
                [prev.B[1][0], prev.B[1][1], prev.B[1][2]],
                [...prev.L[2]]
              ]
            }
          ))
        },
        "l'": () => {
          setCube(prev => (
            {
              ...prev,
              L: [
                [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
                [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
                [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
              ],
              U: [
                [prev.F[0][0], prev.F[0][1], prev.U[0][2]],
                [prev.F[1][0], prev.F[1][1], prev.U[1][2]],
                [prev.F[2][0], prev.F[2][1], prev.U[2][2]]
              ],
              F: [
                [prev.D[0][0], prev.D[0][1], prev.F[0][2]],
                [prev.D[1][0], prev.D[1][1], prev.F[1][2]],
                [prev.D[2][0], prev.D[2][1], prev.F[2][2]]
              ],
              D: [
                [prev.B[0][2], prev.B[0][1], prev.D[0][2]],
                [prev.B[1][2], prev.B[1][1], prev.D[1][2]],
                [prev.B[2][2], prev.B[2][1], prev.D[2][2]]
              ],
              B: [
                [prev.B[0][0], prev.U[0][1], prev.U[0][0]],
                [prev.B[1][0], prev.U[1][1], prev.U[1][0]],
                [prev.B[2][0], prev.U[2][1], prev.U[2][0]]
              ]
              ,
            }
          ))
        },
        "f'": () => {
          setCube(prev => (
            {
              ...prev,
              F: [
                [prev.F[2][0], prev.F[1][0], prev.F[0][0]],
                [prev.F[2][1], prev.F[1][1], prev.F[0][1]],
                [prev.F[2][2], prev.F[1][2], prev.F[0][2]]
              ],
              U: [
                [prev.U[0][0], prev.U[0][1], prev.U[0][2]],
                [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
                [prev.R[2][0], prev.R[1][0], prev.R[0][0]]
              ],
              R: [
                [prev.D[0][0], prev.D[1][0], prev.R[0][2]],
                [prev.D[0][1], prev.D[1][1], prev.R[1][2]],
                [prev.D[0][2], prev.D[1][2], prev.R[2][2]]
              ],
              D: [
                [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
                [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
                [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
              ],
              L: [
                [prev.L[0][0], prev.U[1][0], prev.U[2][0]],
                [prev.L[1][0], prev.U[1][1], prev.U[2][1]],
                [prev.L[2][0], prev.U[1][2], prev.U[2][2]]
              ]
              ,
            }
          ))
        },
        "r'": () => {
          setCube(prev => (
            {
              ...prev,
              R: [
                [prev.R[2][0], prev.R[1][0], prev.R[0][0]],
                [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
                [prev.R[2][2], prev.R[1][2], prev.R[0][2]]
              ],
              U: [
                [prev.U[0][0], prev.F[0][1], prev.F[0][2]],
                [prev.U[1][0], prev.F[1][1], prev.F[1][2]],
                [prev.U[2][0], prev.F[2][1], prev.F[2][2]]
              ],
              B: [
                [prev.U[0][2], prev.U[0][1], prev.B[0][2]],
                [prev.U[1][2], prev.U[1][1], prev.B[1][2]],
                [prev.U[2][2], prev.U[2][1], prev.B[2][2]]
              ],
              D: [
                [prev.D[0][0], prev.B[0][1], prev.B[0][0]],
                [prev.D[1][0], prev.B[1][1], prev.B[1][0]],
                [prev.D[2][0], prev.B[2][1], prev.B[2][0]]
              ],
              F: [
                [prev.F[0][0], prev.D[0][1], prev.D[0][2]],
                [prev.F[1][0], prev.D[1][1], prev.D[1][2]],
                [prev.F[2][0], prev.D[2][1], prev.D[2][2]]
              ]
              ,
            }
          ))
        },
        "b'": () => {
          setCube(prev => (
            {
              ...prev,
              B: [
                [prev.B[2][0], prev.B[1][0], prev.B[0][0]],
                [prev.B[2][1], prev.B[1][1], prev.B[0][1]],
                [prev.B[2][2], prev.B[1][2], prev.B[0][2]]
              ],
              D: [
                [prev.D[0][0], prev.D[0][1], prev.D[0][2]],
                [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
                [prev.L[0][0], prev.L[1][0], prev.L[2][0]]
              ],
              L: [
                [prev.U[0][0], prev.U[1][0], prev.L[0][2]],
                [prev.U[0][1], prev.U[1][1], prev.L[1][2]],
                [prev.U[0][2], prev.U[1][2], prev.L[2][2]]
              ],
              U: [
                [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
                [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
                [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
              ],
              R: [
                [prev.R[0][0], prev.D[1][0], prev.D[2][0]],
                [prev.R[1][0], prev.D[1][1], prev.D[2][1]],
                [prev.R[2][0], prev.D[1][2], prev.D[2][2]]
              ]
              ,
            }
          ))
        },
        "d'": () => {
          setCube(prev => (
            {
              ...prev,
              D: [
                [prev.D[2][0], prev.D[1][0], prev.D[0][0]],
                [prev.D[2][1], prev.D[1][1], prev.D[0][1]],
                [prev.D[2][2], prev.D[1][2], prev.D[0][2]]
              ],
              F: [
                [...prev.F[0]],
                [prev.L[1][0], prev.L[1][1], prev.L[1][2]],
                [prev.L[2][0], prev.L[2][1], prev.L[2][2]]
              ],
              R: [
                [...prev.R[0]],
                [prev.F[1][0], prev.F[1][1], prev.F[1][2]],
                [prev.F[2][0], prev.F[2][1], prev.F[2][2]]
              ],
              B: [
                [...prev.B[0]],
                [prev.R[1][0], prev.R[1][1], prev.R[1][2]],
                [prev.R[2][0], prev.R[2][1], prev.R[2][2]],
              ],
              L: [
                [...prev.L[0]],
                [prev.B[1][0], prev.B[1][1], prev.B[1][2]],
                [prev.B[2][0], prev.B[2][1], prev.B[2][2]],
              ]
            }
          ))
        },
      }


    return {
        cube,
        ClockwiseMoves,
        CounterClockwiseMoves,
        SliceTurnsMoves,
        DoubleLayerMoves,
        InverseDoubleLayerMoves
    }
}

