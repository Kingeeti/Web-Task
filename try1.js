let person = {name : "Geeti", age : 20, isStudent : true};
console.log(person);

let person1 = new Object();
person1.name = "Geeti";
person1.age = 20;
person1.isStudent = true;
person1.registeredCourses = [{subject1: "pf", subject2: "os", subject3: "dbms"}];
person1.displayName = function() {
    console.log('return ' + this.name);
};

let person2 = Object.create(null);
person2.name = "Abeera";

console.log(person1.name);

console.log(person1["name"]);
let idVal = "firstName";
console.log(person1[idVal]); 

person1["city"] = "mars";
let idVal1 = "city";
console.log(person1[idVal1]);

console.log(person1["registeredCourses"][0]["subject1"]);

delete person1["city"];
console.log(person1["city"]); 

let currentStudents = {...person1};

function add(...val) {
    let result = 0;
    for (counter = 0; counter < val.length; counter++) {
        result += val[counter];
    }
}
//constructor or factory function
function createPerson(name, isStudent) {
    return {
        name,
        isStudent
    };
}

let person3 = createPerson("Geeti", true);
let person4 = createPerson("Abeera", false);
console.log(person3);
person3.prototype.semesterStarts=true;
person.prototype.greet = function() {return 'hello ' + this.name;};

