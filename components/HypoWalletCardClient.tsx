"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import {
  ChevronRight,
  ChevronLeft,
  Download,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SurveyAnswer {
  questionId: number;
  answer: string;
  score: number;
}

interface CardDetails {
  name: string;
  diabetesType: string;
  emergencyContact: string;
  emergencyPhone: string;
  medications: string;
  allergies: string;
  doctorName: string;
  doctorPhone: string;
}

const surveyQuestions = [
  {
    id: 1,
    question: "At what age were you diagnosed with diabetes?",
    options: [
      { label: "Under 30 years old", type1Score: 3, type2Score: 0 },
      { label: "30-45 years old", type1Score: 1, type2Score: 2 },
      { label: "Over 45 years old", type1Score: 0, type2Score: 3 },
      {
        label: "Not diagnosed / I don't have diabetes",
        type1Score: 0,
        type2Score: 0,
      },
    ],
  },
  {
    id: 2,
    question: "Do you take insulin or diabetes medications?",
    options: [
      { label: "Yes, insulin since diagnosis", type1Score: 3, type2Score: 0 },
      { label: "Yes, insulin started later", type1Score: 1, type2Score: 2 },
      { label: "Yes, oral medications only", type1Score: 0, type2Score: 3 },
      { label: "No diabetes medications", type1Score: 0, type2Score: 0 },
    ],
  },
  {
    id: 3,
    question: "What is your current BMI category?",
    options: [
      {
        label: "Underweight or Normal (BMI < 25)",
        type1Score: 1,
        type2Score: 0,
      },
      { label: "Overweight (BMI 25-30)", type1Score: 0, type2Score: 2 },
      { label: "Obese (BMI > 30)", type1Score: 0, type2Score: 3 },
      { label: "I don't know", type1Score: 0, type2Score: 0 },
    ],
  },
  {
    id: 4,
    question: "Do you have a family history of diabetes?",
    options: [
      { label: "Yes, Type 1 diabetes", type1Score: 2, type2Score: 0 },
      { label: "Yes, Type 2 diabetes", type1Score: 0, type2Score: 2 },
      { label: "Yes, both types", type1Score: 1, type2Score: 1 },
      { label: "No family history", type1Score: 0, type2Score: 0 },
    ],
  },
  {
    id: 5,
    question: "Have you ever experienced diabetic ketoacidosis (DKA)?",
    options: [
      { label: "Yes, multiple times", type1Score: 3, type2Score: 0 },
      { label: "Yes, once", type1Score: 2, type2Score: 0 },
      { label: "No", type1Score: 0, type2Score: 0 },
      { label: "I don't know what DKA is", type1Score: 0, type2Score: 0 },
    ],
  },
  {
    id: 6,
    question: "How quickly did your diabetes symptoms develop?",
    options: [
      { label: "Very quickly (days to weeks)", type1Score: 3, type2Score: 0 },
      { label: "Gradually (months to years)", type1Score: 0, type2Score: 3 },
      { label: "I didn't notice any symptoms", type1Score: 0, type2Score: 0 },
      { label: "I don't have diabetes symptoms", type1Score: 0, type2Score: 0 },
    ],
  },
  {
    id: 7,
    question: "Do you have any autoimmune conditions?",
    options: [
      { label: "Yes (thyroid, celiac, etc.)", type1Score: 2, type2Score: 0 },
      { label: "No", type1Score: 0, type2Score: 0 },
      { label: "I don't know", type1Score: 0, type2Score: 0 },
    ],
  },
  {
    id: 8,
    question: "How often do you experience low blood sugar (hypoglycemia)?",
    options: [
      { label: "Frequently (weekly or more)", type1Score: 2, type2Score: 1 },
      { label: "Sometimes (monthly)", type1Score: 1, type2Score: 1 },
      { label: "Rarely or never", type1Score: 0, type2Score: 0 },
      { label: "I don't monitor my blood sugar", type1Score: 0, type2Score: 0 },
    ],
  },
  {
    id: 9,
    question: "What is your typical fasting blood sugar level?",
    options: [
      {
        label: "Often below 70 mg/dL (hypoglycemia)",
        type1Score: 2,
        type2Score: 0,
      },
      { label: "70-99 mg/dL (normal)", type1Score: 0, type2Score: 0 },
      {
        label: "100-125 mg/dL (prediabetes range)",
        type1Score: 0,
        type2Score: 2,
      },
      {
        label: "126 mg/dL or higher (diabetes range)",
        type1Score: 1,
        type2Score: 2,
      },
      { label: "I don't know / I don't check", type1Score: 0, type2Score: 0 },
    ],
  },
];

