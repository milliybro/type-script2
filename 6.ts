function calculateArea(shape: Circle | Square): number {
   if ("radius" in shape) {
       return Math.PI * shape.radius * shape.radius;
   } else {
       return shape.sideLength
   }
}

interface Circle {
   radius: number;
}

interface Square {
   sideLength: number;
}

const circle: Circle = { radius: 5 };
const rectangle: Square = { sideLength: 4};

const circleArea = calculateArea(circle);
const rectangleArea = calculateArea(rectangle);

console.log(`Circle area: ${circleArea}`); 
console.log(`Square area: ${rectangleArea}`); 