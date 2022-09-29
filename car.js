// class

class Vehicle{

    // constructor with 3 arguements
    constructor(make, model, year)
    {
        // local instances
        this.make = make;
        this.model = model;
        this.year =year;

    }

    //method 
    Information()
    {
      // print info ${} prints out variable and use ``
      console.log(`Make: ${this.make} , Model: ${this.make} , Year: ${this.year}`);

    }//info





}// class Vehicle


// class cars extending the vehicle class
class Cars extends Vehicle
{

  // constructor with 4 arguements
  constructor(make, model, year, doors)
  {
     
      // invoke constructor on parent class
      super(make, model, year);

       // local instances
      this.doors = doors;

  }
   
  // method
  Information()
  {
      // invokes method from parent class
       super.Information();

       // adding to og method when using the extended cars
       console.log(`Doors: ${this.doors}`);

  }




}//cars class



// instance of class
let myVehicle = new Vehicle('VW', 'Gold', 2008);

// invoke the method
let info = myVehicle.Information();

// instance of car that extends vehicle
let myCar = new Cars('VW', 'Golf', 2011, 5);

// invokes method from car class
myCar.Information();