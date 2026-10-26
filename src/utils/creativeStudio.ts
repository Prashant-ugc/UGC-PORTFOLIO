export type NicheId =
  | 'skincare_beauty'
  | 'health_supplements'
  | 'tech_gadgets'
  | 'dtc_fashion'
  | 'home_lifestyle'
  | 'saas_apps';

export type AngleId =
  | 'problem_agitate_solve'
  | 'skeptic_unboxing'
  | 'tiktok_made_me_buy_it'
  | 'competitor_callout'
  | 'pov_lifestyle';

export interface ScriptScene {
  timeframe: string;
  stage: string;
  visualPrompt: string;
  spokenAudio: string;
  onScreenText: string;
}

export interface GeneratedConcept {
  id: string;
  niche: NicheId;
  angle: AngleId;
  productName: string;
  targetAudience: string;
  hookVariations: {
    label: string;
    hookText: string;
    hookType: string;
    predictedRetention: string;
  }[];
  scenes: ScriptScene[];
  estimatedHookRate: string;
  predictedCtr: string;
  soundVibe: string;
  voiceStyle: string;
}

export const NICHE_CONFIGS: Record<
  NicheId,
  {
    name: string;
    defaultProduct: string;
    defaultAudience: string;
    suggestedSound: string;
  }
> = {
  skincare_beauty: {
    name: 'Skincare & Clean Beauty',
    defaultProduct: 'HydraGlow Barrier Repair Serum',
    defaultAudience: 'Women 20-35 battling dry skin, redness or breakout scarring',
    suggestedSound: 'Soft chill lofi beat with subtle ASMR pop drops',
  },
  health_supplements: {
    name: 'Health & Functional Nutrition',
    defaultProduct: 'NeuroPeak Morning Electrolyte Greens',
    defaultAudience: 'Active professionals 24-40 experiencing afternoon brain fog & caffeine crashes',
    suggestedSound: 'Upbeat energetic trending electronic synth',
  },
  tech_gadgets: {
    name: 'Smart Gadgets & Electronics',
    defaultProduct: 'MagFold 3-in-1 Magnetic Travel Charger',
    defaultAudience: 'Travelers, remote tech workers, and minimalist desk aesthetic lovers',
    suggestedSound: 'Punchy modern rhythm with satisfying click sound effects',
  },
  dtc_fashion: {
    name: 'DTC Apparel & Streetwear',
    defaultProduct: 'AeroCloud Seamless Sculpt Leggings',
    defaultAudience: 'Fitness enthusiasts & athleisure buyers tired of see-through fabrics',
    suggestedSound: 'Trending TikTok house track with high-energy bass drop',
  },
  home_lifestyle: {
    name: 'Home & Modern Living',
    defaultProduct: 'AuraMist Ultrasonic Flame Diffuser',
    defaultAudience: 'Apartment dwellers wanting cozy aesthetic bedroom vibes',
    suggestedSound: 'Warm acoustic indie pop with soothing natural textures',
  },
  saas_apps: {
    name: 'Mobile Apps & Productivity SaaS',
    defaultProduct: 'FocusFlow AI Time Tracker',
    defaultAudience: 'Freelancers & agency owners losing billable hours to context switching',
    suggestedSound: 'Brisk modern percussion with smooth melodic transitions',
  },
};

export const ANGLE_CONFIGS: Record<
  AngleId,
  {
    name: string;
    summary: string;
    hookFormula: string;
  }
> = {
  problem_agitate_solve: {
    name: 'Problem-Agitate-Solve (Direct Pain)',
    summary: 'Calls out an annoying daily frustration in the first 1.5 seconds, exposes why conventional products fail, and introduces the product as the effortless fix.',
    hookFormula: '"If you still struggle with [Pain], stop scrolling right now..."',
  },
  skeptic_unboxing: {
    name: 'The Honest Skeptic / Unboxing',
    summary: 'The creator starts skeptical ("I literally thought this was a paid scam..."), unboxes the package on camera, tries it in real-time, and is blown away by instant results.',
    hookFormula: '"I spent my own money so you wouldn\'t have to, and I\'m lowkey mad..."',
  },
  tiktok_made_me_buy_it: {
    name: 'POV / TikTok Made Me Buy It',
    summary: 'Fast-paced, authentic social discovery style. Blends FOMO, aesthetic product shots, and casual girlfriend/boyfriend conversational recommendation.',
    hookFormula: '"POV: You finally stopped buying the dupes and bought the actual thing..."',
  },
  competitor_callout: {
    name: 'The $80 vs $25 Cost Face-off',
    summary: 'Side-by-side comparison debunking luxury markup brands and showing why your product has the exact same or superior active ingredients at 1/3 the cost.',
    hookFormula: '"Why does everyone pay $75 at Sephora when this exists?"',
  },
  pov_lifestyle: {
    name: 'Day In The Life Integration',
    summary: 'Subtle high-aesthetic lifestyle routine. Demonstrates the product naturally fitting into an enviable morning or evening routine without feeling like a hard sell.',
    hookFormula: '"Things in my morning routine that just make sense as a 20-something..."',
  },
};

