/* eslint-disable no-unused-vars */

const pigify = phrase => {
  const phraseArr = phrase.split(' ');
  const vowel = 'aeiou';

  return phraseArr
    .reduce((accum, word) => {
      let indexOfVowel = 0;
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (vowel.includes(letter)) {
          // if the vowel isn't u OR if the vowel is u and the preceeding character isn't 'q'
          if (letter !== 'u' || (letter === 'u' && word[i - 1] !== 'q')) {
            indexOfVowel = i;
            break;
          }
        }
      }
      const startNoConsonants = word.slice(indexOfVowel);
      const consonantsForEnd = word.slice(0, indexOfVowel);

      accum = [...accum, `${startNoConsonants}${consonantsForEnd}ay`];
      return accum;
    }, [])
    .join(' ');
};