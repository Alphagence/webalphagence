
import { motion } from 'framer-motion';

interface MediaContentProps {
  mediaType: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  title?: string;
  scrollProgress: number;
  mediaWidth: number;
  mediaHeight: number;
}

const MediaContent = ({
  mediaType,
  mediaSrc,
  posterSrc,
  title,
  scrollProgress,
  mediaWidth,
  mediaHeight,
}: MediaContentProps) => {
  return (
    <motion.div
      className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden"
      style={{
        width: `${mediaWidth}px`,
        height: `${mediaHeight}px`,
        maxWidth: '95vw',
        maxHeight: '85vh',
      }}
      initial={{ boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)' }}
      animate={{ 
        boxShadow: `0px 0px ${20 + scrollProgress * 30}px rgba(176, 141, 87, ${0.3 + scrollProgress * 0.2})` 
      }}
      transition={{ duration: 0.3 }}
    >
      {mediaType === 'video' ? (
        mediaSrc.includes('youtube.com') ? (
          <YoutubeVideo mediaSrc={mediaSrc} scrollProgress={scrollProgress} />
        ) : (
          <VideoElement 
            mediaSrc={mediaSrc} 
            posterSrc={posterSrc} 
            scrollProgress={scrollProgress} 
          />
        )
      ) : (
        <ImageElement 
          mediaSrc={mediaSrc} 
          title={title} 
          scrollProgress={scrollProgress} 
        />
      )}
    </motion.div>
  );
};

const YoutubeVideo = ({ mediaSrc, scrollProgress }: { mediaSrc: string, scrollProgress: number }) => (
  <div className="relative w-full h-full pointer-events-none">
    <iframe
      width="100%"
      height="100%"
      src={
        mediaSrc.includes('embed')
          ? mediaSrc +
            (mediaSrc.includes('?') ? '&' : '?') +
            'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
          : mediaSrc.replace('watch?v=', 'embed/') +
            '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
            mediaSrc.split('v=')[1]
      }
      className="w-full h-full rounded-xl"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
    <div
      className="absolute inset-0 z-10"
      style={{ pointerEvents: 'none' }}
    ></div>

    <motion.div
      className="absolute inset-0 bg-black/30 rounded-xl"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
      transition={{ duration: 0.2 }}
    />
  </div>
);

const VideoElement = ({ mediaSrc, posterSrc, scrollProgress }: { mediaSrc: string, posterSrc?: string, scrollProgress: number }) => (
  <div className="relative w-full h-full pointer-events-none">
    <video
      src={mediaSrc}
      poster={posterSrc}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="w-full h-full object-cover rounded-xl transform scale-100"
      style={{
        transform: `scale(${1 + scrollProgress * 0.05})`,
        transition: 'transform 0.2s ease-out',
      }}
      controls={false}
    />
    <div
      className="absolute inset-0 z-10"
      style={{ pointerEvents: 'none' }}
    ></div>

    <motion.div
      className="absolute inset-0 bg-black/30 rounded-xl"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
      transition={{ duration: 0.2 }}
    />
  </div>
);

const ImageElement = ({ mediaSrc, title, scrollProgress }: { mediaSrc: string, title?: string, scrollProgress: number }) => (
  <div className="relative w-full h-full">
    <img
      src={mediaSrc}
      alt={title || 'Media content'}
      className="w-full h-full object-cover rounded-xl"
      style={{
        transform: `scale(${1 + scrollProgress * 0.05})`,
        transition: 'transform 0.2s ease-out',
      }}
    />

    <motion.div
      className="absolute inset-0 bg-black/50 rounded-xl"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
      transition={{ duration: 0.2 }}
    />
  </div>
);

export default MediaContent;
