function chunkString(str, length) {
  // Return empty array if string is null or not provided
  if (!str) return [];

  const result = [];
  for (let i = 0; i < str.length; i += length) {
    result.push(str.slice(i, i + length));
  }
  return result;
}
