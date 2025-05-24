
"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#B08D57", "#FFD700", "#FFF"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          {title}
        </h2>
        <p className="text-gray-300 text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center mb-10 gap-4">
        <span className="font-semibold text-white">Mensuel</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative data-[state=checked]:bg-alphagence-gold data-[state=unchecked]:bg-gray-600"
            />
          </Label>
        </label>
        <span className="font-semibold text-white">
          Annuel <span className="text-alphagence-gold">(Économisez 20%)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              y: plan.isPopular ? -20 : 0,
              opacity: 1,
              scale: plan.isPopular ? 1.05 : 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            className={cn(
              "rounded-2xl border-2 p-8 bg-gray-900 text-center relative flex flex-col",
              plan.isPopular ? "border-alphagence-gold shadow-2xl shadow-alphagence-gold/20" : "border-gray-700"
            )}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-alphagence-gold text-black px-6 py-2 rounded-full flex items-center">
                <Star className="h-4 w-4 fill-current mr-1" />
                <span className="font-semibold">Le plus populaire</span>
              </div>
            )}
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-alphagence-gold mb-2">
                {plan.name}
              </h3>
              
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums text-white"
                  />
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-400">
                  CHF / {plan.period}
                </span>
              </div>

              <p className="text-sm leading-5 text-gray-400 mb-8">
                {isMonthly ? "facturé mensuellement" : "facturé annuellement"}
              </p>

              <p className="text-gray-300 mb-6">{plan.description}</p>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-alphagence-gold mt-0.5 flex-shrink-0" />
                    <span className="text-left text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",
                  plan.isPopular
                    ? "bg-alphagence-gold text-black hover:bg-alphagence-gold/90"
                    : "bg-gray-800 text-white border-2 border-alphagence-gold hover:bg-alphagence-gold hover:text-black"
                )}
              >
                {plan.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
