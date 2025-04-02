declare module 'flubber' {
    export function interpolate(
      fromShape: string,
      toShape: string,
      options?: { maxSegmentLength?: number }
    ): (t: number) => string
  
    export function interpolateAll(
      shapes: string[],
      options?: { maxSegmentLength?: number }
    ): (t: number) => string
  }
  