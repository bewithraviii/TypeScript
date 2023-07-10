import { Trial } from "./trial";
import { Testing } from "./trial";
console.log('Hello');

const trial = new Trial();
trial.cluck();


const User = {
    name: "Ravi",
    age: 23
};

console.log(User.name.toUpperCase());


interface Rectangle {
    height: number,
    width: number
  }
  
interface addColour extends Rectangle{
    color: string
}
  const rectangle: addColour = {
    height: 20,
    width: 10,
    color: "Green"
  };

  console.log("Area of Rectangle is : " + (rectangle.height * rectangle.width) + " And Its Color is : " + rectangle.color );


  function printStatusCode(code: string | number) {
    console.log(`Status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');


  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  console.log(add(2,5));
  console.log(add(2,5,1));


  function pow(value: number, exponent: number = 2) {
    return value ** exponent;
  }
  
  console.log(pow(10));



  interface Person {
    name: string;
    age: number;
  }
  
  function printPersonProperty(person: Person, property: keyof Person) {
    if(property == "name")
    {
        console.log(`Property ${property}: ${person[property]}`);
    }
    else{
    console.log(`Property ${property}: ${person[property]}`);

    }
  }
  
  let person = {
    name: "Max",
    age: 27
  };

  printPersonProperty(person, "name");
  printPersonProperty(person, "age");


const test = new Testing("Ravi");
console.log(test.getName());