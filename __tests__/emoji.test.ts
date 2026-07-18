import { describe, it, expect } from 'vitest';
import { getEmojiUrl, parseEmojis, POPULAR_EMOJIS } from '../src/utils/emoji';

describe('Emoji Utilities', () => {
  it('should generate correct emoji CDN URLs', () => {
    const url = getEmojiUrl('🚀', 'microsoft-3D-fluent');
    expect(url).toBe('https://emoji-cdn.mqrio.dev/%F0%9F%9A%80?style=microsoft-3D-fluent');
  });

  it('should return empty string if emoji is not provided', () => {
    const url = getEmojiUrl('', 'apple');
    expect(url).toBe('');
  });

  it('should extract emojis from text correctly', () => {
    const text = 'Hello world 🚀 and 🍎';
    const emojis = parseEmojis(text);
    expect(emojis).toContain('🚀');
    expect(emojis).toContain('🍎');
  });

  it('POPULAR_EMOJIS should contain categories with array of emojis', () => {
    expect(POPULAR_EMOJIS).toHaveProperty('Faces & Expressions');
    expect(POPULAR_EMOJIS['Faces & Expressions']).toBeInstanceOf(Array);
    expect(POPULAR_EMOJIS['Faces & Expressions'].length).toBeGreaterThan(0);
  });
});
