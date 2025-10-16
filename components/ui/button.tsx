import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed outline-none",
  {
    variants: {
      variant: {
        primary: "bg-primary hover:bg-primary/90 text-white px-8 py-3",
        filledOrange:
          "bg-[#ff9d5c] hover:bg-[#ff9d5c]/90 border-2 border-[#ff9d5c] text-white px-8 py-3",
        blurry:
          "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3",
        outlined:
          "border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 h-fit",
        outlinedOrange:
          "border-2 border-[#ff9d5c] text-white hover:bg-[#ff9d5c] transition-colors font-semibold px-8 py-3",
      },
      size: {
        default: "text-sm md:text-lg",
        sm: "text-sm",
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
