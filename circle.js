//radius:double = 1.0
//color:string = "red"
class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
    getradius(){
      return `this circle radius is ${this.radius}`;
    }
    getcolor(){
      return `this circle color is ${this.color}`;
    }
    setchangeRadius(modifiedRadius){
      this.radius = modifiedRadius;

    }

  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    toString() {
      return `Circle - Radius: ${this.radius}, Color: ${this.color}`;
    }
  }
  
  
  const myCircle = new Circle();
  console.log(myCircle.radius,myCircle.color);
  console.log(myCircle.radius); 
  console.log(myCircle.radius,myCircle.color);
  console.log(myCircle.getradius());
  console.log(myCircle.getcolor());
  console.log(myCircle.radius);
  console.log(myCircle.toString()); 
  console.log(myCircle.getArea());          
  console.log(myCircle.getCircumference()); 

 //setradius:
  class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    setRadius(modifiedRadius) {
      this.radius = modifiedRadius;
    }
  }
  
  const myCircle = new Circle();
  myCircle.setRadius(2); 
  console.log(myCircle.radius);


//setcolor:
 
class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  setColor(modifiedColor) {
    this.color = modifiedColor; 
  }
}

const myCircle = new Circle();
myCircle.setColor("yellow"); 
console.log(myCircle.color);

  