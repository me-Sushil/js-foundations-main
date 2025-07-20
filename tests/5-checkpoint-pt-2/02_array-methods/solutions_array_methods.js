/* eslint-disable no-unused-vars */
const useMapToUpperCase = (string) => {
  return string.split(" ").map((element) => element.toUpperCase());
};

const useFilter = (string) => {
  return string.filter((element) => element.includes("@"));
};



