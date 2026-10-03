export interface MusicTimelineStage {
  step: string;
  title: string;
  period: string;
  description: string;
  instruments?: string[];
  image?: string;
  tag: string;
}

export interface RubabStringSpec {
  name: string;
  note: string;
  frequency: number;
  role: string;
  gauge: string;
}

export interface MusicData {
  headline: string;
  subheading: string;
  introduction: string;
  decadeStory: string;
  instrumentsExplored: { name: string; category: string; description: string }[];
  timeline: MusicTimelineStage[];
  fromRubabToCode: {
    title: string;
    description: string;
    flow: { label: string; detail: string }[];
  };
  rubabTunerProject: {
    title: string;
    description: string;
    strings: RubabStringSpec[];
    algorithms: string[];
    features: string[];
  };
  rubabjonBrand: {
    name: string;
    tagline: string;
    mission: string;
    instagram: string;
    handle: string;
  };
  photos?: {
    stageSolo?: string;
    liveBand?: string;
    studioSanctuary?: string;
    mountainJam?: string;
  };
}

export const musicData: MusicData = {
  headline: "Beyond the Code",
  subheading: "When I'm not building software, I'm creating music.",
  introduction:
    "Music is not a casual hobby or an afterthought on a resume — it is a foundational pillar of how I think, listen, and build. For roughly a decade, I have immersed myself in acoustic traditions, modal melodies, and rhythm architectures. Today, that dedication converges with software engineering to craft innovative music technology.",
  decadeStory:
    "Over ten years of practice, I explored diverse string, wind, and percussion traditions — from guitar chords to the deep drone of the bagpipe and intricate rhythms of the darbuka — before dedicating my deepest focus to the Rubab, the revered 'Lion of Instruments.'",
  instrumentsExplored: [
    {
      name: "Rubab",
      category: "Primary Solo & Classical",
      description: "Heartwood mulberry chamber, parchment soundboard, and sympathetic tarab resonance.",
    },
    {
      name: "Acoustic Guitar",
      category: "Fretted Harmony",
      description: "Fingerstyle, contemporary chord progressions, and acoustic accompaniment.",
    },
    {
      name: "Sitar",
      category: "Classical Melodic",
      description: "Microtonal meend, elaborate ragas, and complex sympathetic string vibration.",
    },
    {
      name: "Bansuri & Flute",
      category: "Acoustic Wind",
      description: "Breath control, modal ornamentation, and organic pitch bending.",
    },
    {
      name: "Bagpipe",
      category: "Traditional Drone & Pipes",
      description: "Continuous drone pressure dynamics, highland scales, and endurance technique.",
    },
    {
      name: "Darbuka",
      category: "Percussive Foundations",
      description: "Rapid finger rolls, doum-tek rhythms, and polyrhythmic syncopation.",
    },
  ],
  timeline: [
    {
      step: "01",
      title: "Discovering Music",
      period: "Early Foundations",
      tag: "Origins",
      description:
        "Fascinated by regional folk traditions and acoustic frequencies, developing an intuitive ear for modal scales and rhythm.",
    },
    {
      step: "02",
      title: "Exploring Instruments",
      period: "Exploratory Phase",
      tag: "Multi-Instrumental",
      description:
        "Experimenting across guitar, flute, sitar, bagpipes, and darbuka to understand acoustic sound production and string tensions.",
    },
    {
      step: "03",
      title: "Discovering the Rubab",
      period: "The Turning Point",
      tag: "The Lion of Instruments",
      description:
        "Encountering the raw timbre of the rubab — its mulberry hollow body, goat-skin belly, and soaring tarab overtones captured my lifelong devotion.",
    },
    {
      step: "04",
      title: "Traditional & Folk Music",
      period: "Immersion",
      tag: "Classical Repertoire",
      description:
        "Deep study of Kabuli, Badakhshani, and regional folk repertoires, mastering intricate plucking rhythms (Shahbaz) and ornamentation.",
    },
    {
      step: "05",
      title: "Fusion & Experimentation",
      period: "Sonic Expansion",
      tag: "Modern Synthesis",
      description:
        "Blending traditional acoustic rubab textures with modern ambient chords, cinematic arrangements, and experimental time signatures.",
    },
    {
      step: "06",
      title: "Performances & Recordings",
      period: "Live & Studio",
      tag: "Artistic Expression",
      description:
        "Acoustic recitals, cultural gatherings, and studio recordings sharing the resonant warmth of the rubab with broader audiences.",
    },
    {
      step: "07",
      title: "Teaching Rubab",
      period: "Knowledge Sharing",
      tag: "Mentorship",
      description:
        "Guiding students and enthusiasts through proper hand posture, string replacement, fret placement, and melodic expression.",
    },
    {
      step: "08",
      title: "Rubab Business & Craft",
      period: "Luthiery & Community",
      tag: "Community",
      description:
        "Facilitating authentic handcrafted rubabs from master woodcarvers to musicians worldwide, advising on acoustic setup and tonewoods.",
    },
    {
      step: "09",
      title: "Music Technology & Code",
      period: "Convergence",
      tag: "Code Meets Music",
      description:
        "Translating musical challenges into digital engineering — pioneering real-time pitch detection, acoustic spectrum analysis, and the Rubab Tuner.",
    },
  ],
  fromRubabToCode: {
    title: "From Rubab to Code",
    description:
      "Acoustic rubabs feature sympathetic strings and skin heads that respond sharply to humidity and temperature. Ordinary guitar apps fail to parse its complex harmonics. Solving this personal hurdle led me into computational audio DSP, FFT mathematics, and the Web Audio API.",
    flow: [
      {
        label: "Rubab",
        detail: "Complex modal instrument with 3 main melody strings, 2-3 drone strings, and 11-15 sympathetic resonators.",
      },
      {
        label: "Tuning Challenges",
        detail: "Standard phone tuners jump erratically between high harmonic overtones instead of locking onto the fundamental pitch.",
      },
      {
        label: "Rubab Tuner",
        detail: "A specialized digital tuner architected specifically around rubab string physics and modal base registers.",
      },
      {
        label: "Frequency Detection",
        detail: "Autocorrelation & the YIN algorithm implemented to isolate exact pitch down to fractions of a cent.",
      },
      {
        label: "Chromatic Tuner",
        detail: "Expanding the core audio engine into a universal 12-TET chromatic analyzer for any stringed instrument.",
      },
      {
        label: "Real-Time Audio Spectrum",
        detail: "2048-bin FFT spectrum visualization rendering live harmonic distributions in elegant champagne gold.",
      },
    ],
  },
  rubabTunerProject: {
    title: "Rubab Tuner & Frequency Engine",
    description:
      "A digital tuning and audio analysis tool created specifically from my experience with rubab and expanded toward a universal chromatic tuning system. Built with modern Web Audio APIs and mathematical pitch detection algorithms.",
    strings: [
      { name: "C3", note: "C3", frequency: 130.81, role: "Bass Drone (Kharaj)", gauge: "Thick Gut / Nylon" },
      { name: "F3", note: "F3", frequency: 174.61, role: "Middle String (Sur)", gauge: "Medium Steel / Gut" },
      { name: "C4", note: "C4", frequency: 261.63, role: "High Melody (Zir)", gauge: "Light Steel" },
      { name: "G4", note: "G4", frequency: 392.00, role: "Octave Melody (Pechkar)", gauge: "Ultra-Light Steel" },
    ],
    algorithms: [
      "YIN Pitch Detection Algorithm",
      "Normalized Square Difference Function (NSDF)",
      "Parabolic Interpolation for Sub-Cent Precision",
      "Fast Fourier Transform (FFT) 2048-Bin Spectrum",
    ],
    features: [
      "Real-time pitch detection via browser microphone input",
      "Sub-cent visual needle with ±50 cent deviation arc",
      "Dedicated presets for Afghan, Badakhshani, and Pamiri rubab modes",
      "Live harmonic audio waveform and frequency spectrum analyzer",
      "Interactive string plucking simulator for reference ear-tuning",
    ],
  },
  rubabjonBrand: {
    name: "Codes & Chords",
    tagline: "Exploring, performing, and innovating around the acoustic soul of the Rubab.",
    mission:
      "Codes & Chords is the musical sanctuary of Khalid Abbas Barcha — uniting a decade of acoustic instrument practice across 6+ instruments, stage performances, and modern Web Audio DSP innovation.",
    instagram: "https://www.instagram.com/khalid.barcha/",
    handle: "@khalid.barcha",
  },
  photos: {
    stageSolo: "/images/music/rubab-stage-solo.jpg",
    liveBand: "/images/music/rubab-live-band.jpg",
    studioSanctuary: "/images/music/rubab-studio-sanctuary.jpg",
    mountainJam: "/images/music/rubab-mountain-jam.jpg",
  },
};
