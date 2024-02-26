
export type Color = "bg-gray-500" | "bg-yellow-500" | "bg-red-500" | "bg-orange-500" | "bg-blue-500" | "bg-green-500"

export type Face = "F" | "B" | "U" | "D" | "L" | "R"

export type ClockwiseFaceRotation = "U" | "L" | "F" | "R" | "B" | "D"

export type CounterClockwiseFaceRotation = "U'" | "L'" | "F'" | "R'" | "B'" | "D'"

export type SlycesTurns = "M" | "M'" | "E" | "E'" | "S" | "S'"

export type DoubleLayerTurns = "u" | "l" | "f" | "r" | "b" | "d"

export type InverseDoubleLayerTurns = "u'" | "l'" | "f'" | "r'" | "b'" | "d'"

export type WholeCubeRotations = "X" | "X'" | "Y" | "Y'" | "Z" | "Z'"

export type CubeActions = ClockwiseFaceRotation | CounterClockwiseFaceRotation | SlycesTurns | DoubleLayerTurns | InverseDoubleLayerTurns | WholeCubeRotations

export type RubiksCube = {
  [key in Face]: Color[][];
};