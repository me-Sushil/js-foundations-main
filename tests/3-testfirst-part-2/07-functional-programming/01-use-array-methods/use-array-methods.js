/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => {
    return {
      index: index,
      value: value
    };
  });
}


function capitalize(word) {
  return word.toUpperCase();
}

function swapCase(string) {
    //string.split(" ").map().join(" ")
  return string
    .split(" ")
    .map((word, index) => {
      if (index % 2 === 0) {
        return capitalize(word); // Use separate capitalize function
      } else {
        return word;
      }
    })
    .join(" ");
}

const extensionSearch=(ext, files)=>{
    return files.filter(file=>file.endsWith(`.${ext}`));
}