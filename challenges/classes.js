// 1. Copy and paste your prototype in here and refactor into class syntax.


  class CuboidMaker{
      constructor(attributes){
          this.length = attributes.length;
          this.width = attributes.width;
          this.height = attributes.height;
      }
      volume(){
          return this.length * this.width * this.height;
      }
      areaOfCube(){
          return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
      }
  }

  const square = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
  });
  
  square.volume();
  square.areaOfCube();

// class cuboid extends CuboidMaker{
//     constructor(attributes){
//         super(attributes)
//     }
// }

//   function cuboid(attributes){
//     CuboidMaker.call(this, attributes)
//   }
  
//   cuboid.prototype = Object.create(CuboidMaker.prototype);
  
//   cuboid.prototype.properties = function(){
//     return this.length + this.width + this.height;
//   }
  
//   const cuboidProperties = new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5,
//   })

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.