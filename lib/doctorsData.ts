export interface BookingPlatformInfo {
  platform: "Marham" | "Oladoc" | "SehatKahani";
  link?: string;
}

export interface Doctor {
  name: string;
  city: string;
  specialization: string;
  contactNumber: string;
  pmdcNumber: string;
  bookingPlatforms: BookingPlatformInfo[];
}

export const doctors: Doctor[] = [
  {
    name: "Dr Bayazeed",
    city: "Mardan",
    specialization: "Bariatric Surgeon",
    contactNumber: "0345-9857944",
    pmdcNumber: "17797-N",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Adnan Zahid",
    city: "Rawalpindi",
    specialization: "Endocrinology",
    contactNumber: "0321-5071061",
    pmdcNumber: "50254-P",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Muhammad Umar Wahab",
    city: "Islamabad/Peshawar",
    specialization: "Diabetes/Obesity",
    contactNumber: "0333-9158285",
    pmdcNumber: "13174-N",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Ahmed Abdullah",
    city: "Rawalpindi",
    specialization: "Family Medicine / Public Health",
    contactNumber: "0333-5494758",
    pmdcNumber: "50155-P",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Kashif Rasheed",
    city: "Islamabad",
    specialization: "Endocrinology",
    contactNumber: "0333-5304789",
    pmdcNumber: "53791-P",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Usama Sohail",
    city: "Sialkot",
    specialization: "Diabetologist",
    contactNumber: "0343-4147898",
    pmdcNumber: "114912-P*",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "SehatKahani" }],
  },
  {
    name: "Dr Amjad Iqbal",
    city: "Gujranwala",
    specialization: "Diabetologist",
    contactNumber: "0300-9648828",
    pmdcNumber: "17676-P",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Irfan Sheikh",
    city: "Multan",
    specialization: "Diabetologist",
    contactNumber: "0301-7410205",
    pmdcNumber: "7046-P",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "SehatKahani" }],
  },
  {
    name: "Dr Altaf Ur Rehman",
    city: "Faisalabad",
    specialization: "Diabetologist",
    contactNumber: "0302-8643100",
    pmdcNumber: "24718-P",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "SehatKahani" }],
  },
  {
    name: "Dr Fahim Ullah",
    city: "Peshawar",
    specialization: "Endocrinology",
    contactNumber: "0332-9142021",
    pmdcNumber: "13826-N",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Muhammad Azmat Khan",
    city: "Rawalpindi",
    specialization: "Medicine",
    contactNumber: "0333-5179501",
    pmdcNumber: "455-AJK",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Bilal Bin Younus",
    city: "Lahore",
    specialization: "Medicine",
    contactNumber: "0300-9405405",
    pmdcNumber: "12147-P",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr M Tahir Chaudhry",
    city: "Lahore",
    specialization: "Diabetology",
    contactNumber: "0300-9448693",
    pmdcNumber: "20817-P",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Madeeha Nazar",
    city: "Rawalpindi",
    specialization: "Endocrinology",
    contactNumber: "0332-7777658",
    pmdcNumber: "45679-P",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Musarrat Iqbal",
    city: "Islamabad",
    specialization: "Diabetologist",
    contactNumber: "0302-5450011",
    pmdcNumber: "12006-S",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Faheem Ullah",
    city: "Peshawar",
    specialization: "Endocrinology",
    contactNumber: "0301-8502888",
    pmdcNumber: "19868-N",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Zahid Mehmood",
    city: "Rawalpindi",
    specialization: "Diabetologist",
    contactNumber: "0333-5628541",
    pmdcNumber: "8106-N",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Muhammad Iqbal",
    city: "Rawalpindi",
    specialization: "Diabetology",
    contactNumber: "0307-5113504",
    pmdcNumber: "1112-AJK",
    bookingPlatforms: [
      { platform: "Marham" },
      { platform: "Oladoc" },
      { platform: "SehatKahani" },
    ],
  },
  {
    name: "Dr Hafiz Ahsan",
    city: "Lahore",
    specialization: "Diabetology",
    contactNumber: "0322-4383054",
    pmdcNumber: "50794-P",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "Oladoc" }],
  },
  {
    name: "Dr Syed Sohaib Haider Zadi",
    city: "Lahore",
    specialization: "Endocrinology",
    contactNumber: "0333-8776350",
    pmdcNumber: "45931-P",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "Oladoc" }],
  },
  {
    name: "Dr Shahzad tahir",
    city: "Rawalpindi",
    specialization: "Diabetology",
    contactNumber: "03005144156",
    pmdcNumber: "26615-P",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "Oladoc" }],
  },
  {
    name: "Dr Col Fawad Rehman",
    city: "Rawalpindi",
    specialization: "Physician",
    contactNumber: "0313-5256261",
    pmdcNumber: "40189-P",
    bookingPlatforms: [{ platform: "Marham" }],
  },
  {
    name: "Dr Wasiq Zafar Abbasi",
    city: "Rawalpindi",
    specialization: "Physician",
    contactNumber: "0333-6422274",
    pmdcNumber: "16030-P",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "Oladoc" }],
  },
  {
    name: "Dr Saleem Qureshi",
    city: "Islamabad",
    specialization: "Physician",
    contactNumber: "03205450688",
    pmdcNumber: "1764-p",
    bookingPlatforms: [{ platform: "Marham" }, { platform: "Oladoc" }],
  },
  {
    name: "Dr Tariq Sawand",
    city: "Sukkur",
    specialization: "Cardiologist",
    contactNumber: "3337301525",
    pmdcNumber: "32698-S",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Saleem Khan",
    city: "Hyderabad",
    specialization: "Endocrinologist",
    contactNumber: "3332636673",
    pmdcNumber: "60468-S",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Asma Ahmed",
    city: "Karachi",
    specialization: "Endocrinologist",
    contactNumber: "3018215464",
    pmdcNumber: "39382-2",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Nadeem Naeem",
    city: "Karachi",
    specialization: "Endocrinologist",
    contactNumber: "3009395600",
    pmdcNumber: "55072-S",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Musarrat Riaz",
    city: "Karachi",
    specialization: "Endocrinologist",
    contactNumber: "3333608865",
    pmdcNumber: "31508-S",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Tahir Ansari",
    city: "Karachi",
    specialization: "Physician",
    contactNumber: "3112477724",
    pmdcNumber: "35100-S",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Yusuf Kamal",
    city: "Karachi",
    specialization: "Physician",
    contactNumber: "3332154522",
    pmdcNumber: "P-34703",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Urooj Laal",
    city: "Karachi",
    specialization: "Endocrinologist",
    contactNumber: "3045153188",
    pmdcNumber: "P-41278",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Imran Ul Haq",
    city: "Karachi",
    specialization: "Endocrinologist",
    contactNumber: "3343556355",
    pmdcNumber: "S-45026",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Asher Fawad",
    city: "Karachi",
    specialization: "Physician",
    contactNumber: "3302323905",
    pmdcNumber: "3507-P",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Amin Abdullah Makki",
    city: "Karachi",
    specialization: "Diabetologist",
    contactNumber: "3330245765",
    pmdcNumber: "13887-S",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Dr Nida Shakeel",
    city: "Karachi",
    specialization: "Physician",
    contactNumber: "3181144469",
    pmdcNumber: "48669-S",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
  {
    name: "Usama Sohail",
    city: "Lahore",
    specialization: "Diabetologist",
    contactNumber: "0343 4147898",
    pmdcNumber: "34969-P",
    bookingPlatforms: [{ platform: "Oladoc" }],
  },
];

// Helper functions to get unique values for filters
export const getUniqueCities = (): string[] => {
  const cities = doctors.map((doctor) => doctor.city);
  return Array.from(new Set(cities)).sort();
};

export const getUniqueSpecializations = (): string[] => {
  const specializations = doctors.map((doctor) => doctor.specialization);
  return Array.from(new Set(specializations)).sort();
};

export const bookingPlatforms = ["Marham", "Oladoc", "SehatKahani"] as const;