export function generateAdConcept(
  niche: NicheId,
  angle: AngleId,
  customProductName?: string,
  customAudience?: string
): GeneratedConcept {
  const nicheInfo = NICHE_CONFIGS[niche] || NICHE_CONFIGS.skincare_beauty;
  const productName = customProductName?.trim() || nicheInfo.defaultProduct;
  const targetAudience = customAudience?.trim() || nicheInfo.defaultAudience;

  let hookVariations = [
    {
      label: 'Hook A (Curiosity & Skepticism)',
      hookText: `I was 100% convinced this ${productName} was just overhyped TikTok marketing until day 4...`,
      hookType: 'Skeptic Retargeting',
      predictedRetention: '73.8%',
    },
    {
      label: 'Hook B (Direct Pain Callout)',
      hookText: `If you have been dealing with that annoying crash by 2 PM, you need to hear this before buying another iced latte.`,
      hookType: 'Direct Benefit Hook',
      predictedRetention: '69.4%',
    },
    {
      label: 'Hook C (Price/Luxury Face-Off)',
      hookText: `Stop spending $80 on luxury brands that are 90% water and filler. Look at what happens when you switch.`,
      hookType: 'Value Anchor Hook',
      predictedRetention: '76.2%',
    },
  ];

  if (niche === 'skincare_beauty') {
    hookVariations = [
      {
        label: 'Hook A (Redness & Texture Trigger)',
        hookText: `POV: You threw away your 10-step routine for this one bottle and your skin finally stopped freaking out.`,
        hookType: 'Emotional Transformation',
        predictedRetention: '77.5%',
      },
      {
        label: 'Hook B (The Honest Skeptic)',
        hookText: `I bought the viral ${productName} with my own money to prove it didn't work. I was dead wrong.`,
        hookType: 'Skeptic Validation',
        predictedRetention: '74.1%',
      },
      {
        label: 'Hook C (Dermatologist Ingredient Breakdown)',
        hookText: `Stop putting silicone on your damaged skin barrier. Watch what this actual ceramide peptide blend does in 60 seconds.`,
        hookType: 'Authority Hook',
        predictedRetention: '71.8%',
      },
    ];
  } else if (niche === 'tech_gadgets') {
    hookVariations = [
      {
        label: 'Hook A (Travel Mess Pain Point)',
        hookText: `If your backpack or nightstand still looks like a tangled rat's nest of cables, this one gadget fixes your whole life.`,
        hookType: 'Visceral Visual Pain',
        predictedRetention: '78.9%',
      },
      {
        label: 'Hook B (POV Airport Hack)',
        hookText: `The flight attendant literally asked me where I bought this during my last 6-hour layover.`,
        hookType: 'Social Proof / Curiosity',
        predictedRetention: '73.2%',
      },
      {
        label: 'Hook C (Minimalist Desk Flex)',
        hookText: `I replaced 4 separate chargers on my desk with this tiny magnetic folding pad. Here is the honest 30-day review.`,
        hookType: 'Minimalist Utility',
        predictedRetention: '75.6%',
      },
    ];
  }

  const scenes: ScriptScene[] = [
    {
      timeframe: '00:00 - 00:03',
      stage: 'The 3-Sec Stop-the-Scroll Hook',
      visualPrompt: 'Close-up selfie camera angle of creator speaking directly into camera with genuine surprised expression, holding product up to lens, dynamic jump-cut.',
      spokenAudio: hookVariations[0].hookText,
      onScreenText: 'WAIT UNTIL DAY 4 😳',
    },
    {
      timeframe: '00:03 - 00:09',
      stage: 'Problem Agitation & Relatability',
      visualPrompt: 'POV handheld phone b-roll demonstrating the exact frustrating everyday problem, desaturated lighting, fast paced text overlay.',
      spokenAudio: `I tried literally every drugstore and premium option. Nothing seemed to fix the root issue and I was wasting so much money every month.`,
      onScreenText: 'So sick of wasted money 💸',
    },
    {
      timeframe: '00:09 - 00:19',
      stage: 'Product Unveiling & Texture Demo',
      visualPrompt: 'Crisp macro shot of creator unboxing the product, dispensing/activating it with satisfying ASMR texture, showing authentic reaction.',
      spokenAudio: `Then I found ${productName}. The formula is completely different because it doesn't use cheap fillers. Just one single application and you instantly feel the difference.`,
      onScreenText: 'Instant results · Clean formula ✨',
    },
    {
      timeframe: '00:19 - 00:25',
      stage: 'Social Proof & Risk Reversal',
      visualPrompt: 'Creator pointing to floating 5-star TikTok shop reviews, showing empty container or 30-day before/after split screen.',
      spokenAudio: `There is a reason over 40,000 people rated this 5 stars and they offer a 60-day empty-bottle guarantee, so you literally have zero risk.`,
      onScreenText: '40,000+ 5-Star Reviews ⭐⭐⭐⭐⭐',
    },
    {
      timeframe: '00:25 - 00:30',
      stage: 'Native TikTok Shop / DTC Call to Action',
      visualPrompt: 'Creator pointing downward toward the orange shopping bag / link sticker with a friendly smile, clean outro graphic.',
      spokenAudio: `Tap the orange shopping cart below right now before their flash bundle sells out again!`,
      onScreenText: 'TAP ORANGE CART BELOW 🛒',
    },
  ];

  return {
    id: `concept-${Date.now()}`,
    niche,
    angle,
    productName,
    targetAudience,
    hookVariations,
    scenes,
    estimatedHookRate: '72.4%',
    predictedCtr: '3.8% - 4.5%',
    soundVibe: nicheInfo.suggestedSound,
    voiceStyle: 'Native US English (Authentic conversational cadence)',
  };
}
