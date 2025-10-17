import {
  Heading,
  Highlights,
  List,
  Paragraph,
} from "@/components/BlogTemplate";

export interface Recipe {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  calories: number;
  carbs: string;
  sugars: string;
  sugarLevel: "Low" | "Medium" | "High";
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  nutritionFacts?: {
    protein?: string;
    fat?: string;
    fiber?: string;
    sodium?: string;
  };
  content: React.ReactNode;
}

export const recipes: Record<string, Recipe> = {
  "eggplant-spinach-curry": {
    slug: "eggplant-spinach-curry",
    title: "Eggplant & Spinach Curry (Baingan Palak)",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2070",
    imageAlt: "Eggplant and spinach curry in a bowl",
    calories: 136,
    carbs: "10g",
    sugars: "4g",
    sugarLevel: "Low",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: 2,
    nutritionFacts: {
      protein: "4g",
      fat: "8g",
      fiber: "6g",
      sodium: "120mg",
    },
    content: (
      <>
        <Paragraph>
          A hearty vegetarian curry featuring{" "}
          <strong>brinjals (eggplant)</strong> and{" "}
          <strong>palak (spinach)</strong>. This dish is packed with fiber,
          antioxidants, and has a <strong>very low glycemic index</strong> —
          ideal for keeping blood sugar stable. The combination of eggplant and
          leafy greens supports weight management and improved insulin
          sensitivity.
        </Paragraph>

        <Highlights title="Health Highlights: Low-GI & High-Fiber">
          <Paragraph>
            Made mostly from non-starchy veggies (eggplant, spinach), this curry
            has a low GI and helps stabilize blood sugars. High fiber content
            promotes fullness and aids diabetes management. Approx. 10g carbs
            per serving.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves 2)</Heading>
        <Paragraph>
          <em>Calories: ~136 kcal per serving</em>
        </Paragraph>
        <List
          items={[
            "2 medium eggplants (baingan), cut into cubes",
            "2 cups fresh spinach leaves, chopped",
            "1 medium onion, finely chopped",
            "2 tomatoes, chopped",
            "2 cloves garlic, minced",
            "1 inch ginger, grated",
            "1 tsp turmeric powder",
            "1 tsp cumin powder",
            "1 tsp coriander powder",
            "½ tsp garam masala",
            "1 tbsp ghee (clarified butter) or vegetable oil",
            "Salt to taste",
            "Fresh cilantro for garnish",
            "½ cup water",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Sauté Aromatics:</strong> Heat ghee in a pan over medium
          heat. Add the chopped onion and sauté until golden brown (about 5
          minutes). Add minced garlic and grated ginger; cook for another minute
          until fragrant.
        </Paragraph>

        <Paragraph>
          <strong>2. Bloom Spices:</strong> Stir in the powdered spices –
          turmeric, cumin, coriander, and garam masala. Cook for ~1 minute to
          release their flavor (but be careful not to burn the spices).
        </Paragraph>

        <Paragraph>
          <strong>3. Cook Eggplant:</strong> Add the cubed eggplant. Cook for
          5-7 minutes, stirring occasionally, until it softens and starts to
          brown.
        </Paragraph>

        <Paragraph>
          <strong>4. Simmer:</strong> Add the chopped tomatoes and ½ cup water.
          Stir to combine with the eggplant and spices. Cover the pan and simmer
          for 5-20 minutes, until the eggplant is tender and the tomatoes have
          broken down into a sauce. (Add a splash more water during cooking if
          it starts to stick.)
        </Paragraph>

        <Paragraph>
          <strong>5. Add Spinach:</strong> Stir in the chopped spinach leaves.
          Cook for about 5 more minutes with the lid off, until the spinach is
          wilted and well incorporated into the curry.
        </Paragraph>

        <Paragraph>
          <strong>6. Season and Serve:</strong> Season with salt to taste.
          Garnish with fresh cilantro. Serve hot, ideally with a small portion
          of whole-grain roti or brown rice (to keep the meal low-GI).
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>136 kcal</strong>,{" "}
          <strong>~10 g carbohydrates</strong> (mostly from low-GI vegetables),
          <strong>4 g fiber</strong> (from eggplant and spinach). This curry is
          very low in fat and provides beneficial phytonutrients. It has minimal
          impact on blood glucose and helps improve insulin response.
        </Paragraph>
      </>
    ),
  },
};

// Helper function to get recipe by slug
export function getRecipe(slug: string): Recipe | null {
  return recipes[slug] || null;
}

// Helper function to get all recipe slugs
export function getAllRecipeSlugs(): string[] {
  return Object.keys(recipes);
}

// Helper function to get all recipes
export function getAllRecipes(): Recipe[] {
  return Object.values(recipes);
}
