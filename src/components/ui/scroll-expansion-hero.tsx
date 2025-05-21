
'use client';

import { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollExpansion } from '@/hooks/useScrollExpansion';
import Background from './scroll-expansion/Background';
import MediaContent from './scroll-expansion/MediaContent';
import TitleSection from './scroll-expansion/TitleSection';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
  bgColor?: string;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand = "Défilez pour explorer",
  textBlend,
  children,
  bgColor = 'bg-alphagence-black',
}: ScrollExpandMediaProps) => {
  const {
    scrollProgress,
    showContent,
    isMobileState,
    sectionRef,
    resetStates
  } = useScrollExpansion();

  useEffect(() => {
    resetStates();
  }, [mediaType, resetStates]);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  return (
    <div
      ref={sectionRef}
      className={`transition-colors duration-700 ease-in-out overflow-x-hidden ${bgColor}`}
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          <Background 
            bgImageSrc={bgImageSrc} 
            scrollProgress={scrollProgress} 
            bgColor={bgColor} 
          />

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <MediaContent 
                mediaType={mediaType}
                mediaSrc={mediaSrc}
                posterSrc={posterSrc}
                title={title}
                scrollProgress={scrollProgress}
                mediaWidth={mediaWidth}
                mediaHeight={mediaHeight}
              />

              <TitleSection 
                title={title}
                date={date}
                scrollToExpand={scrollToExpand}
                textTranslateX={textTranslateX}
                textBlend={textBlend}
              />
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