const hypoResponseText = `SIGNS OF LOW BLOOD SUGAR:
• Shakiness, sweating, dizziness
• Confusion, irritability
• Pale skin, rapid heartbeat

IF CONSCIOUS:
• Give 15-20g fast-acting sugar
• Wait 15 minutes, recheck
• Repeat if needed

IF UNCONSCIOUS:
• Call emergency services
• Do NOT give food/drink
• Place in recovery position`;

export default function HypoWalletCardClient() {
  const [step, setStep] = useState<"survey" | "result" | "form" | "preview">(
    "survey",
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<SurveyAnswer[]>([]);
  const [prediction, setPrediction] = useState<
    "type1" | "type2" | "lowRisk" | null
  >(null);
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    name: "",
    diabetesType: "",
    emergencyContact: "",
    emergencyPhone: "",
    medications: "",
    allergies: "",
    doctorName: "",
    doctorPhone: "",
  });

  const handleAnswer = (optionIndex: number) => {
    const question = surveyQuestions[currentQuestion];
    const option = question.options[optionIndex];

    const newAnswer: SurveyAnswer = {
      questionId: question.id,
      answer: option.label,
      score: option.type1Score - option.type2Score,
    };

    const updatedAnswers = [
      ...answers.filter((a) => a.questionId !== question.id),
      newAnswer,
    ];
    setAnswers(updatedAnswers);

    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculatePrediction(updatedAnswers);
    }
  };

  const calculatePrediction = (surveyAnswers: SurveyAnswer[]) => {
    let type1Total = 0;
    let type2Total = 0;

    surveyAnswers.forEach((answer) => {
      const question = surveyQuestions.find((q) => q.id === answer.questionId);
      if (question) {
        const option = question.options.find((o) => o.label === answer.answer);
        if (option) {
          type1Total += option.type1Score;
          type2Total += option.type2Score;
        }
      }
    });

    const totalScore = type1Total + type2Total;

    if (totalScore < 5) {
      setPrediction("lowRisk");
    } else if (type1Total > type2Total) {
      setPrediction("type1");
    } else {
      setPrediction("type2");
    }

    setStep("result");
  };

  const handleProceedToForm = () => {
    setCardDetails({
      ...cardDetails,
      diabetesType:
        prediction === "type1" ? "Type 1 Diabetes" : "Type 2 Diabetes",
    });
    setStep("form");
  };

  const handleFormChange = (field: keyof CardDetails, value: string) => {
    setCardDetails({ ...cardDetails, [field]: value });
  };

  const handleGeneratePreview = () => {
    setStep("preview");
  };

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [85.6, 53.98], // Credit card size
    });

    // Primary color RGB (converted from oklch(0.45 0.15 295))
    const primaryColor = { r: 106, g: 61, b: 154 };

    // Front of card
    pdf.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.rect(0, 0, 85.6, 53.98, "F");

    // White header bar
    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, 85.6, 12, "F");

    // Logo placeholder (text for now)
    pdf.setFontSize(8);
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.text("DIABESITY.LIFE", 4, 7);

    // Emergency text
    pdf.setFontSize(10);
    pdf.setTextColor(255, 255, 255);

    // Alert icon area
    pdf.setFontSize(6);
    pdf.text("!", 80, 7);

    // Name
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "bold");
    pdf.text(cardDetails.name || "NAME", 4, 18);

    // Diabetes type
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.text(cardDetails.diabetesType, 4, 23);

    // Medications
    pdf.setFontSize(6);
    pdf.setFont("helvetica", "bold");
    pdf.text("MEDICATIONS:", 4, 29);
    pdf.setFont("helvetica", "normal");
    const meds = cardDetails.medications || "None listed";
    const medLines = pdf.splitTextToSize(meds, 35);
    pdf.text(medLines.slice(0, 2), 4, 33);

    // Allergies
    pdf.setFont("helvetica", "bold");
    pdf.text("ALLERGIES:", 4, 42);
    pdf.setFont("helvetica", "normal");
    pdf.text(cardDetails.allergies || "None", 4, 46);

    // Emergency contact (right side)
    pdf.setFont("helvetica", "bold");
    pdf.text("EMERGENCY CONTACT:", 45, 18);
    pdf.setFont("helvetica", "normal");
    pdf.text(cardDetails.emergencyContact || "Not provided", 45, 22);
    pdf.text(cardDetails.emergencyPhone || "", 45, 26);

    // Doctor info
    pdf.setFont("helvetica", "bold");
    pdf.text("DOCTOR:", 45, 33);
    pdf.setFont("helvetica", "normal");
    pdf.text(cardDetails.doctorName || "Not provided", 45, 37);
    pdf.text(cardDetails.doctorPhone || "", 45, 41);

    // Add second page (back of card)
    pdf.addPage([85.6, 53.98], "landscape");

    // White background for back
    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, 85.6, 53.98, "F");

    // Primary header
    pdf.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.rect(0, 0, 85.6, 8, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(7);
    pdf.setFont("helvetica", "bold");
    pdf.text("HYPOGLYCEMIA (LOW BLOOD SUGAR) - WHAT TO DO", 43, 5, {
      align: "center",
    });

    // Response text - Two column layout
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(5);

    // Left column - SIGNS
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.text("SIGNS:", 4, 12);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text("• Shakiness, sweating", 4, 15.5);
    pdf.text("• Dizziness, confusion", 4, 19);
    pdf.text("• Pale skin, rapid heartbeat", 4, 22.5);

    // Left column - IF CONSCIOUS
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.text("IF CONSCIOUS:", 4, 28);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text("• Give 15-20g fast-acting sugar", 4, 31.5);
    pdf.text("• Wait 15 min, recheck", 4, 35);
    pdf.text("• Repeat if needed", 4, 38.5);

    // Right column - IF UNCONSCIOUS
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b);
    pdf.text("IF UNCONSCIOUS:", 45, 12);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0, 0, 0);
    pdf.text("• Call emergency services", 45, 15.5);
    pdf.text("• Do NOT give food/drink", 45, 19);
    pdf.text("• Place in recovery position", 45, 22.5);

    // Footer
    pdf.setFontSize(4);
    pdf.setTextColor(128, 128, 128);
    pdf.text(
      "Generated at diabesity.life | Not a substitute for professional medical advice",
      43,
      51,
      {
        align: "center",
      },
    );

    pdf.save("hypo-emergency-card.pdf");
  };

  const handleRestart = () => {
    setStep("survey");
    setCurrentQuestion(0);
    setAnswers([]);
    setPrediction(null);
    setCardDetails({
      name: "",
      diabetesType: "",
      emergencyContact: "",
      emergencyPhone: "",
      medications: "",
      allergies: "",
      doctorName: "",
      doctorPhone: "",
    });
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = (currentQuestion / surveyQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hypo Emergency Wallet Card
          </h1>
          <p className="text-gray-600">
            Create a personalized emergency card for hypoglycemia episodes
          </p>
        </div>

        {/* Survey Step */}
        {step === "survey" && (
          <div className="bg-white border border-gray-200 shadow-lg p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>
                  Question {currentQuestion + 1} of {surveyQuestions.length}
                </span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {surveyQuestions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {surveyQuestions[currentQuestion].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left p-4 border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      {option.label}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Navigation */}
            {currentQuestion > 0 && (
              <button
                onClick={goToPreviousQuestion}
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Previous question
              </button>
            )}
          </div>
        )}

        {/* Result Step */}
        {step === "result" && (
          <div className="bg-white border border-gray-200 shadow-lg p-8 text-center">
            {prediction === "lowRisk" ? (
              <>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Low Risk Assessment
                </h2>
                <p className="text-gray-600 mb-6">
                  Based on your responses, you appear to have a low risk of
                  hypoglycemia. A hypo emergency card may not be necessary for
                  you at this time.
                </p>
                <p className="text-gray-600 mb-8">
                  If you believe you may be at risk or have been diagnosed with
                  diabetes, please consult with your healthcare provider.
                </p>
                <Button variant="outlined" onClick={handleRestart}>
                  Start over
                </Button>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-10 h-10 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Assessment Complete
                </h2>
                <p className="text-gray-600 mb-2">
                  Based on your responses, your diabetes profile suggests:
                </p>
                <p className="text-2xl font-bold text-primary mb-6">
                  {prediction === "type1"
                    ? "Type 1 Diabetes"
                    : "Type 2 Diabetes"}
                </p>
                <div className="bg-blue-50 border border-blue-200 p-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800 text-left">
                      This is an estimate based on common patterns. Only a
                      medical professional can provide an accurate diagnosis.
                      You can adjust the diabetes type in the next step.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button variant="outlined" onClick={handleRestart}>
                    Start over
                  </Button>
                  <Button variant="primary" onClick={handleProceedToForm}>
                    Create your card
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Form Step */}
        {step === "form" && (
          <div className="bg-white border border-gray-200 shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Enter Your Card Details
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={cardDetails.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Diabetes Type
                </label>
                <select
                  value={cardDetails.diabetesType}
                  onChange={(e) =>
                    handleFormChange("diabetesType", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  <option value="Type 1 Diabetes">Type 1 Diabetes</option>
                  <option value="Type 2 Diabetes">Type 2 Diabetes</option>
                  <option value="Gestational Diabetes">
                    Gestational Diabetes
                  </option>
                  <option value="Prediabetes">Prediabetes</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    value={cardDetails.emergencyContact}
                    onChange={(e) =>
                      handleFormChange("emergencyContact", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Contact name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={cardDetails.emergencyPhone}
                    onChange={(e) =>
                      handleFormChange("emergencyPhone", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Medications
                </label>
                <textarea
                  value={cardDetails.medications}
                  onChange={(e) =>
                    handleFormChange("medications", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  rows={2}
                  placeholder="List your diabetes medications"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Allergies
                </label>
                <input
                  type="text"
                  value={cardDetails.allergies}
                  onChange={(e) =>
                    handleFormChange("allergies", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Any known allergies"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doctor&apos;s Name
                  </label>
                  <input
                    type="text"
                    value={cardDetails.doctorName}
                    onChange={(e) =>
                      handleFormChange("doctorName", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Doctor's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doctor&apos;s Phone
                  </label>
                  <input
                    type="tel"
                    value={cardDetails.doctorPhone}
                    onChange={(e) =>
                      handleFormChange("doctorPhone", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Doctor's phone"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button variant="outlined" onClick={() => setStep("result")}>
                  Back
                </Button>
                <Button
                  variant="primary"
                  onClick={handleGeneratePreview}
                  disabled={!cardDetails.name}
                  className="flex-1"
                >
                  Preview card
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Preview Step */}
        {step === "preview" && (
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Your Emergency Card Preview
              </h2>

              {/* Card Preview - Front */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2 text-center">
                  (Frontside)
                </p>
                <div
                  className="mx-auto bg-primary overflow-hidden shadow-lg border border-gray-200"
                  style={{ width: "342px", height: "230px" }}
                >
                  {/* Header */}
                  <div className="bg-white px-4 py-2 flex items-center justify-between">
                    <span className="text-primary font-bold text-sm">
                      DIABESITY.LIFE
                    </span>
                    <AlertTriangle className="w-4 h-4 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="p-4 text-white">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold text-lg">
                          {cardDetails.name || "Your Name"}
                        </p>
                        <p className="text-sm opacity-90">
                          {cardDetails.diabetesType}
                        </p>

                        <div className="mt-3">
                          <p className="text-xs font-bold">MEDICATIONS:</p>
                          <p className="text-xs opacity-90 line-clamp-2">
                            {cardDetails.medications || "None listed"}
                          </p>
                        </div>

                        <div className="mt-2">
                          <p className="text-xs font-bold">ALLERGIES:</p>
                          <p className="text-xs opacity-90">
                            {cardDetails.allergies || "None"}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div>
                          <p className="text-xs font-bold">
                            EMERGENCY CONTACT:
                          </p>
                          <p className="text-xs opacity-90">
                            {cardDetails.emergencyContact || "Not provided"}
                          </p>
                          <p className="text-xs opacity-90">
                            {cardDetails.emergencyPhone}
                          </p>
                        </div>

                        <div className="mt-3">
                          <p className="text-xs font-bold">DOCTOR:</p>
                          <p className="text-xs opacity-90">
                            {cardDetails.doctorName || "Not provided"}
                          </p>
                          <p className="text-xs opacity-90">
                            {cardDetails.doctorPhone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Preview - Back */}
              <div className="mb-8">
                <p className="text-sm text-gray-500 mb-2 text-center">
                  (Backside)
                </p>
                <div
                  className="mx-auto bg-white border border-gray-200 overflow-hidden shadow-lg"
                  style={{ width: "342px", height: "230px" }}
                >
                  {/* Header */}
                  <div className="bg-primary px-4 py-2">
                    <p className="text-white text-xs font-bold text-center">
                      HYPOGLYCEMIA (LOW BLOOD SUGAR) - WHAT TO DO
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-3 text-xs">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="font-bold text-primary mb-1">SIGNS:</p>
                        <ul className="text-gray-700 space-y-0.5 text-[10px]">
                          <li>• Shakiness, sweating</li>
                          <li>• Dizziness, confusion</li>
                          <li>• Pale skin, rapid heartbeat</li>
                        </ul>

                        <p className="font-bold text-primary mt-2 mb-1">
                          IF CONSCIOUS:
                        </p>
                        <ul className="text-gray-700 space-y-0.5 text-[10px]">
                          <li>• Give 15-20g fast-acting sugar</li>
                          <li>• Wait 15 min, recheck</li>
                          <li>• Repeat if needed</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold text-primary mb-1">
                          IF UNCONSCIOUS:
                        </p>
                        <ul className="text-gray-700 space-y-0.5 text-[10px]">
                          <li>• Call emergency services</li>
                          <li>• Do NOT give food/drink</li>
                          <li>• Place in recovery position</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button variant="outlined" onClick={() => setStep("form")}>
                  Edit details
                </Button>
                <Button
                  variant="primary"
                  onClick={handleDownloadPDF}
                  className="flex-1"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </Button>
                <Button variant="outlined" onClick={handleRestart}>
                  Start over
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
