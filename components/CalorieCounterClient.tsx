"use client";

import { useState, useRef, useCallback } from "react";
import { Search, X, ChevronDown, ChevronUp } from "lucide-react";

interface FoodNutrient {
  nutrientName: string;
  value: number;
  unitName: string;
}

interface FoodItem {
  fdcId: number;
  description: string;
  foodCategory?: string;
  brandName?: string;
  servingSize?: number;
  servingSizeUnit?: string;
  foodNutrients: FoodNutrient[];
}

function getNutrient(food: FoodItem, name: string): number | null {
  const n = food.foodNutrients.find((fn) =>
    fn.nutrientName.toLowerCase().includes(name.toLowerCase())
  );
  return n ? Math.round(n.value * 10) / 10 : null;
}

export default function CalorieCounterClient() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchFood = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      const res = await fetch(
        `/api/food-search?query=${encodeURIComponent(searchQuery)}`
      );
      const data = await res.json();
      setResults(data.foods || []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleInputChange = (value: string) => {
    setQuery(value);
  };

  const handleSearch = () => {
    searchFood(query);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setSearched(false);
    setExpandedId(null);
    setQuantities({});
  };

  const getQuantity = (id: number) => quantities[id] || 1;

  const setQuantity = (id: number, val: number) => {
    if (val < 0.25) val = 0.25;
    setQuantities((prev) => ({ ...prev, [id]: Math.round(val * 100) / 100 }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Calorie Counter
            </h1>
            <p className="text-gray-700 text-md leading-relaxed max-w-2xl mx-auto">
              Search any food item to see its calorie content and nutritional
              breakdown. Adjust the quantity to match your serving.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Search Bar */}
          <div className="bg-white border border-gray-200 shadow-sm p-6 mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Food
            </label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. chicken breast, honey, apple..."
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                {query && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-all"
              >
                Search
              </button>
            </div>
          </div>

          {/* Results */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-primary rounded-full animate-spin" />
              <p className="text-gray-500 mt-3">Searching foods...</p>
            </div>
          )}

          {!loading && searched && results.length === 0 && (
            <div className="text-center py-12 bg-white border border-gray-200 shadow-sm">
              <p className="text-gray-500 text-lg">
                No results found for &quot;{query}&quot;
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Try a different search term
              </p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm text-gray-500 mb-4">
                {results.length} result{results.length !== 1 && "s"} found
              </p>
              {results.map((food) => {
                const calories = getNutrient(food, "Energy");
                const protein = getNutrient(food, "Protein");
                const totalFat = getNutrient(food, "Total lipid");
                const carbs = getNutrient(food, "Carbohydrate");
                const fiber = getNutrient(food, "Fiber");
                const sugar = getNutrient(food, "Sugars, total");
                const sodium = getNutrient(food, "Sodium");
                const cholesterol = getNutrient(food, "Cholesterol");

                const isExpanded = expandedId === food.fdcId;
                const qty = getQuantity(food.fdcId);

                const servingSize = food.servingSize || 100;
                const servingUnit = food.servingSizeUnit || "g";

                return (
                  <div
                    key={food.fdcId}
                    className="bg-white border border-gray-200 shadow-sm overflow-hidden"
                  >
                    {/* Food Header */}
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : food.fdcId)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 capitalize">
                          {food.description.toLowerCase()}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                          {food.foodCategory && (
                            <span className="text-xs text-gray-500">
                              {food.foodCategory}
                            </span>
                          )}
                          {food.brandName && (
                            <span className="text-xs text-gray-500">
                              {food.brandName}
                            </span>
                          )}
                          <span className="text-xs text-gray-400">
                            per {servingSize}
                            {servingUnit}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 ml-4">
                        {calories !== null && (
                          <span className="text-lg font-bold text-primary whitespace-nowrap">
                            {calories} kcal
                          </span>
                        )}
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                    </button>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-gray-100">
                        {/* Quantity Adjuster */}
                        <div className="flex items-center gap-4 py-4">
                          <span className="text-sm font-medium text-gray-700">
                            Quantity:
                          </span>
                          <div className="flex items-center border border-gray-300">
                            <button
                              onClick={() =>
                                setQuantity(food.fdcId, qty - 0.25)
                              }
                              className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors font-medium"
                            >
                              &minus;
                            </button>
                            <input
                              type="number"
                              value={qty}
                              onChange={(e) =>
                                setQuantity(
                                  food.fdcId,
                                  parseFloat(e.target.value) || 0.25
                                )
                              }
                              step="0.25"
                              min="0.25"
                              className="w-16 text-center py-2 border-x border-gray-300 focus:outline-none"
                            />
                            <button
                              onClick={() =>
                                setQuantity(food.fdcId, qty + 0.25)
                              }
                              className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors font-medium"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-sm text-gray-500">
                            &times; {servingSize}
                            {servingUnit} ={" "}
                            <strong>
                              {Math.round(servingSize * qty)}
                              {servingUnit}
                            </strong>
                          </span>
                        </div>

                        {/* Calories with quantity */}
                        {calories !== null && (
                          <div className="bg-primary/5 border border-primary/20 px-4 py-3 mb-4 flex items-center justify-between">
                            <span className="font-medium text-gray-900">
                              Total Calories
                            </span>
                            <span className="text-2xl font-bold text-primary">
                              {Math.round(calories * qty)} kcal
                            </span>
                          </div>
                        )}

                        {/* Nutrition Breakdown */}
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                          Nutrition Breakdown
                          <span className="font-normal text-gray-500">
                            {" "}
                            (per {Math.round(servingSize * qty)}
                            {servingUnit})
                          </span>
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {protein !== null && (
                            <div className="bg-blue-50 p-3 text-center">
                              <p className="text-xs text-blue-600 font-medium">
                                Protein
                              </p>
                              <p className="text-lg font-bold text-blue-700">
                                {Math.round(protein * qty * 10) / 10}g
                              </p>
                            </div>
                          )}
                          {carbs !== null && (
                            <div className="bg-amber-50 p-3 text-center">
                              <p className="text-xs text-amber-600 font-medium">
                                Carbs
                              </p>
                              <p className="text-lg font-bold text-amber-700">
                                {Math.round(carbs * qty * 10) / 10}g
                              </p>
                            </div>
                          )}
                          {totalFat !== null && (
                            <div className="bg-red-50 p-3 text-center">
                              <p className="text-xs text-red-600 font-medium">
                                Fat
                              </p>
                              <p className="text-lg font-bold text-red-700">
                                {Math.round(totalFat * qty * 10) / 10}g
                              </p>
                            </div>
                          )}
                          {fiber !== null && (
                            <div className="bg-green-50 p-3 text-center">
                              <p className="text-xs text-green-600 font-medium">
                                Fiber
                              </p>
                              <p className="text-lg font-bold text-green-700">
                                {Math.round(fiber * qty * 10) / 10}g
                              </p>
                            </div>
                          )}
                          {sugar !== null && (
                            <div className="bg-pink-50 p-3 text-center">
                              <p className="text-xs text-pink-600 font-medium">
                                Sugar
                              </p>
                              <p className="text-lg font-bold text-pink-700">
                                {Math.round(sugar * qty * 10) / 10}g
                              </p>
                            </div>
                          )}
                          {sodium !== null && (
                            <div className="bg-purple-50 p-3 text-center">
                              <p className="text-xs text-purple-600 font-medium">
                                Sodium
                              </p>
                              <p className="text-lg font-bold text-purple-700">
                                {Math.round(sodium * qty * 10) / 10}mg
                              </p>
                            </div>
                          )}
                          {cholesterol !== null && (
                            <div className="bg-orange-50 p-3 text-center">
                              <p className="text-xs text-orange-600 font-medium">
                                Cholesterol
                              </p>
                              <p className="text-lg font-bold text-orange-700">
                                {Math.round(cholesterol * qty * 10) / 10}mg
                              </p>
                            </div>
                          )}
                        </div>

                        {/* <p className="text-xs text-gray-400 mt-4">
                          Source: USDA FoodData Central
                        </p> */}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
