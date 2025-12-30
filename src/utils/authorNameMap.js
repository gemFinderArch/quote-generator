// Special author name mappings for Wikipedia API
// Some names need normalization or have different Wikipedia article titles

export const authorNameMap = {
  'Martin Luther King Jr.': 'Martin_Luther_King_Jr.',
  'J.K. Rowling': 'J._K._Rowling',
  'C.S. Lewis': 'C._S._Lewis',
  'Paulo Coelho': 'Paulo_Coelho',
  'Dalai Lama': '14th_Dalai_Lama',
  'Mother Teresa': 'Mother_Teresa',
  'Bob Marley': 'Bob_Marley',
  'Steve Jobs': 'Steve_Jobs',
  'Coco Chanel': 'Coco_Chanel',
  'Bruce Lee': 'Bruce_Lee',
};

// Authors that are not real people (no Wikipedia image)
export const skipAuthors = new Set([
  'Chinese Proverb',
  'African Proverb',
  'Japanese Proverb',
  'Indian Proverb',
  'Irish Proverb',
  'Unknown',
  'Anonymous',
  'Ancient Proverb',
]);

export function normalizeAuthorName(name) {
  // Check if we have a specific mapping
  if (authorNameMap[name]) {
    return authorNameMap[name];
  }

  // Default: replace spaces with underscores
  return name.replace(/\s+/g, '_');
}

export function shouldSkipAuthor(name) {
  return skipAuthors.has(name) ||
         name.toLowerCase().includes('proverb') ||
         name.toLowerCase() === 'unknown' ||
         name.toLowerCase() === 'anonymous';
}
