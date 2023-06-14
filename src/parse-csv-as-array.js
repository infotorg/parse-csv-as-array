/**
 * Parse CSV string as an array
 *
 * @param {string} value
 * @return {string[]}
 */
function parseCSVAsArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (!value || typeof value !== 'string' || value.length === 0) {
    return [];
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export { parseCSVAsArray };
