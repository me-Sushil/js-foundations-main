/* eslint-env jasmine */
/* eslint-disable no-undef */

// Note: The ES2015 class syntax needs to be used (do not create a constructor function)

describe('Student Class', function() {
  let jess;

  beforeEach(function() {
    student1 = new Student('jess', 'jess@example.com');
  });

  it('should take a name and email as parameters', () => {
    expect(student1.name).toBe('Jess');
    expect(student1.email).toBe('jess@example.com');
  });

  it('should also assign an empty array for grades', () => {
    expect(student1.grades).toEqual([]);
  });

  it('should have `addGrade`, and `getGradeAverage` functions on its prototype', () => {
    student1.addGrade(90);
    student1.addGrade(100);
    student1.addGrade(80);
    expect(student1.grades).toEqual([90, 100, 80]);
    expect(student1.getGradeAverage()).toBe(90);
    expect(student1.hasOwnProperty('addGrade')).toBe(false);
    expect(student1.hasOwnProperty('getGradeAverage')).toBe(false);
  });

  it('you should be able to chain from the addGrade function', () => {
    const grade = student1
      .addGrade(90)
      .addGrade(100)
      .addGrade(80)
      .getGradeAverage();

    expect(grade).toBe(90);
  });
});

describe('Alumni Class', () => {
  let holly;

  beforeEach(() => {
    holly = new Alumni('Holly', 'holly@example.com', 2016);
  });

  it('extends from the class Student', () => {
    expect(holly instanceof Student).toBe(true);
    expect(typeof holly.addGrade === 'function').toBe(true);
    expect(typeof holly.getGradeAverage === 'function').toBe(true);
    expect(holly.addGrade).toEqual(Student.prototype.addGrade);
    expect(holly.getGradeAverage).toEqual(Student.prototype.getGradeAverage);
  });

  it('should have the name, email, and date of graduation', () => {
    expect(holly.name).toBe('Holly');
    expect(holly.email).toBe('holly@example.com');
    expect(holly.grades).toEqual([]);
    expect(holly.year).toBe(2016);
  });

  it('has a class method `getGraduationYear`', () => {
    expect(holly.getGraduationYear()).toBe(2016);
    expect(holly.hasOwnProperty('getGraduationYear')).toBe(false);
    expect(Alumni.prototype.getGraduationYear).toEqual(holly.getGraduationYear);
  });
});
