import { useState } from "react"
import { ClockwiseFaceRotation, CounterClockwiseFaceRotation, CubeActions, DoubleLayerTurns, InverseDoubleLayerTurns, RubiksCube, SlycesTurns, WholeCubeRotations } from "../types"

export default function useRubikCube(initialState: RubiksCube) {

  const [cube, setCube] = useState(initialState)

  const [history, setHistory] = useState<CubeActions[]>([])

  const Reset = () => {
    setCube(initialState)
    setHistory([])
  }

  const ClockwiseMoves: { [key in ClockwiseFaceRotation]: () => void } = {
    "U": () => {
      setHistory(prev => [...prev, "U"] as CubeActions[])
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
      setHistory(prev => [...prev, "L"])
      setCube(prev => (
        {
          ...prev,
          L: [
            [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
            [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
            [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
          ],
          U: [
            [prev.B[2][2], prev.U[0][1], prev.U[0][2]],
            [prev.B[1][2], prev.U[1][1], prev.U[1][2]],
            [prev.B[0][2], prev.U[2][1], prev.U[2][2]]
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
            [prev.B[0][0], prev.B[0][1], prev.D[2][0]],
            [prev.B[1][0], prev.B[1][1], prev.D[1][0]],
            [prev.B[2][0], prev.B[2][1], prev.D[0][0]]
          ]
        }
      ))
    },
    "F": () => {
      setHistory(prev => [...prev, "F"])
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
            [prev.R[2][0], prev.R[1][0], prev.R[0][0]],
            [prev.D[1][0], prev.D[1][1], prev.D[1][2]],
            [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
          ],
          L: [
            [prev.L[0][0], prev.L[0][1], prev.D[0][0]],
            [prev.L[1][0], prev.L[1][1], prev.D[0][1]],
            [prev.L[2][0], prev.L[2][1], prev.D[0][2]]
          ]
        }
      ))
    },
    "R": () => {
      setHistory(prev => [...prev, "R"])
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
            [prev.U[2][2], prev.B[0][1], prev.B[0][2]],
            [prev.U[1][2], prev.B[1][1], prev.B[1][2]],
            [prev.U[0][2], prev.B[2][1], prev.B[2][2]]
          ],
          D: [
            [prev.D[0][0], prev.D[0][1], prev.B[2][0]],
            [prev.D[1][0], prev.D[1][1], prev.B[1][0]],
            [prev.D[2][0], prev.D[2][1], prev.B[0][0]]
          ],
          F: [
            [prev.F[0][0], prev.F[0][1], prev.D[0][2]],
            [prev.F[1][0], prev.F[1][1], prev.D[1][2]],
            [prev.F[2][0], prev.F[2][1], prev.D[2][2]]
          ]
        }
      ))
    },
    "B": () => {
      setHistory(prev => [...prev, "B"])
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
            [prev.U[0][2], prev.L[0][1], prev.L[0][2]],
            [prev.U[0][1], prev.L[1][1], prev.L[1][2]],
            [prev.U[0][0], prev.L[2][1], prev.L[2][2]]
          ],
          U: [
            [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
            [prev.U[1][0], prev.U[1][1], prev.U[1][2]],
            [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
          ],
          R: [
            [prev.R[0][0], prev.R[0][1], prev.D[2][2]],
            [prev.R[1][0], prev.R[1][1], prev.D[2][1]],
            [prev.R[2][0], prev.R[2][1], prev.D[2][0]]
          ]
        }
      ))
    },
    "D": () => {
      setHistory(prev => [...prev, "D"])
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
    }
  }

  const CounterClockwiseMoves: { [key in CounterClockwiseFaceRotation]: () => void } = {
    "U'": () => {
      setHistory(prev => [...prev, "U'"])
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
      setHistory(prev => [...prev, "L'"])
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
            [prev.B[2][2], prev.D[0][1], prev.D[0][2]],
            [prev.B[1][2], prev.D[1][1], prev.D[1][2]],
            [prev.B[0][2], prev.D[2][1], prev.D[2][2]]
          ],
          B: [
            [prev.B[0][0], prev.B[0][1], prev.U[2][0]],
            [prev.B[1][0], prev.B[1][1], prev.U[1][0]],
            [prev.B[2][0], prev.B[2][1], prev.U[0][0]]
          ]
        }
      ))
    },
    "F'": () => {
      setHistory(prev => [...prev, "F'"])
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
            [prev.D[0][2], prev.R[0][1], prev.R[0][2]],
            [prev.D[0][1], prev.R[1][1], prev.R[1][2]],
            [prev.D[0][0], prev.R[2][1], prev.R[2][2]]
          ],
          D: [
            [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
            [prev.D[1][0], prev.D[1][1], prev.D[1][2]],
            [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
          ],
          L: [
            [prev.L[0][0], prev.L[0][1], prev.U[2][2]],
            [prev.L[1][0], prev.L[1][1], prev.U[2][1]],
            [prev.L[2][0], prev.L[2][1], prev.U[2][0]]
          ]
        }
      ))
    },
    "R'": () => {
      setHistory(prev => [...prev, "R'"])
      setCube(prev => (
        {
          ...prev,
          R: [
            [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
            [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
            [prev.R[0][0], prev.R[1][0], prev.R[2][0]]
          ],
          U: [
            [prev.U[0][0], prev.U[0][1], prev.B[2][0]],
            [prev.U[1][0], prev.U[1][1], prev.B[1][0]],
            [prev.U[2][0], prev.U[2][1], prev.B[0][0]]
          ],
          B: [
            [prev.D[2][2], prev.B[0][1], prev.B[0][2]],
            [prev.D[1][2], prev.B[1][1], prev.B[1][2]],
            [prev.D[0][2], prev.B[2][1], prev.B[2][2]]
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
        }
      ))
    },
    "B'": () => {
      setHistory(prev => [...prev, "B'"])
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
            [prev.R[2][2], prev.R[1][2], prev.R[0][2]]
          ],
          L: [
            [prev.D[2][0], prev.L[0][1], prev.L[0][2]],
            [prev.D[2][1], prev.L[1][1], prev.L[1][2]],
            [prev.D[2][2], prev.L[2][1], prev.L[2][2]]
          ],
          U: [
            [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
            [prev.U[1][0], prev.U[1][1], prev.U[1][2]],
            [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
          ],
          R: [
            [prev.R[0][0], prev.R[0][1], prev.U[0][0]],
            [prev.R[1][0], prev.R[1][1], prev.U[0][1]],
            [prev.R[2][0], prev.R[2][1], prev.U[0][2]]
          ]
        }
      ))
    },
    "D'": () => {
      setHistory(prev => [...prev, "D'"])
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
    }
  }

  const SliceTurnsMoves: { [key in SlycesTurns]: () => void } = {
    "M": () => {
      setHistory(prev => [...prev, "M"])
      setCube(prev => (
        {
          ...prev,
          U: [
            [prev.U[0][0], prev.B[2][1], prev.U[0][2]],
            [prev.U[1][0], prev.B[1][1], prev.U[1][2]],
            [prev.U[2][0], prev.B[0][1], prev.U[2][2]]
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
            [prev.B[0][0], prev.D[2][1], prev.B[0][2]],
            [prev.B[1][0], prev.D[1][1], prev.B[1][2]],
            [prev.B[2][0], prev.D[0][1], prev.B[2][2]]
          ]
        }
      ))
    },
    "M'": () => {
      setHistory(prev => [...prev, "M'"])
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
            [prev.D[0][0], prev.B[2][1], prev.D[0][2]],
            [prev.D[1][0], prev.B[1][1], prev.D[1][2]],
            [prev.D[2][0], prev.B[0][1], prev.D[2][2]]
          ],
          B: [
            [prev.B[0][0], prev.U[2][1], prev.B[0][2]],
            [prev.B[1][0], prev.U[1][1], prev.B[1][2]],
            [prev.B[2][0], prev.U[0][1], prev.B[2][2]]
          ]
        }
      ))
    },
    "E": () => {
      setHistory(prev => [...prev, "E"])
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
      setHistory(prev => [...prev, "E'"])
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
      setHistory(prev => [...prev, "S"])
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
            [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
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
      setHistory(prev => [...prev, "S'"])
      setCube(prev => (
        {
          ...prev,
          U: [
            [...prev.U[0]],
            [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
            [...prev.U[2]]
          ],
          R: [
            [prev.R[0][0], prev.D[1][2], prev.R[0][2]],
            [prev.R[1][0], prev.D[1][1], prev.R[1][2]],
            [prev.R[2][0], prev.D[1][0], prev.R[2][2]]
          ],
          D: [
            [...prev.D[0]],
            [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
            [...prev.D[2]]
          ],
          L: [
            [prev.L[0][0], prev.U[1][2], prev.L[0][2]],
            [prev.L[1][0], prev.U[1][1], prev.L[1][2]],
            [prev.L[2][0], prev.U[1][0], prev.L[2][2]]
          ]
        }
      ))
    }
  }

  const DoubleLayerMoves: { [key in DoubleLayerTurns]: () => void } = {
    "u": () => {
      setHistory(prev => [...prev, "u"] as CubeActions[])
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
      setHistory(prev => [...prev, "l"])
      setCube(prev => (
        {
          ...prev,
          L: [
            [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
            [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
            [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
          ],
          U: [
            [prev.B[2][2], prev.B[2][1], prev.U[0][2]],
            [prev.B[1][2], prev.B[1][1], prev.U[1][2]],
            [prev.B[0][2], prev.B[0][1], prev.U[2][2]]
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
            [prev.B[0][0], prev.D[2][1], prev.D[2][0]],
            [prev.B[1][0], prev.D[1][1], prev.D[1][0]],
            [prev.B[2][0], prev.D[0][1], prev.D[0][0]]
          ]
        }
      ))
    },
    "f": () => {
      setHistory(prev => [...prev, "f"])
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
            [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
            [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
          ],
          R: [
            [prev.U[2][0], prev.U[1][0], prev.R[0][2]],
            [prev.U[2][1], prev.U[1][1], prev.R[1][2]],
            [prev.U[2][2], prev.U[1][2], prev.R[2][2]]
          ],
          D: [
            [prev.R[2][0], prev.R[1][0], prev.R[0][0]],
            [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
            [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
          ],
          L: [
            [prev.L[0][0], prev.D[1][0], prev.D[0][0]],
            [prev.L[1][0], prev.D[1][1], prev.D[0][1]],
            [prev.L[2][0], prev.D[1][2], prev.D[0][2]]
          ]
        }
      ))
    },
    "r": () => {
      setHistory(prev => [...prev, "r"])
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
            [prev.U[2][2], prev.U[2][1], prev.B[0][2]],
            [prev.U[1][2], prev.U[1][1], prev.B[1][2]],
            [prev.U[0][2], prev.U[0][1], prev.B[2][2]]
          ],
          D: [
            [prev.D[0][0], prev.B[2][1], prev.B[2][0]],
            [prev.D[1][0], prev.B[1][1], prev.B[1][0]],
            [prev.D[2][0], prev.B[0][1], prev.B[0][0]]
          ],
          F: [
            [prev.F[0][0], prev.D[0][1], prev.D[0][2]],
            [prev.F[1][0], prev.D[1][1], prev.D[1][2]],
            [prev.F[2][0], prev.D[2][1], prev.D[2][2]]
          ]
        }
      ))
    },
    "b": () => {
      setHistory(prev => [...prev, "b"])
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
            [prev.U[0][2], prev.U[1][2], prev.L[0][2]],
            [prev.U[0][1], prev.U[1][1], prev.L[1][2]],
            [prev.U[0][0], prev.U[1][0], prev.L[2][2]]
          ],
          U: [
            [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
            [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
            [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
          ],
          R: [
            [prev.R[0][0], prev.D[1][2], prev.D[2][2]],
            [prev.R[1][0], prev.D[1][1], prev.D[2][1]],
            [prev.R[2][0], prev.D[1][0], prev.D[2][0]]
          ]
        }
      ))
    },
    "d": () => {
      setHistory(prev => [...prev, "d"])
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
    }
  }

  const InverseDoubleLayerMoves: { [key in InverseDoubleLayerTurns]: () => void } = {
    "u'": () => {
      setHistory(prev => [...prev, "u'"])
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
      setHistory(prev => [...prev, "l'"])
      setCube(prev => (
        {
          ...prev,
          L: [
            [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
            [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
            [prev.L[0][0], prev.L[1][0], prev.L[2][0]]
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
            [prev.B[2][2], prev.B[2][1], prev.D[0][2]],
            [prev.B[1][2], prev.B[1][1], prev.D[1][2]],
            [prev.B[0][2], prev.B[0][1], prev.D[2][2]]
          ],
          B: [
            [prev.B[0][0], prev.U[2][1], prev.U[2][0]],
            [prev.B[1][0], prev.U[1][1], prev.U[1][0]],
            [prev.B[2][0], prev.U[0][1], prev.U[0][0]]
          ]
        }
      ))
    },
    "f'": () => {
      setHistory(prev => [...prev, "f'"])
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
            [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
            [prev.R[0][0], prev.R[1][0], prev.R[2][0]]
          ],
          R: [
            [prev.D[0][2], prev.D[1][2], prev.R[0][2]],
            [prev.D[0][1], prev.D[1][1], prev.R[1][2]],
            [prev.D[0][0], prev.D[1][0], prev.R[2][2]]
          ],
          D: [
            [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
            [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
            [prev.D[2][0], prev.D[2][1], prev.D[2][2]]
          ],
          L: [
            [prev.L[0][0], prev.U[1][2], prev.U[2][2]],
            [prev.L[1][0], prev.U[1][1], prev.U[2][1]],
            [prev.L[2][0], prev.U[1][0], prev.U[2][0]]
          ]
        }
      ))
    },
    "r'": () => {
      setHistory(prev => [...prev, "r'"])
      setCube(prev => (
        {
          ...prev,
          R: [
            [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
            [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
            [prev.R[0][0], prev.R[1][0], prev.R[2][0]]
          ],
          U: [
            [prev.U[0][0], prev.B[2][1], prev.B[2][0]],
            [prev.U[1][0], prev.B[1][1], prev.B[1][0]],
            [prev.U[2][0], prev.B[0][1], prev.B[0][0]]
          ],
          B: [
            [prev.D[2][2], prev.D[2][1], prev.B[0][2]],
            [prev.D[1][2], prev.D[1][1], prev.B[1][2]],
            [prev.D[0][2], prev.D[0][1], prev.B[2][2]]
          ],
          D: [
            [prev.D[0][0], prev.F[0][1], prev.F[0][2]],
            [prev.D[1][0], prev.F[1][1], prev.F[1][2]],
            [prev.D[2][0], prev.F[2][1], prev.F[2][2]]
          ],
          F: [
            [prev.F[0][0], prev.U[0][1], prev.U[0][2]],
            [prev.F[1][0], prev.U[1][1], prev.U[1][2]],
            [prev.F[2][0], prev.U[2][1], prev.U[2][2]]
          ]
        }
      ))
    },
    "b'": () => {
      setHistory(prev => [...prev, "b'"])
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
            [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
            [prev.R[2][2], prev.R[1][2], prev.R[0][2]]
          ],
          L: [
            [prev.D[2][0], prev.D[1][0], prev.L[0][2]],
            [prev.D[2][1], prev.D[1][1], prev.L[1][2]],
            [prev.D[2][2], prev.D[1][2], prev.L[2][2]]
          ],
          U: [
            [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
            [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
            [prev.U[2][0], prev.U[2][1], prev.U[2][2]]
          ],
          R: [
            [prev.R[0][0], prev.U[1][0], prev.U[0][0]],
            [prev.R[1][0], prev.U[1][1], prev.U[0][1]],
            [prev.R[2][0], prev.U[1][2], prev.U[0][2]]
          ]
        }
      ))
    },
    "d'": () => {
      setHistory(prev => [...prev, "d'"])
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
            [prev.R[1][0], prev.R[1][1], prev.R[1][2]],
            [prev.R[2][0], prev.R[2][1], prev.R[2][2]]
          ],
          R: [
            [...prev.R[0]],
            [prev.B[1][0], prev.B[1][1], prev.B[1][2]],
            [prev.B[2][0], prev.B[2][1], prev.B[2][2]]
          ],
          B: [
            [...prev.B[0]],
            [prev.L[1][0], prev.L[1][1], prev.L[1][2]],
            [prev.L[2][0], prev.L[2][1], prev.L[2][2]],
          ],
          L: [
            [...prev.L[0]],
            [prev.F[1][0], prev.F[1][1], prev.F[1][2]],
            [prev.F[2][0], prev.F[2][1], prev.F[2][2]],
          ]
        }
      ))
    }
  }

  const WholeCubeRotations: { [key in WholeCubeRotations]: () => void } = {
    "X": () => {
      setHistory(prev => [...prev, "X"])
      setCube(prev => (
        {
          U: [...prev.F],
          L: [
            [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
            [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
            [prev.L[0][0], prev.L[1][0], prev.L[2][0]]
          ],
          F: [...prev.D],
          R: [
            [prev.R[2][0], prev.R[1][0], prev.R[0][0]],
            [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
            [prev.R[2][2], prev.R[1][2], prev.R[0][2]]
          ],
          B: [
            [prev.U[2][2], prev.U[2][1], prev.U[2][0]],
            [prev.U[1][2], prev.U[1][1], prev.U[1][0]],
            [prev.U[0][2], prev.U[0][1], prev.U[0][0]]
          ],
          D: [
            [prev.B[2][2], prev.B[2][1], prev.B[2][0]],
            [prev.B[1][2], prev.B[1][1], prev.B[1][0]],
            [prev.B[0][2], prev.B[0][1], prev.B[0][0]]
          ]
        }
      ))
    },
    "X'": () => {
      setHistory(prev => [...prev, "X'"])
      setCube(prev => (
        {
          U: [
            [prev.B[2][2], prev.B[2][1], prev.B[2][0]],
            [prev.B[1][2], prev.B[1][1], prev.B[1][0]],
            [prev.B[0][2], prev.B[0][1], prev.B[0][0]]
          ],
          L: [
            [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
            [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
            [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
          ],
          F: [...prev.U],
          R: [
            [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
            [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
            [prev.R[0][0], prev.R[1][0], prev.R[2][0]]
          ],
          B: [
            [prev.D[2][2], prev.D[2][1], prev.D[2][0]],
            [prev.D[1][2], prev.D[1][1], prev.D[1][0]],
            [prev.D[0][2], prev.D[0][1], prev.D[0][0]]
          ],
          D: [...prev.F]
        }
      ))
    },
    "Y": () => {
      setHistory(prev => [...prev, "Y"])
      setCube(prev => (
        {
          U: [
            [prev.U[2][0], prev.U[1][0], prev.U[0][0]],
            [prev.U[2][1], prev.U[1][1], prev.U[0][1]],
            [prev.U[2][2], prev.U[1][2], prev.U[0][2]]
          ],
          L: [...prev.F],
          F: [...prev.R],
          R: [...prev.B],
          B: [...prev.L],
          D: [
            [prev.D[0][2], prev.D[1][2], prev.D[2][2]],
            [prev.D[0][1], prev.D[1][1], prev.D[2][1]],
            [prev.D[0][0], prev.D[1][0], prev.D[2][0]]
          ]
        }
      ))
    },
    "Y'": () => {
      setHistory(prev => [...prev, "Y'"])
      setCube(prev => (
        {
          U: [
            [prev.U[0][2], prev.U[1][2], prev.U[2][2]],
            [prev.U[0][1], prev.U[1][1], prev.U[2][1]],
            [prev.U[0][0], prev.U[1][0], prev.U[2][0]]
          ],
          L: [...prev.B],
          F: [...prev.L],
          R: [...prev.F],
          B: [...prev.R],
          D: [
            [prev.D[2][0], prev.D[1][0], prev.D[0][0]],
            [prev.D[2][1], prev.D[1][1], prev.D[0][1]],
            [prev.D[2][2], prev.D[1][2], prev.D[0][2]]
          ]
        }
      ))
    },
    "Z": () => {
      setHistory(prev => [...prev, "Z"])
      setCube(prev => (
        {
          U: [
            [prev.L[2][0], prev.L[1][0], prev.L[0][0]],
            [prev.L[2][1], prev.L[1][1], prev.L[0][1]],
            [prev.L[2][2], prev.L[1][2], prev.L[0][2]]
          ],
          L: [
            [prev.D[2][0], prev.D[1][0], prev.D[0][0]],
            [prev.D[2][1], prev.D[1][1], prev.D[0][1]],
            [prev.D[2][2], prev.D[1][2], prev.D[0][2]]
          ],
          F: [
            [prev.F[2][0], prev.F[1][0], prev.F[0][0]],
            [prev.F[2][1], prev.F[1][1], prev.F[0][1]],
            [prev.F[2][2], prev.F[1][2], prev.F[0][2]]
          ],
          R: [
            [prev.U[2][0], prev.U[1][0], prev.U[0][0]],
            [prev.U[2][1], prev.U[1][1], prev.U[0][1]],
            [prev.U[2][2], prev.U[1][2], prev.U[0][2]]
          ],
          B: [
            [prev.B[0][2], prev.B[1][2], prev.B[2][2]],
            [prev.B[0][1], prev.B[1][1], prev.B[2][1]],
            [prev.B[0][0], prev.B[1][0], prev.B[2][0]]
          ],
          D: [
            [prev.R[2][0], prev.R[1][0], prev.R[0][0]],
            [prev.R[2][1], prev.R[1][1], prev.R[0][1]],
            [prev.R[2][2], prev.R[1][2], prev.R[0][2]]
          ]
        }
      ))
    },
    "Z'": () => {
      setHistory(prev => [...prev, "Z'"])
      setCube(prev => (
        {
          U: [
            [prev.R[0][2], prev.R[1][2], prev.R[2][2]],
            [prev.R[0][1], prev.R[1][1], prev.R[2][1]],
            [prev.R[0][0], prev.R[1][0], prev.R[2][0]]
          ],
          L: [
            [prev.U[0][2], prev.U[1][2], prev.U[2][2]],
            [prev.U[0][1], prev.U[1][1], prev.U[2][1]],
            [prev.U[0][0], prev.U[1][0], prev.U[2][0]]
          ],
          F: [
            [prev.F[0][2], prev.F[1][2], prev.F[2][2]],
            [prev.F[0][1], prev.F[1][1], prev.F[2][1]],
            [prev.F[0][0], prev.F[1][0], prev.F[2][0]]
          ],
          R: [
            [prev.D[0][2], prev.D[1][2], prev.D[2][2]],
            [prev.D[0][1], prev.D[1][1], prev.D[2][1]],
            [prev.D[0][0], prev.D[1][0], prev.D[2][0]]
          ],
          B: [
            [prev.B[2][0], prev.B[1][0], prev.B[0][0]],
            [prev.B[2][1], prev.B[1][1], prev.B[0][1]],
            [prev.B[2][2], prev.B[1][2], prev.B[0][2]]
          ],
          D: [
            [prev.L[0][2], prev.L[1][2], prev.L[2][2]],
            [prev.L[0][1], prev.L[1][1], prev.L[2][1]],
            [prev.L[0][0], prev.L[1][0], prev.L[2][0]]
          ]
        }
      ))
    }
  }


  return {
    cube,
    history,
    Reset,
    ClockwiseMoves,
    CounterClockwiseMoves,
    SliceTurnsMoves,
    DoubleLayerMoves,
    InverseDoubleLayerMoves,
    WholeCubeRotations
  }
}

