import test from 'node:test';
import assert from 'node:assert/strict';
import { generateAdConcept, NICHE_CONFIGS, ANGLE_CONFIGS } from './creativeStudio.ts';

test('generates skincare concept with 3 hooks and 5 script scenes', () => {
  const concept = generateAdConcept('skincare_beauty', 'problem_agitate_solve', 'GlowBoost Serum');
  
  assert.equal(concept.niche, 'skincare_beauty');
  assert.equal(concept.productName, 'GlowBoost Serum');
  assert.equal(concept.hookVariations.length, 3);
  assert.equal(concept.scenes.length, 5);
  assert.ok(concept.scenes[0].stage.includes('Hook'));
  assert.ok(concept.scenes[4].stage.includes('Call to Action'));
});

test('falls back to default niche product if custom name is empty', () => {
  const concept = generateAdConcept('tech_gadgets', 'skeptic_unboxing');
  
  assert.equal(concept.productName, NICHE_CONFIGS.tech_gadgets.defaultProduct);
  assert.ok(concept.hookVariations[0].hookText.length > 10);
  assert.ok(concept.soundVibe.length > 5);
});
