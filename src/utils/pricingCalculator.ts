export interface CalculatorOptions {
  adCount: number;
  hooksPerAd: number;
  isRushDelivery?: boolean;
  platforms?: ('tiktok' | 'meta' | 'youtube' | 'amazon')[];
  includeScriptwriting?: boolean;
  includeSparkAdSetup?: boolean;
}

export interface PricingResult {
  totalCreatives: number;
  baseCost: number;
  hookVariationsCost: number;
  rushCost: number;
  addonsCost: number;
  totalCost: number;
  traditionalCost: number;
  totalSavings: number;
  savingsPercentage: number;
  estimatedImpressions: string;
  expectedRoasRange: string;
}

export const BASE_AD_PRICE = 99; // $99 per base creative
export const HOOK_ADDON_PRICE = 35; // $35 per extra hook variation
export const RUSH_DELIVERY_FEE = 149; // $149 for 24-hr rush
export const SPARK_SETUP_FEE = 79; // $79 for TikTok Spark Ad & Meta whitelist assistance
export const TRADITIONAL_CREATOR_UNIT_COST = 450; // $450 average US creator cost + usage fee

export function calculateCustomPricing(options: CalculatorOptions): PricingResult {
  const adCount = Math.max(1, Math.min(50, Math.floor(options.adCount || 1)));
  const hooksPerAd = Math.max(1, Math.min(5, Math.floor(options.hooksPerAd || 1)));
  
  // Total creatives tested = base ads * hooks
  const totalCreatives = adCount * hooksPerAd;
  
  // Tiered volume discount on base ads
  let unitPrice = BASE_AD_PRICE;
  if (adCount >= 15) {
    unitPrice = 75; // 25% discount for bulk
  } else if (adCount >= 8) {
    unitPrice = 85; // 15% discount
  } else if (adCount >= 4) {
    unitPrice = 90; // 10% discount
  }

  const baseCost = adCount * unitPrice;
  
  // Additional hooks (beyond the 1st primary hook included in base)
  const additionalHooksPerAd = Math.max(0, hooksPerAd - 1);
  const hookVariationsCost = adCount * additionalHooksPerAd * HOOK_ADDON_PRICE;

  // Addons
  const rushCost = options.isRushDelivery ? RUSH_DELIVERY_FEE : 0;
  const addonsCost = (options.includeSparkAdSetup ? SPARK_SETUP_FEE : 0);

  const totalCost = baseCost + hookVariationsCost + rushCost + addonsCost;

  // Traditional cost: Each creative variation from physical US creators costs ~$450
  const traditionalCost = totalCreatives * TRADITIONAL_CREATOR_UNIT_COST;
  const totalSavings = Math.max(0, traditionalCost - totalCost);
  const savingsPercentage = Math.round((totalSavings / traditionalCost) * 100);

  // Estimations
  const impressionsMin = adCount * 25;
  const impressionsMax = adCount * 65;
  const estimatedImpressions = `${impressionsMin}K - ${impressionsMax}K+`;
  
  const expectedRoasRange = hooksPerAd >= 3 ? '3.2x - 5.4x' : '2.4x - 3.8x';

  return {
    totalCreatives,
    baseCost,
    hookVariationsCost,
    rushCost,
    addonsCost,
    totalCost,
    traditionalCost,
    totalSavings,
    savingsPercentage,
    estimatedImpressions,
    expectedRoasRange,
  };
}

export interface PresetPackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  period?: string;
  adCount: number;
  hooksPerAd: number;
  turnaround: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export const PRESET_PACKAGES: PresetPackage[] = [
  {
    id: 'starter',
    name: 'Starter Creative Test',
    price: 399,
    adCount: 3,
    hooksPerAd: 3,
    turnaround: '48 Hours',
    description: 'Perfect for testing high-hook AI UGC angles before scaling TikTok Shop or Meta campaigns.',
    features: [
      '3 Core AI UGC Video Concepts',
      '3 Distinct Viral Hooks per Concept (9 Creatives Total)',
      'Native US Accents (ElevenLabs Hyper-realistic audio)',
      'Dynamic TikTok Kinetic Subtitles & Sound Design',
      'Full Commercial Usage & Raw MP4 9:16 Files',
      '48-Hour Rapid Delivery',
    ],
    recommendedFor: 'Testing 1st product or validating new hook angles',
  },
  {
    id: 'scaling',
    name: 'TikTok Shop & Meta Scaling Pack',
    badge: 'Most Popular for US Brands',
    price: 899,
    adCount: 8,
    hooksPerAd: 3,
    turnaround: '48-72 Hours',
    description: 'Our flagship creative pack engineered to beat ad fatigue and unlock sub-$18 customer acquisition cost.',
    features: [
      '8 Core AI UGC Video Concepts',
      '24 Total Hook & Callout Variations',
      'Diverse Creator Demographics (Male/Female, Gen-Z/Millennial)',
      'Hook Drop-Off Rate Optimization Report',
      'Spark Ads Code Setup & Meta Whitelisting Support',
      '1 Guaranteed Revision Round',
      'Direct Slack Channel Communication',
    ],
    recommendedFor: 'Scaling DTC brands spending $5k-$30k/mo on paid ads',
  },
  {
    id: 'retainer',
    name: 'Monthly Creative Partner Retainer',
    price: 1899,
    period: '/ month',
    adCount: 20,
    hooksPerAd: 3,
    turnaround: 'Continuous 24-48h Sprints',
    description: 'An embedded creative powerhouse in your brand delivering fresh, winning creatives every single week.',
    features: [
      '20 High-Retention AI UGC Concepts per month (60 Creatives)',
      'Weekly Creative Performance Strategy Call',
      'Competitor Ad Angle Reverse Engineering',
      'Priority 24-Hour Express Production Sprints',
      'Unlimited Minor Iterations & Subtitle Tweaks',
      'Dedicated US Timezone Account Manager (EST/PST)',
    ],
    recommendedFor: 'High-growth brands spending $30k+/mo needing weekly fresh creative',
  },
];
