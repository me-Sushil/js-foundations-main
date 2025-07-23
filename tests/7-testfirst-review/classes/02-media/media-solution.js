/* eslint-disable no-unused-vars */
class Media {
  constructor(title, yearOfRelease) {
    (this.title = title),
    (this.yearOfRelease = yearOfRelease),
    ( this.ratings = []);
  }
  getTitle() {
    return this.title;
  }
  getYearOfRelease() {
    return this.yearOfRelease;
  }
  addRating(rating) {
    if (rating < 1 || rating > 100) {
    `${rating} is not a valid rating, ratings must be 1-100`;
    } else{
         this.ratings.push(rating);
    }
  }
  getAverageRating() {
    if (this.ratings.length === 0) {
      return `this is not rated`;
    } 
     let total = this.ratings.reduce((acc, currentValue) => acc + currentValue ,0);
    return Math.floor(total / this.ratings.length); // Use floor for integer average

    
  }
}
