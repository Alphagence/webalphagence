
import { 
  ContainerScroll,
  ContainerSticky,
  GalleryCol,
  GalleryContainer 
} from "@/components/ui/animated-gallery";
import { portfolioItemsCol1, portfolioItemsCol2, portfolioItemsCol3 } from "./PortfolioData";
import PortfolioItemComponent from "./PortfolioItem";

const PortfolioGallery = () => {
  return (
    <div className="relative bg-black">
      <div className="pointer-events-none absolute z-10 h-[40vh] w-full"
        style={{
          background: "linear-gradient(to right, #111, #B08D57, #333)",
          filter: "blur(94px)",
          mixBlendMode: "overlay",
          opacity: 0.3,
        }}
      />

      <ContainerScroll className="relative h-[250vh]">
        <ContainerSticky className="h-[80vh]">
          <GalleryContainer>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {portfolioItemsCol1.map((item, index) => (
                <PortfolioItemComponent key={index} item={item} />
              ))}
            </GalleryCol>

            <GalleryCol className="mt-[-30%]" yRange={["15%", "5%"]}>
              {portfolioItemsCol2.map((item, index) => (
                <PortfolioItemComponent key={index} item={item} />
              ))}
            </GalleryCol>

            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {portfolioItemsCol3.map((item, index) => (
                <PortfolioItemComponent key={index} item={item} />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  );
};

export default PortfolioGallery;
