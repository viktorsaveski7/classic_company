// Mock data for bus routes
// This file contains all static route information for the Classic Company transportation service

export const busRoutes = [
  {
    id: 1,
    departure: "Ohrid",
    arrival: "Skopje",
    times: ["17:30", "19:00", "20:00"],
    duration: "3h",
    price: "450 MKD"
  },
  {
    id: 2,
    departure: "Skopje",
    arrival: "Ohrid",
    times: ["08:00", "12:00", "21:00"],
    duration: "3h",
    price: "450 MKD"
  },
  {
    id: 3,
    departure: "Bitola",
    arrival: "Resen",
    times: ["11:10", "15:45"],
    duration: "45min",
    price: "150 MKD"
  },
  {
    id: 4,
    departure: "Ohrid",
    arrival: "Bitola",
    times: ["09:00", "13:30", "18:15"],
    duration: "1h 30min",
    price: "200 MKD"
  },
  {
    id: 5,
    departure: "Bitola",
    arrival: "Ohrid",
    times: ["07:30", "14:00", "19:30"],
    duration: "1h 30min",
    price: "200 MKD"
  },
  {
    id: 6,
    departure: "Struga",
    arrival: "Skopje",
    times: ["06:00", "10:30", "16:00"],
    duration: "2h 45min",
    price: "400 MKD"
  },
  {
    id: 7,
    departure: "Skopje",
    arrival: "Struga",
    times: ["09:30", "15:00", "20:30"],
    duration: "2h 45min",
    price: "400 MKD"
  },
  {
    id: 8,
    departure: "Ohrid",
    arrival: "Struga",
    times: ["08:00", "11:00", "14:00", "17:00", "20:00"],
    duration: "20min",
    price: "50 MKD"
  },
  {
    id: 9,
    departure: "Prilep",
    arrival: "Skopje",
    times: ["07:00", "12:30", "18:00"],
    duration: "2h",
    price: "350 MKD"
  },
  {
    id: 10,
    departure: "Skopje",
    arrival: "Prilep",
    times: ["08:30", "14:00", "19:30"],
    duration: "2h",
    price: "350 MKD"
  },
  {
    id: 11,
    departure: "Tetovo",
    arrival: "Skopje",
    times: ["06:30", "08:00", "10:00", "14:00", "18:00"],
    duration: "45min",
    price: "120 MKD"
  },
  {
    id: 12,
    departure: "Veles",
    arrival: "Skopje",
    times: ["07:00", "09:30", "13:00", "17:30"],
    duration: "50min",
    price: "150 MKD"
  },
  {
    id: 13,
    departure: "Ohrid",
    arrival: "Resen",
    times: ["10:00", "14:30", "19:00"],
    duration: "45min",
    price: "120 MKD"
  },
  {
    id: 14,
    departure: "Kumanovo",
    arrival: "Skopje",
    times: ["06:00", "07:30", "12:00", "16:00", "20:00"],
    duration: "40min",
    price: "100 MKD"
  }
];

// List of all cities for the search filter
export const cities = [
  "Ohrid",
  "Skopje",
  "Bitola",
  "Struga",
  "Resen",
  "Prilep",
  "Tetovo",
  "Veles",
  "Kumanovo"
];

// Company information
export const companyInfo = {
  name: "Classic Company",
  tagline: "Transportation service in Ohrid",
  address: "4Q9X+FCH, Свети Еразмо ББ, Ohrid 6000",
  phone: "071 611 907",
  phoneLink: "tel:+38971611907",
  googleRating: 3.0,
  totalReviews: 301,
  year: 2026
};

// Hero section images (placeholders - replace with real images later)
export const heroImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    alt: "Modern touring bus on highway"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    alt: "Comfortable bus interior with seats"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=800&q=80",
    alt: "Bus traveling through scenic route"
  }
];
