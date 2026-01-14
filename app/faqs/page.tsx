"use client";

import { Category, getCategoryGradient } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import DietIcon from "../../public/faqs-diet.svg";
import EducationIcon from "../../public/faqs-education.svg";
import HealthIcon from "../../public/faqs-health.svg";

const faqs = [
  {
    question: "I’m at a restaurant — what should I order?",
    answer:
      "Eating out doesn’t have to mean giving up control. In Pakistan, menus are full of tempting carb-heavy dishes, but you can make smart swaps. Choose grilled or baked meats over fried. Ask for roti made from whole wheat instead of naan, and skip the extra oil. Load your plate with salad or sautéed vegetables before touching the rice or bread. If you’re at a dhaba, go for daal with a side of mixed sabzi instead of biryani. And remember — portion size matters. Share a dish with a friend or ask for half to be packed. You’ll leave satisfied, not stuffed, and your blood sugar will thank you.",
    category: "Diet" as Category,
  },
  {
    question: "My doctor mentioned a GLP-1 — what is that?",
    answer:
      "GLP-1 receptor agonists are a newer type of diabetes medicine that work with your body’s natural hormones. They help your pancreas release insulin when needed, slow down digestion so you feel fuller, and can even help with weight loss — which is important since obesity and diabetes often go hand in hand in Pakistan. They usually come as weekly or daily injections, but the needles are tiny and easy to use. They’re not for everyone, and they can be costly, so discuss with your doctor whether they fit your treatment plan. For many, GLP-1s are a game-changer in controlling blood sugar and reducing heart risks.",
    category: "Health" as Category,
  },
  {
    question: "I’ve just been diagnosed — what does this mean?",
    answer:
      "Hearing “You have diabetes” can feel like a punch to the gut. But here’s the truth: diabetes is not the end of your story — it’s a new chapter. In simple terms, your body is struggling to manage sugar (glucose) in your blood, either because it’s not making enough insulin or not using it well. Left unchecked, high sugar can harm your heart, eyes, kidneys, and nerves. But with the right habits, medication, and mindset, you can live a long, healthy life. Many Pakistanis manage their diabetes while running businesses, raising families, and enjoying life — and so can you. The key is to learn, act, and stay consistent.",
    category: "Education" as Category,
  },
  {
    question: "I crave sweets all the time.",
    answer:
      "Sweet cravings are real — and in a culture where mithai, chai, and desserts are part of every celebration, resisting them can feel impossible. Instead of banning sweets completely (which can backfire), learn to manage them. Choose smaller portions — one gulab jamun instead of three. Swap sugary drinks for unsweetened lassi or lemon water. Keep fruit like guava or apple handy for when cravings hit. And remember, cravings often fade after 10–15 minutes — distract yourself with a short walk or a phone call. Over time, your taste buds will adjust, and you’ll find you need less sugar to feel satisfied.",
    category: "Diet" as Category,
  },
  {
    question: "I keep forgetting my medication.",
    answer:
      "Missing doses can quietly undo your progress. In our busy Pakistani routines — juggling work, family, and social commitments — it’s easy to forget. The trick is to link your medication to something you already do daily: after brushing your teeth, before your morning chai, or right after dinner. Use your phone’s alarm, a pillbox with daily compartments, or even a sticky note on the fridge. If you travel often, keep a spare strip in your bag or car. Remember, diabetes medicines work best when taken consistently — skipping “just one day” can cause sugar spikes and long-term harm. Make it part of your routine, not an afterthought.",
    category: "Health" as Category,
  },
  {
    question: "Why did this happen to me?",
    answer:
      "It’s natural to ask “Why me?” Diabetes can be influenced by many factors — family history, weight, diet, stress, and even certain illnesses. In Pakistan, high-carb diets, low physical activity, and rising obesity rates have made type 2 diabetes more common. This isn’t about blame — it’s about awareness. Knowing your risk factors helps you take control. Even if genetics played a role, lifestyle changes can slow or even reverse early damage. Instead of focusing on “why,” focus on “what now” — the steps you can take today to protect your future.",
    category: "Education" as Category,
  },
  {
    question: "I don’t know what I can eat anymore.",
    answer:
      "It can feel like your entire menu has been taken away — but in reality, you still have plenty of delicious options. Think of your plate in three parts: Half vegetables — sabzi, salad, or lightly cooked greens. One-quarter lean protein — chicken, fish, daal, or eggs. One-quarter whole grains or healthy carbs — whole-wheat roti, brown rice, or small portions of boiled potatoes. Avoid sugary drinks like cola or packaged juices; choose water, unsweetened lassi, or green tea instead. In Pakistan, small swaps — like grilled kebab instead of fried samosa, or roti instead of naan — can make a big difference. You’re not giving up flavour; you’re choosing foods that keep your sugar steady and your energy high.",
    category: "Diet" as Category,
  },
  {
    question: "Are GLP-1s safe for me?",
    answer:
      "GLP-1 medicines are generally safe for many people with type 2 diabetes, but they’re not for everyone. They can cause side effects like nausea, stomach upset, or constipation — usually mild and temporary. People with certain thyroid or pancreas conditions may need to avoid them. In Pakistan, where access and cost can be challenges, it’s important to have an honest discussion with your doctor about your health history, budget, and goals. If prescribed, start slowly, follow instructions carefully, and report any unusual symptoms. Safety isn’t just about the medicine — it’s about the right medicine for the right person.",
    category: "Health" as Category,
  },
  {
    question: "My blood sugar numbers confuse me.",
    answer:
      "You’re not alone — those numbers can feel like a secret code. Think of your glucose readings as your body’s “status updates.” A fasting sugar of 80–130 mg/dL is generally healthy for most people with diabetes, and under 180 mg/dL two hours after eating is a common target (your doctor may adjust these). If your numbers are high, it’s a signal to review your food, activity, or medication. If they’re low, you may need a quick snack. Keep a small notebook or use a phone app to track patterns — you’ll soon see what foods, stress, or routines push your numbers up or down. Knowledge is power here.",
    category: "Education" as Category,
  },
  {
    question: "What food choices can I make at home?",
    answer:
      "Home is where you have the most control over your diet. Stock your kitchen with fresh vegetables, whole grains, and lean proteins. Cook with less oil — use olive, canola, or mustard oil in small amounts. Limit white rice, white bread, and fried snacks; replace them with whole-wheat roti, brown rice, or baked alternatives. Keep healthy snacks ready — roasted chana, nuts, or sliced cucumber — so you’re not tempted by biscuits or chips. In Pakistani households, meals are often shared, so involve your family in healthier cooking. When everyone eats better, it’s easier for you to stay on track without feeling singled out.",
    category: "Diet" as Category,
  },
  {
    question: "I don’t like going to the gym.",
    answer:
      "Good news — you don’t have to. Exercise is about movement, not machines. In Pakistan, daily life offers plenty of opportunities: brisk walks in the park, climbing stairs instead of taking the lift, or even dancing at a mehndi. Aim for at least 30 minutes of activity most days, but break it into smaller chunks if needed — 10 minutes after each meal can help control blood sugar. If you enjoy it, you’ll stick with it. So choose something that makes you feel good, whether it’s gardening, cycling, or playing cricket with friends. Your body — and your glucose meter — will thank you.",
    category: "Health" as Category,
  },
  {
    question: "I feel overwhelmed and scared.",
    answer:
      "It’s okay to feel this way — a diabetes diagnosis can shake your sense of control. In Pakistan, we often hear “Bas Allah pe bharosa rakho” (Just trust in God), and while faith is powerful, pairing it with action is even stronger. Start small: learn one new thing about diabetes each week, make one healthier food swap, or walk for 15 minutes daily. Share your feelings with someone you trust — a friend, family member, or support group. You’re not weak for feeling scared; you’re human. Over time, these small steps will build confidence, and fear will give way to empowerment.",
    category: "Education" as Category,
  },
  {
    question: "My family keeps offering me food I shouldn’t eat.",
    answer:
      "Food is love in Pakistan, and refusing can feel rude. But your health comes first. Politely explain, “Doctor ne mana kiya hai” (The doctor has advised against it) or “Mujhe apni sehat ka khayal rakhna hai” (I need to take care of my health). Offer alternatives — “I’ll have a small piece” or “Can I have some salad instead?” Over time, your family will learn your boundaries. You’re not rejecting their love — you’re asking them to show it in a way that keeps you healthy.",
    category: "Diet" as Category,
  },
  {
    question: "Will a GLP-1 replace my other diabetes medicines?",
    answer:
      "Not always. GLP-1s can be used alone, but more often they’re added to your existing plan — alongside metformin, SGLT2 inhibitors, or even insulin. The goal is to work together to control blood sugar, protect your heart, and support weight loss if needed. Your doctor will decide whether to reduce or stop other medicines based on your progress. Never stop a medicine on your own — sudden changes can cause dangerous sugar swings. Think of GLP-1s as a powerful teammate, not a solo player.",
    category: "Health" as Category,
  },
  {
    question: "I’ll deal with complications if they happen.",
    answer:
      "This mindset can be dangerous. Diabetes complications — like vision loss, kidney damage, or nerve pain — often develop silently over years. By the time symptoms appear, damage may be harder to reverse. Prevention is far easier (and cheaper) than treatment. Keep your sugar, blood pressure, and cholesterol in check. Get your eyes, feet, and kidneys checked at least once a year. In Pakistan, where healthcare access can be uneven, early action is your best insurance. Think of it like maintaining a car — regular servicing prevents breakdowns. Your body deserves the same care.",
    category: "Education" as Category,
  },
  {
    question: "My friends don’t understand why I can’t just ‘cheat’ sometimes.",
    answer:
      "Friends may not realise that “just one” sweet or sugary drink can spike your sugar. Explain that managing diabetes is like keeping a balance — one slip can throw it off. Share how you’ve found tasty alternatives, and invite them to try. In Pakistan’s chai culture, you can still join in — just choose sugar-free or limit portions. True friends will respect your choices once they understand the stakes.",
    category: "Diet" as Category,
  },
  {
    question: "I only see my doctor when I feel sick.",
    answer:
      "Diabetes doesn’t always shout — it often whispers. You might feel fine while silent damage is happening inside. Regular check-ups (every 3–6 months) help catch problems early, adjust medicines, and keep you on track. In Pakistan, where many skip follow-ups due to cost or time, think of these visits as investments in your future health. Bring your sugar logs, list of medicines, and any questions. Your doctor is your partner — but they can only help if they see the full picture.",
    category: "Health" as Category,
  },
  {
    question: "Is diabetes a death sentence?",
    answer:
      "No — diabetes is not a death sentence. It’s a serious condition, but with the right approach, you can live a long, active, and fulfilling life. In Pakistan, thousands of people manage their diabetes while running businesses, raising families, and enjoying social life. The key is consistency: eating balanced meals, staying active, taking your medication, and monitoring your sugar levels. Think of diabetes like maintaining a car — regular care keeps it running smoothly for years. Yes, it requires discipline, but it doesn’t mean giving up joy. With the right mindset and support, diabetes can be a part of your life, not the thing that controls it.",
    category: "Education" as Category,
  },
  {
    question: "Is it okay to eat fruit if I have diabetes?",
    answer:
      "Yes — fruit can be part of a healthy diet for people with diabetes. Fruits contain natural sugars, but they also provide fibre, vitamins, and antioxidants that benefit your overall health. The key is portion control and choosing fruits with a lower glycaemic index (GI), which release sugar more slowly into your blood. Spread your fruit intake across the day instead of eating a large portion at once. Pair fruit with a source of protein or healthy fat — like a handful of nuts — to slow sugar absorption. In Pakistan, seasonal fruits like guava, apple, pear, and jamun can be great choices. Avoid fruit juices, which remove fibre and cause quick sugar spikes.",
    category: "Diet" as Category,
  },
  {
    question: "I’m too busy to exercise.",
    answer:
      "You don’t need hours in the gym — movement can fit into your day. Break it into 10-minute chunks: walk after meals, take stairs instead of the lift, or do light stretches while watching TV. In Pakistan’s busy lifestyle, even household chores like sweeping, gardening, or washing the car count as activity. Aim for at least 30 minutes total each day. If you commute, get off the bus a stop early and walk. The key is consistency — small, regular bursts of movement are better than occasional intense workouts. Your body — and your blood sugar — will thank you.",
    category: "Health" as Category,
  },
  {
    question: "I feel fine — do I still need to be strict?",
    answer:
      "Yes. Diabetes can cause silent damage even when you feel perfectly fine. High sugar levels slowly harm your blood vessels, nerves, and organs without obvious symptoms. By the time you “feel” something, the damage may already be advanced. Staying disciplined with food, exercise, and medication is like maintaining a building’s foundation — you can’t see the cracks until it’s too late. Prevention today means fewer complications tomorrow. Even if you feel healthy now, your future self will thank you for the effort you put in today.",
    category: "Education" as Category,
  },
  {
    question: "What fruits are best for people with diabetes?",
    answer:
      "Fruits with a low to medium GI are best because they have a gentler effect on blood sugar. In Pakistan, good options include guava (amrood), apple (seb), pear (nashpati), jamun, peach (aaru), plum (aloo bukhara), and berries when available. Citrus fruits like kinnow, grapefruit, and lemon are also excellent. These fruits are rich in fibre, vitamins, and antioxidants, and they help you feel full without causing sharp sugar spikes. Eat them fresh and whole — not canned or in syrup. Remember, even healthy fruits should be eaten in moderation — about one small fruit or a cup of chopped fruit per serving.",
    category: "Diet" as Category,
  },
  {
    question: "I’ve heard GLP-1s help with weight loss — is that true?",
    answer:
      "Yes — GLP-1 medicines can help with weight loss by slowing digestion, reducing appetite, and helping you feel full longer. For many Pakistanis with type 2 diabetes and excess weight, this can improve blood sugar control and reduce heart risks. But they work best alongside healthy eating and regular activity. They’re not a magic fix — think of them as a tool, not the whole toolbox. Your doctor can help decide if they’re right for you based on your health, goals, and budget.",
    category: "Health" as Category,
  },
  {
    question: "I’m tired of living with so many rules.",
    answer:
      "It’s normal to feel burnt out. Diabetes care can feel like a never-ending list of restrictions, especially in a culture where food and hospitality are central to social life. The key is balance, not perfection. Allow yourself occasional treats in small portions — one piece of mithai instead of three, or biryani once in a while instead of every week. Focus on what you can enjoy: flavorful spices, fresh vegetables, lean meats, and active hobbies. Build flexibility into your plan so it feels sustainable. Remember, this is a lifelong journey — it’s about living well, not living under constant pressure.",
    category: "Education" as Category,
  },
  {
    question: "Which fruits should I limit or avoid?",
    answer:
      "Some fruits have a higher GI or more concentrated sugar, which can raise blood sugar quickly. In Pakistan, this includes ripe bananas, chikoo (sapodilla), grapes, lychee, and dates. You don’t have to avoid them completely, but limit portions — for example, 2–3 small dates instead of a handful, or half a banana instead of a whole one. Eat them with a meal rather than on an empty stomach, and pair them with protein or fibre to slow sugar absorption. Dried fruits like raisins and figs are also high in sugar — treat them as occasional snacks, not daily staples.",
    category: "Diet" as Category,
  },
  {
    question: "These injections sound scary — how do I take them?",
    answer:
      "GLP-1 injections use very fine needles — most people say they barely feel them. Your healthcare provider will show you exactly how to prepare, inject, and store the medicine. They’re usually taken once a week or once a day, depending on the type. Store them in the fridge, but let the pen warm to room temperature before injecting to reduce discomfort. Rotate injection sites (stomach, thigh, or upper arm) to avoid irritation. With a little practice, it becomes as routine as brushing your teeth.",
    category: "Health" as Category,
  },
  {
    question: "My family doesn’t understand what I’m going through.",
    answer:
      "Family support can make a huge difference, but sometimes they don’t fully grasp the challenges of living with diabetes. They might insist you “just have one more” sweet or skip your walk for a family gathering. Communicate openly: explain why certain foods are off-limits, why you need time for exercise, and how stress affects your sugar. Invite them to join you in healthy meals or walks so they feel part of your journey. When they see your commitment, they’re more likely to support you. Remember, you’re not just managing your health — you’re also teaching those around you how to care for it.",
    category: "Education" as Category,
  },
  {
    question: "Can I eat mangoes if I have diabetes?",
    answer:
      "Yes — but in moderation. Mangoes are high in natural sugar, especially when fully ripe, but they also contain fibre and nutrients. The key is portion size and timing. Stick to ½ cup of chopped mango (about half a small mango) in one sitting, and avoid eating it alongside other high-carb foods like roti or rice. Pair it with a handful of nuts or a boiled egg to slow sugar release. Eating mango earlier in the day, when you’re more active, can also help your body use the sugar more effectively. In mango season, enjoy the taste — but let moderation be your rule.",
    category: "Diet" as Category,
  },
  {
    question: "GLP-1s are expensive — are they worth it?",
    answer:
      "GLP-1s can be costly in Pakistan, especially without insurance. Whether they’re “worth it” depends on your health goals, how well they work for you, and your budget. They can improve blood sugar, support weight loss, and reduce heart risks — benefits that may save you money on future complications. Discuss with your doctor if there are patient assistance programs, generic options, or alternative medicines that could work for you. The decision should balance health benefits with financial reality.",
    category: "Health" as Category,
  },
  {
    question: "I didn’t know diabetes affects my eyes, feet, and heart.",
    answer:
      "Diabetes isn’t just about sugar — it can quietly damage blood vessels and nerves throughout your body. High sugar can harm your eyes (causing vision loss), your feet (leading to numbness, wounds, or infections), and your heart (increasing the risk of heart attack and stroke). The good news? You can protect yourself. Keep your sugar, blood pressure, and cholesterol in target range. Get your eyes checked yearly, inspect your feet daily, and see your doctor if you notice cuts, swelling, or numbness. Eat heart-healthy foods, stay active, and don’t smoke. In Pakistan, where many delay check-ups, early prevention is your best defence.",
    category: "Education" as Category,
  },
  {
    question: "How much fruit can I eat in a day?",
    answer:
      "For most people with diabetes, 2–3 servings of fruit per day is a safe range — but this depends on your blood sugar control and your doctor’s advice. One serving is about one small fruit (like an apple or guava) or one cup of chopped fruit. Spread your servings across the day instead of eating them all at once. Monitor your blood sugar after trying new fruits to see how your body responds. Remember, fruit is healthy, but it still counts toward your daily carbohydrate intake — so balance it with your other meals.",
    category: "Diet" as Category,
  },
  {
    question: "What happens if I stop taking my GLP-1?",
    answer:
      "If you stop, your appetite may return to previous levels, and your blood sugar and weight could rise again. This doesn’t mean you’ll “undo” all your progress overnight, but it does mean you’ll need a plan. Work with your doctor to adjust your diet, exercise, and other medicines before stopping. Think of GLP-1s as part of a long-term strategy — if you remove one piece, you need to strengthen the others to keep your health on track.",
    category: "Health" as Category,
  },
  {
    question: "I keep falling off track.",
    answer:
      "It happens to everyone. Life in Pakistan is full of weddings, Eid feasts, and chai breaks that can throw you off your plan. The key is not to let one slip turn into a spiral. Instead of feeling guilty, reset at the very next meal or the next day. Ask yourself: What’s one small thing I can do right now? Maybe it’s a 10-minute walk, skipping the sugary drink, or taking your medicine on time. Keep healthy snacks handy so you’re not tempted by quick fixes. Remember, diabetes management is a marathon, not a sprint — progress matters more than perfection.",
    category: "Education" as Category,
  },
  {
    question: "Should I drink fruit juice instead of eating whole fruit?",
    answer:
      "Whole fruit is always better than juice for people with diabetes. Juice — even fresh-squeezed — removes most of the fibre, which means the natural sugar hits your bloodstream quickly, causing a spike. A glass of juice can contain the sugar of 3–4 fruits without the filling effect. If you really want juice, limit it to a very small portion (½ cup), dilute it with water, and pair it with a high-fibre snack. But whenever possible, eat the fruit whole — you’ll get the fibre, feel fuller, and keep your sugar more stable.",
    category: "Diet" as Category,
  },
  {
    question: "I want to live a normal life.",
    answer:
      "You can — by making diabetes care part of your routine, not your identity. Plan your meals so you can still enjoy family favourites in moderation. Schedule activity into your day, just like you would a meeting or prayer. Keep your medicines and glucose checks as regular habits, not special events. In Pakistan, social life often revolves around food, so learn to make smart swaps and control portions without drawing attention. When care becomes second nature, you’ll find you’re living your life — with diabetes in the background, not the spotlight.",
    category: "Education" as Category,
  },
  {
    question: "How can I make fruit part of my meal plan?",
    answer:
      "Think of fruit as a healthy carb choice that can replace less nutritious snacks. Have a small apple with a handful of almonds for your mid-morning snack, or a slice of papaya after lunch instead of dessert. Add chopped guava or pear to your salad for extra crunch. In Pakistan’s hot summers, chilled watermelon in a small portion can be refreshing — just pair it with nuts or cheese to slow sugar absorption. By planning your fruit intake, you can enjoy sweetness without harming your blood sugar control.",
    category: "Diet" as Category,
  },
  {
    question: "I want to help others with diabetes.",
    answer:
      "Your journey can inspire others. Share your story with friends, family, or online communities. Offer practical tips — like your favourite sugar-free recipes or how you remember your medicines. In Pakistan, where awareness is still growing, you can make a real difference by encouraging early check-ups, healthy eating, and regular exercise. Volunteer with local health camps or support groups. Helping others not only spreads knowledge — it strengthens your own commitment to living well.",
    category: "Education" as Category,
  },
  {
    question: "Are dry fruits safe for people with diabetes?",
    answer:
      "Yes — but with caution. Dry fruits are nutrient-dense, rich in healthy fats, fibre, vitamins, and minerals. However, they are also calorie-dense, and some (like raisins, dates, and figs) are high in natural sugars that can raise blood glucose quickly. The key is portion control. A small handful (about 20–30 grams) of unsalted, unsweetened nuts or seeds can be a healthy snack that supports heart health and keeps you full. Avoid sugar-coated or fried varieties. In Pakistan, where dry fruits are often served generously in winter, measure your portion before eating to avoid mindless snacking.",
    category: "Diet" as Category,
  },
  {
    question: "I feel shocked and numb after my diagnosis.",
    answer:
      "Hearing “You have diabetes” can feel like the ground has shifted beneath you. Shock, disbelief, even denial — these are natural first reactions. In Pakistan, where health conversations often happen late in the game, it’s common to feel blindsided. Give yourself permission to process. You don’t have to understand everything today. Start by learning the basics: what diabetes is, how it affects your body, and what steps you can take now. Talk to your doctor, write down your questions, and bring a trusted family member to appointments. Remember, this is not the end of your story — it’s the beginning of a new chapter where you take charge of your health.",
    category: "Education" as Category,
  },
  {
    question: "Which dry fruits are best for blood sugar control?",
    answer:
      "Nuts like almonds (badam), walnuts (akhrot), pistachios (pista), and peanuts (moongphali) are excellent choices for people with diabetes. They have a low glycaemic index, are high in fibre, and contain healthy fats that help stabilise blood sugar. Walnuts are especially good for heart health, while almonds provide magnesium, which supports insulin function. Choose raw or lightly roasted, unsalted versions. A small handful can be eaten as a snack, sprinkled over salads, or added to porridge. These nuts not only help with blood sugar control but also keep you feeling satisfied for longer.",
    category: "Diet" as Category,
  },
  {
    question: "I’m scared about my future.",
    answer:
      "Fear is normal — but it can be turned into fuel. Instead of imagining worst-case scenarios, focus on what’s in your control today: your meals, your activity, your medication, and your mindset. In Pakistan, many people live decades with diabetes while working, travelling, and enjoying life. The difference is consistent care. Break your goals into small, achievable steps — like walking 15 minutes after dinner or swapping one sugary drink for water each day. Each small win builds confidence and reduces fear. The future isn’t written yet — and your daily choices are the pen.",
    category: "Education" as Category,
  },
  {
    question: "Which dry fruits should I limit or avoid?",
    answer:
      "High-sugar dried fruits like raisins (kishmish), dates (khajoor), figs (anjeer), and dried apricots (khubani) can cause quick spikes in blood sugar. While they have nutritional benefits, they should be eaten in very small amounts — for example, 2–3 dates or 1–2 dried figs at a time, ideally with a source of protein like nuts to slow sugar absorption. Avoid candied or sugar-coated versions entirely. In Pakistan, these fruits are often served during Ramadan or as snacks — enjoy them mindfully, not as a daily staple.",
    category: "Diet" as Category,
  },
  {
    question: "I feel guilty — did I cause this?",
    answer:
      "Self-blame is heavy, and it’s often misplaced. Diabetes can be influenced by many factors — genetics, age, stress, diet, and activity levels. In Pakistan, high-carb diets and sedentary lifestyles are common, but that doesn’t mean you “caused” this alone. What matters now is not the past, but the present. Guilt drains energy you could use for action. Replace “Why me?” with “What’s my next step?” Every healthy choice you make now — from your breakfast to your bedtime routine — is a step toward better control and a healthier future.",
    category: "Education" as Category,
  },
  {
    question: "How much dry fruit can I eat in a day?",
    answer:
      "For most people with diabetes, 20–30 grams (about a small handful) of nuts or seeds per day is a healthy amount. If you’re including higher-sugar dried fruits, limit them to 1–2 small pieces and count them as part of your daily carbohydrate allowance. Spread your intake across the day rather than eating it all at once. Remember, even healthy dry fruits are calorie-dense — eating too much can lead to weight gain, which can make blood sugar harder to control.",
    category: "Diet" as Category,
  },
  {
    question: "I feel overwhelmed by all the changes I have to make.",
    answer:
      "It’s easy to feel buried under a mountain of “must-dos” — new foods, exercise, medicines, check-ups. The trick is to start small. Pick one change this week: maybe it’s walking after lunch, or switching to whole-wheat roti. Once that feels natural, add another. In Pakistan, we often try to overhaul everything at once, then burn out. Think of it like building a house — one brick at a time. Over weeks and months, these small changes stack up into a strong foundation for your health.",
    category: "Education" as Category,
  },
  {
    question: "Is it better to eat raw or roasted dry fruits?",
    answer:
      "Raw or lightly roasted (without added salt or oil) is best. In Pakistan, many store-bought roasted nuts are fried in oil or coated with salt, which adds unnecessary calories and sodium. If you prefer roasted flavour, dry-roast them at home in a pan or oven without oil. Avoid honey-roasted or sugar-coated varieties, as they add extra carbs and can spike your blood sugar.",
    category: "Diet" as Category,
  },
  {
    question: "I’m tired of thinking about diabetes all the time.",
    answer:
      "Diabetes can feel like it’s taken over your mental space. To avoid burnout, set boundaries. Schedule “diabetes time” — moments in the day to check sugar, plan meals, or take medicine — and then shift your focus to work, hobbies, or family. In Pakistan’s social culture, staying engaged with friends, faith, and community can help you feel like more than your diagnosis. Remember, you are a whole person — diabetes is just one part of your life, not the definition of it.",
    category: "Education" as Category,
  },
  {
    question: "Can I replace snacks with dry fruits?",
    answer:
      "Yes — replacing processed snacks like biscuits, chips, or fried pakoras with a small portion of nuts is a smart choice. Nuts provide protein, healthy fats, and fibre, which help keep you full and prevent sugar spikes. Just remember that portion control is key — a small handful is enough. Pairing nuts with a piece of low-GI fruit, like guava or apple, can make a balanced, satisfying snack.",
    category: "Diet" as Category,
  },
  {
    question: "I don’t want to be treated differently because of my diabetes.",
    answer:
      "It’s natural to want to blend in. Let people know you appreciate their concern, but you’re capable of managing your health. In Pakistan, where hospitality is strong, people may over-accommodate. Thank them, but guide them toward normalcy — “I’m fine, just keep the roti whole-wheat and I’m good.” The more confident you are, the more others will treat you as they always have.",
    category: "Education" as Category,
  },
  {
    question: "Do dry fruits help with heart health in diabetes?",
    answer:
      "Absolutely. Nuts like walnuts, almonds, and pistachios are rich in omega-3 fatty acids, unsaturated fats, and antioxidants that support heart health — a major concern for people with diabetes. Regular, moderate consumption can help lower LDL (“bad”) cholesterol and improve blood vessel function. Since diabetes increases the risk of heart disease, including a small daily portion of heart-healthy nuts can be a valuable part of your diet.",
    category: "Diet" as Category,
  },
  {
    question: "I want my family to be part of my health journey.",
    answer:
      "Involving family can make diabetes care easier and more enjoyable. Invite them to join you for evening walks, cook healthier versions of favourite dishes together, or learn about diabetes as a team. In Pakistan, where meals are shared, a family shift toward healthier eating benefits everyone. When your loved ones feel included, they become allies in your journey.",
    category: "Education" as Category,
  },
  {
    question: "Should I soak dry fruits before eating?",
    answer:
      "Soaking almonds, walnuts, or raisins overnight is a common practice in Pakistan. While soaking doesn’t significantly change their sugar content, it can make nuts easier to chew and may slightly improve nutrient absorption. If you enjoy them soaked, go ahead — just remember that the portion size still matters. Avoid drinking the soaking water from high-sugar dried fruits like raisins or dates, as it contains dissolved sugars.",
    category: "Diet" as Category,
  },
  {
    question: "I feel alone in this.",
    answer:
      "You’re not alone — even if it feels that way. Millions in Pakistan live with diabetes, and many are eager to share their experiences. Look for local support groups, diabetes education sessions, or online communities. Talking to others who “get it” can lift the weight off your shoulders. Shared stories, tips, and encouragement can turn isolation into connection.",
    category: "Education" as Category,
  },
  {
    question: "I love my chai and coffee — do I have to give them up?",
    answer:
      "No — you don’t have to give up tea or coffee if you have diabetes, but you do need to be smart about how you drink them. The real problem isn’t the tea or coffee itself — it’s what we add to it. In Pakistan, chai often comes loaded with sugar and full-fat milk, which can spike blood sugar and add unnecessary calories. Switch to sugar-free options: use non-nutritive sweeteners like stevia, sucralose, or monk fruit instead of white sugar. Avoid “brown sugar” or honey thinking they’re healthier — they still raise blood sugar. Opt for low-fat milk or unsweetened almond/soy milk to reduce saturated fat. As for caffeine, moderate amounts (1–2 cups of coffee or 2–3 cups of tea a day) are generally safe for most people with diabetes. Too much caffeine can cause jitteriness, raise blood pressure, and in some people, temporarily affect blood sugar control. Avoid drinking tea or coffee on an empty stomach, and skip high-calorie café drinks with syrups and whipped cream. Enjoy your chai or coffee as part of your routine — just make it a healthier habit that supports your blood sugar goals, not works against them.",
    category: "Diet" as Category,
  },
  {
    question: "I keep losing motivation.",
    answer:
      "Motivation comes and goes — discipline keeps you going. Revisit your “why”: maybe it’s to see your children grow, travel, or stay active in your community. Celebrate small wins — a good sugar reading, a healthy meal, a week of regular walks. In Pakistan, share your progress with friends or family; their encouragement can reignite your drive.",
    category: "Education" as Category,
  },
  {
    question: "I love lassi — can I still drink it?",
    answer:
      "Yes, but choose wisely. Traditional sweet lassi is loaded with sugar, which can spike your blood glucose quickly. A single tall glass can contain the equivalent of 6–8 teaspoons of sugar. If you have diabetes, opt for unsweetened or lightly salted lassi made with low-fat yogurt. You can add a pinch of roasted cumin or mint for flavour without adding sugar. Avoid drinking lassi alongside carb-heavy meals like paratha or biryani — it’s better as a standalone snack or light breakfast. Portion control matters: keep it to a small glass (150–200 ml) to enjoy the taste without overloading on carbs.",
    category: "Diet" as Category,
  },
  {
    question: "I want to enjoy life without feeling restricted.",
    answer:
      "You can — by focusing on balance, not deprivation. Enjoy your favourite foods in smaller portions, and balance them with healthier meals. Plan ahead for weddings or Eid feasts by eating lighter earlier in the day. In Pakistan’s rich food culture, smart choices let you participate fully without harming your health.",
    category: "Education" as Category,
  },
  {
    question: "Is doodh soda or other fizzy drinks okay for me?",
    answer:
      "Doodh soda, cola, and other sweetened fizzy drinks are among the fastest ways to spike your blood sugar. Even one glass can contain more sugar than your daily recommended limit. If you crave the fizz, choose diet or zero-sugar versions — but keep them occasional, as artificial sweeteners can still trigger cravings for sweet foods. A better option is sparkling water with a squeeze of lemon or a few mint leaves. Remember, sugary drinks don’t just affect your sugar levels — they add empty calories that can lead to weight gain, making diabetes harder to manage.",
    category: "Diet" as Category,
  },
  {
    question: "I’m worried about setbacks.",
    answer:
      "Setbacks happen — a high sugar reading, a missed walk, an indulgent meal. Don’t let one slip erase your progress. Reset at the next opportunity. In Pakistan’s busy, social life, perfection isn’t realistic — but persistence is. Each time you get back on track, you strengthen your long-term success.",
    category: "Education" as Category,
  },
  {
    question: "Are packaged juices a healthy choice?",
    answer:
      "Not really. Most packaged juices — even those labelled “100% fruit” — are high in natural sugars and often lack the fibre that slows sugar absorption. A single glass can have the sugar of 3–4 whole fruits. Without fibre, the sugar hits your bloodstream quickly, causing spikes. If you want juice, make it fresh at home, dilute it with water, and limit it to ½ cup. Better yet, eat the whole fruit instead — you’ll get the fibre, feel fuller, and keep your sugar more stable.",
    category: "Diet" as Category,
  },
  {
    question: "I want to focus on what I can do, not what I can’t.",
    answer:
      "Shift your mindset from restriction to opportunity. You can enjoy fresh seasonal fruits, flavourful spices, active hobbies, and quality time with loved ones. You can take control of your health. In Pakistan, where community and tradition are strong, focus on the parts of life that bring joy and connection — they’re just as important as your diet and medicine.",
    category: "Education" as Category,
  },
  {
    question: "I want to inspire others with my journey.",
    answer:
      "Your story can be a light for others. Share your challenges and victories — in person, on social media, or in community groups. In Pakistan, where awareness is still growing, your example can encourage early check-ups, healthier eating, and active living. Helping others not only spreads hope — it strengthens your own commitment.",
    category: "Education" as Category,
  },
];

