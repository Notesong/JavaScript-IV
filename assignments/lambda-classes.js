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
        console.log(`Today, we are learning about ${subject}.`);
    }
    grade(studentObj, subject) {
        console.log(`${studentObj.name} receives a perfect score on ${subject}.`);
    }
}

class TeamLead extends Instructor {
    constructor(tlAttr) {
        super(tlAttr);
        this.gradClassName = tlAttr.gradClassName;
        this.favInstructor = tlAttr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject) {
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`);
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
        console.log(`${this.name}'s favorite subjects:`, this.favSubjects.join(", "));
    }
    prAssignments(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

// instructor objects
const marge = new Instructor({
    name: 'Marge',
    location: 'Grocery Store',
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: '"Oh, Homie."'
});
const homer = new Instructor({
    name: 'Homer',
    location: 'the Control Room',
    age: 32,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: '"D\'oh"'
});

// team lead objects
const burns = new TeamLead({
    name: 'Mr. Burns',
    location: 'Nuclear Power Plant',
    age: 73,
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: '"Release the Hounds!"',
    gradClassName: 'Java III',
    favInstructor: 'Marge'
});
const skinner = new TeamLead({
    name: 'Principal Skinner',
    location: 'Springfield Elementary',
    age: 42,
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: '(sigh) "Yes, mother."',
    gradClassName: 'Ruby III',
    favInstructor: 'Homer'
});

// student objects
const lisa = new Student({
    name: 'Lisa',
    location: 'Band Room',
    age: 8,
    previousBackground: 'Jazz Player',
    className: 'Band',
    favSubjects: ['English', 'Math', 'Science', 'Music', 'Art', 'History', '...Okay, okay, everything']
});
const bart = new Student({
    name: 'Bart',
    location: 'the Tree House',
    age: 10,
    previousBackground: 'Skateboard Champion',
    className: 'P.E.',
    favSubjects: ['none']
});

// teacher output
console.log(marge.name, marge.location, marge.age, marge.favLanguage, marge.specialty, marge.catchPhrase);
homer.speak();
homer.demo('Java');
homer.grade(lisa, 'Java');

// team lead output
console.log(burns.name, burns.location, burns.age, burns.favLanguage, burns.catchPhrase, burns.gradClassName, burns.favInstructor);
skinner.speak();
skinner.demo('Ruby');
skinner.grade(bart, 'Ruby');
skinner.standUp('webpt11');
skinner.debugsCode(bart, 'Ruby');

// student output
console.log(lisa.name, lisa.location, lisa.age, lisa.previousBackground, lisa.className, lisa.favSubjects);
bart.speak();
lisa.listsSubjects();
bart.listsSubjects();
bart.prAssignments('Ruby');
bart.sprintChallenge('Java');