export interface FFMpegStatus {
  frame: number;
  fps: number;
  q: number;
  size: number;
  time: number;
  bitrate: number;
  speed: number;
}

export interface EncodeStatus {
  encodeId: number;
  eta: number;
  speed: number;
  progress: number;
}