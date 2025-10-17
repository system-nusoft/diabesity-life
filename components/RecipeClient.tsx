"use client";

import { Recipe } from "@/lib/recipeContent";
import { Clock, Users } from "lucide-react";

interface RecipeClientProps {
  recipe: Recipe;
}

export default function RecipeClient({ recipe }: RecipeClientProps) {
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
    <div className="flex flex-col">
      {/* Recipe Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {recipe.title}
          </h1>

          {/* Time and Servings Info */}
          {(recipe.prepTime || recipe.cookTime || recipe.servings) && (
            <div className="flex flex-wrap gap-6 mb-8 text-gray-600">
              {recipe.prepTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
              )}
              {recipe.cookTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Cook: {recipe.cookTime}</span>
                </div>
              )}
              {recipe.servings && (
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Serves: {recipe.servings}</span>
                </div>
              )}
            </div>
          )}

          {/* Featured Image */}
          <div className="mb-12 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.imageAlt}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Nutrition Facts Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nutrition Facts
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Calories */}
              <div className="bg-white p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">Calories</div>
                <div className="text-2xl font-bold text-primary">
                  {recipe.calories}
                </div>
                <div className="text-xs text-gray-500">kcal</div>
              </div>

              {/* Carbs */}
              <div className="bg-white p-4 text-center">
                <div className="text-sm text-gray-600 mb-1">Carbs</div>
                <div className="text-2xl font-bold">{recipe.carbs}</div>
              </div>

              {/* Sugars */}
              <div className={`bg-primary p-4 text-center text-white`}>
                <div className="text-sm mb-1">Sugars</div>
                <div className="text-2xl font-bold">{recipe.sugars}</div>
                <div className="text-xs mt-1">({recipe.sugarLevel})</div>
              </div>

              {/* Protein */}
              {recipe.nutritionFacts?.protein && (
                <div className="bg-white p-4 text-center">
                  <div className="text-sm text-gray-600 mb-1">Protein</div>
                  <div className="text-2xl font-bold">
                    {recipe.nutritionFacts.protein}
                  </div>
                </div>
              )}
            </div>

            {/* Additional Nutrition Info */}
            {recipe.nutritionFacts && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {recipe.nutritionFacts.fat && (
                  <div className="bg-white p-3 text-center">
                    <div className="text-xs text-gray-600">Fat</div>
                    <div className="text-lg font-semibold text-gray-800">
                      {recipe.nutritionFacts.fat}
                    </div>
                  </div>
                )}
                {recipe.nutritionFacts.fiber && (
                  <div className="bg-white p-3 text-center">
                    <div className="text-xs text-gray-600">Fiber</div>
                    <div className="text-lg font-semibold text-gray-800">
                      {recipe.nutritionFacts.fiber}
                    </div>
                  </div>
                )}
                {recipe.nutritionFacts.sodium && (
                  <div className="bg-white p-3 text-center">
                    <div className="text-xs text-gray-600">Sodium</div>
                    <div className="text-lg font-semibold text-gray-800">
                      {recipe.nutritionFacts.sodium}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Recipe Content */}
          <div className="prose prose-lg max-w-none">{recipe.content}</div>
        </div>
      </article>
    </div>
  );
}
