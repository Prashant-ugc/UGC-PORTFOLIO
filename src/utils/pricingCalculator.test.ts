import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCustomPricing } from './pricingCalculator.ts';

test('calculates base 1 ad with 1 hook correctly', () => {
  const result = calculateCustomPricing({
    adCount: 1,
    hooksPerAd: 1,
  });

  assert.equal(result.totalCreatives, 1);
  assert.equal(result.baseCost, 99);
  assert.equal(result.hookVariationsCost, 0);
  assert.equal(result.totalCost, 99);
  assert.equal(result.traditionalCost, 450);
  assert.ok(result.totalSavings > 0);
  assert.equal(result.savingsPercentage, 78);
});

test('calculates tiered discounts for 8 ads with 3 hooks', () => {
  const result = calculateCustomPricing({
    adCount: 8,
    hooksPerAd: 3,
  });

  // 8 ads * 3 hooks = 24 total creatives
  assert.equal(result.totalCreatives, 24);
  // Unit price for 8 ads is 85
  assert.equal(result.baseCost, 8 * 85);
  // 8 ads * 2 extra hooks * 35 = 560
  assert.equal(result.hookVariationsCost, 560);
  assert.equal(result.totalCost, 680 + 560);
  // Traditional cost = 24 * 450 = 10,800
  assert.equal(result.traditionalCost, 10800);
  assert.ok(result.savingsPercentage >= 85);
});

test('handles rush delivery fee and spark ad setup', () => {
  const result = calculateCustomPricing({
    adCount: 3,
    hooksPerAd: 3,
    isRushDelivery: true,
    includeSparkAdSetup: true,
  });

  assert.equal(result.rushCost, 149);
  assert.equal(result.addonsCost, 79);
  assert.ok(result.totalCost > 3 * 99);
});
