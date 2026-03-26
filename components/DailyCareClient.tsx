"use client";

import { Category, getCategoryGradient } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const careItems = [
  {
    titleEn: "How to use the apparatus",
    titleUr: "آلے کا استعمال کیسے کریں",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-3">Summary</h3>
          <p className="text-gray-700 mb-3">
            Many people with diabetes use prescription devices such as GLP-1
            injection pens or insulin pens as part of their treatment plan.
            These devices are designed to be safe and simple when used
            correctly, but proper technique, hygiene, and storage are essential
            to avoid dosing errors, infections, or reduced effectiveness.
          </p>
          <p className="text-gray-700 font-bold mb-3">
            Read the full practical guide:{" "}
            <a
              href="/how-to#how-to-use-prescription-treatments"
              className="underline"
            >
              How to use prescription treatments (pens, pills, and practical
              tips)
            </a>
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6 text-right" dir="rtl">
        <div>
          <h3 className="font-bold text-lg mb-3">خلاصہ</h3>
          <p className="text-gray-700 mb-3">
            ذیابیطس کے بہت سے مریض نسخے والے آلات استعمال کرتے ہیں جیسے GLP-1
            انجیکشن پینز یا انسولین پینز، اپنے علاج کے منصوبے کے حصے کے طور
            پر۔ یہ آلات درست طریقے سے استعمال ہونے پر محفوظ اور سادہ ہوتے ہیں،
            لیکن خوراک کی غلطیوں، انفیکشن، یا کم تاثیر سے بچنے کے لیے صحیح
            تکنیک، صفائی، اور ذخیرہ ضروری ہے۔
          </p>
          <p className="text-gray-700 font-bold mb-3">
            مکمل عملی گائیڈ پڑھیں:{" "}
            <a
              href="/how-to#how-to-use-prescription-treatments"
              className="underline"
            >
              نسخے والے علاج کا استعمال کیسے کریں (پینز، گولیاں، اور عملی
              تجاویز)
            </a>
          </p>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    titleEn: "Daily monitoring",
    titleUr: "روزانہ کی نگرانی",
    content: (
      <div className="space-y-4">
        <p className="text-gray-700">
          Daily monitoring helps you stay safe and understand how your body
          responds to lifestyle changes and medication.
        </p>

        <div>
          <h4 className="font-bold mb-2">What to watch regularly:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>How you feel</strong> (energy, hunger, sleep)
            </li>
            <li>
              <strong>Any nausea, stomach discomfort, dizziness</strong>
            </li>
            <li>
              <strong>Hydration levels</strong> (especially with certain
              medicines)
            </li>
            <li>
              <strong>Signs of infection</strong> (especially around personal
              areas for some medicines)
            </li>
            <li>
              <strong>Injection site condition</strong> (redness or lumps)
            </li>
            <li>
              <strong>Low sugar signs</strong> if you use insulin (shaking,
              sweating, confusion)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">For people taking injectables:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Keep a small source of <strong>fast-acting sugar</strong> handy if
              using insulin
            </li>
            <li>
              Note any repeated vomiting or severe belly pain — speak to a
              doctor
            </li>
            <li>Stay hydrated, especially in summer</li>
            <li>
              If you feel unwell (fever, dehydration), contact your clinician
              before continuing certain medicines
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">
            Blood Sugar Monitoring (if you check at home):
          </h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              &lt;70 mg/dL is considered low — treat with fast-acting sugar and
              recheck in 15 minutes
            </li>
            <li>
              Very high numbers + feeling unwell require medical attention
            </li>
            <li>
              Patterns are more useful than single readings — track morning,
              before meals, or after meals based on your doctor&apos;s plan
            </li>
          </ul>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-4 text-right" dir="rtl">
        <p className="text-gray-700">
          روزانہ کی نگرانی آپ کو محفوظ رکھتی ہے اور یہ سمجھنے میں مدد کرتی ہے
          کہ آپ کا جسم طرزِ زندگی کی تبدیلیوں اور ادویات پر کیسے ردعمل دیتا
          ہے۔
        </p>

        <div>
          <h4 className="font-bold mb-2">باقاعدگی سے کیا دیکھیں:</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              <strong>آپ کیسا محسوس کرتے ہیں</strong> (توانائی، بھوک، نیند)
            </li>
            <li>
              <strong>کوئی متلی، معدے کی تکلیف، چکر</strong>
            </li>
            <li>
              <strong>پانی کی سطح</strong> (خاص طور پر بعض ادویات کے ساتھ)
            </li>
            <li>
              <strong>انفیکشن کی علامات</strong> (بعض ادویات کے لیے ذاتی علاقوں
              کے ارد گرد)
            </li>
            <li>
              <strong>انجیکشن کی جگہ کی حالت</strong> (سرخی یا گانٹھیں)
            </li>
            <li>
              <strong>کم شکر کی علامات</strong> اگر آپ انسولین استعمال کرتے ہیں
              (کانپنا، پسینہ، الجھن)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">انجیکشن لینے والوں کے لیے:</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              انسولین استعمال کرتے وقت{" "}
              <strong>تیز اثر شکر</strong> کا ایک چھوٹا ذریعہ ہاتھ پر رکھیں
            </li>
            <li>
              بار بار قے یا شدید پیٹ درد کو نوٹ کریں — ڈاکٹر سے بات کریں
            </li>
            <li>خاص طور پر گرمیوں میں ہائیڈریٹ رہیں</li>
            <li>
              اگر آپ ٹھیک نہ محسوس کریں (بخار، ڈی ہائیڈریشن)، بعض ادویات
              جاری رکھنے سے پہلے اپنے ڈاکٹر سے رابطہ کریں
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">
            خون میں شکر کی نگرانی (اگر گھر میں جانچیں):
          </h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              <span dir="ltr" className="inline">
                &lt;70 mg/dL
              </span>{" "}
              کم سمجھا جاتا ہے — تیز اثر شکر سے علاج کریں اور 15 منٹ میں
              دوبارہ جانچیں
            </li>
            <li>
              بہت زیادہ تعداد + ٹھیک نہ محسوس کرنا طبی توجہ کی ضرورت ہے
            </li>
            <li>
              نمونے واحد ریڈنگز سے زیادہ مفید ہیں — اپنے ڈاکٹر کے منصوبے کے
              مطابق صبح، کھانے سے پہلے، یا کھانے کے بعد ٹریک کریں
            </li>
          </ul>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    titleEn: "Types of medication (Injectables)",
    titleUr: "ادویات کی اقسام (انجیکشن)",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-3">1- Paragraphy Orientation</h3>

          <p className="text-gray-700 mb-3">
            Injectable treatments for diabetes include{" "}
            <span className="font-bold">GLP-1 receptor agonists</span> and{" "}
            <span className="font-bold">insulin</span>, which work in different
            ways to help control blood sugar. GLP-1 medications support appetite
            regulation, improve insulin response, and may help with weight loss,
            while insulin replaces or supplements the body&apos;s natural insulin to
            control glucose levels. These medicines are prescribed based on
            individual needs, blood sugar patterns, and overall health, and they
            are commonly used in Pakistan under medical supervision.
          </p>

          <p className="text-gray-700 font-bold mb-3">
            Learn more about injectable diabetes medications:{" "}
            <a href="/medication#injectables-handling" className="underline">
              GLP-1 agonists &amp; newer agents – what to know in Pakistan
            </a>
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6 text-right" dir="rtl">
        <div>
          <h3 className="font-bold text-lg mb-3">1- جائزہ</h3>

          <p className="text-gray-700 mb-3">
            ذیابیطس کے انجیکشن علاج میں{" "}
            <span className="font-bold">GLP-1 ریسیپٹر ایگونسٹس</span> اور{" "}
            <span className="font-bold">انسولین</span> شامل ہیں، جو خون میں
            شکر کو کنٹرول کرنے کے لیے مختلف طریقوں سے کام کرتے ہیں۔ GLP-1
            ادویات بھوک کو منظم کرنے، انسولین کے ردعمل کو بہتر بنانے، اور وزن
            کم کرنے میں مدد کر سکتی ہیں، جبکہ انسولین جسم کی قدرتی انسولین کو
            تبدیل یا پورا کرتی ہے تاکہ گلوکوز کی سطح کو کنٹرول کیا جا سکے۔ یہ
            ادویات انفرادی ضروریات، خون میں شکر کے نمونوں، اور مجموعی صحت کی
            بنیاد پر تجویز کی جاتی ہیں، اور یہ پاکستان میں طبی نگرانی میں عام
            طور پر استعمال ہوتی ہیں۔
          </p>

          <p className="text-gray-700 font-bold mb-3">
            انجیکشن ذیابیطس ادویات کے بارے میں مزید جانیں:{" "}
            <a href="/medication#injectables-handling" className="underline">
              GLP-1 ایگونسٹس اور نئی ادویات – پاکستان میں جاننا ضروری کیا ہے
            </a>
          </p>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    titleEn: "Treat section",
    titleUr: "علاج کا حصہ",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-lg mb-3">
            Treatment Pathways — Simple Overview
          </h3>
          <p className="text-gray-700 mb-3">
            Treatment for diabetes or weight issues usually follows a
            step-by-step ladder:
          </p>
          <ol className="list-decimal pl-6 mb-3 space-y-1">
            <li>
              <strong>Lifestyle basics</strong>: meals, movement, sleep, stress
            </li>
            <li>
              <strong>Medication</strong>: based on your sugar levels, symptoms,
              and doctor&apos;s guidance
            </li>
            <li>
              <strong>Injectables</strong>: such as GLP-1 pens or insulin when
              needed
            </li>
            <li>
              <strong>Advanced options</strong>: for people who need more
              support after trying lifestyle and medications
            </li>
          </ol>
          <p className="text-gray-700">
            Your doctor will guide you based on sugars, overall health, goals,
            and safety.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">
            Integrating Medication with Daily Life
          </h3>
          <p className="text-gray-700 mb-3">
            Simple routines help you stay consistent:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Pair medication doses with regular habits (e.g., breakfast, after
              Maghrib)
            </li>
            <li>Use reminders on your phone</li>
            <li>Keep injectables in one secure, visible place</li>
            <li>
              Have a written plan: what you&apos;re taking, possible side
              effects, what to do if unwell
            </li>
            <li>
              Know when to increase water intake or pause certain medicines
              during sickness
            </li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">
            Surgery &amp; Advanced Therapies (High-Level Only)
          </h3>
          <p className="text-gray-700 mb-3">
            Sometimes, people with severe weight issues or diabetes
            complications may consider surgical options.
          </p>

          <h4 className="font-bold mb-2">Before surgery:</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Nutrition and psychological assessment</li>
            <li>Medical review</li>
            <li>Understanding the benefits and risks</li>
          </ul>

          <h4 className="font-bold mb-2">After surgery:</h4>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Long-term support</li>
            <li>Vitamin and mineral checks</li>
            <li>More structured meal plans</li>
          </ul>

          <p className="text-gray-700">
            Surgery is not a shortcut — it&apos;s a medically guided decision.
          </p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">Finding a doctor</h3>
          <p className="text-gray-700 mb-3">
            What to look for when seeking care:
          </p>
          <ul className="list-disc pl-6 mb-3 space-y-1">
            <li>Clear credentials</li>
            <li>Transparent fees</li>
            <li>A plan for follow-ups</li>
            <li>Someone who explains things in simple language</li>
            <li>Comfort with asking questions</li>
          </ul>
          <p className="text-gray-700">
            A good first visit sets the foundation for better health decisions.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6 text-right" dir="rtl">
        <div>
          <h3 className="font-bold text-lg mb-3">
            علاج کے راستے — سادہ جائزہ
          </h3>
          <p className="text-gray-700 mb-3">
            ذیابیطس یا وزن کے مسائل کا علاج عموماً قدم بقدم سیڑھی کی پیروی
            کرتا ہے:
          </p>
          <ol className="list-decimal pr-6 mb-3 space-y-1">
            <li>
              <strong>طرزِ زندگی کی بنیادیں</strong>: کھانا، ورزش، نیند، تناؤ
            </li>
            <li>
              <strong>ادویات</strong>: آپ کی شکر کی سطح، علامات اور ڈاکٹر کی
              ہدایت کی بنیاد پر
            </li>
            <li>
              <strong>انجیکشن</strong>: جیسے GLP-1 پینز یا انسولین جب ضرورت ہو
            </li>
            <li>
              <strong>جدید اختیارات</strong>: ان لوگوں کے لیے جنہیں طرزِ
              زندگی اور ادویات آزمانے کے بعد مزید مدد کی ضرورت ہے
            </li>
          </ol>
          <p className="text-gray-700">
            آپ کا ڈاکٹر شکر، مجموعی صحت، اہداف اور حفاظت کی بنیاد پر آپ کی
            رہنمائی کرے گا۔
          </p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">
            روزمرہ زندگی میں ادویات کا انضمام
          </h3>
          <p className="text-gray-700 mb-3">
            سادہ معمولات آپ کو مستقل رہنے میں مدد کرتے ہیں:
          </p>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              دوا کی خوراک کو باقاعدہ عادات کے ساتھ جوڑیں (مثلاً ناشتہ، مغرب
              کے بعد)
            </li>
            <li>اپنے فون پر یاددہانیاں استعمال کریں</li>
            <li>انجیکشن کو ایک محفوظ، نظر آنے والی جگہ پر رکھیں</li>
            <li>
              ایک تحریری منصوبہ رکھیں: آپ کیا لے رہے ہیں، ممکنہ ضمنی اثرات،
              بیمار ہونے پر کیا کریں
            </li>
            <li>
              یہ جانیں کہ بیماری کے دوران پانی کی مقدار کب بڑھانی ہے یا بعض
              ادویات کب روکنی ہیں
            </li>
          </ul>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">
            سرجری اور جدید علاج (اعلیٰ سطح صرف)
          </h3>
          <p className="text-gray-700 mb-3">
            کبھی کبھی، شدید وزن کے مسائل یا ذیابیطس کی پیچیدگیوں والے لوگ
            سرجیکل اختیارات پر غور کر سکتے ہیں۔
          </p>

          <h4 className="font-bold mb-2">سرجری سے پہلے:</h4>
          <ul className="list-disc pr-6 mb-4 space-y-1">
            <li>غذائیت اور نفسیاتی تشخیص</li>
            <li>طبی جائزہ</li>
            <li>فوائد اور خطرات کو سمجھنا</li>
          </ul>

          <h4 className="font-bold mb-2">سرجری کے بعد:</h4>
          <ul className="list-disc pr-6 mb-3 space-y-1">
            <li>طویل مدتی معاونت</li>
            <li>وٹامن اور معدنیات کی جانچ</li>
            <li>زیادہ منظم غذائی منصوبے</li>
          </ul>

          <p className="text-gray-700">
            سرجری کوئی شارٹ کٹ نہیں — یہ ایک طبی رہنمائی میں لیا گیا فیصلہ
            ہے۔
          </p>
        </div>

        <hr className="border-gray-300" />

        <div>
          <h3 className="font-bold text-lg mb-3">ڈاکٹر کی تلاش</h3>
          <p className="text-gray-700 mb-3">علاج کی تلاش میں کیا دیکھیں:</p>
          <ul className="list-disc pr-6 mb-3 space-y-1">
            <li>واضح اسناد</li>
            <li>شفاف فیس</li>
            <li>فالو اپ کا منصوبہ</li>
            <li>کوئی جو سادہ زبان میں بتائے</li>
            <li>سوالات پوچھنے کی آسانی</li>
          </ul>
          <p className="text-gray-700">
            ایک اچھی پہلی ملاقات بہتر صحت کے فیصلوں کی بنیاد رکھتی ہے۔
          </p>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
  {
    titleEn: "Blood glucose level monitoring",
    titleUr: "خون میں شکر کی سطح کی نگرانی",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold mb-2">Why monitor?</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understand patterns</li>
            <li>Catch low or high sugar early</li>
            <li>Adjust your lifestyle more effectively</li>
            <li>Communicate better with your clinician</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">When to check</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Morning before eating (fasting)</li>
            <li>Before meals</li>
            <li>2 hours after meals</li>
            <li>At bedtime</li>
            <li>
              Any time you feel symptoms (shaking, dizziness, extreme thirst)
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">How to check</h4>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Wash hands.</li>
            <li>Insert test strip into glucometer</li>
            <li>Use lancet on the side of your fingertip</li>
            <li>Place drop of blood on strip</li>
            <li>Wait for reading</li>
          </ol>
        </div>

        <div>
          <h4 className="font-bold mb-2">What to record</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Number (reading)</li>
            <li>Time of day</li>
            <li>What you ate</li>
            <li>Any symptoms</li>
            <li>Any medication taken</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Warning signs</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Low sugar</strong>: shaking, sweating, fast heartbeat,
              confusion → take fast-acting sugar immediately
            </li>
            <li>
              <strong>High sugar + symptoms</strong>: vomiting, extreme thirst,
              weakness → seek medical advice
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">Tips</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Keep your glucometer charged</li>
            <li>Store strips properly (dry, sealed)</li>
            <li>Replace lancets regularly</li>
            <li>Discuss patterns with your clinician</li>
          </ul>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-4 text-right" dir="rtl">
        <div>
          <h4 className="font-bold mb-2">نگرانی کیوں؟</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>نمونوں کو سمجھیں</li>
            <li>کم یا زیادہ شکر کو جلدی پکڑیں</li>
            <li>اپنے طرزِ زندگی کو زیادہ مؤثر طریقے سے ایڈجسٹ کریں</li>
            <li>اپنے ڈاکٹر کے ساتھ بہتر بات چیت کریں</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">کب جانچیں</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>صبح کھانے سے پہلے (روزہ)</li>
            <li>کھانے سے پہلے</li>
            <li>کھانے کے 2 گھنٹے بعد</li>
            <li>سونے کے وقت</li>
            <li>جب بھی علامات محسوس ہوں (کانپنا، چکر، شدید پیاس)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">کیسے جانچیں</h4>
          <ol className="list-decimal pr-6 space-y-1">
            <li>ہاتھ دھوئیں۔</li>
            <li>گلوکومیٹر میں ٹیسٹ سٹرپ ڈالیں</li>
            <li>انگلی کے کنارے پر لینسیٹ استعمال کریں</li>
            <li>سٹرپ پر خون کا قطرہ رکھیں</li>
            <li>ریڈنگ کا انتظار کریں</li>
          </ol>
        </div>

        <div>
          <h4 className="font-bold mb-2">کیا ریکارڈ کریں</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>نمبر (ریڈنگ)</li>
            <li>دن کا وقت</li>
            <li>آپ نے کیا کھایا</li>
            <li>کوئی علامات</li>
            <li>لی گئی کوئی دوا</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">خطرے کی علامات</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>
              <strong>کم شکر</strong>: کانپنا، پسینہ، تیز دل کی دھڑکن، الجھن
              → فوری طور پر تیز اثر شکر لیں
            </li>
            <li>
              <strong>زیادہ شکر + علامات</strong>: قے، شدید پیاس، کمزوری →
              طبی مشورہ لیں
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-2">تجاویز</h4>
          <ul className="list-disc pr-6 space-y-1">
            <li>اپنے گلوکومیٹر کو چارج رکھیں</li>
            <li>سٹرپس کو صحیح طریقے سے ذخیرہ کریں (خشک، بند)</li>
            <li>لینسیٹس کو باقاعدگی سے تبدیل کریں</li>
            <li>اپنے ڈاکٹر کے ساتھ نمونوں پر بات کریں</li>
          </ul>
        </div>
      </div>
    ),
    category: "Services" as Category,
  },
];

export default function DailyCareClient() {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  const { locale } = useLanguage();

  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {locale === "ur"
              ? "روزانہ کی دیکھ بھال اور نگرانی"
              : "Daily care and monitoring"}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
            {locale === "ur"
              ? "ہر روز اپنی صحت کا خیال رکھنا ذیابیطس کے مؤثر انتظام کی بنیاد ہے۔ اپنی دوا استعمال کرنا، خون میں شکر کی نگرانی کرنا، اور علاج کے اختیارات کو سمجھنا سیکھیں تاکہ آپ کنٹرول میں رہیں۔"
              : "Taking care of your health every day is the foundation of managing diabetes effectively. Learn how to use your medication, monitor your blood sugar, and understand treatment options to stay in control."}
          </p>
        </div>
      </section>

      {/* Accordions Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            {careItems.map((item, index) => (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => toggleItem(index)}
                  className={`${getCategoryGradient(
                    item.category,
                  )} rtl:hover:bg-gradient-to-l px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center hover:opacity-90 group`}
                >
                  <span className="group-hover:text-white">
                    {locale === "ur" ? item.titleUr : item.titleEn}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 text-gray-900 ${
                      openItemIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItemIndex === index ? "max-h-[125rem] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                    {locale === "ur" ? item.urduContent : item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
