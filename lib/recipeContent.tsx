import {
  Heading,
  Highlights,
  List,
  Paragraph,
} from "@/components/BlogTemplate";

import Eggplant from "../public/eggplant-spinach-curry.jpeg";
import Aloogobi from "../public/aloo-gobi.jpg";
import ChanaDal from "../public/chana-dal.jpg";
import ChickenKarahi from "../public/chicken-karahi.jpg";
import Biryani from "../public/biryani.jpg";
import FishCurry from "../public/Fish-Curry.jpg";
import KeemaKarela from "../public/keema-karela.jpg";
import PalakChicken from "../public/palak-chicken.jpeg";
import ChickenPeaKebab from "../public/chicken-split-pea-kebabs.jpg";
import KalaChana from "../public/Kala-Chana.jpg";

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
    image: Eggplant.src,
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
  "aloo-gobi-curry": {
    slug: "aloo-gobi-curry",
    title: "Aloo Gobi (Potato & Cauliflower Curry)",
    image: Aloogobi.src,
    imageAlt: "Aloo Gobi curry in a traditional pot, garnished with cilantro",
    calories: 120,
    carbs: "15g",
    sugars: "5g",
    sugarLevel: "Low",
    prepTime: "15 min",
    cookTime: "40 min",
    servings: 4,
    nutritionFacts: {
      protein: "4g",
      fat: "5g",
      fiber: "4g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          A classic Punjabi/Pakistani dish made with <strong>potatoes (aloo)</strong> and <strong>cauliflower (gobi)</strong>. In this diabetes-friendly version, the ratio is adjusted to use <strong>more cauliflower and less potato</strong>, significantly reducing the carbohydrate content.
        </Paragraph>

        <Highlights title="Health Highlights: Reduced Carbs & High Fiber">
          <Paragraph>
            By using a higher cauliflower-to-potato ratio, the carb content is much lower than the traditional recipe. Cauliflower is high in fiber and contains compounds that may help lower blood sugar, making this dish suitable for people with diabetes. Approx. 15g carbs per serving.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves ~4)</Heading>
        <Paragraph>
          <em>Serving Size: ~240 g (about 1 cup), Calories: ~120 per serving</em>
        </Paragraph>
        <List
          items={[
            "2 tsp vegetable oil",
            "1 large onion, thinly sliced",
            "2 medium tomatoes, peeled and chopped",
            "2 green chilies, seeded and chopped",
            "1½ tsp red chili flakes",
            "1 tsp nigella seeds (kalonji)",
            "½ tsp turmeric powder",
            "1 tsp salt (or to taste)",
            "~1 cup chopped red-skinned potatoes (about 1 large potato)",
            "6 cups cauliflower florets (from ~1 medium cauliflower)",
            "¼ cup water (as needed)",
            "1 tsp lemon juice",
            "2-inch piece ginger, thinly sliced for garnish",
            "2 tbsp fresh cilantro, chopped (for garnish)",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Base Masala:</strong> In a large skillet, heat the oil. Add the sliced onion and cook for ~5 minutes until translucent. Stir in tomatoes, green chilies, red chili flakes, nigella seeds, salt, and turmeric. Cook for another 5 minutes until tomatoes soften.
        </Paragraph>

        <Paragraph>
          <strong>2. Add Potatoes:</strong> Add the diced potato and stir to coat. Cook for 3-4 minutes. If it sticks, add a splash of water.
        </Paragraph>

        <Paragraph>
          <strong>3. Cook Covered:</strong> Reduce heat to low, cover, and let the potatoes cook for about 10 minutes until they are starting to get tender.
        </Paragraph>

        <Paragraph>
          <strong>4. Add Cauliflower:</strong> Stir in the cauliflower florets. Increase heat to medium, cover, and cook for ~20 minutes, stirring occasionally, until both potato and cauliflower are tender but not mushy.
        </Paragraph>

        <Paragraph>
          <strong>5. Finish and Serve:</strong> Turn off heat. Stir in lemon juice. Garnish with julienned ginger and chopped cilantro. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>120 kcal</strong>, <strong>~15 g carbs</strong> with <strong>3-4 g fiber</strong>. The high cauliflower-to-potato ratio keeps the glycemic index moderate. Cauliflower contains sulforaphane which may help lower blood sugar.
        </Paragraph>
      </>
    ),
  },
  "chana-dal-curry": {
    slug: "chana-dal-curry",
    title: "Chana Dal Curry (Split Chickpea Daal)",
    image: ChanaDal.src,
    imageAlt: "A bowl of Chana Dal curry, a thick lentil stew.",
    calories: 190,
    carbs: "28g",
    sugars: "3g",
    sugarLevel: "Low",
    prepTime: "15 min (+ 1 hr soaking)",
    cookTime: "1 hr",
    servings: 4,
    nutritionFacts: {
      protein: "9g",
      fat: "10g",
      fiber: "10g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          Chana Dal has an exceptionally <strong>low glycemic index (GI ~8)</strong>, meaning it has minimal impact on blood sugar. This dal is high in fiber and protein, making it a great meat-free main dish for diabetics.
        </Paragraph>

        <Highlights title="Health Highlights: Exceptionally Low GI">
          <Paragraph>
            With a GI of just 8, chana dal causes only a gentle rise in blood glucose. It&apos;s packed with plant-based protein and soluble fiber, which helps blunt sugar spikes, making it an ideal choice for a diabetic diet. Approx. 25-30g complex carbs per serving.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves ~4)</Heading>
        <List
          items={[
            "200g chana dal (split Bengal gram chickpeas), soaked",
            "2½–3 cups water",
            "¼ tsp turmeric powder (for boiling)",
            "3 tbsp ghee or cooking oil",
            "1 tsp cumin seeds",
            "4–5 cloves garlic, finely minced",
            "1 onion, finely chopped",
            "2 medium tomatoes, finely chopped",
            "1 inch ginger, julienned or minced",
            "1–2 green chilies, sliced",
            "½ tsp red chili powder",
            "½ tsp garam masala powder",
            "½ tsp coriander powder",
            "Salt to taste",
            "2 tbsp fresh coriander leaves (cilantro), for garnish",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Soak and Boil Dal:</strong> Soak rinsed chana dal for 1 hour. Drain. In a pot or pressure cooker, add dal, 2.5–3 cups water, and ¼ tsp turmeric. Boil until very soft (45-60 mins in a pot, or 7-8 whistles in a pressure cooker).
        </Paragraph>

        <Paragraph>
          <strong>2. Prepare Tarka (Tempering):</strong> Heat ghee in a separate pan. Add cumin seeds and let them sizzle. Add minced garlic and sauté until light golden. Then add chopped onions and fry until golden-brown.
        </Paragraph>

        <Paragraph>
          <strong>3. Build the Masala:</strong> Add tomatoes, ginger, and green chilies. Cook until tomatoes soften. Add remaining dry spices (red chili, turmeric, garam masala, coriander) and cook for 2-3 minutes until oil separates.
        </Paragraph>

        <Paragraph>
          <strong>4. Combine and Simmer:</strong> Pour the boiled dal (with its water) into the masala pan. Add salt. Stir well and simmer for 5–8 minutes until flavors meld and the dal reaches a medium-thick consistency.
        </Paragraph>

        <Paragraph>
          <strong>5. Garnish and Serve:</strong> Turn off heat. Garnish with freshly chopped cilantro. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          A one-cup serving provides roughly <strong>180–200 calories</strong>, with about <strong>25–30 g of complex carbohydrates</strong> and <strong>~9–10 g of fiber</strong>. It also provides <strong>8–10 g of protein</strong>.
        </Paragraph>
      </>
    ),
  },
  "chicken-karahi-low-carb": {
    slug: "chicken-karahi-low-carb",
    title: "Chicken Karahi (Low-Carb Version)",
    image: ChickenKarahi.src,
    imageAlt: "Spicy Chicken Karahi in a traditional wok-like pan.",
    calories: 192,
    carbs: "2g",
    sugars: "2g",
    sugarLevel: "Low",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 6,
    nutritionFacts: {
      protein: "25g",
      fat: "11g",
      fiber: "1g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          A beloved Pakistani <strong>stir-fried chicken curry</strong> cooked in a wok-like pot called a <strong>karahi</strong>. This low-carb, diabetes-friendly version avoids carb-heavy additives, resulting in a dish with about <strong>2 grams net carbs per serving</strong> without compromising on authentic flavor.
        </Paragraph>

        <Highlights title="Health Highlights: High-Protein & Keto-Friendly">
          <Paragraph>
            This dish is almost entirely protein and healthy fats, with carbs only from tomatoes and yogurt. It&apos;s an excellent high-protein, low-carb entrée that won&apos;t cause blood sugar spikes.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves 6)</Heading>
        <List
          items={[
            "2 tbsp ghee or cooking oil",
            "2 tbsp fresh ginger, finely chopped",
            "1.5 lbs (≈680 g) boneless, skinless chicken thighs, cut into pieces",
            "1½ tsp salt",
            "2 tsp garlic paste",
            "3 medium tomatoes, chopped",
            "1 tsp ground cumin",
            "1 tsp ground coriander",
            "1 tsp red chili powder",
            "½ tsp turmeric powder",
            "1 tsp ground black pepper",
            "1 tsp garam masala",
            "½ cup plain yogurt, room temperature",
            "Fresh ginger, green chilies, and cilantro for garnish",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Sear Chicken:</strong> Heat ghee in a karahi over high heat. Add chicken and 1 tsp salt. Fry until lightly browned (5-6 minutes).
        </Paragraph>

        <Paragraph>
          <strong>2. Add Aromatics:</strong> Add ginger and garlic paste. Sauté for 1-2 minutes until fragrant.
        </Paragraph>

        <Paragraph>
          <strong>3. Cook Tomatoes:</strong> Add tomatoes, reduce heat to medium, cover, and cook for 5-7 minutes until soft. Mash the tomatoes into a sauce.
        </Paragraph>

        <Paragraph>
          <strong>4. Spice it Up:</strong> Stir in all ground spices. Cook on medium-high for 2-3 minutes, stirring frequently.
        </Paragraph>

        <Paragraph>
          <strong>5. High-Heat Reduction:</strong> Increase heat to high and cook uncovered until the sauce thickens and oil starts to separate (5-8 minutes).
        </Paragraph>

        <Paragraph>
          <strong>6. Finish with Yogurt:</strong> Turn heat to low. Stir in yogurt and cilantro. Simmer for 1-2 minutes. Do not boil.
        </Paragraph>

        <Paragraph>
          <strong>7. Garnish and Serve:</strong> Garnish with ginger julienne, green chilies, and cilantro. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>192 calories</strong>, <strong>2 g net carbs</strong>, about <strong>25 g protein</strong>, and <strong>11 g fat</strong>. An excellent high-protein, low-carb entrée for diabetics.
        </Paragraph>
      </>
    ),
  },
  "brown-rice-chicken-biryani": {
    slug: "brown-rice-chicken-biryani",
    title: "Brown Rice Chicken Biryani",
    image: Biryani.src,
    imageAlt: "A platter of Brown Rice Chicken Biryani, mixed with vegetables.",
    calories: 450,
    carbs: "60g",
    sugars: "8g",
    sugarLevel: "Medium",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    nutritionFacts: {
      protein: "28g",
      fat: "9g",
      fiber: "9g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          A celebratory rice dish layered with meat and spices. This recipe uses <strong>brown basmati rice</strong> (GI ~50-58) instead of white rice and incorporates plenty of vegetables and lean chicken breast for a balanced one-pot meal.
        </Paragraph>

        <Highlights title="Health Highlights: Low-GI & Balanced Meal">
          <Paragraph>
            The use of brown rice and added vegetables provides nearly 9g of fiber, which, along with 28g of protein, helps slow the absorption of carbohydrates. This creates a balanced meal with a much lower glycemic impact than traditional biryani.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves 4)</Heading>
        <List
          items={[
            "2 tsp sunflower oil",
            "1 large onion, chopped",
            "300g skinless chicken breast, cut into chunks",
            "1 red bell pepper, chopped",
            "1 medium carrot, diced",
            "8 mushrooms, sliced",
            "1 small aubergine (eggplant), cubed",
            "1 tbsp curry paste",
            "250g brown basmati rice, rinsed",
            "800ml boiling water",
            "100g frozen peas, thawed",
            "1 handful fresh coriander leaves, chopped",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Sauté Chicken and Onions:</strong> Heat oil, sauté onion for 2 mins. Add chicken and cook for 3-4 mins until color changes.
        </Paragraph>

        <Paragraph>
          <strong>2. Add Vegetables:</strong> Stir in pepper, carrot, mushrooms, and aubergine. Cook for 5 mins until they soften.
        </Paragraph>

        <Paragraph>
          <strong>3. Season:</strong> Add curry paste and stir to coat, cooking for 1 minute.
        </Paragraph>

        <Paragraph>
          <strong>4. Add Rice and Water:</strong> Mix in rinsed brown rice, then pour in boiling water. Bring to a boil.
        </Paragraph>

        <Paragraph>
          <strong>5. Simmer Covered:</strong> Reduce heat to low, cover, and cook for about 11 minutes.
        </Paragraph>

        <Paragraph>
          <strong>6. Steam and Finish:</strong> Turn off heat and let sit, covered, for another 5 minutes.
        </Paragraph>

        <Paragraph>
          <strong>7. Stir in Peas and Herbs:</strong> Remove lid, add peas and coriander. Fluff gently with a fork. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>450 kcal</strong>, <strong>60.3 g carbohydrates</strong>, <strong>8.8 g fiber</strong>, and <strong>27.9 g protein</strong>. While the carb count is moderate, they are low-GI complex carbs.
        </Paragraph>
      </>
    ),
  },
  "spiced-fish-curry": {
    slug: "spiced-fish-curry",
    title: "Spiced Fish Curry (Machi Curry)",
    image: FishCurry.src,
    imageAlt: "A bowl of spiced fish curry with a rich, red gravy.",
    calories: 350,
    carbs: "27g",
    sugars: "6g",
    sugarLevel: "Low",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 2,
    nutritionFacts: {
      protein: "31g",
      fat: "12g",
      fiber: "7g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          A diabetes-friendly take on a traditional fish curry, featuring chunks of fish simmered in a spiced tomato-onion gravy. A small amount of potato is included for texture, keeping the carb content moderate. Fish is an excellent source of lean protein and heart-healthy omega-3 fats.
        </Paragraph>

        <Highlights title="Health Highlights: Lean Protein & Omega-3s">
          <Paragraph>
            This curry is rich in lean fish protein (31g per serving) and provides healthy fats, especially if using salmon. The 7g of fiber helps slow glucose absorption, making this a well-balanced, moderate-carb meal.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves 2)</Heading>
        <List
          items={[
            "~300g fish fillets (salmon, cod, or hake), cut into large pieces",
            "1¼ tsp turmeric powder, divided",
            "2 tbsp mustard oil or vegetable oil",
            "1 tsp panch phoran (Bengali 5-spice mix)",
            "1 onion, finely chopped",
            "1 inch ginger, grated",
            "2 cloves garlic, minced",
            "2 green chilies, slit",
            "1 tsp ground coriander",
            "1 tsp ground cumin",
            "1 small potato, peeled and diced",
            "2 tomatoes, chopped",
            "250 ml (1 cup) water",
            "Salt to taste",
            "Fresh cilantro for garnish",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Marinate & Sear Fish:</strong> Rub fish with ¼ tsp turmeric and salt. Sear in 1 tbsp oil for 1 minute per side. Set aside.
        </Paragraph>

        <Paragraph>
          <strong>2. Temper Spices:</strong> In the same pan, add remaining oil. Toast panch phoran for 30-60 seconds until aromatic.
        </Paragraph>

        <Paragraph>
          <strong>3. Build Curry Base:</strong> Sauté onion until golden. Add ginger, garlic, and green chilies, sauté for 1 minute. Add remaining dry spices and cook for 1-2 minutes.
        </Paragraph>

        <Paragraph>
          <strong>4. Cook Potato and Tomato:</strong> Add potato and sauté for 2 minutes. Add tomatoes and water, bring to a simmer. Cover and cook for 10-12 minutes until potatoes are tender.
        </Paragraph>

        <Paragraph>
          <strong>5. Add Fish:</strong> Gently place seared fish into the curry. Cover and simmer for 6-8 minutes until fish is cooked through.
        </Paragraph>

        <Paragraph>
          <strong>6. Finish and Serve:</strong> Season with salt. Garnish with cilantro and serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>350 kcal</strong>, <strong>26.7 g carbs</strong>, <strong>7.2 g fiber</strong>, and <strong>31.2 g protein</strong>. The spices also have anti-inflammatory benefits that support blood sugar control.
        </Paragraph>
      </>
    ),
  },
  "keema-karela": {
    slug: "keema-karela",
    title: "Keema Karela (Bitter Gourd with Mince)",
    image: KeemaKarela.src,
    imageAlt: "Keema Karela, a dry curry of minced meat and bitter gourd.",
    calories: 280,
    carbs: "8g",
    sugars: "4g",
    sugarLevel: "Low",
    prepTime: "25 min",
    cookTime: "50 min",
    servings: 6,
    nutritionFacts: {
      protein: "22g",
      fat: "18g",
      fiber: "5g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          <strong>Karela (bitter gourd)</strong> is famous for its blood-sugar-lowering effects. This traditional recipe combines it with <strong>keema (minced meat)</strong> to create a flavorful, hearty, and very diabetes-friendly curry.
        </Paragraph>

        <Highlights title="Health Highlights: Blood Sugar Lowering">
          <Paragraph>
            Bitter gourd contains compounds like charantin that actively help reduce blood glucose levels. This dish is extremely low in carbs (approx. 8g per serving) and high in protein, making it a therapeutic and satisfying meal for diabetes management.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves ~6)</Heading>
        <List
          items={[
            "1 kg bitter gourd (karela)",
            "2 tbsp salt (for prepping karela)",
            "Oil for frying or roasting",
            "500g minced meat (beef, lamb, or chicken)",
            "1 cup water",
            "3 medium onions, sliced",
            "1 tbsp ginger-garlic paste",
            "1 tbsp red chili powder",
            "1 tbsp ground coriander",
            "3 tomatoes, chopped",
            "2 tbsp white vinegar",
            "3 green chilies, sliced",
            "Salt to taste",
            "Fresh ginger and coriander for garnish",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Prep Karela:</strong> Slice karela, remove seeds, and cut into pieces. Mix with 2 tbsp salt and let sit for 20 mins. Rinse thoroughly, squeeze out water, and pat dry.
        </Paragraph>

        <Paragraph>
          <strong>2. Cook Karela:</strong> For a healthier option, toss karela with 2 tbsp oil and roast at 200°C/400°F for 20-30 mins until browned. Set aside. (Traditionally, it&apos;s deep-fried).
        </Paragraph>

        <Paragraph>
          <strong>3. Cook Keema:</strong> In a pot, combine minced meat, water, onions, ginger-garlic paste, and salt. Cover and cook for 30-40 mins until meat is tender and water has evaporated.
        </Paragraph>

        <Paragraph>
          <strong>4. Add Spices and Tomato:</strong> Add ground spices, tomatoes, and vinegar to the cooked meat. Cook for 10 mins until tomatoes break down and oil separates.
        </Paragraph>

        <Paragraph>
          <strong>5. Combine:</strong> Stir in green chilies and the pre-cooked karela. Mix well and cook for 5-7 minutes to let flavors meld.
        </Paragraph>

        <Paragraph>
          <strong>6. Season and Serve:</strong> Adjust salt. Garnish with slivered ginger and coriander. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Extremely low in carbohydrates at roughly <strong>7–10 g carbs</strong> per serving. It is high in protein (<strong>20–25 g</strong>) and rich in fiber and vitamins from the bitter gourd.
        </Paragraph>
      </>
    ),
  },
  "palak-chicken": {
    slug: "palak-chicken",
    title: "Palak Chicken (Spinach Chicken Curry)",
    image: PalakChicken.src,
    imageAlt: "A rich, green Palak Chicken curry in a serving bowl.",
    calories: 227,
    carbs: "9g",
    sugars: "4g",
    sugarLevel: "Low",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 2,
    nutritionFacts: {
      protein: "28g",
      fat: "9g",
      fiber: "4g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          Also known as <strong>Saag Chicken</strong>, this dish features tender chicken pieces cooked in a creamy <strong>spinach gravy</strong>. Spinach is a non-starchy vegetable with negligible carbs, making this dish naturally low-carb and nutrient-dense.
        </Paragraph>

        <Highlights title="Health Highlights: High-Protein & Non-Starchy">
          <Paragraph>
            This curry is a powerhouse of lean protein, iron, and fiber with virtually no impact on blood sugar. The carbs are minimal (~9g per serving), coming only from onion and tomato. It&apos;s a perfect, filling meal for a diabetic diet.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves 2)</Heading>
        <List
          items={[
            "250g boneless chicken, cut into cubes",
            "3 cups fresh spinach leaves, washed and chopped",
            "1 small onion, thinly sliced",
            "1 ripe tomato, pureed",
            "2 tbsp olive oil",
            "1 tsp fresh lemon juice",
            "½ tsp garlic paste",
            "¼ tsp ginger paste",
            "1 tsp cayenne pepper",
            "½ tsp ground cumin",
            "¼ tsp ground coriander",
            "⅛ tsp turmeric powder",
            "Salt to taste",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Sauté Onions:</strong> Heat oil and fry onions until golden brown (5-7 minutes).
        </Paragraph>

        <Paragraph>
          <strong>2. Add Aromatics & Spices:</strong> Stir in garlic and ginger paste, sauté for a few seconds. Add all ground spices and toast for 5-7 seconds.
        </Paragraph>

        <Paragraph>
          <strong>3. Tomato Masala:</strong> Add pureed tomato, cover, and simmer for 5 minutes until oil separates.
        </Paragraph>

        <Paragraph>
          <strong>4. Cook Chicken:</strong> Add chicken and sauté for 5 minutes until browned. Reduce heat, cover, and cook for another 10 minutes until tender.
        </Paragraph>

        <Paragraph>
          <strong>5. Add Spinach:</strong> Add chopped spinach and lemon juice. Cover and cook for 5-7 minutes until spinach is completely wilted.
        </Paragraph>

        <Paragraph>
          <strong>6. Finish:</strong> Adjust salt. Garnish with fresh cilantro and serve.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>227 kcal</strong>, <strong>8.8 g carbs</strong>, <strong>27.7 g protein</strong>, and <strong>9.3 g fat</strong>. It’s a filling meal that will have a minimal effect on blood glucose.
        </Paragraph>
      </>
    ),
  },
  "chicken-split-pea-kebabs": {
    slug: "chicken-split-pea-kebabs",
    title: "Chicken & Split Pea Kebabs (Shami Kebabs)",
    image:ChickenPeaKebab.src,
    imageAlt: "A plate of golden-brown Shami Kebabs, ready to be served.",
    calories: 180,
    carbs: "10g",
    sugars: "2g",
    sugarLevel: "Low",
    prepTime: "20 min (+ 1 hr soaking)",
    cookTime: "35 min",
    servings: 5,
    nutritionFacts: {
      protein: "22g",
      fat: "5g",
      fiber: "3g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          A lighter version of the famous <strong>Shami Kebabs</strong>, using chicken and split chickpeas (chana dal). These kebabs are aromatic, high in protein, fiber-rich, and pan-fried in minimal oil.
        </Paragraph>

        <Highlights title="Health Highlights: Low-Carb & High-Protein">
          <Paragraph>
            Each serving of 5 kebabs contains only about 10g of low-GI carbs from the chana dal, but packs over 21g of protein. This makes them a satisfying snack or main course that won’t spike blood glucose.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Makes ~25 kebabs, Serves 5)</Heading>
        <List
          items={[
            "450g chicken thigh meat, boneless",
            "½ cup split peas (chana dal), soaked for 1-2 hours",
            "1 medium onion, finely chopped",
            "2-3 green chilies, chopped",
            "2 cloves garlic, minced",
            "¼ cup fresh mint leaves, chopped",
            "1 egg",
            "Spices: black cardamom, cinnamon stick, ground cloves, cumin, coriander, red chili flakes, peppercorns",
            "1 tbsp lemon juice",
            "2 tbsp olive oil for shallow frying",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Grind Chicken:</strong> Pulse chicken in a food processor until finely minced. Set aside.
        </Paragraph>

        <Paragraph>
          <strong>2. Cook Split Peas:</strong> Boil soaked peas with whole spices until soft (~15 mins). Add onion, lemon juice, and other spices and cook for another 10 mins until water evaporates. Let cool.
        </Paragraph>

        <Paragraph>
          <strong>3. Blend Pea Mixture:</strong> Transfer the cooled pea mixture to a food processor with mint leaves and process into a paste.
        </Paragraph>

        <Paragraph>
          <strong>4. Combine and Form:</strong> Mix the ground chicken, pea paste, and egg in a bowl. Form into round, flat patties.
        </Paragraph>

        <Paragraph>
          <strong>5. Cook Kebabs:</strong> Shallow-fry the kebabs in olive oil for 3-4 minutes on each side until golden-brown and cooked through.
        </Paragraph>

        <Paragraph>
          <strong>6. Serve:</strong> Serve hot with chutney or yogurt dip.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per 5 kebab serving):</Heading>
        <Paragraph>
          Approximately <strong>180 kcal</strong>, <strong>10.4 g carbs</strong> (net carbs ~7.5g), <strong>2.9 g fiber</strong>, and <strong>21.8 g protein</strong>. A perfect make-ahead item for quick, healthy meals.
        </Paragraph>
      </>
    ),
  },
  "kala-chana-curry": {
    slug: "kala-chana-curry",
    title: "Kala Chana Curry (Black Chickpea Masala)",
    image:KalaChana.src,
    imageAlt: "A rustic bowl of Kala Chana Curry, a dark chickpea stew.",
    calories: 386,
    carbs: "52g",
    sugars: "5g",
    sugarLevel: "Medium",
    prepTime: "10 min (+ 8 hrs soaking)",
    cookTime: "3-4 hrs",
    servings: 4,
    nutritionFacts: {
      protein: "15g",
      fat: "15g",
      fiber: "12g",
      sodium: "Varies",
    },
    content: (
      <>
        <Paragraph>
          A traditional Pakistani-style black chickpea stew. <strong>Kala chana (black chickpeas)</strong> are nutritional powerhouses – high in fiber and protein, with a lower glycemic impact than regular chickpeas.
        </Paragraph>

        <Highlights title="Health Highlights: High-Fiber Complex Carbs">
          <Paragraph>
            Although the carb count is higher (52g), these are complex carbs accompanied by over 12g of fiber and 15g of protein. This combination results in a much lower glycemic load and a slower, more stable release of glucose.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves 4)</Heading>
        <List
          items={[
            "1½ cups dry kala chana (black chickpeas), soaked overnight",
            "Water for cooking",
            "2 medium tomatoes, finely chopped",
            "1 onion, finely chopped",
            "4 dried red chilies (whole)",
            "1 green jalapeño or chili pepper, finely chopped",
            "3 tbsp vegetable oil",
            "1 tsp salt",
            "½ tsp turmeric powder",
            "½ tsp red chili powder",
            "Fresh cilantro for garnish",
          ]}
        />

        <Heading level={2}>Preparation Steps:</Heading>

        <Paragraph>
          <strong>1. Soak Beans:</strong> Rinse and soak dry kala chana in water for at least 8 hours or overnight. Drain.
        </Paragraph>

        <Paragraph>
          <strong>2. Simmer with Base Ingredients:</strong> In a large pot, combine soaked chickpeas, ~3 cups water, tomatoes, onion, chilies, oil, salt, and spices. Bring to a boil.
        </Paragraph>

        <Paragraph>
          <strong>3. Slow Cook:</strong> Reduce heat to medium-low, cover, and simmer for 3 to 4 hours, or until chana are tender. Stir occasionally, adding water if needed. (Alternatively, pressure cook for 40-45 mins).
        </Paragraph>

        <Paragraph>
          <strong>4. Adjust Consistency:</strong> The gravy should be slightly thick. If too thin, mash a few chickpeas to thicken the sauce.
        </Paragraph>

        <Paragraph>
          <strong>5. Season and Serve:</strong> Adjust salt. Garnish with fresh cilantro and serve warm.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>386 calories</strong>, <strong>52 g carbs</strong>, <strong>15 g protein</strong>, and <strong>15 g fat</strong>. The <strong>fiber content is very high (estimated 12–15 g)</strong>, which helps maintain blood sugar control.
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
