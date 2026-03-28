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
            modalities: ["Worse from cold", "Worse from movement", "Better from warmth", "Worse in damp"],
            sensations: ["Heaviness", "Weakness", "Cramping", "Chilliness"]
        }
    },
    {
        name: "Lycopodium",
        description: "For digestive complaints with bloating, especially 4-8pm. Low confidence despite appearing capable. Right-sided.",
        indicators: {
            concomitants: ["Bloating", "Irritability", "Anxiety"],
            location: ["Digestive", "Abdomen", "Right side"],
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
            modalities: ["Worse from warmth", "Worse at night", "Worse from touch", "Better in open air"],
            sensations: ["Burning", "Crawling sensation", "Soreness"]
        }
    },
    {
        name: "Ruta graveolens",
        description: "For injuries to tendons, ligaments, and periosteum. Eye strain. Bruised, lame feeling.",
        indicators: {
            concomitants: ["Blurred vision", "Restlessness"],
            location: ["Skeletal", "Joints", "Eyes"],
            aetiology: ["Injury or trauma", "Overexertion"],
            modalities: ["Worse from rest", "Worse from cold", "Worse in damp", "Better from movement"],
            sensations: ["Bruised feeling", "Aching", "Soreness", "Weakness"]
        }
    },
    {
        name: "Natrum muriaticum",
        description: "For reserved, self-contained people with suppressed grief. Worse from consolation. Craves salt. Headaches from sun.",
        indicators: {
            concomitants: ["Weepiness", "Light sensitivity", "Increased thirst"],
            location: ["Head", "Skin", "Digestive", "Left side"],
            aetiology: ["Grief or loss", "Anger or frustration", "Poor sleep"],
            modalities: ["Worse in morning", "Worse from warmth", "Better in open air", "Worse from eating"],
            sensations: ["Throbbing", "Pressing", "Heaviness"]
        }
    },
    {
        name: "Thuja occidentalis",
        description: "For wart-like growths and effects of vaccination. Secretive, fixed ideas. Left-sided complaints.",
        indicators: {
            concomitants: ["Anxiety", "Skin sensitivity"],
            location: ["Skin", "Urinary", "Glandular", "Left side"],
            aetiology: ["Vaccination", "Damp conditions", "Medication side-effect"],
            modalities: ["Worse from cold", "Worse in damp", "Better from warmth", "Worse at night"],
            sensations: ["Stitching", "Pressing", "Soreness"]
        }
    },
    {
        name: "Silica (Silicea)",
        description: "For slow-developing complaints with lack of vital heat. Splinters, abscesses. Yielding but stubborn. Chilly.",
        indicators: {
            concomitants: ["Skin sensitivity", "Light sensitivity", "Numbness"],
            location: ["Glandular", "Skeletal", "Skin", "Lymphatic"],
            aetiology: ["Vaccination", "Cold exposure", "After illness"],
            modalities: ["Worse from cold", "Better from warmth", "Worse in damp", "Worse in morning"],
            sensations: ["Stitching", "Soreness", "Chilliness", "Weakness"]
        }
    },
    {
        name: "Mercurius solubilis",
        description: "For infections with offensive discharges. Sweats without relief. Sensitive to both heat and cold. Worse at night.",
        indicators: {
            concomitants: ["Metallic taste", "Increased thirst", "Heightened smell"],
            location: ["Throat", "Glandular", "Lymphatic", "Digestive"],
            aetiology: ["After illness", "Damp conditions", "Weather change"],
            modalities: ["Worse at night", "Worse in damp", "Worse from warmth", "Worse from cold"],
            sensations: ["Burning", "Soreness", "Aching"]
        }
    },
    {
        name: "Euphrasia",
        description: "The eye remedy. Profuse, acrid tears with bland nasal discharge. Eyes water in wind and light.",
        indicators: {
            concomitants: ["Watery eyes", "Light sensitivity", "Blurred vision"],
            location: ["Eyes", "Respiratory"],
            aetiology: ["Weather change", "Cold exposure"],
            modalities: ["Worse in open air", "Worse in wind", "Better in open air"],
            sensations: ["Burning", "Soreness", "Pressing"]
        }
    },
    {
        name: "Cantharis",
        description: "For intense burning pains, especially urinary. Constant urging with cutting pain. Burns and scalds.",
        indicators: {
            concomitants: ["Irritability", "Restlessness", "Increased thirst"],
            location: ["Urinary", "Skin", "Digestive"],
            aetiology: ["Heat exposure", "Injury or trauma"],
            modalities: ["Worse from drinking", "Worse from touch", "Better from rubbing", "Worse in afternoon"],
            sensations: ["Burning", "Sharp / cutting", "Cramping"]
        }
    },
    {
        name: "Ipecacuanha",
        description: "For persistent nausea not relieved by vomiting. Clean tongue with nausea. Bleeding with nausea.",
        indicators: {
            concomitants: ["Nausea", "Smell triggers nausea", "Loss of appetite"],
            location: ["Digestive", "Respiratory", "Circulatory"],
            aetiology: ["Food poisoning", "Dietary changes", "After illness"],
            modalities: ["Worse from movement", "Worse from warmth", "Worse from eating"],
            sensations: ["Cramping", "Constriction", "Pressing"]
        }
    },
    {
        name: "Mag phos",
        description: "The great anti-spasmodic. Cramps and neuralgic pains better from warmth and pressure. Right-sided.",
        indicators: {
            concomitants: ["Restlessness", "Bloating"],
            location: ["Nervous system", "Digestive", "Muscular", "Right side"],
            aetiology: ["Cold exposure", "Overexertion"],
            modalities: ["Better from warmth", "Better from pressure", "Worse from cold", "Better from rubbing"],
            sensations: ["Cramping", "Sharp / cutting", "Electric shock-like"]
        }
    },
    {
        name: "Hepar sulphuris",
        description: "For extreme sensitivity to cold, pain, and touch. Suppurating wounds. Irritable, nothing pleases. Splinter-like pains.",
        indicators: {
            concomitants: ["Irritability", "Noise sensitivity", "Skin sensitivity"],
            location: ["Skin", "Throat", "Respiratory", "Glandular"],
            aetiology: ["Cold exposure", "After illness", "Medication side-effect"],
            modalities: ["Worse from cold", "Better from warmth", "Worse from touch", "Worse in open air"],
            sensations: ["Sharp / cutting", "Stitching", "Soreness", "Chilliness"]
        }
    },
    {
        name: "Colocynthis",
        description: "For violent, cramping abdominal pains that make you double up. Better from hard pressure. Caused by anger.",
        indicators: {
            concomitants: ["Irritability", "Nausea", "Restlessness"],
            location: ["Digestive", "Abdomen", "Nervous system"],
            aetiology: ["Anger or frustration", "Cold exposure", "Dietary changes"],
            modalities: ["Better from pressure", "Better from warmth", "Worse from eating", "Better from rest"],
            sensations: ["Cramping", "Sharp / cutting", "Constriction"]
        }
    },
    {
        name: "Staphysagria",
        description: "For suppressed anger and indignation. Surgical wounds. Ailments from humiliation. Sensitive to what others say.",
        indicators: {
            concomitants: ["Irritability", "Anxiety", "Skin sensitivity"],
            location: ["Urinary", "Skin", "Nervous system", "Digestive"],
            aetiology: ["Anger or frustration", "Surgery", "Grief or loss"],
            modalities: ["Worse from touch", "Worse in morning", "Better from warmth"],
            sensations: ["Stitching", "Pressing", "Burning"]
        }
    },
    {
        name: "Kali bichromicum",
        description: "For thick, stringy, ropy discharges. Pain in small spots. Sinus problems. Symptoms shift location.",
        indicators: {
            concomitants: ["Loss of smell", "Unpleasant smells", "Nausea"],
            location: ["Respiratory", "Throat", "Digestive", "Joints"],
            aetiology: ["Cold exposure", "Weather change", "After illness"],
            modalities: ["Worse in morning", "Worse from cold", "Better from warmth", "Worse in damp"],
            sensations: ["Pressing", "Stitching", "Aching"]
        }
    },
    {
        name: "Lachesis",
        description: "Left-sided remedy. Worse from sleep, constriction, and heat. Talkative, jealous. Throat sensitive to touch.",
        indicators: {
            concomitants: ["Irritability", "Bloating", "Heightened smell"],
            location: ["Throat", "Circulatory", "Left side", "Skin"],
            aetiology: ["Hormonal changes", "Grief or loss", "Poor sleep"],
            modalities: ["Worse from warmth", "Worse in morning", "Better in open air", "Worse from touch"],
            sensations: ["Constriction", "Throbbing", "Pulsating"]
        }
    },
    {
        name: "China (Cinchona)",
        description: "For complaints after loss of fluids - bleeding, diarrhoea, sweating. Bloating with gas. Debility. Periodicity.",
        indicators: {
            concomitants: ["Bloating", "Ringing in ears", "Skin sensitivity"],
            location: ["Digestive", "Circulatory", "Lymphatic"],
            aetiology: ["After illness", "Food poisoning", "Overexertion"],
            modalities: ["Worse from touch", "Worse from eating", "Better from pressure", "Worse at night"],
            sensations: ["Fullness / bloating", "Pressing", "Heaviness", "Weakness"]
        }
    },
    {
        name: "Carbo vegetabilis",
        description: "The 'corpse reviver'. For collapse with coldness and desire to be fanned. Bloating and flatulence. Sluggish recovery.",
        indicators: {
            concomitants: ["Bloating", "Loss of appetite", "Numbness"],
            location: ["Digestive", "Circulatory", "Respiratory"],
            aetiology: ["After illness", "Food poisoning", "Overwork"],
            modalities: ["Better in open air", "Worse from eating", "Worse at night", "Worse from warmth"],
            sensations: ["Fullness / bloating", "Heaviness", "Weakness", "Chilliness"]
        }
    },
    {
        name: "Cocculus indicus",
        description: "For travel sickness, nursing exhaustion, and sleep loss. Vertigo and nausea. Hollow, empty feeling.",
        indicators: {
            concomitants: ["Nausea", "Numbness", "Blurred vision"],
            location: ["Nervous system", "Digestive", "Head"],
            aetiology: ["Poor sleep", "Overwork", "Worry or anxiety"],
            modalities: ["Worse from movement", "Worse in open air", "Worse from eating", "Better from rest"],
            sensations: ["Heaviness", "Numbness", "Weakness"]
        }
    },
    {
        name: "Calendula",
        description: "The great wound healer. For cuts, lacerations, and surgical wounds. Promotes clean healing. Prevents infection.",
        indicators: {
            concomitants: ["Skin sensitivity", "Irritability"],
            location: ["Skin", "Muscular"],
            aetiology: ["Injury or trauma", "Surgery"],
            modalities: ["Worse from touch", "Worse in damp", "Worse from cold"],
            sensations: ["Soreness", "Burning", "Aching"]
        }
    },
    {
        name: "Symphytum",
        description: "The bone-knitting remedy. For fractures, bone injuries, and blows to the eye. Promotes bone healing.",
        indicators: {
            concomitants: ["Skin sensitivity"],
            location: ["Skeletal", "Eyes", "Joints"],
            aetiology: ["Injury or trauma", "Overexertion"],
            modalities: ["Worse from touch", "Worse from movement", "Better from rest"],
            sensations: ["Aching", "Pressing", "Soreness"]
        }
    },
    {
        name: "Drosera",
        description: "For violent, spasmodic coughs worse after midnight. Barking, deep cough. Holding chest when coughing.",
        indicators: {
            concomitants: ["Nausea", "Noise sensitivity"],
            location: ["Respiratory", "Chest", "Throat"],
            aetiology: ["After illness", "Cold exposure"],
            modalities: ["Worse at night", "Worse from warmth", "Worse from drinking"],
            sensations: ["Constriction", "Cramping", "Soreness"]
        }
    },
    {
        name: "Spongia tosta",
        description: "For dry, barking, croupy cough like a saw through wood. Anxiety with difficult breathing. Better from warm drinks.",
        indicators: {
            concomitants: ["Anxiety", "Increased thirst"],
            location: ["Respiratory", "Throat", "Chest"],
            aetiology: ["Cold exposure", "Weather change"],
            modalities: ["Worse from cold", "Better from warmth", "Better from eating", "Worse at night"],
            sensations: ["Constriction", "Burning", "Soreness"]
        }
    },
    {
        name: "Podophyllum",
        description: "For profuse, gushing diarrhoea especially in early morning. Gurgling before stool. Liver complaints.",
        indicators: {
            concomitants: ["Nausea", "Bloating", "Loss of appetite"],
            location: ["Digestive", "Abdomen"],
            aetiology: ["Food poisoning", "Dietary changes", "After illness"],
            modalities: ["Worse in morning", "Worse from eating", "Better from rubbing", "Worse from warmth"],
            sensations: ["Cramping", "Fullness / bloating", "Weakness"]
        }
    },
    {
        name: "Veratrum album",
        description: "For violent vomiting and diarrhoea with collapse. Cold sweat on forehead. Craves cold water. Extreme chilliness.",
        indicators: {
            concomitants: ["Nausea", "Increased thirst", "Restlessness"],
            location: ["Digestive", "Circulatory", "Nervous system"],
            aetiology: ["Food poisoning", "Fright or shock", "Cold exposure"],
            modalities: ["Worse from movement", "Worse from drinking", "Better from warmth", "Better from rest"],
            sensations: ["Cramping", "Chilliness", "Weakness"]
        }
    },
    {
        name: "Coffea cruda",
        description: "For sleeplessness from mental overactivity. All senses heightened. Pain seems unbearable. Oversensitive to everything.",
        indicators: {
            concomitants: ["Noise sensitivity", "Heightened smell", "Restlessness"],
            location: ["Nervous system", "Head"],
            aetiology: ["Worry or anxiety", "Fright or shock", "Poor sleep"],
            modalities: ["Worse at night", "Worse from touch", "Better from warmth"],
            sensations: ["Throbbing", "Sharp / cutting", "Restlessness"]
        }
    },
    {
        name: "Argentum nitricum",
        description: "For anticipatory anxiety with diarrhoea. Craves sweets which disagree. Fear of heights, crowds. Impulsive.",
        indicators: {
            concomitants: ["Anxiety", "Bloating", "Nausea"],
            location: ["Digestive", "Nervous system", "Eyes"],
            aetiology: ["Worry or anxiety", "Dietary changes", "Overwork"],
            modalities: ["Worse from warmth", "Worse from eating", "Better in open air", "Better from cold"],
            sensations: ["Cramping", "Fullness / bloating", "Constriction"]
        }
    },
    {
        name: "Allium cepa",
        description: "For streaming colds with profuse, burning nasal discharge and bland tears. Opposite of Euphrasia. Worse in warm rooms.",
        indicators: {
            concomitants: ["Watery eyes", "Heightened smell", "Noise sensitivity"],
            location: ["Respiratory", "Throat", "Eyes"],
            aetiology: ["Cold exposure", "Weather change", "Damp conditions"],
            modalities: ["Worse from warmth", "Better in open air", "Worse in afternoon"],
            sensations: ["Burning", "Soreness", "Pressing"]
        }
    }
];
