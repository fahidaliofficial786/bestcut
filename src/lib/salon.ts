export const SALON = {
  name: "BEST CUT",
  phone: "+447770545404",
  phoneDisplay: "07770 545404",
  street: "317 Littleton Rd",
  city: "Manchester",
  postcode: "M7 3TA",
  hours: [
    ["Mon – Fri", "09:00 – 19:00"],
    ["Saturday", "09:00 – 18:00"],
    ["Sunday", "10:00 – 16:00"],
  ] as const,
};

export const PRICES = [
  { group: "Haircuts", items: [
    { name: "Classic Haircut", price: 15 },
    { name: "Skin Fade", price: 18 },
    { name: "Scissor Cut", price: 20 },
    { name: "Kids Cut (under 12)", price: 12 },
    { name: "Buzz Cut", price: 10 },
  ]},
  { group: "Beard & Shave", items: [
    { name: "Beard Trim & Shape", price: 10 },
    { name: "Hot Towel Shave", price: 15 },
    { name: "Cut & Beard Combo", price: 25 },
  ]},
  { group: "Extras", items: [
    { name: "Hair Design / Pattern", price: 5 },
    { name: "Eyebrow Threading", price: 5 },
    { name: "Face Mask & Steam", price: 10 },
  ]},
];

export const ALL_SERVICES = PRICES.flatMap((g) => g.items);
