import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary hover:bg-primary/90 border-2 border-primary text-white px-6 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        secondary:
          "bg-secondary hover:bg-secondary/90 border-2 border-secondary text-white px-6 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        gray: "bg-gray-600 hover:bg-gray-600/90 text-white border-2 border-gray-600 px-6 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        filledOrange:
          "bg-[#ff9d5c] hover:bg-[#ff9d5c]/90 border-2 border-[#ff9d5c] text-white px-8 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        blurry:
          "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-2",
        outlined:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-2 h-fit",
        outlinedOrange:
          "border-2 border-[#ff9d5c] text-white hover:bg-[#ff9d5c] transition-colors font-semibold px-8 py-2",
      },
      size: {
        default: "text-md md:text-lg",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        contact: "w-36 h-16",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
