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
  titleUr?: string;
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
  urduContent?: React.ReactNode;
}

export const recipes: Record<string, Recipe> = {
  "eggplant-spinach-curry": {
    slug: "eggplant-spinach-curry",
    title: "Eggplant & Spinach Curry (Baingan Palak)",
    titleUr: "بینگن پالک کا سالن",
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
    urduContent: (
      <>
        <Paragraph>
          ایک پُرسکون سبزیوں کا سالن جس میں <strong>بینگن</strong> اور{" "}
          <strong>پالک</strong> شامل ہیں۔ یہ ڈش فائبر، اینٹی آکسیڈینٹس سے بھرپور
          ہے اور اس کا <strong>گلائسیمک انڈیکس بہت کم</strong> ہے — خون میں شکر
          کو مستحکم رکھنے کے لیے بہترین۔ بینگن اور پتوں والی سبزیوں کا امتزاج
          وزن کنٹرول اور انسولین کی حساسیت بہتر بنانے میں مدد دیتا ہے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: کم-GI اور زیادہ فائبر">
          <Paragraph>
            زیادہ تر نشاستہ سے پاک سبزیوں (بینگن، پالک) سے بنا یہ سالن کم GI
            رکھتا ہے اور خون میں شکر کو مستحکم رکھنے میں مدد کرتا ہے۔ زیادہ
            فائبر پیٹ بھرا محسوس کرانے اور ذیابیطس کنٹرول میں معاون ہے۔ فی سرونگ
            تقریباً 10g کاربس۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (2 افراد کے لیے)</Heading>
        <Paragraph>
          <em>کیلوریز: فی سرونگ تقریباً 136 kcal</em>
        </Paragraph>
        <List
          items={[
            "2 درمیانے بینگن، چھوٹے ٹکڑوں میں کاٹے ہوئے",
            "2 کپ تازہ پالک کے پتے، کٹے ہوئے",
            "1 درمیانہ پیاز، باریک کٹا ہوا",
            "2 ٹماٹر، کٹے ہوئے",
            "2 لونگ لہسن، باریک کٹا ہوا",
            "1 انچ ادرک، کدوکش کیا ہوا",
            "1 چائے کا چمچ ہلدی پاؤڈر",
            "1 چائے کا چمچ زیرہ پاؤڈر",
            "1 چائے کا چمچ دھنیا پاؤڈر",
            "½ چائے کا چمچ گرم مسالہ",
            "1 کھانے کا چمچ گھی یا سبزیوں کا تیل",
            "نمک حسبِ ذائقہ",
            "تازہ ہرا دھنیا سجاوٹ کے لیے",
            "½ کپ پانی",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ خوشبودار اجزاء بھونیں:</strong> درمیانی آنچ پر پیتل یا پین
          میں گھی گرم کریں۔ کٹا ہوا پیاز ڈالیں اور سنہرا ہونے تک بھونیں (تقریباً
          5 منٹ)۔ باریک کٹا لہسن اور کدوکش ادرک ڈالیں اور ایک منٹ مزید پکائیں
          یہاں تک کہ خوشبو آنے لگے۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ مسالے پکائیں:</strong> ہلدی، زیرہ، دھنیا اور گرم مسالہ
          ڈالیں۔ تقریباً 1 منٹ پکائیں تاکہ ان کی خوشبو نکل آئے (مگر مسالوں کو
          جلنے نہ دیں)۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ بینگن پکائیں:</strong> بینگن کے ٹکڑے ڈالیں اور بیچ بیچ میں
          چلاتے ہوئے 5-7 منٹ پکائیں یہاں تک کہ نرم ہو جائیں اور ہلکے بھورے رنگ
          کے ہو جائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ ابالیں:</strong> کٹے ہوئے ٹماٹر اور ½ کپ پانی ڈالیں۔ بینگن
          اور مسالوں کے ساتھ اچھی طرح ملائیں۔ ڈھکن لگائیں اور 5-20 منٹ ابالیں
          یہاں تک کہ بینگن نرم ہو جائے اور ٹماٹر سالن میں گھل جائیں۔ (اگر چپکنے
          لگے تو تھوڑا پانی اور ڈالیں۔)
        </Paragraph>

        <Paragraph>
          <strong>۵۔ پالک ڈالیں:</strong> کٹی پالک کے پتے ڈالیں۔ ڈھکن ہٹا کر
          تقریباً 5 منٹ مزید پکائیں یہاں تک کہ پالک مرجھا جائے اور سالن میں اچھی
          طرح شامل ہو جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۶۔ نمک اور سرونگ:</strong> حسبِ ذائقہ نمک ملائیں۔ تازہ ہرے
          دھنیے سے سجائیں۔ گرم گرم پیش کریں، بہتر ہو کہ ہول گرین روٹی یا براؤن
          چاول کے ساتھ (کھانے کو کم-GI رکھنے کے لیے)۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>136 kcal</strong>،{" "}
          <strong>~10g کاربوہائیڈریٹس</strong> (زیادہ تر کم-GI سبزیوں سے)،{" "}
          <strong>4g فائبر</strong> (بینگن اور پالک سے)۔ یہ سالن چکنائی میں بہت
          کم ہے اور فائدہ مند فائٹونیوٹرینٹس فراہم کرتا ہے۔ خون میں گلوکوز پر اس
          کا اثر نہایت کم ہے اور یہ انسولین کے ردعمل کو بہتر بنانے میں مدد دیتا
          ہے۔
        </Paragraph>
      </>
    ),
  },
  "aloo-gobi-curry": {
    slug: "aloo-gobi-curry",
    title: "Aloo Gobi (Potato & Cauliflower Curry)",
    titleUr: "آلو گوبی (آلو اور پھول گوبی کا سالن)",
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
          A classic Punjabi/Pakistani dish made with{" "}
          <strong>potatoes (aloo)</strong> and{" "}
          <strong>cauliflower (gobi)</strong>. In this diabetes-friendly
          version, the ratio is adjusted to use{" "}
          <strong>more cauliflower and less potato</strong>, significantly
          reducing the carbohydrate content.
        </Paragraph>

        <Highlights title="Health Highlights: Reduced Carbs & High Fiber">
          <Paragraph>
            By using a higher cauliflower-to-potato ratio, the carb content is
            much lower than the traditional recipe. Cauliflower is high in fiber
            and contains compounds that may help lower blood sugar, making this
            dish suitable for people with diabetes. Approx. 15g carbs per
            serving.
          </Paragraph>
        </Highlights>

        <Heading level={2}>Ingredients (Serves ~4)</Heading>
        <Paragraph>
          <em>
            Serving Size: ~240 g (about 1 cup), Calories: ~120 per serving
          </em>
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
          <strong>1. Base Masala:</strong> In a large skillet, heat the oil. Add
          the sliced onion and cook for ~5 minutes until translucent. Stir in
          tomatoes, green chilies, red chili flakes, nigella seeds, salt, and
          turmeric. Cook for another 5 minutes until tomatoes soften.
        </Paragraph>

        <Paragraph>
          <strong>2. Add Potatoes:</strong> Add the diced potato and stir to
          coat. Cook for 3-4 minutes. If it sticks, add a splash of water.
        </Paragraph>

        <Paragraph>
          <strong>3. Cook Covered:</strong> Reduce heat to low, cover, and let
          the potatoes cook for about 10 minutes until they are starting to get
          tender.
        </Paragraph>

        <Paragraph>
          <strong>4. Add Cauliflower:</strong> Stir in the cauliflower florets.
          Increase heat to medium, cover, and cook for ~20 minutes, stirring
          occasionally, until both potato and cauliflower are tender but not
          mushy.
        </Paragraph>

        <Paragraph>
          <strong>5. Finish and Serve:</strong> Turn off heat. Stir in lemon
          juice. Garnish with julienned ginger and chopped cilantro. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>120 kcal</strong>, <strong>~15 g carbs</strong>{" "}
          with <strong>3-4 g fiber</strong>. The high cauliflower-to-potato
          ratio keeps the glycemic index moderate. Cauliflower contains
          sulforaphane which may help lower blood sugar.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          ایک کلاسک پنجابی/پاکستانی ڈش جو <strong>آلو</strong> اور{" "}
          <strong>پھول گوبی</strong> سے بنتی ہے۔ اس ذیابیطس دوست ترکیب میں تناسب
          کو اس طرح ترتیب دیا گیا ہے کہ{" "}
          <strong>زیادہ پھول گوبی اور کم آلو</strong> استعمال ہو، جس سے
          کاربوہائیڈریٹس کی مقدار نمایاں طور پر کم ہو جاتی ہے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: کم کاربس اور زیادہ فائبر">
          <Paragraph>
            پھول گوبی اور آلو کے زیادہ تناسب کی وجہ سے اس ڈش میں روایتی ترکیب کے
            مقابلے کاربوہائیڈریٹس بہت کم ہیں۔ پھول گوبی فائبر سے بھرپور ہے اور
            اس میں ایسے مرکبات پائے جاتے ہیں جو خون میں شکر کم کرنے میں مددگار
            ہو سکتے ہیں — اس لیے یہ ڈش ذیابیطس کے مریضوں کے لیے موزوں ہے۔ فی
            سرونگ تقریباً 15g کاربس۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (تقریباً 4 افراد کے لیے)</Heading>
        <Paragraph>
          <em>
            سرونگ سائز: تقریباً 240g (1 کپ)، کیلوریز: فی سرونگ تقریباً 120
          </em>
        </Paragraph>
        <List
          items={[
            "2 چائے کے چمچ سبزیوں کا تیل",
            "1 بڑا پیاز، پتلا کٹا ہوا",
            "2 درمیانے ٹماٹر، چھیلے اور کٹے ہوئے",
            "2 ہری مرچیں، بیج نکال کر کٹی ہوئی",
            "1½ چائے کا چمچ لال مرچ فلیکس",
            "1 چائے کا چمچ کلونجی",
            "½ چائے کا چمچ ہلدی پاؤڈر",
            "1 چائے کا چمچ نمک (یا حسبِ ذائقہ)",
            "~1 کپ لال چھلکے والے آلو کٹے ہوئے (تقریباً 1 بڑا آلو)",
            "6 کپ پھول گوبی کے پھول (تقریباً 1 درمیانی گوبی سے)",
            "¼ کپ پانی (حسبِ ضرورت)",
            "1 چائے کا چمچ لیموں کا رس",
            "2 انچ ادرک، گارنش کے لیے پتلی پتلی کاٹی",
            "2 کھانے کے چمچ تازہ ہرا دھنیا، کٹا ہوا (گارنش کے لیے)",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ مسالے کی بنیاد:</strong> ایک بڑے پین میں تیل گرم کریں۔ کٹا
          ہوا پیاز ڈالیں اور تقریباً 5 منٹ پکائیں یہاں تک کہ شفاف ہو جائے۔
          ٹماٹر، ہری مرچ، لال مرچ فلیکس، کلونجی، نمک اور ہلدی ڈالیں اور مزید 5
          منٹ پکائیں یہاں تک کہ ٹماٹر نرم ہو جائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ آلو ڈالیں:</strong> کٹے ہوئے آلو ڈالیں اور مسالوں کے ساتھ
          اچھی طرح ملائیں۔ 3-4 منٹ پکائیں۔ اگر چپکنے لگے تو تھوڑا پانی ڈالیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ ڈھک کر پکائیں:</strong> آنچ کم کریں، ڈھکن لگائیں اور آلو کو
          تقریباً 10 منٹ پکنے دیں یہاں تک کہ نرم ہونا شروع ہو جائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ پھول گوبی ڈالیں:</strong> پھول گوبی کے پھول ڈالیں۔ آنچ
          درمیانی کریں، ڈھکن لگائیں اور بیچ بیچ میں چلاتے ہوئے تقریباً 20 منٹ
          پکائیں یہاں تک کہ آلو اور گوبی دونوں نرم ہو جائیں لیکن گلے نہ جائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ تیار کریں اور پیش کریں:</strong> آنچ بند کریں۔ لیموں کا رس
          ملائیں۔ پتلی کٹی ادرک اور ہرے دھنیے سے سجائیں۔ گرم گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>120 kcal</strong>،{" "}
          <strong>~15g کاربوہائیڈریٹس</strong> اور <strong>3-4g فائبر</strong>۔
          پھول گوبی اور آلو کا زیادہ تناسب گلائسیمک انڈیکس کو درمیانے درجے پر
          رکھتا ہے۔ پھول گوبی میں سلفوریفین پایا جاتا ہے جو خون میں شکر کم کرنے
          میں مددگار ہو سکتا ہے۔
        </Paragraph>
      </>
    ),
  },
  "chana-dal-curry": {
    slug: "chana-dal-curry",
    title: "Chana Dal Curry (Split Chickpea Daal)",
    titleUr: "چنا دال کا سالن",
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
          Chana Dal has an exceptionally{" "}
          <strong>low glycemic index (GI ~8)</strong>, meaning it has minimal
          impact on blood sugar. This dal is high in fiber and protein, making
          it a great meat-free main dish for diabetics.
        </Paragraph>

        <Highlights title="Health Highlights: Exceptionally Low GI">
          <Paragraph>
            With a GI of just 8, chana dal causes only a gentle rise in blood
            glucose. It&apos;s packed with plant-based protein and soluble
            fiber, which helps blunt sugar spikes, making it an ideal choice for
            a diabetic diet. Approx. 25-30g complex carbs per serving.
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
          <strong>1. Soak and Boil Dal:</strong> Soak rinsed chana dal for 1
          hour. Drain. In a pot or pressure cooker, add dal, 2.5–3 cups water,
          and ¼ tsp turmeric. Boil until very soft (45-60 mins in a pot, or 7-8
          whistles in a pressure cooker).
        </Paragraph>

        <Paragraph>
          <strong>2. Prepare Tarka (Tempering):</strong> Heat ghee in a separate
          pan. Add cumin seeds and let them sizzle. Add minced garlic and sauté
          until light golden. Then add chopped onions and fry until
          golden-brown.
        </Paragraph>

        <Paragraph>
          <strong>3. Build the Masala:</strong> Add tomatoes, ginger, and green
          chilies. Cook until tomatoes soften. Add remaining dry spices (red
          chili, turmeric, garam masala, coriander) and cook for 2-3 minutes
          until oil separates.
        </Paragraph>

        <Paragraph>
          <strong>4. Combine and Simmer:</strong> Pour the boiled dal (with its
          water) into the masala pan. Add salt. Stir well and simmer for 5–8
          minutes until flavors meld and the dal reaches a medium-thick
          consistency.
        </Paragraph>

        <Paragraph>
          <strong>5. Garnish and Serve:</strong> Turn off heat. Garnish with
          freshly chopped cilantro. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          A one-cup serving provides roughly <strong>180–200 calories</strong>,
          with about <strong>25–30 g of complex carbohydrates</strong> and{" "}
          <strong>~9–10 g of fiber</strong>. It also provides{" "}
          <strong>8–10 g of protein</strong>.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          چنا دال کا <strong>گلائسیمک انڈیکس انتہائی کم (GI ~8)</strong> ہے،
          یعنی یہ خون میں شکر پر بہت کم اثر ڈالتی ہے۔ یہ دال فائبر اور پروٹین سے
          بھرپور ہے، جو اسے ذیابیطس کے مریضوں کے لیے ایک بہترین گوشت سے پاک
          مرکزی ڈش بناتی ہے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: انتہائی کم GI">
          <Paragraph>
            صرف 8 کے GI کے ساتھ، چنا دال خون میں گلوکوز کو بہت آہستہ بڑھاتی ہے۔
            یہ پودوں پر مبنی پروٹین اور حل پذیر فائبر سے بھرپور ہے جو شکر کے
            اضافے کو روکتا ہے — اس لیے یہ ذیابیطس کی خوراک کے لیے ایک مثالی
            انتخاب ہے۔ فی سرونگ تقریباً 25-30g پیچیدہ کاربوہائیڈریٹس۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (تقریباً 4 افراد کے لیے)</Heading>
        <List
          items={[
            "200g چنا دال (چھلکے اتری چنے کی دال)، بھگوئی ہوئی",
            "2½–3 کپ پانی",
            "¼ چائے کا چمچ ہلدی (ابالنے کے لیے)",
            "3 کھانے کے چمچ گھی یا کھانے کا تیل",
            "1 چائے کا چمچ زیرہ",
            "4-5 لونگ لہسن، باریک کٹے ہوئے",
            "1 پیاز، باریک کٹا ہوا",
            "2 درمیانے ٹماٹر، باریک کٹے ہوئے",
            "1 انچ ادرک، لمبے لمبے یا باریک کٹے ہوئے",
            "1-2 ہری مرچیں، سلائس کی ہوئی",
            "½ چائے کا چمچ لال مرچ پاؤڈر",
            "½ چائے کا چمچ گرم مسالہ پاؤڈر",
            "½ چائے کا چمچ دھنیا پاؤڈر",
            "نمک حسبِ ذائقہ",
            "2 کھانے کے چمچ تازہ ہرا دھنیا، گارنش کے لیے",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ دال بھگوئیں اور ابالیں:</strong> دھلی چنا دال کو 1 گھنٹہ
          بھگوئیں۔ پانی نکال دیں۔ پتیلے یا پریشر کوکر میں دال، 2.5-3 کپ پانی اور
          ¼ چائے کا چمچ ہلدی ڈالیں۔ بالکل نرم ہونے تک ابالیں (پتیلے میں 45-60
          منٹ، یا پریشر کوکر میں 7-8 سیٹیاں)۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ تڑکا تیار کریں:</strong> الگ پین میں گھی گرم کریں۔ زیرہ
          ڈالیں اور چٹخنے دیں۔ باریک کٹا لہسن ڈالیں اور ہلکا سنہرا ہونے تک
          بھونیں۔ پھر کٹا پیاز ڈالیں اور سنہرا بھورا ہونے تک تلیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ مسالہ بنائیں:</strong> ٹماٹر، ادرک اور ہری مرچیں ڈالیں۔
          ٹماٹر نرم ہونے تک پکائیں۔ باقی خشک مسالے (لال مرچ، ہلدی، گرم مسالہ،
          دھنیا) ڈالیں اور 2-3 منٹ پکائیں یہاں تک کہ تیل الگ ہو جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ ملائیں اور دم دیں:</strong> ابالی ہوئی دال (اپنے پانی سمیت)
          مسالے والے پین میں ڈالیں۔ نمک ڈالیں۔ اچھی طرح ملائیں اور 5-8 منٹ دم
          دیں یہاں تک کہ ذائقے گھل مل جائیں اور دال درمیانی گاڑھی ہو جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ سجائیں اور پیش کریں:</strong> آنچ بند کریں۔ تازہ کٹے ہرے
          دھنیے سے سجائیں۔ گرم گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          ایک کپ کی سرونگ میں تقریباً <strong>180-200 کیلوریز</strong>، تقریباً{" "}
          <strong>25-30g پیچیدہ کاربوہائیڈریٹس</strong> اور{" "}
          <strong>~9-10g فائبر</strong> ہوتا ہے۔ اس کے ساتھ{" "}
          <strong>8-10g پروٹین</strong> بھی حاصل ہوتی ہے۔
        </Paragraph>
      </>
    ),
  },
  "chicken-karahi-low-carb": {
    slug: "chicken-karahi-low-carb",
    title: "Chicken Karahi (Low-Carb Version)",
    titleUr: "چکن کڑاہی (کم کاربس ترکیب)",
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
          A beloved Pakistani <strong>stir-fried chicken curry</strong> cooked
          in a wok-like pot called a <strong>karahi</strong>. This low-carb,
          diabetes-friendly version avoids carb-heavy additives, resulting in a
          dish with about <strong>2 grams net carbs per serving</strong> without
          compromising on authentic flavor.
        </Paragraph>

        <Highlights title="Health Highlights: High-Protein & Keto-Friendly">
          <Paragraph>
            This dish is almost entirely protein and healthy fats, with carbs
            only from tomatoes and yogurt. It&apos;s an excellent high-protein,
            low-carb entrée that won&apos;t cause blood sugar spikes.
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
          <strong>1. Sear Chicken:</strong> Heat ghee in a karahi over high
          heat. Add chicken and 1 tsp salt. Fry until lightly browned (5-6
          minutes).
        </Paragraph>

        <Paragraph>
          <strong>2. Add Aromatics:</strong> Add ginger and garlic paste. Sauté
          for 1-2 minutes until fragrant.
        </Paragraph>

        <Paragraph>
          <strong>3. Cook Tomatoes:</strong> Add tomatoes, reduce heat to
          medium, cover, and cook for 5-7 minutes until soft. Mash the tomatoes
          into a sauce.
        </Paragraph>

        <Paragraph>
          <strong>4. Spice it Up:</strong> Stir in all ground spices. Cook on
          medium-high for 2-3 minutes, stirring frequently.
        </Paragraph>

        <Paragraph>
          <strong>5. High-Heat Reduction:</strong> Increase heat to high and
          cook uncovered until the sauce thickens and oil starts to separate
          (5-8 minutes).
        </Paragraph>

        <Paragraph>
          <strong>6. Finish with Yogurt:</strong> Turn heat to low. Stir in
          yogurt and cilantro. Simmer for 1-2 minutes. Do not boil.
        </Paragraph>

        <Paragraph>
          <strong>7. Garnish and Serve:</strong> Garnish with ginger julienne,
          green chilies, and cilantro. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>192 calories</strong>,{" "}
          <strong>2 g net carbs</strong>, about <strong>25 g protein</strong>,
          and <strong>11 g fat</strong>. An excellent high-protein, low-carb
          entrée for diabetics.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          ایک پسندیدہ پاکستانی <strong>چکن کا بھنا ہوا سالن</strong> جو کڑاہی
          نامی ایک خاص برتن میں پکایا جاتا ہے۔ اس کم کاربس، ذیابیطس دوست ترکیب
          میں نشاستہ دار اجزاء سے پرہیز کیا گیا ہے، جس کے نتیجے میں فی سرونگ صرف{" "}
          <strong>تقریباً 2 گرام نیٹ کاربس</strong> رہتے ہیں — بغیر اصل ذائقے کو
          کھوئے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: زیادہ پروٹین اور کیٹو دوست">
          <Paragraph>
            یہ ڈش تقریباً مکمل طور پر پروٹین اور صحت مند چکنائی پر مشتمل ہے —
            کاربس صرف ٹماٹر اور دہی سے آتے ہیں۔ یہ ایک بہترین زیادہ پروٹین، کم
            کاربس انٹری ہے جو خون میں شکر نہیں بڑھاتی۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (6 افراد کے لیے)</Heading>
        <List
          items={[
            "2 کھانے کے چمچ گھی یا کھانے کا تیل",
            "2 کھانے کے چمچ تازہ ادرک، باریک کٹی ہوئی",
            "1.5 پاؤنڈ (~680g) بے ہڈی، بے چمڑی چکن ران کے ٹکڑے",
            "1½ چائے کا چمچ نمک",
            "2 چائے کے چمچ لہسن پیسٹ",
            "3 درمیانے ٹماٹر، کٹے ہوئے",
            "1 چائے کا چمچ پسا زیرہ",
            "1 چائے کا چمچ پسا دھنیا",
            "1 چائے کا چمچ لال مرچ پاؤڈر",
            "½ چائے کا چمچ ہلدی پاؤڈر",
            "1 چائے کا چمچ پسی کالی مرچ",
            "1 چائے کا چمچ گرم مسالہ",
            "½ کپ سادہ دہی، کمرے کے درجہ حرارت پر",
            "تازہ ادرک، ہری مرچیں اور ہرا دھنیا گارنش کے لیے",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ چکن سیر کریں:</strong> کڑاہی میں تیز آنچ پر گھی گرم کریں۔
          چکن اور 1 چائے کا چمچ نمک ڈالیں۔ ہلکا بھورا ہونے تک تلیں (5-6 منٹ)۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ خوشبودار اجزاء ڈالیں:</strong> ادرک اور لہسن پیسٹ ڈالیں۔
          خوشبو آنے تک 1-2 منٹ بھونیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ ٹماٹر پکائیں:</strong> ٹماٹر ڈالیں، آنچ درمیانی کریں، ڈھکن
          لگائیں اور 5-7 منٹ پکائیں یہاں تک کہ نرم ہو جائیں۔ ٹماٹروں کو مسل کر
          سالن بنا لیں۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ مسالے ڈالیں:</strong> تمام پسے ہوئے مسالے ملائیں۔ درمیانی
          تیز آنچ پر 2-3 منٹ بار بار چلاتے ہوئے پکائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ تیز آنچ پر گاڑھا کریں:</strong> آنچ تیز کریں اور ڈھکن ہٹا
          کر پکائیں یہاں تک کہ سالن گاڑھا ہو جائے اور تیل الگ ہونے لگے (5-8
          منٹ)۔
        </Paragraph>

        <Paragraph>
          <strong>۶۔ دہی ملائیں:</strong> آنچ کم کریں۔ دہی اور ہرا دھنیا ملائیں۔
          1-2 منٹ دم دیں۔ ابالیں نہیں۔
        </Paragraph>

        <Paragraph>
          <strong>۷۔ سجائیں اور پیش کریں:</strong> ادرک جولین، ہری مرچوں اور ہرے
          دھنیے سے سجائیں۔ گرم گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>192 کیلوریز</strong>، <strong>2g نیٹ کاربس</strong>،
          تقریباً <strong>25g پروٹین</strong> اور <strong>11g چکنائی</strong>۔
          ذیابیطس کے مریضوں کے لیے ایک بہترین زیادہ پروٹین، کم کاربس ڈش۔
        </Paragraph>
      </>
    ),
  },
  "brown-rice-chicken-biryani": {
    slug: "brown-rice-chicken-biryani",
    title: "Brown Rice Chicken Biryani",
    titleUr: "براؤن رائس چکن بریانی",
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
          A celebratory rice dish layered with meat and spices. This recipe uses{" "}
          <strong>brown basmati rice</strong> (GI ~50-58) instead of white rice
          and incorporates plenty of vegetables and lean chicken breast for a
          balanced one-pot meal.
        </Paragraph>

        <Highlights title="Health Highlights: Low-GI & Balanced Meal">
          <Paragraph>
            The use of brown rice and added vegetables provides nearly 9g of
            fiber, which, along with 28g of protein, helps slow the absorption
            of carbohydrates. This creates a balanced meal with a much lower
            glycemic impact than traditional biryani.
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
          <strong>1. Sauté Chicken and Onions:</strong> Heat oil, sauté onion
          for 2 mins. Add chicken and cook for 3-4 mins until color changes.
        </Paragraph>

        <Paragraph>
          <strong>2. Add Vegetables:</strong> Stir in pepper, carrot, mushrooms,
          and aubergine. Cook for 5 mins until they soften.
        </Paragraph>

        <Paragraph>
          <strong>3. Season:</strong> Add curry paste and stir to coat, cooking
          for 1 minute.
        </Paragraph>

        <Paragraph>
          <strong>4. Add Rice and Water:</strong> Mix in rinsed brown rice, then
          pour in boiling water. Bring to a boil.
        </Paragraph>

        <Paragraph>
          <strong>5. Simmer Covered:</strong> Reduce heat to low, cover, and
          cook for about 11 minutes.
        </Paragraph>

        <Paragraph>
          <strong>6. Steam and Finish:</strong> Turn off heat and let sit,
          covered, for another 5 minutes.
        </Paragraph>

        <Paragraph>
          <strong>7. Stir in Peas and Herbs:</strong> Remove lid, add peas and
          coriander. Fluff gently with a fork. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>450 kcal</strong>,{" "}
          <strong>60.3 g carbohydrates</strong>, <strong>8.8 g fiber</strong>,
          and <strong>27.9 g protein</strong>. While the carb count is moderate,
          they are low-GI complex carbs.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          چاول، گوشت اور مسالوں سے تیار ایک جشنِ خوراک ڈش۔ اس ترکیب میں سفید
          چاولوں کی جگہ <strong>براؤن باسمتی چاول</strong> (GI ~50-58) استعمال
          کیے گئے ہیں اور متوازن ون-پاٹ کھانے کے لیے بکثرت سبزیاں اور دبلا چکن
          بریسٹ شامل کیا گیا ہے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: کم-GI اور متوازن کھانا">
          <Paragraph>
            براؤن چاول اور شامل سبزیوں کے استعمال سے تقریباً 9g فائبر حاصل ہوتا
            ہے جو 28g پروٹین کے ساتھ مل کر کاربوہائیڈریٹس کے جذب ہونے کی رفتار
            کو سست کر دیتا ہے۔ یہ روایتی بریانی کے مقابلے میں بہت کم گلائسیمک
            اثر کے ساتھ ایک متوازن کھانا بناتا ہے۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (4 افراد کے لیے)</Heading>
        <List
          items={[
            "2 چائے کے چمچ سورج مکھی کا تیل",
            "1 بڑا پیاز، کٹا ہوا",
            "300g بے چمڑی چکن بریسٹ، ٹکڑوں میں کٹی ہوئی",
            "1 سرخ شملہ مرچ، کٹی ہوئی",
            "1 درمیانی گاجر، چھوٹے ٹکڑوں میں",
            "8 مشروم، سلائس کیے ہوئے",
            "1 چھوٹا بینگن، چھوٹے ٹکڑوں میں",
            "1 کھانے کا چمچ کری پیسٹ",
            "250g براؤن باسمتی چاول، دھلے ہوئے",
            "800ml ابلا ہوا پانی",
            "100g منجمد مٹر، پگھلے ہوئے",
            "1 مٹھی تازہ ہرا دھنیا، کٹا ہوا",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ چکن اور پیاز بھونیں:</strong> تیل گرم کریں، پیاز 2 منٹ
          بھونیں۔ چکن ڈالیں اور 3-4 منٹ پکائیں یہاں تک کہ رنگ بدل جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ سبزیاں ڈالیں:</strong> شملہ مرچ، گاجر، مشروم اور بینگن
          ملائیں۔ 5 منٹ پکائیں یہاں تک کہ نرم ہو جائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ مسالہ لگائیں:</strong> کری پیسٹ ڈالیں اور اچھی طرح ملائیں،
          1 منٹ پکائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ چاول اور پانی ڈالیں:</strong> دھلے ہوئے براؤن چاول ملائیں،
          پھر ابلا ہوا پانی ڈالیں۔ ابال آنے دیں۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ ڈھک کر دم دیں:</strong> آنچ کم کریں، ڈھکن لگائیں اور
          تقریباً 11 منٹ پکائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۶۔ بھاپ دیں اور تیار کریں:</strong> آنچ بند کریں اور ڈھکن لگا
          کر مزید 5 منٹ رکھیں۔
        </Paragraph>

        <Paragraph>
          <strong>۷۔ مٹر اور دھنیا ملائیں:</strong> ڈھکن ہٹائیں، مٹر اور ہرا
          دھنیا ڈالیں۔ کانٹے سے آہستہ سے پلٹائیں۔ گرم گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>450 kcal</strong>،{" "}
          <strong>60.3g کاربوہائیڈریٹس</strong>، <strong>8.8g فائبر</strong> اور{" "}
          <strong>27.9g پروٹین</strong>۔ کاربس کی مقدار درمیانی ہے لیکن یہ کم-GI
          پیچیدہ کاربوہائیڈریٹس ہیں۔
        </Paragraph>
      </>
    ),
  },
  "spiced-fish-curry": {
    slug: "spiced-fish-curry",
    title: "Spiced Fish Curry (Machi Curry)",
    titleUr: "مسالہ دار مچھلی کا سالن (ماچھی کری)",
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
          A diabetes-friendly take on a traditional fish curry, featuring chunks
          of fish simmered in a spiced tomato-onion gravy. A small amount of
          potato is included for texture, keeping the carb content moderate.
          Fish is an excellent source of lean protein and heart-healthy omega-3
          fats.
        </Paragraph>

        <Highlights title="Health Highlights: Lean Protein & Omega-3s">
          <Paragraph>
            This curry is rich in lean fish protein (31g per serving) and
            provides healthy fats, especially if using salmon. The 7g of fiber
            helps slow glucose absorption, making this a well-balanced,
            moderate-carb meal.
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
          <strong>1. Marinate & Sear Fish:</strong> Rub fish with ¼ tsp turmeric
          and salt. Sear in 1 tbsp oil for 1 minute per side. Set aside.
        </Paragraph>

        <Paragraph>
          <strong>2. Temper Spices:</strong> In the same pan, add remaining oil.
          Toast panch phoran for 30-60 seconds until aromatic.
        </Paragraph>

        <Paragraph>
          <strong>3. Build Curry Base:</strong> Sauté onion until golden. Add
          ginger, garlic, and green chilies, sauté for 1 minute. Add remaining
          dry spices and cook for 1-2 minutes.
        </Paragraph>

        <Paragraph>
          <strong>4. Cook Potato and Tomato:</strong> Add potato and sauté for 2
          minutes. Add tomatoes and water, bring to a simmer. Cover and cook for
          10-12 minutes until potatoes are tender.
        </Paragraph>

        <Paragraph>
          <strong>5. Add Fish:</strong> Gently place seared fish into the curry.
          Cover and simmer for 6-8 minutes until fish is cooked through.
        </Paragraph>

        <Paragraph>
          <strong>6. Finish and Serve:</strong> Season with salt. Garnish with
          cilantro and serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>350 kcal</strong>, <strong>26.7 g carbs</strong>
          , <strong>7.2 g fiber</strong>, and <strong>31.2 g protein</strong>.
          The spices also have anti-inflammatory benefits that support blood
          sugar control.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          روایتی مچھلی کے سالن کی ذیابیطس دوست ترکیب، جس میں مچھلی کے ٹکڑوں کو
          مسالہ دار ٹماٹر-پیاز کی گریوی میں پکایا جاتا ہے۔ ساخت کے لیے تھوڑے آلو
          بھی شامل ہیں جو کاربس کو درمیانی سطح پر رکھتے ہیں۔ مچھلی دبلے پروٹین
          اور دل کے لیے فائدہ مند اومیگا-3 چکنائی کا ایک بہترین ذریعہ ہے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: دبلا پروٹین اور اومیگا-3">
          <Paragraph>
            یہ سالن دبلے مچھلی پروٹین (فی سرونگ 31g) سے بھرپور ہے اور صحت مند
            چکنائی فراہم کرتا ہے، خاص طور پر سالمن استعمال کرنے پر۔ 7g فائبر
            گلوکوز کے جذب ہونے کی رفتار کو سست کرتا ہے — یہ ایک اچھی طرح متوازن،
            درمیانے کاربس والا کھانا ہے۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (2 افراد کے لیے)</Heading>
        <List
          items={[
            "~300g مچھلی کے فلے (سالمن، کاڈ یا ہیک)، بڑے ٹکڑوں میں کٹے",
            "1¼ چائے کا چمچ ہلدی پاؤڈر، تقسیم شدہ",
            "2 کھانے کے چمچ سرسوں کا تیل یا سبزیوں کا تیل",
            "1 چائے کا چمچ پنج پھوڑن (بنگالی پانچ مسالہ)",
            "1 پیاز، باریک کٹا ہوا",
            "1 انچ ادرک، کدوکش کی ہوئی",
            "2 لونگ لہسن، باریک کٹے ہوئے",
            "2 ہری مرچیں، چیری ہوئی",
            "1 چائے کا چمچ پسا دھنیا",
            "1 چائے کا چمچ پسا زیرہ",
            "1 چھوٹا آلو، چھیلا اور چھوٹے ٹکڑوں میں کٹا",
            "2 ٹماٹر، کٹے ہوئے",
            "250ml (1 کپ) پانی",
            "نمک حسبِ ذائقہ",
            "تازہ ہرا دھنیا گارنش کے لیے",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ مچھلی میرینیٹ کریں اور سیر کریں:</strong> مچھلی کو ¼ چائے
          کا چمچ ہلدی اور نمک سے مل کر 1 کھانے کے چمچ تیل میں ہر طرف سے 1 منٹ
          سیر کریں۔ ایک طرف رکھ دیں۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ مسالے چٹخائیں:</strong> اسی پین میں باقی تیل ڈالیں۔ پنج
          پھوڑن کو 30-60 سیکنڈ خوشبو آنے تک بھونیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ سالن کی بنیاد بنائیں:</strong> پیاز سنہرا ہونے تک بھونیں۔
          ادرک، لہسن اور ہری مرچیں ڈالیں، 1 منٹ بھونیں۔ باقی خشک مسالے ڈالیں اور
          1-2 منٹ پکائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ آلو اور ٹماٹر پکائیں:</strong> آلو ڈالیں اور 2 منٹ بھونیں۔
          ٹماٹر اور پانی ڈالیں، ابال آنے دیں۔ ڈھکن لگائیں اور 10-12 منٹ پکائیں
          یہاں تک کہ آلو نرم ہو جائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ مچھلی ڈالیں:</strong> سیر کی ہوئی مچھلی آہستہ سے سالن میں
          رکھیں۔ ڈھکن لگائیں اور 6-8 منٹ دم دیں یہاں تک کہ مچھلی پک جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۶۔ تیار کریں اور پیش کریں:</strong> نمک حسبِ ذائقہ ملائیں۔ ہرے
          دھنیے سے سجائیں اور گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>350 kcal</strong>،{" "}
          <strong>26.7g کاربوہائیڈریٹس</strong>، <strong>7.2g فائبر</strong> اور{" "}
          <strong>31.2g پروٹین</strong>۔ مسالوں میں سوزش مخالف خصوصیات بھی ہیں
          جو خون میں شکر کنٹرول میں مددگار ہیں۔
        </Paragraph>
      </>
    ),
  },
  "keema-karela": {
    slug: "keema-karela",
    title: "Keema Karela (Bitter Gourd with Mince)",
    titleUr: "قیمہ کریلا (کریلے اور قیمے کا سالن)",
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
          <strong>Karela (bitter gourd)</strong> is famous for its
          blood-sugar-lowering effects. This traditional recipe combines it with{" "}
          <strong>keema (minced meat)</strong> to create a flavorful, hearty,
          and very diabetes-friendly curry.
        </Paragraph>

        <Highlights title="Health Highlights: Blood Sugar Lowering">
          <Paragraph>
            Bitter gourd contains compounds like charantin that actively help
            reduce blood glucose levels. This dish is extremely low in carbs
            (approx. 8g per serving) and high in protein, making it a
            therapeutic and satisfying meal for diabetes management.
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
          <strong>1. Prep Karela:</strong> Slice karela, remove seeds, and cut
          into pieces. Mix with 2 tbsp salt and let sit for 20 mins. Rinse
          thoroughly, squeeze out water, and pat dry.
        </Paragraph>

        <Paragraph>
          <strong>2. Cook Karela:</strong> For a healthier option, toss karela
          with 2 tbsp oil and roast at 200°C/400°F for 20-30 mins until browned.
          Set aside. (Traditionally, it&apos;s deep-fried).
        </Paragraph>

        <Paragraph>
          <strong>3. Cook Keema:</strong> In a pot, combine minced meat, water,
          onions, ginger-garlic paste, and salt. Cover and cook for 30-40 mins
          until meat is tender and water has evaporated.
        </Paragraph>

        <Paragraph>
          <strong>4. Add Spices and Tomato:</strong> Add ground spices,
          tomatoes, and vinegar to the cooked meat. Cook for 10 mins until
          tomatoes break down and oil separates.
        </Paragraph>

        <Paragraph>
          <strong>5. Combine:</strong> Stir in green chilies and the pre-cooked
          karela. Mix well and cook for 5-7 minutes to let flavors meld.
        </Paragraph>

        <Paragraph>
          <strong>6. Season and Serve:</strong> Adjust salt. Garnish with
          slivered ginger and coriander. Serve hot.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Extremely low in carbohydrates at roughly{" "}
          <strong>7–10 g carbs</strong> per serving. It is high in protein (
          <strong>20–25 g</strong>) and rich in fiber and vitamins from the
          bitter gourd.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          <strong>کریلا</strong> خون میں شکر کم کرنے کے اثرات کی وجہ سے مشہور
          ہے۔ یہ روایتی ترکیب اسے <strong>قیمے</strong> کے ساتھ ملا کر ایک ذائقہ
          دار، پُرسکون اور انتہائی ذیابیطس دوست سالن بناتی ہے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: خون میں شکر کم کرنا">
          <Paragraph>
            کریلے میں چارنٹین جیسے مرکبات پائے جاتے ہیں جو خون میں گلوکوز کی سطح
            کو فعال طور پر کم کرنے میں مدد کرتے ہیں۔ یہ ڈش کاربس میں انتہائی کم
            (فی سرونگ تقریباً 8g) اور پروٹین میں بھرپور ہے — جو اسے ذیابیطس کے
            انتظام کے لیے علاجی اور تسلی بخش کھانا بناتی ہے۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (تقریباً 6 افراد کے لیے)</Heading>
        <List
          items={[
            "1 کلو کریلے",
            "2 کھانے کے چمچ نمک (کریلے تیار کرنے کے لیے)",
            "تلنے یا بھوننے کے لیے تیل",
            "500g قیمہ (گائے، مٹن یا چکن)",
            "1 کپ پانی",
            "3 درمیانے پیاز، سلائس کیے ہوئے",
            "1 کھانے کا چمچ ادرک لہسن پیسٹ",
            "1 کھانے کا چمچ لال مرچ پاؤڈر",
            "1 کھانے کا چمچ پسا دھنیا",
            "3 ٹماٹر، کٹے ہوئے",
            "2 کھانے کے چمچ سفید سرکہ",
            "3 ہری مرچیں، سلائس کی ہوئی",
            "نمک حسبِ ذائقہ",
            "تازہ ادرک اور ہرا دھنیا گارنش کے لیے",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ کریلے تیار کریں:</strong> کریلے سلائس کریں، بیج نکالیں اور
          ٹکڑوں میں کاٹیں۔ 2 کھانے کے چمچ نمک ملا کر 20 منٹ رکھیں۔ اچھی طرح
          دھوئیں، پانی نچوڑیں اور خشک کریں۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ کریلے پکائیں:</strong> صحت مند آپشن کے طور پر کریلوں کو 2
          کھانے کے چمچ تیل میں ملا کر 200°C/400°F پر 20-30 منٹ بھورے ہونے تک
          بھونیں۔ ایک طرف رکھ دیں۔ (روایتی طریقے میں انہیں ڈیپ فرائی کیا جاتا
          ہے۔)
        </Paragraph>

        <Paragraph>
          <strong>۳۔ قیمہ پکائیں:</strong> ایک پتیلے میں قیمہ، پانی، پیاز، ادرک
          لہسن پیسٹ اور نمک ملائیں۔ ڈھکن لگائیں اور 30-40 منٹ پکائیں یہاں تک کہ
          گوشت نرم ہو جائے اور پانی خشک ہو جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ مسالے اور ٹماٹر ڈالیں:</strong> پکے ہوئے قیمے میں پسے
          مسالے، ٹماٹر اور سرکہ ڈالیں۔ 10 منٹ پکائیں یہاں تک کہ ٹماٹر گھل جائیں
          اور تیل الگ ہو جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ ملائیں:</strong> ہری مرچیں اور پہلے سے پکے ہوئے کریلے
          ملائیں۔ اچھی طرح مکس کریں اور 5-7 منٹ پکائیں تاکہ ذائقے گھل مل جائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۶۔ نمک اور سرونگ:</strong> نمک ٹھیک کریں۔ پتلی کٹی ادرک اور
          ہرے دھنیے سے سجائیں۔ گرم گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          کاربوہائیڈریٹس میں انتہائی کم — فی سرونگ تقریباً{" "}
          <strong>7-10g کاربس</strong>۔ پروٹین میں بھرپور (
          <strong>20-25g</strong>) اور کریلے سے فائبر اور وٹامنز سے مالامال۔
        </Paragraph>
      </>
    ),
  },
  "palak-chicken": {
    slug: "palak-chicken",
    title: "Palak Chicken (Spinach Chicken Curry)",
    titleUr: "پالک چکن (پالک اور چکن کا سالن)",
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
          Also known as <strong>Saag Chicken</strong>, this dish features tender
          chicken pieces cooked in a creamy <strong>spinach gravy</strong>.
          Spinach is a non-starchy vegetable with negligible carbs, making this
          dish naturally low-carb and nutrient-dense.
        </Paragraph>

        <Highlights title="Health Highlights: High-Protein & Non-Starchy">
          <Paragraph>
            This curry is a powerhouse of lean protein, iron, and fiber with
            virtually no impact on blood sugar. The carbs are minimal (~9g per
            serving), coming only from onion and tomato. It&apos;s a perfect,
            filling meal for a diabetic diet.
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
          <strong>1. Sauté Onions:</strong> Heat oil and fry onions until golden
          brown (5-7 minutes).
        </Paragraph>

        <Paragraph>
          <strong>2. Add Aromatics & Spices:</strong> Stir in garlic and ginger
          paste, sauté for a few seconds. Add all ground spices and toast for
          5-7 seconds.
        </Paragraph>

        <Paragraph>
          <strong>3. Tomato Masala:</strong> Add pureed tomato, cover, and
          simmer for 5 minutes until oil separates.
        </Paragraph>

        <Paragraph>
          <strong>4. Cook Chicken:</strong> Add chicken and sauté for 5 minutes
          until browned. Reduce heat, cover, and cook for another 10 minutes
          until tender.
        </Paragraph>

        <Paragraph>
          <strong>5. Add Spinach:</strong> Add chopped spinach and lemon juice.
          Cover and cook for 5-7 minutes until spinach is completely wilted.
        </Paragraph>

        <Paragraph>
          <strong>6. Finish:</strong> Adjust salt. Garnish with fresh cilantro
          and serve.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>227 kcal</strong>, <strong>8.8 g carbs</strong>,{" "}
          <strong>27.7 g protein</strong>, and <strong>9.3 g fat</strong>. It’s
          a filling meal that will have a minimal effect on blood glucose.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          <strong>ساگ چکن</strong> کے نام سے بھی جانا جاتا ہے، اس ڈش میں نرم چکن
          کے ٹکڑوں کو کریمی <strong>پالک کی گریوی</strong> میں پکایا جاتا ہے۔
          پالک ایک غیر نشاستہ دار سبزی ہے جس میں کاربس نہ ہونے کے برابر ہیں — جو
          اس ڈش کو قدرتی طور پر کم کاربس اور غذائیت سے بھرپور بناتی ہے۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: زیادہ پروٹین اور غیر نشاستہ دار">
          <Paragraph>
            یہ سالن دبلے پروٹین، آئرن اور فائبر کا خزانہ ہے اور خون میں شکر پر
            اس کا اثر نہ ہونے کے برابر ہے۔ کاربس بہت کم ہیں (~9g فی سرونگ)، جو
            صرف پیاز اور ٹماٹر سے آتے ہیں۔ یہ ذیابیطس کی خوراک کے لیے ایک بہترین
            پُرسکون کھانا ہے۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (2 افراد کے لیے)</Heading>
        <List
          items={[
            "250g بے ہڈی چکن، چھوٹے ٹکڑوں میں کٹا ہوا",
            "3 کپ تازہ پالک کے پتے، دھلے اور کٹے ہوئے",
            "1 چھوٹا پیاز، پتلا سلائس کیا ہوا",
            "1 پکا ہوا ٹماٹر، پیسا ہوا",
            "2 کھانے کے چمچ زیتون کا تیل",
            "1 چائے کا چمچ تازہ لیموں کا رس",
            "½ چائے کا چمچ لہسن پیسٹ",
            "¼ چائے کا چمچ ادرک پیسٹ",
            "1 چائے کا چمچ لال مرچ",
            "½ چائے کا چمچ پسا زیرہ",
            "¼ چائے کا چمچ پسا دھنیا",
            "⅛ چائے کا چمچ ہلدی پاؤڈر",
            "نمک حسبِ ذائقہ",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ پیاز بھونیں:</strong> تیل گرم کریں اور پیاز سنہرا بھورا
          ہونے تک تلیں (5-7 منٹ)۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ خوشبودار اجزاء اور مسالے:</strong> لہسن اور ادرک پیسٹ
          ڈالیں، چند سیکنڈ بھونیں۔ تمام پسے مسالے ڈالیں اور 5-7 سیکنڈ بھونیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ ٹماٹر مسالہ:</strong> پیسا ہوا ٹماٹر ڈالیں، ڈھکن لگائیں اور
          5 منٹ دم دیں یہاں تک کہ تیل الگ ہو جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ چکن پکائیں:</strong> چکن ڈالیں اور 5 منٹ بھورا ہونے تک
          بھونیں۔ آنچ کم کریں، ڈھکن لگائیں اور مزید 10 منٹ نرم ہونے تک پکائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ پالک ڈالیں:</strong> کٹی ہوئی پالک اور لیموں کا رس ڈالیں۔
          ڈھکن لگائیں اور 5-7 منٹ پکائیں یہاں تک کہ پالک مکمل مرجھا جائے۔
        </Paragraph>

        <Paragraph>
          <strong>۶۔ تیار کریں:</strong> نمک ٹھیک کریں۔ تازہ ہرے دھنیے سے سجائیں
          اور پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>227 kcal</strong>،{" "}
          <strong>8.8g کاربوہائیڈریٹس</strong>، <strong>27.7g پروٹین</strong>{" "}
          اور <strong>9.3g چکنائی</strong>۔ یہ ایک پُرسکون کھانا ہے جو خون میں
          گلوکوز پر بہت کم اثر ڈالے گا۔
        </Paragraph>
      </>
    ),
  },
  "chicken-split-pea-kebabs": {
    slug: "chicken-split-pea-kebabs",
    title: "Chicken & Split Pea Kebabs (Shami Kebabs)",
    titleUr: "چکن اور چنا دال کے کباب (شامی کباب)",
    image: ChickenPeaKebab.src,
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
          A lighter version of the famous <strong>Shami Kebabs</strong>, using
          chicken and split chickpeas (chana dal). These kebabs are aromatic,
          high in protein, fiber-rich, and pan-fried in minimal oil.
        </Paragraph>

        <Highlights title="Health Highlights: Low-Carb & High-Protein">
          <Paragraph>
            Each serving of 5 kebabs contains only about 10g of low-GI carbs
            from the chana dal, but packs over 21g of protein. This makes them a
            satisfying snack or main course that won’t spike blood glucose.
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
          <strong>1. Grind Chicken:</strong> Pulse chicken in a food processor
          until finely minced. Set aside.
        </Paragraph>

        <Paragraph>
          <strong>2. Cook Split Peas:</strong> Boil soaked peas with whole
          spices until soft (~15 mins). Add onion, lemon juice, and other spices
          and cook for another 10 mins until water evaporates. Let cool.
        </Paragraph>

        <Paragraph>
          <strong>3. Blend Pea Mixture:</strong> Transfer the cooled pea mixture
          to a food processor with mint leaves and process into a paste.
        </Paragraph>

        <Paragraph>
          <strong>4. Combine and Form:</strong> Mix the ground chicken, pea
          paste, and egg in a bowl. Form into round, flat patties.
        </Paragraph>

        <Paragraph>
          <strong>5. Cook Kebabs:</strong> Shallow-fry the kebabs in olive oil
          for 3-4 minutes on each side until golden-brown and cooked through.
        </Paragraph>

        <Paragraph>
          <strong>6. Serve:</strong> Serve hot with chutney or yogurt dip.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per 5 kebab serving):</Heading>
        <Paragraph>
          Approximately <strong>180 kcal</strong>, <strong>10.4 g carbs</strong>{" "}
          (net carbs ~7.5g), <strong>2.9 g fiber</strong>, and{" "}
          <strong>21.8 g protein</strong>. A perfect make-ahead item for quick,
          healthy meals.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          مشہور <strong>شامی کباب</strong> کی ہلکی ترکیب، جس میں چکن اور چنا دال
          استعمال کی گئی ہے۔ یہ کباب خوشبودار، پروٹین سے بھرپور، فائبر سے
          مالامال اور کم سے کم تیل میں پین فرائی کیے جاتے ہیں۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: کم کاربس اور زیادہ پروٹین">
          <Paragraph>
            5 کبابوں کی فی سرونگ میں چنا دال سے صرف تقریباً 10g کم-GI کاربس ہوتے
            ہیں، لیکن 21g سے زیادہ پروٹین ہوتی ہے۔ یہ انہیں ایک تسلی بخش ناشتہ
            یا مرکزی ڈش بناتا ہے جو خون میں گلوکوز نہیں بڑھاتا۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (تقریباً 25 کباب، 5 افراد کے لیے)</Heading>
        <List
          items={[
            "450g چکن ران کا گوشت، بے ہڈی",
            "½ کپ چنا دال، 1-2 گھنٹے بھگوئی ہوئی",
            "1 درمیانہ پیاز، باریک کٹا ہوا",
            "2-3 ہری مرچیں، کٹی ہوئی",
            "2 لونگ لہسن، باریک کٹے ہوئے",
            "¼ کپ تازہ پودینے کے پتے، کٹے ہوئے",
            "1 انڈہ",
            "مسالے: بڑی الائچی، دار چینی، پسی لونگ، زیرہ، دھنیا، لال مرچ فلیکس، کالی مرچ",
            "1 کھانے کا چمچ لیموں کا رس",
            "2 کھانے کے چمچ زیتون کا تیل شیلو فرائی کے لیے",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ چکن پیسیں:</strong> فوڈ پروسیسر میں چکن کو باریک قیمہ ہونے
          تک چلائیں۔ ایک طرف رکھ دیں۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ چنا دال پکائیں:</strong> بھگوئی ہوئی دال کو ثابت مسالوں کے
          ساتھ نرم ہونے تک ابالیں (~15 منٹ)۔ پیاز، لیموں کا رس اور باقی مسالے
          ڈالیں اور مزید 10 منٹ پکائیں یہاں تک کہ پانی خشک ہو جائے۔ ٹھنڈا ہونے
          دیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ دال مکسچر پیسیں:</strong> ٹھنڈا ہوا دال مکسچر پودینے کے
          پتوں کے ساتھ فوڈ پروسیسر میں ڈالیں اور پیسٹ بنا لیں۔
        </Paragraph>

        <Paragraph>
          <strong>۴۔ ملائیں اور شکل دیں:</strong> ایک پیالے میں پسا چکن، دال
          پیسٹ اور انڈہ ملائیں۔ گول، چپٹے ٹکیے بنائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ کباب پکائیں:</strong> زیتون کے تیل میں کبابوں کو ہر طرف سے
          3-4 منٹ سنہرا بھورا اور اچھی طرح پکنے تک شیلو فرائی کریں۔
        </Paragraph>

        <Paragraph>
          <strong>۶۔ پیش کریں:</strong> چٹنی یا دہی کے ساتھ گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (5 کبابوں کی فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>180 kcal</strong>،{" "}
          <strong>10.4g کاربوہائیڈریٹس</strong> (نیٹ کاربس ~7.5g)،{" "}
          <strong>2.9g فائبر</strong> اور <strong>21.8g پروٹین</strong>۔ جلدی،
          صحت مند کھانوں کے لیے پہلے سے تیار کر کے رکھنے کا ایک بہترین آئٹم۔
        </Paragraph>
      </>
    ),
  },
  "kala-chana-curry": {
    slug: "kala-chana-curry",
    title: "Kala Chana Curry (Black Chickpea Masala)",
    titleUr: "کالے چنے کا سالن",
    image: KalaChana.src,
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
          A traditional Pakistani-style black chickpea stew.{" "}
          <strong>Kala chana (black chickpeas)</strong> are nutritional
          powerhouses – high in fiber and protein, with a lower glycemic impact
          than regular chickpeas.
        </Paragraph>

        <Highlights title="Health Highlights: High-Fiber Complex Carbs">
          <Paragraph>
            Although the carb count is higher (52g), these are complex carbs
            accompanied by over 12g of fiber and 15g of protein. This
            combination results in a much lower glycemic load and a slower, more
            stable release of glucose.
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
          <strong>1. Soak Beans:</strong> Rinse and soak dry kala chana in water
          for at least 8 hours or overnight. Drain.
        </Paragraph>

        <Paragraph>
          <strong>2. Simmer with Base Ingredients:</strong> In a large pot,
          combine soaked chickpeas, ~3 cups water, tomatoes, onion, chilies,
          oil, salt, and spices. Bring to a boil.
        </Paragraph>

        <Paragraph>
          <strong>3. Slow Cook:</strong> Reduce heat to medium-low, cover, and
          simmer for 3 to 4 hours, or until chana are tender. Stir occasionally,
          adding water if needed. (Alternatively, pressure cook for 40-45 mins).
        </Paragraph>

        <Paragraph>
          <strong>4. Adjust Consistency:</strong> The gravy should be slightly
          thick. If too thin, mash a few chickpeas to thicken the sauce.
        </Paragraph>

        <Paragraph>
          <strong>5. Season and Serve:</strong> Adjust salt. Garnish with fresh
          cilantro and serve warm.
        </Paragraph>

        <Heading level={2}>Nutritional Info (per serving):</Heading>
        <Paragraph>
          Approximately <strong>386 calories</strong>,{" "}
          <strong>52 g carbs</strong>, <strong>15 g protein</strong>, and{" "}
          <strong>15 g fat</strong>. The{" "}
          <strong>fiber content is very high (estimated 12–15 g)</strong>, which
          helps maintain blood sugar control.
        </Paragraph>
      </>
    ),
    urduContent: (
      <>
        <Paragraph>
          روایتی پاکستانی طرز کا کالے چنوں کا سالن۔ <strong>کالے چنے</strong>{" "}
          غذائیت کا خزانہ ہیں — فائبر اور پروٹین سے بھرپور، اور عام چنوں کے
          مقابلے کم گلائسیمک اثر کے ساتھ۔
        </Paragraph>

        <Highlights title="صحت کی خصوصیات: زیادہ فائبر پیچیدہ کاربس">
          <Paragraph>
            اگرچہ کاربوہائیڈریٹس کی مقدار زیادہ ہے (52g)، یہ پیچیدہ کاربس ہیں جن
            کے ساتھ 12g سے زیادہ فائبر اور 15g پروٹین موجود ہے۔ یہ امتزاج
            گلائسیمک لوڈ کو نمایاں طور پر کم کرتا ہے اور گلوکوز کا اخراج سست اور
            مستحکم رکھتا ہے۔
          </Paragraph>
        </Highlights>

        <Heading level={2}>اجزاء (4 افراد کے لیے)</Heading>
        <List
          items={[
            "1½ کپ خشک کالے چنے، رات بھر بھگوئے ہوئے",
            "پکانے کے لیے پانی",
            "2 درمیانے ٹماٹر، باریک کٹے ہوئے",
            "1 پیاز، باریک کٹا ہوا",
            "4 خشک سرخ مرچیں (ثابت)",
            "1 ہری مرچ، باریک کٹی ہوئی",
            "3 کھانے کے چمچ سبزیوں کا تیل",
            "1 چائے کا چمچ نمک",
            "½ چائے کا چمچ ہلدی پاؤڈر",
            "½ چائے کا چمچ لال مرچ پاؤڈر",
            "تازہ ہرا دھنیا گارنش کے لیے",
          ]}
        />

        <Heading level={2}>تیاری کے مراحل:</Heading>

        <Paragraph>
          <strong>۱۔ چنے بھگوئیں:</strong> خشک کالے چنے دھوئیں اور کم از کم 8
          گھنٹے یا رات بھر پانی میں بھگو کر رکھیں۔ پانی نکال دیں۔
        </Paragraph>

        <Paragraph>
          <strong>۲۔ بنیادی اجزاء کے ساتھ ابالیں:</strong> ایک بڑے پتیلے میں
          بھگوئے ہوئے چنے، ~3 کپ پانی، ٹماٹر، پیاز، مرچیں، تیل، نمک اور مسالے
          ڈالیں۔ ابال لائیں۔
        </Paragraph>

        <Paragraph>
          <strong>۳۔ آہستہ پکائیں:</strong> آنچ درمیانی کم کریں، ڈھکن لگائیں اور
          3-4 گھنٹے دم دیں یہاں تک کہ چنے نرم ہو جائیں۔ بیچ بیچ میں چلائیں،
          ضرورت پڑے تو پانی ڈالیں۔ (متبادل طور پر پریشر کوکر میں 40-45 منٹ
          پکائیں۔)
        </Paragraph>

        <Paragraph>
          <strong>۴۔ گاڑھا پن ٹھیک کریں:</strong> گریوی ہلکی گاڑھی ہونی چاہیے۔
          اگر بہت پتلی ہو تو چند چنے مسل کر سالن گاڑھا کریں۔
        </Paragraph>

        <Paragraph>
          <strong>۵۔ نمک اور سرونگ:</strong> نمک ٹھیک کریں۔ تازہ ہرے دھنیے سے
          سجائیں اور گرم پیش کریں۔
        </Paragraph>

        <Heading level={2}>غذائی معلومات (فی سرونگ):</Heading>
        <Paragraph>
          تقریباً <strong>386 کیلوریز</strong>،{" "}
          <strong>52g کاربوہائیڈریٹس</strong>، <strong>15g پروٹین</strong> اور{" "}
          <strong>15g چکنائی</strong>۔{" "}
          <strong>فائبر کی مقدار بہت زیادہ ہے (تخمینہ 12-15g)</strong>، جو خون
          میں شکر کنٹرول برقرار رکھنے میں مدد کرتی ہے۔
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
