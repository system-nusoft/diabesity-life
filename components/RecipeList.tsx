"use client";

import { Card } from "@/components/ui/card";
import { Recipe } from "@/lib/recipeContent";
import Link from "next/link";

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  const getSugarLevelColor = (level: "Low" | "Medium" | "High") => {
    switch (level) {
      case "Low":
        return "bg-green-600";
      case "Medium":
        return "bg-yellow-600";
      case "High":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-12">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
        Recipes
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, idx) => (
          <Link key={idx} href={`/recipes/${recipe.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg rounded-none transition-shadow bg-white cursor-pointer h-full pb-6 pt-0">
              <div className="relative h-48 bg-gray-200">
                <img
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between px-4 h-48">
                <h3 className="font-bold text-gray-900 text-xl leading-tight">
                  {recipe.title}
                </h3>

                {/* Nutrition Info Grid */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {/* Calories */}
                  <div className="bg-blue-50 p-3">
                    <div className="text-xs text-gray-600 mb-1">KCal</div>
                    <div className="text-lg font-bold text-primary">
                      {recipe.calories}
                    </div>
                  </div>

                  {/* Carbs */}
                  <div className="bg-purple-50 p-3">
                    <div className="text-xs text-gray-600 mb-1">Carbs</div>
                    <div className="text-lg font-bold">{recipe.carbs}</div>
                  </div>

                  {/* Sugars with Level Badge */}
                  <div className={`bg-primary p-3 text-white`}>
                    <div className="text-xs mb-1">Sugars</div>
                    <div className="text-lg font-bold">{recipe.sugars}</div>
                    <div className="text-xs mt-1">({recipe.sugarLevel})</div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
