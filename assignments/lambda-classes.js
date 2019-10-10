// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today, we are learning about ${subject}`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects() {
        console.log(this.favSubjects);
    }
    prAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

const marge = new Instructor({
    name: 'marge',
    location: 'Bedrock',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const homer = new Instructor({
    name: ``,
    location: ``,
    age: 32,
    favLanguage: `Python`,
    specialty: ``,
    catchPhrase: ``,
  });

  const burns = new ProjectManager({
    name: ``,
    location: ``,
    age: 73,
    favLanguage: `Java`,
    specialty: ``,
    catchPhrase: ``,
    gradClassName: ``,
    favInstructor: ``
  });
  const skinner = new ProjectManager({
    name: '',
    location: '',
    age: 42,
    favLanguage: 'Ruby',
    specialty: '',
    catchPhrase: ``,
    gradClassName: ``,
    favInstructor: ``
  });

  const lisa = new Student({
    name: ``,
    location: ``,
    age: 8,
    previousBackground: ``,
    className: ``,
    favSubjects: ``
  });
  const bart = new Student({
    name: ``,
    location: ``,
    age: 10,
    previousBackground: ``,
    className: ``,
    favSubjects: ``
  });
