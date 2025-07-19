/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => {
    return {
      index: index,
      value: value,
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

const extensionSearch = (ext, files) => {
  return files.filter((file) => file.endsWith(`.${ext}`));
};

function getPopulation(countriesArray, selectedCountryNames) {
  return countriesArray.reduce((total, country) => {
    if (
      selectedCountryNames.length === 0 ||
      selectedCountryNames.includes(country.name)
    ) {
      return total + country.population;
    }
    return total;
  }, 0);
}

function keyifyArrayOfObjects(key, array) {
  return array.reduce((result, obj) => {
    result[obj[key]] = obj;
    return result;
  }, {});
}

function powerLevelAverage(superheroes) {
  const total = superheroes.reduce((sum, hero) => sum + hero.powerLevel, 0);
  return Math.round(total / superheroes.length);
}

function mapReduce(array, callback) {
  //let newarray = [];
  return array.reduce((acc, currentValue) => {
    acc.push(callback(currentValue));
    return acc;
  }, []);
}
function callback(currentValue) {
  if (typeof currentValue === "number") {
    return currentValue * 2;
  } else if (typeof currentValue === "string") {
    return currentValue.toUpperCase();
  } else if (typeof currentValue === "boolean") {
    return !currentValue;
  }
}

const filterReduce = (array, callback) => {
  return array.reduce((acc, currentValue) => {
    if (callback(currentValue)) {
      acc.push(currentValue);
    }
    return acc;
  }, []);
};


function inYourBudget(value, array) {
    return array
    .filter(function(obj){
        return obj.price <= value;
    })
    .map(function(obj){
        return obj.item;
    })
}