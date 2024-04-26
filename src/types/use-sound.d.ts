declare type HookOptions<T = any> = T & {
  id?: string;
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
  onload?: () => void;
};
interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
  playbackRate?: number;
}
declare type PlayFunction = (options?: PlayOptions) => void;
interface ExposedData {
  sound: Howl | null;
  stop: (id?: string) => void;
  pause: (id?: string) => void;
  duration: number | null;
}
declare type ReturnedValue = [PlayFunction, ExposedData];

declare module 'use-sound' {
  export default function useSound<T = any>(
    src: string | string[],
    { id, volume, playbackRate, soundEnabled, interrupt, onload, ...delegated }?: HookOptions<T>
  ): ReturnedValue;
}
