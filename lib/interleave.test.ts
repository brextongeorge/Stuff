import { expect, test } from 'vitest';
import { interleaveByRatio } from './interleave';

test('interleaves by ratio', () => {
  const clips = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];
  const stacks = ['s1', 's2', 's3', 's4'];
  const result = interleaveByRatio(clips, stacks, 0.6);
  const clipCount = result.filter((x) => x.startsWith('c')).length;
  const ratio = clipCount / result.length;
  expect(ratio).toBeGreaterThan(0.5);
  expect(ratio).toBeLessThan(0.7);
  expect(result[0]).toBe('c1');
});
