export interface IPoint {
    readonly x: number,
    readonly y: number
}

export interface IViewer {
    show(): void
    remove(): void
}

export type Shape = IPoint[]

export enum Direction {
    left,
    right,
    down
}