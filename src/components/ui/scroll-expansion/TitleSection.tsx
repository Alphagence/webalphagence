
import { motion } from 'framer-motion';

interface TitleSectionProps {
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textTranslateX: number;
  textBlend?: boolean;
  scrollProgress?: number;
}

const TitleSection = ({
  title,
  date,
  scrollToExpand,
  textTranslateX,
  textBlend,
  scrollProgress = 0,
}: TitleSectionProps) => {
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <>
      <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
        {date && (
          <motion.p
            className="text-2xl text-alphagence-gold"
            style={{ 
              transform: `translateX(-${textTranslateX}vw)`,
              opacity: 1 - (scrollProgress * 0.5) 
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            {date}
          </motion.p>
        )}
        {scrollToExpand && (
          <motion.p
            className="text-alphagence-gold font-medium text-center mt-2"
            style={{ transform: `translateX(${textTranslateX}vw)` }}
            animate={{
              y: [0, 8, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {scrollToExpand}
          </motion.p>
        )}
      </div>

      <div
        className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
          textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
        }`}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-alphagence-gold transition-none"
          style={{ transform: `translateX(-${textTranslateX}vw)` }}
          animate={{
            textShadow: [
              "0 0 0px rgba(176, 141, 87, 0)",
              "0 0 5px rgba(176, 141, 87, 0.5)",
              "0 0 0px rgba(176, 141, 87, 0)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          {firstWord}
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-alphagence-gold transition-none"
          style={{ transform: `translateX(${textTranslateX}vw)` }}
          animate={{
            textShadow: [
              "0 0 0px rgba(176, 141, 87, 0)",
              "0 0 5px rgba(176, 141, 87, 0.5)",
              "0 0 0px rgba(176, 141, 87, 0)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {restOfTitle}
        </motion.h2>
      </div>
    </>
  );
};

export default TitleSection;
