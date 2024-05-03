import LightGallery, { LightGalleryProps } from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-rotate.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

export interface IImageGalleryProps extends LightGalleryProps {
  children?: React.ReactNode;
  elementClassNames: string;
}

export default function ImageGallery({
  children,
  elementClassNames,
  ...props
}: IImageGalleryProps) {
  return (
    <LightGallery
      {...props}
      speed={400}
      licenseKey='12345_example'
      mode='lg-slide'
      elementClassNames={elementClassNames}
      plugins={[
        lgThumbnail,
        lgZoom,
        lgAutoplay,
        lgFullscreen,
        lgRotate,
        lgShare
      ]}
    >
      {children}
    </LightGallery>
  );
}
