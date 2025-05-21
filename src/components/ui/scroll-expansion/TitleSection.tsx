
import { motion } from 'framer-motion';

interface TitleSectionProps {
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textTranslateX: number;
  textBlend?: boolean;
}

const TitleSection = ({
  title,
  date,
  scrollToExpand,
  textTranslateX,
  textBlend,
}: TitleSectionProps) => {
  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <>
      <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
        {date && (
          <p
            className="text-2xl text-alphagence-gold"
            style={{ transform: `translateX(-${textTranslateX}vw)` }}
          >
            {date}
          </p>
        )}
        {scrollToExpand && (
          <p
            className="text-alphagence-gold font-medium text-center"
            style={{ transform: `translateX(${textTranslateX}vw)` }}
          >
            {scrollToExpand}
          </p>
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
        >
          {firstWord}
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-alphagence-gold transition-none"
          style={{ transform: `translateX(${textTranslateX}vw)` }}
        >
          {restOfTitle}
        </motion.h2>
      </div>
    </>
  );
};

export default TitleSection;
