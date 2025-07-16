/* eslint-disable no-unused-vars */

const renameFiles = arrayOfFilenames => {
  const nameTracker = {};
  return arrayOfFilenames.map(name => {
    if (nameTracker[name] === undefined) {
      nameTracker[name] = 0;
      return name;
    }
    let extension = nameTracker[name] + 1;
    nameTracker[name] = extension;
    let extensionName = `${name}(${extension})`;

    while (
      nameTracker[extensionName] >= 0 ||
      arrayOfFilenames.includes(extensionName)
    ) {
      extension += 1;
      extensionName = `${name}(${extension})`;
    }

    nameTracker[extensionName] = 0;
    return extensionName;
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
