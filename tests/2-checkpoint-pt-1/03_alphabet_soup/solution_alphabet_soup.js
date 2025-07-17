function soup(phrase, bank) {
  const bankMap = {};

  // Count each character in the bank
  for (let char of bank) {
    bankMap[char] = (bankMap[char] || 0) + 1;
  }

  // Check if each character in the phrase is available in the bank
  for (let char of phrase) {
    if (!bankMap[char]) {
      return false; // character missing or used up
    }
    bankMap[char]--; // use one instance of the character
  }

  return true;
}
