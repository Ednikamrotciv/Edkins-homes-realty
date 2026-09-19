export const IMAGES = {
  hero: "https://user.uploads.dev/file/4b120a5d53db8c9d4f917cd440205885.jpg",
  villa: "https://user.uploads.dev/file/f0db3d30a7f7742eed1a1f270d73632c.jpg",
  colonial: "https://user.uploads.dev/file/1d71f8211034791d6cefe8775111d34e.jpg",
  penthouse: "https://user.uploads.dev/file/d79610dd27b626749de24be2bd049902.jpg",
  coastal: "https://user.uploads.dev/file/5b0c456933a7f3a68ce3bb60c3b105c0.jpg",
  farmhouse: "https://user.uploads.dev/file/3d2292f2fa0436fd846c98037465863c.jpg",
  townhouse: "https://user.uploads.dev/file/5690d4246685e879bb03603f7a736ab5.jpg",
  about: "https://user.uploads.dev/file/ee2add3a2fd7282a0707471f7b615ae1.jpg",
};

export const LAND_IMAGES = {
  lekki: "https://user.uploads.dev/file/f536114dd11aaf0c1a89a96789933c58.jpg",
  abuja: "https://user.uploads.dev/file/a70a9c8579e35b7d98bb7de4ef20dcd0.jpg",
  portHarcourt: "https://user.uploads.dev/file/44dd18120fe0c32028c20d86004dd642.jpg",
  ibadan: "https://user.uploads.dev/file/2c33ffeee72552b5e4a1e9d4345b4c0c.jpg",
  enugu: "https://user.uploads.dev/file/db2b302d91972b2e218aeb50ed6858a8.jpg",
  benin: "https://user.uploads.dev/file/98b8f65192e44fb413051ec078abb75a.jpg",
};

export type Listing = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  badge: string;
  category: "sale" | "rent" | "new";
};

export const LISTINGS: Listing[] = [
  {
    id: "l1",
    title: "The Crestline Estate",
    location: "Beverly Hills, CA",
    price: "$4,850,000",
    beds: 6,
    baths: 7,
    sqft: 8200,
    image: IMAGES.hero,
    badge: "Featured",
    category: "sale",
  },
  {
    id: "l2",
    title: "Glasshouse Modern",
    location: "Austin, TX",
    price: "$2,375,000",
    beds: 5,
    baths: 5,
    sqft: 6100,
    image: IMAGES.villa,
    badge: "For Sale",
    category: "sale",
  },
  {
    id: "l3",
    title: "Willowbrook Colonial",
    location: "Charleston, SC",
    price: "$1,190,000",
    beds: 4,
    baths: 3,
    sqft: 3400,
    image: IMAGES.colonial,
    badge: "For Sale",
    category: "sale",
  },
  {
    id: "l4",
    title: "Skyline Penthouse",
    location: "Manhattan, NY",
    price: "$3,120,000",
    beds: 3,
    baths: 4,
    sqft: 2800,
    image: IMAGES.penthouse,
    badge: "New",
    category: "new",
  },
  {
    id: "l5",
    title: "Azure Shores Residence",
    location: "Malibu, CA",
    price: "$6,900,000",
    beds: 5,
    baths: 6,
    sqft: 5400,
    image: IMAGES.coastal,
    badge: "Featured",
    category: "sale",
  },
  {
    id: "l6",
    title: "Stonefield Farmhouse",
    location: "Hudson Valley, NY",
    price: "$8,400 / mo",
    beds: 4,
    baths: 4,
    sqft: 3900,
    image: IMAGES.farmhouse,
    badge: "For Rent",
    category: "rent",
  },
  {
    id: "l7",
    title: "The Parkline Townhome",
    location: "Chicago, IL",
    price: "$1,640,000",
    beds: 3,
    baths: 3,
    sqft: 2600,
    image: IMAGES.townhouse,
    badge: "For Sale",
    category: "sale",
  },
];

export type LandListing = {
  id: string;
  title: string;
  location: string;
  price: string;
  size: string;
  titleStatus: string;
  image: string;
  area: "urban" | "local";
};

export const LAND_LISTINGS: LandListing[] = [
  {
    id: "ld1",
    title: "Lekki Prime Plot",
    location: "Ibeju-Lekki, Lagos",
    price: "₦28,500,000",
    size: "600 sqm",
    titleStatus: "C of O Ready",
    image: LAND_IMAGES.lekki,
    area: "urban",
  },
  {
    id: "ld2",
    title: "Gwarinpa Estate Plot",
    location: "Gwarinpa, Abuja",
    price: "₦19,800,000",
    size: "500 sqm",
    titleStatus: "C of O Ready",
    image: LAND_IMAGES.abuja,
    area: "urban",
  },
  {
    id: "ld3",
    title: "Rumuokwuta Development Plot",
    location: "Port Harcourt, Rivers",
    price: "₦12,500,000",
    size: "600 sqm",
    titleStatus: "Governor's Consent",
    image: LAND_IMAGES.portHarcourt,
    area: "urban",
  },
  {
    id: "ld4",
    title: "Ologuneru Family Land",
    location: "Ibadan, Oyo",
    price: "₦6,800,000",
    size: "700 sqm",
    titleStatus: "C of O Ready",
    image: LAND_IMAGES.ibadan,
    area: "local",
  },
  {
    id: "ld5",
    title: "Nsukka Road Plot",
    location: "Enugu, Enugu State",
    price: "₦8,900,000",
    size: "600 sqm",
    titleStatus: "Verified Title",
    image: LAND_IMAGES.enugu,
    area: "local",
  },
  {
    id: "ld6",
    title: "Ugbowo Community Land",
    location: "Benin City, Edo",
    price: "₦5,200,000",
    size: "750 sqm",
    titleStatus: "Governor's Consent",
    image: LAND_IMAGES.benin,
    area: "local",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Margaret & David Ellison",
    role: "Sold their home of 22 years",
    quote:
      "Edkins Homes didn't just sell our house — they walked us through every detail of the plan, from staging to closing, and we netted 18% above asking. It felt like family looking after family.",
    initials: "ME",
  },
  {
    name: "Priya Raman",
    role: "First-time buyer",
    quote:
      "As a first-time buyer I had no idea where to start. Their planning-first approach turned a terrifying process into something clear, calm, and even exciting. I'm in a home I love.",
    initials: "PR",
  },
  {
    name: "James Okafor",
    role: "Property investor",
    quote:
      "I've worked with firms in four cities. Nobody comes close to Edkins when it comes to market analysis and long-range planning. Every recommendation they've made has outperformed.",
    initials: "JO",
  },
];

export type TeamMember = {
  name: string;
  title: string;
  phone: string;
  email: string;
  initials: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Anthony Edkins",
    title: "Founder & Principal Broker",
    phone: "(310) 555-0142",
    email: "anthony@edkinshomes.com",
    initials: "AE",
  },
  {
    name: "Sofia Hartwell",
    title: "Director of Client Strategy",
    phone: "(310) 555-0187",
    email: "sofia@edkinshomes.com",
    initials: "SH",
  },
  {
    name: "Marcus Lee",
    title: "Lead Planner & Market Analyst",
    phone: "(310) 555-0163",
    email: "marcus@edkinshomes.com",
    initials: "ML",
  },
  {
    name: "Elena Petrova",
    title: "Senior Agent, Luxury Division",
    phone: "(310) 555-0199",
    email: "elena@edkinshomes.com",
    initials: "EP",
  },
];

export const NAV_LINKS = [
  { label: "Listings", href: "#listings" },
  { label: "Land", href: "#land" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];
