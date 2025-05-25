
import React from "react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  title: string;
  meta: string;
  description: string;
  icon: React.ReactNode;
  status: string;
  tags: string[];
  className?: string;
}

export const BenefitCard = ({
  title,
  meta,
  description,
  icon,
  status,
  tags,
  className
}: BenefitCardProps) => {
  return (
    <div className={cn(
      "group relative p-6 rounded-xl overflow-hidden transition-all duration-300",
      "bg-gray-900 border border-gray-700 hover:border-alphagence-gold/30",
      "hover:shadow-[0_8px_32px_rgba(176,141,87,0.2)] hover:-translate-y-1",
      "w-full h-[280px] flex flex-col justify-between",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-alphagence-gold/5 via-transparent to-alphagence-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-alphagence-gold/10 group-hover:bg-alphagence-gold/20 transition-colors">
            {icon}
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-alphagence-gold/20 text-alphagence-gold border border-alphagence-gold/30">
            {status}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-alphagence-gold text-lg leading-tight">
            {title}
            <span className="block text-sm text-gray-400 font-normal mt-1">
              {meta}
            </span>
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-alphagence-gold/10 text-alphagence-gold/80 border border-alphagence-gold/20"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
