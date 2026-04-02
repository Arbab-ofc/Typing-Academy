import Sanscript from 'sanscript';

function normalizeHindiPunctuation(value) {
  // Use danda for sentence endings in Hindi lessons.
  return value.replace(/\./g, '।');
}

export function transliterateToHindi(input) {
  if (!input) return '';

  const transliterated = Sanscript.t(input, 'itrans', 'devanagari');
  return normalizeHindiPunctuation(transliterated);
}
