export interface AdItem {
  id: string;
  brandName: string;
  productName: string;
  niche: 'skincare' | 'fitness' | 'gadgets' | 'fashion' | 'pet' | 'saas';
  nicheLabel: string;
  headline: string;
  roas: string;
  ctr: string;
  hookRate: string;
  adSpend: string;
  revenue: string;
  creatorProfile: {
    name: string;
    location: string;
    archetype: string;
  };
  primaryHook: string;
  hookVariations: {
    hookNumber: number;
    angleName: string;
    text: string;
    retentionRate: string;
    isWinner?: boolean;
  }[];
  scriptLines: {
    time: string;
    speaker: string;
    caption: string;
    action: string;
  }[];
  themeGradient: string;
  ambientColor: string;
  keyHighlight: string;
  techStack: string[];
  videoUrl?: string;
}

export const PORTFOLIO_ADS: AdItem[] = [
  {
    id: 'cosy-house-sheets',
    videoUrl: '/videos/ugc_main_hero_v1.mp4',
    brandName: 'Cosy House Collection',
    productName: '100% Bamboo Viscose Luxury Bed Sheets',
    niche: 'fashion',
    nicheLabel: 'Home & DTC Goods',
    headline: '4.2x ROAS on TikTok Shop & Meta with Viral 80% Off Black Friday Unboxing Hook',
    roas: '4.2x',
    ctr: '4.6%',
    hookRate: '78.5%',
    adSpend: '$52,000',
    revenue: '$218,400',
    creatorProfile: {
      name: 'Lauren K.',
      location: 'Nashville, TN',
      archetype: 'US Mom & Lifestyle Creator',
    },
    primaryHook: 'Wait, did you know Cosy House 100% Bamboo sheets are up to 80% off right now?!',
    hookVariations: [
      {
        hookNumber: 1,
        angleName: 'Black Friday 80% Off Hook',
        text: 'Wait, did you know Cosy House 100% Bamboo sheets are up to 80% off right now?!',
        retentionRate: '78.5%',
        isWinner: true,
      },
      {
        hookNumber: 2,
        angleName: 'Hot Sleeper Cold Sheet Hook',
        text: 'If you wake up sweating at 3 AM, these 100% bamboo viscose sheets stay crisp and cold all night.',
        retentionRate: '73.2%',
      },
      {
        hookNumber: 3,
        angleName: 'Silky Texture Unboxing',
        text: 'Throw away scratchy cotton sheets. Look at how buttery soft this queen set actually feels.',
        retentionRate: '71.8%',
      },
    ],
    scriptLines: [
      {
        time: '00:00 - 00:04',
        speaker: 'Lauren',
        caption: 'Wait, did you know Cosy House 100% Bamboo sheets are up to 80% off right now?!',
        action: 'Holds cylindrical white Cosy House roll packaging with 80% off sticker in bright cozy bedroom.',
      },
      {
        time: '00:04 - 00:10',
        speaker: 'Lauren',
        caption: 'These are 100% bamboo viscose—insanely breathable, hypoallergenic, and silky soft.',
        action: 'Unrolls luxurious Queen sheet fabric displaying cooling sheen and high-grade stitching.',
      },
      {
        time: '00:10 - 00:18',
        speaker: 'Lauren',
        caption: 'They stay cool on both sides of the bed all night long with over 25,000 verified 5-star reviews.',
        action: 'Shows fitted sheet on mattress demonstrating deep elastic grip and cloud-like comfort.',
      },
      {
        time: '00:18 - 00:24',
        speaker: 'Lauren',
        caption: 'Tap the link below to get your set before this Black Friday deal sells out!',
        action: 'Points toward TikTok Shop checkout cart with enthusiastic smile.',
      },
    ],
    themeGradient: 'from-blue-950/60 via-slate-900 to-slate-950',
    ambientColor: 'rgba(59, 130, 246, 0.15)',
    keyHighlight: 'Sub-$14 CPA on US TikTok Shop with 78.5% 3-sec thumbstop rate.',
    techStack: ['Midjourney v6.1 Bedroom Lifestyle', 'ElevenLabs US Southern Mom Accent', 'Runway Gen-3 Alpha Lipsync', 'CapCut Custom Kinetic Typography'],
  },
  {
    id: 'pulse-fuel',
    videoUrl: '/videos/ugc_second_ad.mp4',
    brandName: 'Nutrex Research',
    productName: 'Creatine For Women (Pink Lemonade)',
    niche: 'fitness',
    nicheLabel: 'Health & Supplements',
    headline: '4.5x ROAS Scaling TikTok Shop & Meta Reels with Daily Glow-Up & Workout Recovery Hook',
    roas: '4.5x',
    ctr: '4.8%',
    hookRate: '81.2%',
    adSpend: '$64,000',
    revenue: '$288,000',
    creatorProfile: {
      name: 'Maya S.',
      location: 'Miami, FL',
      archetype: '26yo Fitness & Beauty Creator',
    },
    primaryHook: 'A daily glow-up and clean workout recovery in one glass. Easy. Refreshing.',
    hookVariations: [
      {
        hookNumber: 1,
        angleName: 'Daily Glow-Up Hook',
        text: 'A daily glow-up and clean workout recovery in one glass. Easy. Refreshing.',
        retentionRate: '81.2%',
        isWinner: true,
      },
      {
        hookNumber: 2,
        angleName: 'Bloat-Free Myth Buster',
        text: 'Why does everyone think creatine makes women bulky or bloated? Let me show you what it actually does.',
        retentionRate: '75.4%',
      },
      {
        hookNumber: 3,
        angleName: 'Hair, Skin & Hormonal Support',
        text: 'Not your boyfriend’s chalky powder: 5g pure micronized creatine plus cognitive and collagen support.',
        retentionRate: '79.1%',
      },
    ],
    scriptLines: [
      {
        time: '00:00 - 00:04',
        speaker: 'Maya',
        caption: 'A daily glow-up and clean workout recovery in one glass...',
        action: 'Handheld direct eye-contact selfie holding the white Nutrex tub, confident candid smile.',
      },
      {
        time: '00:04 - 00:09',
        speaker: 'Maya',
        caption: 'Opening Nutrex Creatine for Women — Pink Lemonade flavor.',
        action: 'Close-up shot twisting open the white lid revealing the fine powder and clean scoop.',
      },
      {
        time: '00:09 - 00:15',
        speaker: 'Maya',
        caption: 'Easy. Refreshing. Dissolves crystal clear with zero gritty residue.',
        action: 'Holding glass of pink refreshing lemonade drink with satisfied expression.',
      },
    ],
    themeGradient: 'from-pink-950/60 via-slate-900 to-slate-950',
    ambientColor: 'rgba(236, 72, 153, 0.15)',
    keyHighlight: '81.2% 3-sec hook rate on TikTok Shop US with $14 CPA on beauty-fitness crossovers.',
    techStack: ['Midjourney v6.1 Fitness Aesthetic', 'ElevenLabs US Female Accent', 'Runway Gen-3 Alpha Lipsync', 'Dynamic Kinetic Subtitles'],
  },
  {
    id: 'heritage-leather-bag',
    videoUrl: '/videos/ugc_third_ad.mp4',
    brandName: 'Heritage & Royale',
    productName: 'Handcrafted Pebble Leather Satchel',
    niche: 'fashion',
    nicheLabel: 'Luxury Goods & DTC',
    headline: '4.6x ROAS Scaling TikTok Shop & Meta Reels with Luxury Pebble-Leather Satchel Unboxing',
    roas: '4.6x',
    ctr: '4.7%',
    hookRate: '82.4%',
    adSpend: '$48,000',
    revenue: '$220,800',
    creatorProfile: {
      name: 'Aria M.',
      location: 'New York, NY',
      archetype: 'Luxury Fashion & Lifestyle Creator',
    },
    primaryHook: 'Wait until you see how much fits inside this Italian pebble-leather satchel.',
    hookVariations: [
      {
        hookNumber: 1,
        angleName: 'Pebble Leather Capacity Hook',
        text: 'Wait until you see how much fits inside this Italian pebble-leather satchel.',
        retentionRate: '82.4%',
        isWinner: true,
      },
      {
        hookNumber: 2,
        angleName: 'Designer Price vs Direct Value',
        text: 'Stop buying $400 designer bags that have zero internal pockets. Look at this build quality.',
        retentionRate: '76.8%',
      },
      {
        hookNumber: 3,
        angleName: 'Gold Hardware Unboxing',
        text: 'Unboxing the viral burgundy satchel with detachable gold crossbody clip.',
        retentionRate: '79.2%',
      },
    ],
    scriptLines: [
      {
        time: '00:00 - 00:03',
        speaker: 'Aria',
        caption: 'Wait until you see how much fits inside this satchel...',
        action: 'Showcases rich burgundy textured leather handbag with gold monogram crest.',
      },
      {
        time: '00:03 - 00:06',
        speaker: 'Aria',
        caption: 'Heavy-duty gold hardware with detachable crossbody clip...',
        action: 'Clips on the gold strap and demonstrates smooth polished gold zipper.',
      },
      {
        time: '00:06 - 00:10',
        speaker: 'Aria',
        caption: 'Triple interior compartments plus dedicated organizers inside.',
        action: 'Reveals spacious internal lining and effortless storage.',
      },
    ],
    themeGradient: 'from-rose-950/60 via-slate-900 to-slate-950',
    ambientColor: 'rgba(159, 18, 57, 0.15)',
    keyHighlight: '82.4% hook retention rate with sub-$18 CPA on luxury accessories.',
    techStack: ['Midjourney v6.1 Luxury Macro', 'ElevenLabs Warm US Female Accent', 'Runway Gen-3 Dynamic Movement', 'Kinetic Gold Foil Typography'],
  },
  {
    id: 'soleil-woven-tote',
    videoUrl: '/videos/ugc_fourth_ad.mp4',
    brandName: 'Soleil Studio',
    productName: 'Handcrafted Rainbow Woven Summer Tote',
    niche: 'fashion',
    nicheLabel: 'Summer & DTC Accessories',
    headline: '4.4x ROAS on TikTok Shop & Instagram with Viral Handwoven Rainbow Summer Bag Hook',
    roas: '4.4x',
    ctr: '4.9%',
    hookRate: '80.6%',
    adSpend: '$38,000',
    revenue: '$167,200',
    creatorProfile: {
      name: 'Camilla R.',
      location: 'San Diego, CA',
      archetype: 'Boho Fashion & Vacation Stylist',
    },
    primaryHook: 'I get stopped everywhere I go carrying this handwoven rainbow crochet tote.',
    hookVariations: [
      {
        hookNumber: 1,
        angleName: 'Viral Compliment Magnet Hook',
        text: 'I get stopped everywhere I go carrying this handwoven rainbow crochet tote.',
        retentionRate: '80.6%',
        isWinner: true,
      },
      {
        hookNumber: 2,
        angleName: 'Summer Vacation Essential Test',
        text: 'Found the ultimate summer vacation bag and it holds literally everything without sagging.',
        retentionRate: '77.3%',
      },
      {
        hookNumber: 3,
        angleName: 'Craftsmanship & Weave Macro',
        text: 'Look at the detailed texture on this rainbow knit bag—it feels so high quality.',
        retentionRate: '75.9%',
      },
    ],
    scriptLines: [
      {
        time: '00:00 - 00:04',
        speaker: 'Camilla',
        caption: 'I get stopped everywhere I go carrying this rainbow knit bag!',
        action: 'Holding vibrant pastel rainbow woven tote in bright sunlit room with headband.',
      },
      {
        time: '00:04 - 00:07',
        speaker: 'Camilla',
        caption: 'Look at how tight and durable this double-stitched crochet weave is.',
        action: 'Close-up tactile shot showing the handwoven rainbow fiber and craft.',
      },
      {
        time: '00:07 - 00:10',
        speaker: 'Camilla',
        caption: 'Reinforced wrapped handles that never dig into your shoulders even when packed.',
        action: 'Shows two-tone spiral wrapped top handles and roomy beach-ready silhouette.',
      },
    ],
    themeGradient: 'from-amber-950/60 via-slate-900 to-slate-950',
    ambientColor: 'rgba(245, 158, 11, 0.15)',
    keyHighlight: '80.6% 3-sec thumbstop on TikTok Shop with $48 average order value.',
    techStack: ['Midjourney v6.1 Summer Fashion', 'ElevenLabs US Enthusiastic Female Accent', 'Runway Gen-3 Alpha Lipsync', 'Dynamic Pastel Kinetic Titles'],
  },
  {
    id: 'lumina-barrier-serum',
    videoUrl: '/videos/ugc_fifth_ad.mp4',
    brandName: 'Lumina Skin Lab',
    productName: 'Hydrating Barrier Repair Serum',
    niche: 'skincare',
    nicheLabel: 'Skincare & Grooming',
    headline: '4.7x ROAS on TikTok Shop & Meta Reels with Real Men\'s Dry Skin & Barrier Fix Hook',
    roas: '4.7x',
    ctr: '5.1%',
    hookRate: '83.4%',
    adSpend: '$42,000',
    revenue: '$197,400',
    creatorProfile: {
      name: 'Austin R.',
      location: 'Austin, TX',
      archetype: 'Tech Founder & Men\'s Grooming Creator',
    },
    primaryHook: 'If your face still feels dry and tight 10 minutes after washing it, stop using heavy oily lotions.',
    hookVariations: [
      {
        hookNumber: 1,
        angleName: 'Tight Dry Skin Problem Hook',
        text: 'If your face still feels dry and tight 10 minutes after washing it, stop using heavy oily lotions.',
        retentionRate: '83.4%',
        isWinner: true,
      },
      {
        hookNumber: 2,
        angleName: 'Post-Shave Irritation Angle',
        text: 'Razor burn and redness gone in literally 3 days with this lightweight ceramide barrier serum.',
        retentionRate: '79.2%',
      },
      {
        hookNumber: 3,
        angleName: 'Non-Greasy Matte Finish Test',
        text: 'Zero greasy shine, absorbs in 15 seconds, and keeps your skin hydrated from 8 AM to 8 PM.',
        retentionRate: '76.8%',
      },
    ],
    scriptLines: [
      {
        time: '00:00 - 00:04',
        speaker: 'Austin',
        caption: 'If your face still feels dry and tight after washing, watch this...',
        action: 'Direct eye contact in bathroom mirror showing lightweight barrier serum bottle.',
      },
      {
        time: '00:04 - 00:09',
        speaker: 'Austin',
        caption: 'Most men\'s lotions just sit on top of your skin and clog pores.',
        action: 'Dispenses two clear drops onto fingertips demonstrating instant water-light absorption.',
      },
      {
        time: '00:09 - 00:15',
        speaker: 'Austin',
        caption: 'Triple ceramides plus hyaluronic acid lock in moisture with zero grease.',
        action: 'Applies smooth matte finish with energized fresh complexion.',
      },
    ],
    themeGradient: 'from-sky-950/60 via-slate-900 to-slate-950',
    ambientColor: 'rgba(14, 165, 233, 0.15)',
    keyHighlight: '83.4% 3-sec hook rate on US TikTok Shop with $12 CPA for men\'s DTC grooming.',
    techStack: ['Midjourney v6.1 Grooming Aesthetic', 'ElevenLabs US Male Professional Accent', 'Runway Gen-3 Alpha Lipsync', 'Dynamic High-Retention Motion Graphics'],
  },
  {
    id: 'care-novo-lavande',
    videoUrl: '/videos/ugc_sixth_ad.mp4',
    brandName: 'Care Novo',
    productName: 'Lavande 5L Concentrated Eco Detergent',
    niche: 'fashion',
    nicheLabel: 'Home & Eco Essentials',
    headline: '4.3x ROAS Scaling TikTok Shop with 5L Lavender Family Pack Laundry Hook',
    roas: '4.3x',
    ctr: '4.5%',
    hookRate: '79.8%',
    adSpend: '$36,000',
    revenue: '$154,800',
    creatorProfile: {
      name: 'Sofia V.',
      location: 'Chicago, IL',
      archetype: 'Eco Home & Family Lifestyle Creator',
    },
    primaryHook: 'Stop paying $25 for tiny detergent bottles that only last two weeks with a family.',
    hookVariations: [
      {
        hookNumber: 1,
        angleName: 'Big 5L Value & Scent Hook',
        text: 'Stop paying $25 for tiny detergent bottles that only last two weeks with a family.',
        retentionRate: '79.8%',
        isWinner: true,
      },
      {
        hookNumber: 2,
        angleName: 'French Lavender Long-Lasting Freshness',
        text: 'Your clothes will literally smell like fresh French lavender fields for up to 3 weeks straight.',
        retentionRate: '75.6%',
      },
      {
        hookNumber: 3,
        angleName: 'Hypoallergenic Baby & Pet Safe',
        text: 'Zero harsh phosphates, gentle on sensitive skin, yet removes tough grass and sauce stains effortlessly.',
        retentionRate: '73.9%',
      },
    ],
    scriptLines: [
      {
        time: '00:00 - 00:04',
        speaker: 'Sofia',
        caption: 'Stop buying tiny detergent jugs that run out every 10 days...',
        action: 'Holding large 5L Care Novo Lavande jug in clean modern laundry room.',
      },
      {
        time: '00:04 - 00:09',
        speaker: 'Sofia',
        caption: 'This 5-liter concentrate gives you over 120 washes with pure French lavender extracts.',
        action: 'Pours clear fragrant concentrate into measuring cap demonstrating thickness.',
      },
      {
        time: '00:09 - 00:15',
        speaker: 'Sofia',
        caption: 'Clothes come out ultra-soft, naturally scented, and without any chemical residue.',
        action: 'Folds freshly dried fluffy linen with satisfied warm smile.',
      },
    ],
    themeGradient: 'from-purple-950/60 via-slate-900 to-slate-950',
    ambientColor: 'rgba(168, 85, 247, 0.15)',
    keyHighlight: 'Sub-$15 CPA on US TikTok Shop with 4.3x ROAS on bulk household essentials.',
    techStack: ['Midjourney v6.1 Eco Home Lifestyle', 'ElevenLabs US Warm Female Accent', 'Runway Gen-3 Alpha Lipsync', 'TikTok Organic CapCut Style'],
  },
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'Liam Vance',
    role: 'Founder & CEO',
    company: 'Lumina Skin NYC',
    location: 'Miami, FL',
    spend: '$65k/mo TikTok Shop Ad Spend',
    quote:
      'We used to pay US TikTok creators $500 per video, wait 3 weeks, and half of them sent blurry vertical clips with terrible lighting. Kabir delivered 12 AI UGC ad variations in 48 hours that outperformed our agency\'s physical shoots with a 4.0x ROAS. He is our secret weapon.',
    metric: '4.0x ROAS & $192k Revenue',
  },
  {
    id: 't-2',
    author: 'Sarah Jenkins',
    role: 'Head of Growth',
    company: 'Pulse Hydration',
    location: 'Austin, TX',
    spend: '$100k/mo Meta Ads Spend',
    quote:
      'The biggest bottleneck in scaling Meta Reels is creative fatigue. Kabir gives us 3 distinct viral hook variations for every single concept. We test 15-20 hooks per week and our customer acquisition cost dropped from $32 down to $17.50.',
    metric: '-45% Customer Acquisition Cost',
  },
  {
    id: 't-3',
    author: 'Marcus Chen',
    role: 'DTC Brand Director',
    company: 'MagFold Tech',
    location: 'Los Angeles, CA',
    spend: '$45k/mo DTC & Amazon Spend',
    quote:
      'The realism of these AI UGC ads is uncanny. The accents are 100% natural American cadences, the lip sync is flawless, and the script pacing hits every psychological trigger. We closed $146k on TikTok Shop from just 4 ad variations.',
    metric: '1.2M Organic + Paid Views',
  },
];

