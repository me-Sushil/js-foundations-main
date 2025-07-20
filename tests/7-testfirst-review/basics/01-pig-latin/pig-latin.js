/* eslint-disable no-unused-vars */
const pigify = (string) => {
  const isVowel = (char) => "aeiou".includes(char);

  const convertWord = (word) => {
    word = word.toLowerCase();

    if (isVowel(word[0])) {
      return word + "ay";
    }

    // Handle special cases for 'qu' and 'sch'
    let consonantCluster = "";
    let i = 0;

    while (i < word.length) {
      if (word.slice(i, i + 2) === "qu") {
        consonantCluster += "qu";
        i += 2;
      } else if (word.slice(i, i + 3) === "sch") {
        consonantCluster += "sch";
        i += 3;
      } else if (!isVowel(word[i])) {
        consonantCluster += word[i];
        i++;
      } else {
        break;
      }
    }

    return word.slice(i) + consonantCluster + "ay";
  };

  return string
    .split(" ")
    .map(convertWord)
    .join(" ");
};
