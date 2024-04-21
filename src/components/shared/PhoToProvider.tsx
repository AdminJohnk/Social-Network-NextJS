import { PhotoProvider as PhotoView } from 'react-photo-view';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';
import { LuRotateCw } from 'react-icons/lu';
import { GoScreenFull } from 'react-icons/go';

export interface IPhoToProviderProps {
  children: React.ReactNode;
}

export default function PhoToProvider({ children }: IPhoToProviderProps) {
  let fullScreen = false;
  return (
    <PhotoView
      speed={() => 500}
      easing={type =>
        type === 2
          ? 'cubic-bezier(0.36, 0, 0.66, -0.56)'
          : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
      toolbarRender={({ onScale, scale, rotate, onRotate }) => {
        return (
          <div className='flex gap-5 *:size-6  text-text-2 hover:text-text-1 cursor-pointer duration-300'>
            <BsZoomIn onClick={() => onScale(scale + 1)} />
            <BsZoomOut onClick={() => onScale(scale - 1)} />
            <LuRotateCw onClick={() => onRotate(rotate + 90)} />
            <GoScreenFull
              onClick={() => {
                fullScreen
                  ? document.exitFullscreen()
                  : document.documentElement.requestFullscreen();
                fullScreen = !fullScreen;
              }}
            />
          </div>
        );
      }}
    >
      {children}
    </PhotoView>
  );
}
