
import { motion } from 'framer-motion';

interface BackgroundProps {
  bgImageSrc: string;
  scrollProgress: number;
  bgColor?: string;
}

const Background = ({ bgImageSrc, scrollProgress, bgColor = 'bg-alphagence-black' }: BackgroundProps) => {
  return (
    <motion.div
      className={`absolute inset-0 z-0 h-full ${bgColor} overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 - scrollProgress }}
      transition={{ duration: 0.1 }}
    >
      <div 
        className="absolute inset-0 w-screen h-screen"
        style={{
          transform: `translateY(${scrollProgress * 50}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <img
          src={bgImageSrc}
          alt="Background"
          className="w-screen h-screen object-cover object-center"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      <div 
        className="absolute inset-0 bg-black/40"
        style={{
          opacity: 0.4 + (scrollProgress * 0.2),
          transition: 'opacity 0.2s ease-out',
        }}  
      />
    </motion.div>
  );
};

export default Background;
