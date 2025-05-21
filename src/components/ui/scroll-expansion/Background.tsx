
import { motion } from 'framer-motion';

interface BackgroundProps {
  bgImageSrc: string;
  scrollProgress: number;
  bgColor?: string;
}

const Background = ({ bgImageSrc, scrollProgress, bgColor = 'bg-alphagence-black' }: BackgroundProps) => {
  return (
    <motion.div
      className={`absolute inset-0 z-0 h-full ${bgColor}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 - scrollProgress }}
      transition={{ duration: 0.1 }}
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
      <div className="absolute inset-0 bg-black/40" />
    </motion.div>
  );
};

export default Background;
