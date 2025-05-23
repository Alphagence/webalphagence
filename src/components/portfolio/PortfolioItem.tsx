
import { Button } from "@/components/ui/button";
import { PortfolioItem } from "./PortfolioData";

interface PortfolioItemProps {
  item: PortfolioItem;
}

const PortfolioItemComponent = ({ item }: PortfolioItemProps) => {
  return (
    <div className="relative group">
      <img
        className="aspect-video block h-auto w-full rounded-md object-cover shadow transition-transform duration-300 group-hover:scale-[1.02]"
        src={item.imageUrl}
        alt={item.title}
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-md">
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-white/80">{item.description}</p>
        <Button
          variant="ghost"
          className="text-alphagence-gold hover:text-alphagence-gold/90 hover:bg-alphagence-gold/10 p-0 text-sm mt-2 w-fit"
        >
          Voir le projet
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <path
              d="M1 7H13M13 7L7 1M13 7L7 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default PortfolioItemComponent;
