
export type Color = "bg-gray-500" | "bg-yellow-500" | "bg-red-500" | "bg-orange-500" | "bg-blue-500" | "bg-green-500"

export type Face = "F" | "B" | "U" | "D" | "L" | "R"

export type ClockwiseFaceRotation = "U" | "L" | "F" | "R" | "B" | "D"

export type ClockwiseFaceRotationFunctions = { [key in ClockwiseFaceRotation]: () => void }

export type CounterClockwiseFaceRotation = "U'" | "L'" | "F'" | "R'" | "B'" | "D'"

export type CounterClockwiseFaceRotationFunctions = { [key in CounterClockwiseFaceRotation]: () => void }

export type SlycesTurns = "M" | "M'" | "E" | "E'" | "S" | "S'"

export type SlycesTurnsFunctions = { [key in SlycesTurns]: () => void }

export type DoubleLayerTurns = "u" | "l" | "f" | "r" | "b" | "d"

export type DoubleLayerTurnsFunctions = { [key in DoubleLayerTurns]: () => void }

export type InverseDoubleLayerTurns = "u'" | "l'" | "f'" | "r'" | "b'" | "d'"

export type InverseDoubleLayerTurnsFunctions = { [key in InverseDoubleLayerTurns]: () => void }

export type WholeCubeRotations = "X" | "X'" | "Y" | "Y'" | "Z" | "Z'"

export type WholeCubeRotationsFunctions = { [key in WholeCubeRotations]: () => void }

export type CubeActions = ClockwiseFaceRotation | CounterClockwiseFaceRotation | SlycesTurns | DoubleLayerTurns | InverseDoubleLayerTurns | WholeCubeRotations

export type RubiksCube = { [key in Face]: Color[][] }

export type FaceIndex = 0 | 1 | 2

export type Position = [Face, FaceIndex, FaceIndex]

export type Edge = [Position, Position]

export type Corner = [Position, Position, Position]

export const Edges = {
  "UL": [["U", 1, 0], ["L", 0, 1]],
  "UF": [["U", 2, 1], ["F", 0, 1]],
  "UR": [["U", 1, 2], ["R", 0, 1]],
  "UB": [["U", 0, 1], ["B", 0, 1]],
  "LF": [["L", 1, 2], ["F", 1, 0]],
  "FR": [["F", 1, 2], ["R", 1, 0]],
  "RB": [["R", 1, 2], ["B", 1, 0]],
  "BL": [["B", 1, 2], ["L", 1, 0]],
  "DL": [["D", 1, 0], ["L", 2, 0]],
  "DF": [["D", 0, 1], ["F", 2, 0]],
  "DR": [["D", 1, 2], ["R", 2, 0]],
  "DB": [["D", 2, 1], ["B", 2, 0]]
}

export const Corners = {
  "ULF": [["U", 2, 0], ["L", 0, 2], ["F", 0, 0]],
  "UFR": [["U", 2, 2], ["F", 0, 2], ["R", 0, 0]],
  "URB": [["U", 0, 2], ["R", 0, 2], ["B", 0, 0]],
  "UBL": [["U", 0, 0], ["B", 0, 2], ["L", 0, 0]],
  "DLF": [["D", 0, 0], ["L", 2, 2], ["F", 2, 0]],
  "DFR": [["D", 0, 2], ["F", 2, 2], ["R", 2, 0]],
  "DRB": [["D", 2, 2], ["R", 2, 2], ["B", 2, 0]],
  "DBL": [["D", 2, 0], ["B", 2, 2], ["L", 2, 0]],
}