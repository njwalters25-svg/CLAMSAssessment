// Remedy database - each remedy has indicators across CLAMS categories
const REMEDIES = [
    {
        name: "Arnica montana",
        description: "The go-to remedy for trauma, bruising, and overexertion. Suits people who say they are fine when clearly unwell.",
        indicators: {
            concomitants: ["Skin sensitivity", "Restlessness", "Irritability"],
            location: ["Muscular", "Skeletal", "Both sides"],
            aetiology: ["Injury or trauma", "Overexertion", "Surgery"],
            modalities: ["Worse from touch", "Worse from movement", "Better from rest"],
            sensations: ["Bruised feeling", "Aching", "Soreness"]
        }
    },
    {
        name: "Belladonna",
        description: "For sudden, intense symptoms with heat, redness, and throbbing. Often right-sided.",
        indicators: {
            concomitants: ["Light sensitivity", "Noise sensitivity", "Skin sensitivity"],
            location: ["Head", "Throat", "Nervous system", "Right side"],
            aetiology: ["Cold exposure", "After illness", "Fright or shock"],
            modalities: ["Worse from movement", "Worse in afternoon", "Better from rest", "Worse from touch"],
            sensations: ["Throbbing", "Burning", "Pulsating"]
        }
    },
    {
        name: "Nux vomica",
        description: "For oversensitive, irritable types. Excellent for digestive complaints from overindulgence or overwork.",
        indicators: {
            concomitants: ["Irritability", "Noise sensitivity", "Nausea", "Light sensitivity"],
            location: ["Digestive", "Head", "Nervous system"],
            aetiology: ["Overwork", "Dietary changes", "Poor sleep", "Anger or frustration"],
            modalities: ["Worse in morning", "Better from warmth", "Worse from cold", "Worse from eating"],
            sensations: ["Cramping", "Pressing", "Chilliness"]
        }
    },
    {
        name: "Pulsatilla",
        description: "For gentle, yielding temperaments. Symptoms are changeable and better in open air. Often weepy.",
        indicators: {
            concomitants: ["Weepiness", "Loss of appetite", "Bloating", "Watery eyes"],
            location: ["Digestive", "Respiratory", "Eyes"],
            aetiology: ["Dietary changes", "Hormonal changes", "Grief or loss"],
            modalities: ["Better in open air", "Better from movement", "Worse from warmth", "Worse from eating"],
            sensations: ["Heaviness", "Pressing", "Fullness / bloating"]
        }
    },
    {
        name: "Bryonia alba",
        description: "For complaints that are worse from any movement. Dryness of mucous membranes. Irritable, wants to be left alone.",
        indicators: {
            concomitants: ["Irritability", "Increased thirst"],
            location: ["Chest", "Joints", "Muscular", "Right side"],
            aetiology: ["Weather change", "Anger or frustration"],
            modalities: ["Worse from movement", "Better from rest", "Better from pressure", "Worse in morning"],
            sensations: ["Stitching", "Sharp / cutting", "Aching"]
        }
    },
    {
        name: "Rhus toxicodendron",
        description: "The 'rusty gate' remedy - stiff on first movement, better as you keep moving. Restless.",
        indicators: {
            concomitants: ["Restlessness", "Itching", "Anxiety"],
            location: ["Joints", "Muscular", "Skeletal", "Left side"],
            aetiology: ["Overexertion", "Damp conditions", "Cold exposure"],
            modalities: ["Better from movement", "Worse from rest", "Better from warmth", "Worse in damp"],
            sensations: ["Aching", "Soreness", "Crawling sensation"]
        }
    },
    {
        name: "Aconitum napellus",
        description: "For sudden onset after cold wind or fright. Great anxiety and restlessness. Everything is intense.",
        indicators: {
            concomitants: ["Anxiety", "Restlessness", "Noise sensitivity", "Numbness"],
            location: ["Circulatory", "Respiratory", "Nervous system"],
            aetiology: ["Fright or shock", "Cold exposure", "Weather change"],
            modalities: ["Worse at night", "Worse in open air", "Better from rest"],
            sensations: ["Tingling", "Numbness", "Throbbing"]
        }
    },
    {
        name: "Gelsemium",
        description: "For weakness, heaviness, and trembling. Anticipatory anxiety. Flu-like symptoms with drowsiness.",
        indicators: {
            concomitants: ["Blurred vision", "Anxiety", "Numbness", "Loss of appetite"],
            location: ["Nervous system", "Muscular", "Head"],
            aetiology: ["Worry or anxiety", "Fright or shock", "After illness"],
            modalities: ["Worse in damp", "Worse from movement", "Better from drinking"],
            sensations: ["Heaviness", "Weakness", "Aching"]
        }
    },
    {
        name: "Chamomilla",
        description: "For extreme irritability with pain. Cannot bear the pain. One cheek red, one pale. Oversensitive.",
        indicators: {
            concomitants: ["Irritability", "Noise sensitivity", "Heightened smell"],
            location: ["Nervous system", "Digestive", "Head"],
            aetiology: ["Anger or frustration", "Worry or anxiety"],
            modalities: ["Worse at night", "Worse from warmth", "Better from movement"],
            sensations: ["Throbbing", "Cramping", "Numbness"]
        }
    },
    {
        name: "Arsenicum album",
        description: "For anxiety with restlessness, especially around midnight. Fastidious. Burning pains better from warmth.",
        indicators: {
            concomitants: ["Anxiety", "Restlessness", "Increased thirst", "Loss of appetite"],
            location: ["Digestive", "Respiratory", "Skin"],
            aetiology: ["Food poisoning", "Worry or anxiety", "Cold exposure"],
            modalities: ["Worse at night", "Better from warmth", "Worse from cold", "Better from drinking"],
            sensations: ["Burning", "Restlessness", "Weakness"]
        }
    },
    {
        name: "Hypericum",
        description: "For nerve-rich area injuries. Shooting pains along nerve pathways. Injuries to fingers, toes, spine.",
        indicators: {
            concomitants: ["Tingling", "Numbness", "Anxiety"],
            location: ["Nervous system", "Back", "Arms / hands", "Legs / feet"],
            aetiology: ["Injury or trauma", "Surgery"],
            modalities: ["Worse from touch", "Worse from cold", "Worse in damp"],
            sensations: ["Sharp / cutting", "Electric shock-like", "Tingling"]
        }
    },
    {
        name: "Ignatia",
        description: "The grief remedy. For emotional upsets with sighing, lump in throat, and contradictory symptoms.",
        indicators: {
            concomitants: ["Weepiness", "Anxiety", "Loss of appetite"],
            location: ["Nervous system", "Throat", "Digestive"],
            aetiology: ["Grief or loss", "Anger or frustration", "Fright or shock"],
            modalities: ["Worse in morning", "Better from eating", "Worse from drinking"],
            sensations: ["Constriction", "Cramping", "Pressing"]
        }
    },
    {
        name: "Ledum palustre",
        description: "For puncture wounds and insect bites. Affected part feels cold but is better from cold applications.",
        indicators: {
            concomitants: ["Numbness", "Itching"],
            location: ["Joints", "Skin", "Legs / feet"],
            aetiology: ["Injury or trauma"],
            modalities: ["Better from cold", "Worse from warmth", "Worse from movement", "Worse at night"],
            sensations: ["Throbbing", "Aching", "Chilliness"]
        }
    },
    {
        name: "Apis mellifica",
        description: "For stinging, burning pains with swelling. Better from cold. Symptoms like a bee sting.",
        indicators: {
            concomitants: ["Skin sensitivity", "Restlessness"],
            location: ["Skin", "Throat", "Eyes", "Right side"],
            aetiology: ["Injury or trauma", "Heat exposure"],
            modalities: ["Better from cold", "Worse from warmth", "Worse from touch", "Worse in afternoon"],
            sensations: ["Burning", "Stitching", "Soreness"]
        }
    },
    {
        name: "Calc carb",
        description: "For slow, steady types who are easily fatigued. Chilly with sweaty head. Overwhelmed by responsibility.",
        indicators: {
            concomitants: ["Anxiety", "Bloating", "Increased thirst"],
            location: ["Skeletal", "Glandular", "Digestive"],
            aetiology: ["Overwork", "Worry or anxiety", "Damp conditions"],
            modalities: ["Worse from cold", "Worse from exertion", "Better from warmth", "Worse in damp"],
            sensations: ["Heaviness", "Weakness", "Cramping", "Chilliness"]
        }
    },
    {
        name: "Lycopodium",
        description: "For digestive complaints with bloating, especially 4-8pm. Low confidence despite appearing capable. Right-sided.",
        indicators: {
            concomitants: ["Bloating", "Irritability", "Anxiety"],
            location: ["Digestive", "Liver area", "Right side"],
            aetiology: ["Worry or anxiety", "Overwork", "Dietary changes"],
            modalities: ["Worse in afternoon", "Better from warmth", "Worse from eating", "Better from movement"],
            sensations: ["Fullness / bloating", "Pressing", "Cramping"]
        }
    },
    {
        name: "Phosphorus",
        description: "For open, sympathetic types who burn out. Thirsty for cold drinks. Bleeding tendency. Fearful when alone.",
        indicators: {
            concomitants: ["Anxiety", "Increased thirst", "Light sensitivity"],
            location: ["Respiratory", "Circulatory", "Nervous system"],
            aetiology: ["After illness", "Worry or anxiety", "Overwork"],
            modalities: ["Better from cold", "Better from eating", "Worse at night", "Worse from warmth"],
            sensations: ["Burning", "Heaviness", "Weakness"]
        }
    },
    {
        name: "Sepia",
        description: "For hormonal exhaustion. Indifferent to loved ones. Better from vigorous exercise. Dragging-down sensation.",
        indicators: {
            concomitants: ["Irritability", "Weepiness", "Nausea", "Loss of appetite"],
            location: ["Digestive", "Urinary", "Skin"],
            aetiology: ["Hormonal changes", "Overwork", "Sedentary lifestyle"],
            modalities: ["Better from movement", "Worse in morning", "Worse from cold", "Better from warmth"],
            sensations: ["Heaviness", "Weakness", "Aching"]
        }
    },
    {
        name: "Sulphur",
        description: "For burning, itching symptoms. Worse from warmth and bathing. Untidy philosopher type. Hot feet at night.",
        indicators: {
            concomitants: ["Itching", "Skin sensitivity", "Increased thirst"],
            location: ["Skin", "Digestive", "Circulatory"],
            aetiology: ["Sedentary lifestyle", "Dietary changes", "After illness"],
            modalities: ["Worse from warmth", "Worse at night", "Worse from bathing", "Better in open air"],
            sensations: ["Burning", "Itching", "Soreness"]
        }
    },
    {
        name: "Ruta graveolens",
        description: "For injuries to tendons, ligaments, and periosteum. Eye strain. Bruised, lame feeling.",
        indicators: {
            concomitants: ["Blurred vision", "Restlessness", "Weakness"],
            location: ["Skeletal", "Joints", "Eyes"],
            aetiology: ["Injury or trauma", "Overexertion"],
            modalities: ["Worse from rest", "Worse from cold", "Worse in damp", "Better from movement"],
            sensations: ["Bruised feeling", "Aching", "Soreness", "Weakness"]
        }
    }
];
