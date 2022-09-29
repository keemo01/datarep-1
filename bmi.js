// class BMI
class BMI {

    // constructor with 2 arguements
    constructor(height, weight) {
  
      // local instances
      this.height = height;
      this.weight = weight;
  
  
  
    } // constructor
  
    // method calculates BMI
  
    calcualteBMI() {
  
      // formula to get BMI
      let bmi = this.weight / (this.height ** 2);
  
  
      // returns result
      return bmi;
  
  
    }//method
  
  
  
  }// class BMI
  
  // instance of class use let for class
  let myBmi = new BMI(2,90);
  
  // return value
  let calculatedBMI = myBmi.calcualteBMI();
  
  // print to console
  console.log(calculatedBMI);