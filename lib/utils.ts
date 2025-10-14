import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Category = "Education" | "Health" | "Diet" | "Recipes";

export const getCategoryGradient = (category: Category): string => {
  const gradients: Record<Category, string> = {
    Education:
      "border-2 border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-0",
    Health:
      "border-2 border-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-0",
    Diet: "border-2 border-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-0",
    Recipes:
      "border-2 border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-0",
  };
  return gradients[category];
};