//Prototype

const { prototype } = require('events');
const { isConstructorDeclaration } = require('typescript');

//클래스 정의방법 1 (과거) 함수 사용
// /**
//  * @param {any} name
//  */
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function greet() {
//   console.log("Hi, I'm " + this.name);
// };

// function Student(name) {
//   Object.getPrototypeOf(Student).constructor(name);
// }
// Student.prototype.study = function study() {
//   console.log(this.name + ' is studying.');
// };
// Object.setPrototypeOf(Student.prototype, Person.prototype);

//클래스 정의방법 2 (최근) class 키워드 사용
class Person {
  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi, I'm " + this.name);
  }
}

class Student extends Person {
  study() {
    console.log(this.name + ' is studying.');
  }
}

//new 키워드를 붙이고 함수 호출하면 생성자로 동작
//Student 클래스에서 Object 클래스 함수를 활용할 수 있는 이유 : Prototype Chain
let me = new Student('Kim Cheon-jae');
me.greet();
me.study();
console.log(me instanceof Object);
console.log(me instanceof Student);
console.log(me instanceof Person);