export default function NewsClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>("Health");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const categoryInfo = [
    {
      category: "Health" as Category,
      title: "Health",
      description:
        "Medical guidance for managing your condition, from monitoring to overall wellness.",
      bgColor: "bg-diet-500",
      hoverColor: "hover:bg-diet-600",
    },
    {
      category: "Education" as Category,
      title: "Education",
      description:
        "Understand the science of diabesity and learn how to interpret your lab results.",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      category: "Diet" as Category,
      title: "Diet",
      description:
        "Get practical nutrition tips for making smart food choices and building healthy meals.",
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="flex flex-col">
      <section className="grid grid-cols-2 max-w-4xl lg:max-w-6xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6 lg:px-0">
        {/* Introduction Section */}
        <div className="flex col-span-2 justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              The answers to all your questions
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-2">
              Expert-verified answers from our team of healthcare professionals
            </p>
          </div>
        </div>   
      </section>

      {/* Category Filter Section */}
      <section className="bg-white px-6 lg:px-0">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          {/* Category Icons - Triangular Layout */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-start">
              {/* Health - Top Left */}
              <div className="flex flex-col lg:flex-row-reverse items-center text-center gap-4">
                <button
                  onClick={() => {
                    setSelectedCategory("Health");
                    setOpenFaqIndex(null);
                  }}
                  className={`w-30 h-30 rounded-full flex items-center justify-center transition-all lg:mb-6 overflow-hidden ${
                    categoryInfo[0].bgColor
                  } ${
                    selectedCategory === "Health"
                      ? "ring-2 ring-offset-4 ring-green-500/30"
                      : categoryInfo[0].hoverColor
                  }`}
                >
                  <img
                    src={HealthIcon.src}
                    alt="Health"
                    className="w-30 h-30 transition-transform hover:scale-110"
                  />
                </button>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-green-500 mb-2">
                    {categoryInfo[0].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-xs">
                    {categoryInfo[0].description}
                  </p>
                </div>
              </div>

              {/* Education - Top Right */}
              <div className="flex flex-col lg:flex-row items-center text-center gap-4">
                <button
                  onClick={() => {
                    setSelectedCategory("Education");
                    setOpenFaqIndex(null);
                  }}
                  className={`w-30 h-30 rounded-full flex items-center justify-center transition-all lg:mb-6 overflow-hidden ${
                    categoryInfo[1].bgColor
                  } ${
                    selectedCategory === "Education"
                      ? "ring-2 ring-offset-4 ring-orange-500/30"
                      : categoryInfo[1].hoverColor
                  }`}
                >
                  <img
                    src={EducationIcon.src}
                    alt="Education"
                    className="w-30 h-30 transition-transform hover:scale-110"
                  />
                </button>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-orange-500 mb-2">
                    {categoryInfo[1].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-xs">
                    {categoryInfo[1].description}
                  </p>
                </div>
              </div>

              {/* Diet - Bottom Center */}
              <div className="flex flex-col items-center text-center gap-4 md:col-span-2 lg:-mt-12">
                <button
                  onClick={() => {
                    setSelectedCategory("Diet");
                    setOpenFaqIndex(null);
                  }}
                  className={`w-30 h-30 rounded-full flex items-center justify-center transition-all overflow-hidden ${
                    categoryInfo[2].bgColor
                  } ${
                    selectedCategory === "Diet"
                      ? "ring-2 ring-offset-4 ring-yellow-500/30"
                      : categoryInfo[2].hoverColor
                  }`}
                >
                  <img src={DietIcon.src} alt="Diet" className="w-30 h-30 transition-transform hover:scale-110" />
                </button>
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                    {categoryInfo[2].title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-xs">
                    {categoryInfo[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs List Section */}
      <section className="pb-16 md:pb-24 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          {/* FAQs Section */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Left Column - First Half FAQs */}
            <div className="flex flex-col gap-4">
              {filteredFaqs
                .slice(0, Math.ceil(filteredFaqs.length / 2))
                .map((faq, idx) => (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className={`${getCategoryGradient(
                        faq.category
                      )} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openFaqIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaqIndex === idx ? "max-h-96 mt-2" : "max-h-0"
                      }`}
                    >
                      <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right Column - Last Half FAQs */}
            <div className="flex flex-col gap-4">
              {filteredFaqs
                .slice(Math.ceil(filteredFaqs.length / 2), filteredFaqs.length)
                .map((faq, idx) => {
                  const actualIndex = idx + Math.ceil(filteredFaqs.length / 2);
                  return (
                    <div key={actualIndex} className="flex flex-col">
                      <button
                        onClick={() => toggleFaq(actualIndex)}
                        className={`${getCategoryGradient(
                          faq.category
                        )} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                            openFaqIndex === actualIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openFaqIndex === actualIndex
                            ? "max-h-[30rem] mt-2"
                            : "max-h-0"
                        }`}
                      >
                        <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
