/* eslint-disable no-unused-vars */

/* REPEAT SOLUTION */

const repeat = (str, multi) => {
  let finalString = '';
  for (multi; multi > 0; multi--) {
    finalString += str;
  }
  return finalString;
};

/* SUM SOLUTION */

const sum = inputArr => {
  let total = 0;
  for (let i = 0; i < inputArr.length; i++) {
    total += inputArr[i];
  }
  return total;
};

/* GRID GENERATOR SOLUTION */

const gridGenerator = size => {
  let board = '';
  // i is the lines
  for (let i = 0; i < size; i++) {
    // j is the characters
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        board += '#';
      } else {
        board += ' ';
      }
    }
    board += '\n';
  }
  return board;
};

/* JOIN SOLUTION */

const join = (inputArr, delimiter) => {
  let finalString = '';
  for (let i = 0; i < inputArr.length; i++) {
    finalString += inputArr[i];
    if (typeof delimiter !== 'undefined' && i < inputArr.length - 1) {
      finalString += delimiter;
    }
  }
  return finalString;
};

/* PARAMIFY SOLUTIONS */

const paramify = obj => {
  const params = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      params.push(`${prop}=${obj[prop]}`);
    }
  }
  // used the join function created earlier
  return join(params.sort(), '&');
};

/* Using Function.prototype.call */
// const paramify = (obj) => {
//   var params = [];
//   for (var prop in obj) {
//     if (Object.hasOwnProperty.call(obj, prop)) {
//       params.push(`${prop}=${obj[prop]}`);
//     }
//   }
//   // used the join function created earlier
//   return join(params.sort(), '&');
// }

// In an upcoming section, we will dive deeper into [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), for now do your best
// in reading the documentation and reaching out with questions if you don't know how Array.prototype.map is operating.

const paramifyObjectKeys = obj => {
  return Object.keys(obj)
    .map(key => {
      return `${key}=${obj[key]}`;
    })
    .sort()
    .join('&');
};

// SORT 
function sort(items) {
  let length = items.length;
  for (let i = length - 1; i >= 0; i--) {
    //Number of passes
    for (let j = length - i; j > 0; j--) {
      //Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        //Swap the numbers
        let tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
  return items;
}

/* RENAME FILES */

const renameFiles = arrayOfFilenames => {
  const nameTracker = {};
  const namer = (fileName, num) => `${fileName}(${num})`;

  return arrayOfFilenames.map(name => {
    // extension name
    let extension = nameTracker[name] || 0;
    // how many times filename is used
    nameTracker[name] = extension + 1;
    // 0 return true, if not proceed...
    if (!extension) {
      return name;
    }
    // while the key exists
    let keyName = namer(name, extension);
    while (nameTracker[keyName] || arrayOfFilenames.indexOf(keyName) > -1) {
      keyName = namer(name, extension++);
    }
    nameTracker[keyName] = 1;
    return keyName;
  });
};

// Recursive Solution

// const renameFiles = (arrayOfNames) => {
//  const filenames = [];

//   const renamer = (name) => {
//     // if name not in list, do nothing
//     // BASE CASE
//     if (filenames.indexOf(name) === -1) {
//       filenames.push(name);
//     }
//     else {
//       // if the name has numbers, add 1 to the number
//       let parentheses = name.indexOf("(");
//       if (parentheses > -1) {
//         // take current number and add 1
//         let number = +name.match(/\d+/)[0] + 1;
//         //
//         renamer(name.substring(0,parentheses+1)+number+")")
//       }
//       // otherwise, add "(1)" to the name
//       else renamer(name+"(1)");
//     }
//   }

//   arrayOfNames.forEach(renamer);

//   return filenames;
// }
