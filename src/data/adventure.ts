export interface AdventurePhoto {
  id: string;
  title: string;
  location: string;
  altitude?: string;
  image: string;
  description: string;
  orientation?: "portrait" | "landscape";
}

export interface AdventureMilestone {
  title: string;
  value: string;
  subtitle: string;
}

export const adventureMilestones: AdventureMilestone[] = [
  {
    title: "Highest Altitude",
    value: "4,693 m",
    subtitle: "High alpine passes across Karakoram & Himalayas",
  },
  {
    title: "Expedition Region",
    value: "Gilgit-Baltistan",
    subtitle: "Passu, Hunza, Karakoram & Alpine Ridges",
  },
  {
    title: "Mountain Ethos",
    value: "Quiet Grit",
    subtitle: "Physical endurance, altitude clarity & steady execution",
  },
  {
    title: "Synthesis",
    value: "Code & Wilderness",
    subtitle: "Resilience forged in the wild fuels engineering craft",
  },
];

export const adventurePhotos: AdventurePhoto[] = [
  {
    id: "adv-summit-perch",
    title: "Summit Perch Over Passu Cones",
    location: "Passu / Karakoram Range, Gilgit-Baltistan",
    altitude: "3,800 m",
    image: "/images/adventure/adventure-5.jpg",
    description:
      "Perched on a mountain ridge with full alpine pack overlooking the jagged Passu Cones. Embodying the rugged spirit of Barcha.",
    orientation: "portrait",
  },
  {
    id: "adv-peak-gaze",
    title: "Gazing into the High Massifs",
    location: "Karakoram Alpine Ridge",
    altitude: "4,200 m",
    image: "/images/adventure/adventure-1.jpg",
    description:
      "Contemplating the colossal snowcapped peaks beneath golden mountain sun. Solitude and boundless elevation.",
    orientation: "portrait",
  },
  {
    id: "adv-pine-trek",
    title: "Glacial Valley Alpine Trail",
    location: "Hunza Valley / Glacial Trail",
    altitude: "3,100 m",
    image: "/images/adventure/adventure-3.jpg",
    description:
      "Trekking through alpine pine and juniper forests on the trail to glacial outposts beneath monolithic rock faces.",
    orientation: "portrait",
  },
  {
    id: "adv-ridge-walk",
    title: "High Ridge Panorama",
    location: "Karakoram High Route",
    altitude: "3,950 m",
    image: "/images/adventure/adventure-4.jpg",
    description:
      "Hiking pole in hand facing cloud-crowned Himalayan summits. Precision, balance, and quiet endurance on high terrain.",
    orientation: "landscape",
  },
  {
    id: "adv-pakol-trail",
    title: "Mountain Trail Stride",
    location: "Northern Pakistan Valley Path",
    altitude: "2,400 m",
    image: "/images/adventure/adventure-2.jpg",
    description:
      "Walking rugged gravel paths draped in traditional Pakol and wool scarf. Grounded in ancestral heritage.",
    orientation: "portrait",
  },
  {
    id: "adv-meadow-camp",
    title: "Alpine Camp Expedition",
    location: "High Altitude Wilderness",
    altitude: "3,500 m",
    image: "/images/adventure/adventure-6.jpg",
    description:
      "Expedition life in the northern valleys. Carrying all essentials, embracing the elements, and finding clarity away from screens.",
    orientation: "portrait",
  },
];

export const adventureEthos = {
  quote: "The mountains don't negotiate with words. They demand preparation, quiet resilience, and deliberate steps.",
  motto: "Work, No Word",
  reflection:
    "Born and connected to the high ranges of Gilgit-Baltistan, trekking and mountaineering are not recreational hobbies for me — they are foundational training for the mind. Navigating an alpine pass at 4,000 meters requires the same mental state as debugging a distributed backend or tuning a complex microservice: patience, zero ego, continuous adaptation, and absolute focus.",
};
