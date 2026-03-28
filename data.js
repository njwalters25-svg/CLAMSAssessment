// CLAMS question data with sub-categories and options
const CLAMS_DATA = [
    {
        key: "concomitants",
        label: "Concomitants",
        letter: "C",
        question: "What else happens alongside your main complaint?",
        hint: "Select any accompanying symptoms you experience",
        subCategories: [
            {
                key: "sight",
                label: "Sight",
                options: ["Blurred vision", "Light sensitivity", "Spots or floaters", "Watery eyes"]
            },
            {
                key: "smell",
                label: "Smell",
                options: ["Heightened smell", "Loss of smell", "Unpleasant smells", "Smell triggers nausea"]
            },
            {
                key: "sound",
                label: "Sound",
                options: ["Noise sensitivity", "Ringing in ears", "Buzzing", "Muffled hearing"]
            },
            {
                key: "taste",
                label: "Taste",
                options: ["Metallic taste", "Bitter taste", "Loss of taste", "Sweet taste in mouth"]
            },
            {
                key: "feel",
                label: "Feel / Touch",
                options: ["Skin sensitivity", "Numbness", "Tingling", "Itching"]
            },
            {
                key: "digestive",
                label: "Digestive",
                options: ["Nausea", "Loss of appetite", "Increased thirst", "Bloating"]
            },
            {
                key: "emotional",
                label: "Emotional",
                options: ["Irritability", "Anxiety", "Weepiness", "Restlessness"]
            }
        ]
    },
    {
        key: "location",
        label: "Location",
        letter: "L",
        question: "Which body systems or areas are affected?",
        hint: "Select the systems involved in your complaint",
        subCategories: [
            {
                key: "major_systems",
                label: "Major Systems",
                options: ["Circulatory", "Digestive", "Respiratory", "Nervous system"]
            },
            {
                key: "other_systems",
                label: "Other Systems",
                options: ["Glandular", "Lymphatic", "Muscular", "Skeletal"]
            },
            {
                key: "body_area",
                label: "Body Area",
                options: ["Head", "Chest", "Abdomen", "Back"]
            },
            {
                key: "body_area_2",
                label: "Extremities",
                options: ["Arms / hands", "Legs / feet", "Joints", "Neck / shoulders"]
            },
            {
                key: "side",
                label: "Side",
                options: ["Left side", "Right side", "Both sides", "Alternating sides"]
            },
            {
                key: "skin_mucous",
                label: "Skin & Mucous",
                options: ["Skin", "Eyes", "Throat", "Urinary"]
            }
        ]
    },
    {
        key: "aetiology",
        label: "Aetiology",
        letter: "A",
        question: "What happened before this started?",
        hint: "Think about what may have triggered or caused this",
        subCategories: [
            {
                key: "physical",
                label: "Physical",
                options: ["Injury or trauma", "Overexertion", "Surgery", "After illness"]
            },
            {
                key: "emotional",
                label: "Emotional",
                options: ["Grief or loss", "Anger or frustration", "Fright or shock", "Worry or anxiety"]
            },
            {
                key: "lifestyle",
                label: "Lifestyle",
                options: ["Poor sleep", "Dietary changes", "Overwork", "Sedentary lifestyle"]
            },
            {
                key: "environmental",
                label: "Environmental",
                options: ["Weather change", "Cold exposure", "Heat exposure", "Damp conditions"]
            },
            {
                key: "other_causes",
                label: "Other",
                options: ["Medication side-effect", "Hormonal changes", "Vaccination", "Food poisoning"]
            }
        ]
    },
    {
        key: "modalities",
        label: "Modalities",
        letter: "M",
        question: "What makes it better or worse?",
        hint: "Select factors that affect your symptoms",
        subCategories: [
            {
                key: "temperature",
                label: "Temperature",
                options: ["Better from warmth", "Worse from warmth", "Better from cold", "Worse from cold"]
            },
            {
                key: "movement",
                label: "Movement",
                options: ["Better from rest", "Worse from rest", "Better from movement", "Worse from movement"]
            },
            {
                key: "pressure",
                label: "Pressure",
                options: ["Better from pressure", "Worse from pressure", "Better from rubbing", "Worse from touch"]
            },
            {
                key: "time",
                label: "Time of Day",
                options: ["Worse in morning", "Worse at night", "Worse in afternoon", "Better at night"]
            },
            {
                key: "weather",
                label: "Weather",
                options: ["Worse in damp", "Worse in wind", "Better in open air", "Worse in open air"]
            },
            {
                key: "food_drink",
                label: "Food & Drink",
                options: ["Better from eating", "Worse from eating", "Better from drinking", "Worse from drinking"]
            }
        ]
    },
    {
        key: "sensations",
        label: "Sensations",
        letter: "S",
        question: "How does it feel?",
        hint: "Describe the sensation as closely as you can",
        subCategories: [
            {
                key: "pain_type",
                label: "Pain Type",
                options: ["Throbbing", "Burning", "Stitching", "Cramping"]
            },
            {
                key: "pain_type_2",
                label: "More Pain",
                options: ["Bruised feeling", "Aching", "Sharp / cutting", "Pressing"]
            },
            {
                key: "general_feeling",
                label: "General",
                options: ["Chilliness", "Heaviness", "Weakness", "Restlessness"]
            },
            {
                key: "nerve_sensations",
                label: "Nerve",
                options: ["Tingling", "Numbness", "Electric shock-like", "Crawling sensation"]
            },
            {
                key: "other_sensations",
                label: "Other",
                options: ["Fullness / bloating", "Constriction", "Pulsating", "Soreness"]
            }
        ]
    }
];