export const COMPARISON_ROWS = [
  {
    aspect: 'Average Cost Per Creative',
    traditional: '$350 – $750 per video + agency markup',
    aiUgc: '$85 – $120 per finished video',
    advantage: '75%+ cost reduction on ad production budget',
  },
  {
    aspect: 'Delivery Turnaround Speed',
    traditional: '14 to 28 days (shipping product + revisions)',
    aiUgc: '48 to 72 hours guaranteed turnaround',
    advantage: 'Launch campaigns before trends die out',
  },
  {
    aspect: 'Hook Testing & Iterations',
    traditional: 'Only 1 hook per video (charging extra for cuts)',
    aiUgc: '3 to 5 viral hook variations per concept included',
    advantage: 'Test multiple angles without paying 3x more',
  },
  {
    aspect: 'Creator Reliability & Ghosting',
    traditional: 'High flake rate, delays, refusing brand revisions',
    aiUgc: '100% reliable, zero ghosting, endless demographics',
    advantage: 'Predictable creative pipeline every week',
  },
  {
    aspect: 'Commercial Usage Rights',
    traditional: '30-90 day licensing limits with expensive renewals',
    aiUgc: '100% Full commercial rights forever, zero royalties',
    advantage: 'Run winning ads indefinitely without extra fees',
  },
  {
    aspect: 'Script & Psychological Pacing',
    traditional: 'Often generic creator ramblings or bad audio',
    aiUgc: 'Engineered 3-sec thumbstop hooks, ASMR & dynamic cuts',
    advantage: 'Built specifically for performance marketers',
  },
];
